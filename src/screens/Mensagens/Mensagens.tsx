// src/screens/Mensagens/Mensagens.tsx
import { useState, useEffect } from 'react';
import { Send, Paperclip, Mic, Search, Settings, MessageSquare } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { toast } from 'react-hot-toast';

interface Conversation {
  id: number;
  patient_name: string;
  last_message_preview: string;
  last_message_at: string;
  unread_count: number;
  patient_avatar_url: string;
  platform: string;
  n8n_workflow_enabled: boolean;
  tenant_id: number; // Added tenant_id
}

interface Message {
  id: number;
  content: string;
  created_at: string;
  sender_type: 'clinic' | 'patient';
  type: 'text' | 'audio' | 'file';
  file_url?: string;
  file_metadata?: any;
  status: 'sent' | 'delivered' | 'read';
}

export default function Mensagens() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loadingConversations, setLoadingConversations] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);

  useEffect(() => {
    const fetchConversations = async () => {
      setLoadingConversations(true);
      const { data, error } = await supabase
        .from('conversations')
        .select('*')
        .order('last_message_at', { ascending: false });

      if (error) {
        console.error('Error fetching conversations:', error);
      } else {
        setConversations(data as Conversation[]);
        if (data.length > 0) {
          setSelectedConversation(data[0] as Conversation);
        }
      }
      setLoadingConversations(false);
    };

    fetchConversations();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      if (selectedConversation) {
        setLoadingMessages(true);
        const { data, error } = await supabase
          .from('messages')
          .select('*')
          .eq('conversation_id', selectedConversation.id)
          .order('created_at', { ascending: true });

        if (error) {
          console.error('Error fetching messages:', error);
        } else {
          setMessages(data as Message[]);

          // Mark messages as read and reset unread count
          await supabase
            .from('messages')
            .update({ status: 'read' })
            .eq('conversation_id', selectedConversation.id)
            .eq('sender_type', 'patient')
            .in('status', ['sent', 'delivered']);

          await supabase
            .from('conversations')
            .update({ unread_count: 0 })
            .eq('id', selectedConversation.id);

          // Optimistically update the unread count in the UI
          setConversations((prev) =>
            prev.map((conv) =>
              conv.id === selectedConversation.id ? { ...conv, unread_count: 0 } : conv
            )
          );
        }
        setLoadingMessages(false);
      } else {
        setMessages([]);
      }
    };

    fetchMessages();
  }, [selectedConversation]);

  const handleSendMessage = async (type: 'text' | 'file' | 'audio', content?: string, file?: File) => {
    if (!selectedConversation) return;

    let messageContent = content || messageInput.trim();
    let fileUrl: string | undefined = undefined;
    let fileMetadata: any | undefined = undefined;

    if (type === 'text' && messageContent === '') return;

    if (file) {
      const filePath = `${selectedConversation.id}/${Date.now()}-${file.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('message-attachments')
        .upload(filePath, file);

      if (uploadError) {
        console.error('Error uploading file:', uploadError);
        return;
      }
      fileUrl = supabase.storage.from('message-attachments').getPublicUrl(filePath).data.publicUrl;
      fileMetadata = { fileName: file.name, fileSize: file.size, fileType: file.type };
      if (type === 'file') messageContent = file.name; // Display file name as content for file messages
    }

    const newMessage: Partial<Message> = {
      conversation_id: selectedConversation.id,
      sender_type: 'clinic',
      content: messageContent,
      type: type,
      file_url: fileUrl,
      file_metadata: fileMetadata,
      status: 'sent',
    };

    const { data, error } = await supabase
      .from('messages')
      .insert([newMessage])
      .select();

    if (error) {
      console.error('Error sending message:', error);
    } else {
      setMessages((prevMessages) => [...prevMessages, data[0] as Message]);
      setMessageInput('');
    }
  };

  const handleFileUpload = () => {
    document.getElementById('file-upload')?.click();
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      await handleSendMessage('file', undefined, file);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      setAudioChunks([]);

      recorder.ondataavailable = (event) => {
        setAudioChunks((prev) => [...prev, event.data]);
      };

      recorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
        await sendAudio(audioBlob);
        stream.getTracks().forEach(track => track.stop()); // Stop microphone access
      };

      recorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Error accessing microphone:', err);
      alert('Não foi possível acessar o microfone. Verifique as permissões.');
    }
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    setIsRecording(false);
  };

  const sendAudio = async (audioBlob: Blob) => {
    if (!selectedConversation) return;

    const fileName = `audio-${Date.now()}.webm`;
    const filePath = `${selectedConversation.id}/${fileName}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('message-attachments')
      .upload(filePath, audioBlob, { contentType: 'audio/webm' });

    if (uploadError) {
      console.error('Error uploading audio:', uploadError);
      return;
    }

    const fileUrl = supabase.storage.from('message-attachments').getPublicUrl(filePath).data.publicUrl;

    let transcribedText = 'Audio message (transcribing...)';
    const { data: transcriptionData, error: transcriptionError } = await supabase.functions.invoke('transcribe-audio', {
      body: { fileUrl: fileUrl },
    });

    if (transcriptionError) {
      console.error('Error transcribing audio:', transcriptionError);
      // Fallback to a generic message if transcription fails
      transcribedText = 'Audio message (transcription failed)';
    } else if (transcriptionData && transcriptionData.transcription) {
      transcribedText = transcriptionData.transcription;
    }

    await handleSendMessage('audio', transcribedText, new File([audioBlob], fileName, { type: 'audio/webm' }));
  };

  const handleAudioRecord = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleToggleN8N = async () => {
    if (!selectedConversation) return;

    const newN8NStatus = !selectedConversation.n8n_workflow_enabled;
    const { error } = await supabase
      .from('conversations')
      .update({ n8n_workflow_enabled: newN8NStatus })
      .eq('id', selectedConversation.id);

    if (error) {
      console.error('Error updating N8N status:', error);
    } else {
      setSelectedConversation((prev) => prev ? { ...prev, n8n_workflow_enabled: newN8NStatus } : null);
      setConversations((prev) =>
        prev.map((conv) =>
          conv.id === selectedConversation.id ? { ...conv, n8n_workflow_enabled: newN8NStatus } : conv
        )
      );
      // Chamada para Supabase Edge Function para ativar/desativar workflow N8N.
      // Esta função receberá o ID da conversa, o novo status (newN8NStatus) e o tenantId.
      const { error: n8nError } = await supabase.functions.invoke('toggle-n8n-workflow', {
        body: { conversationId: selectedConversation.id, enable: newN8NStatus, tenantId: selectedConversation.tenant_id },
      });

      if (n8nError) {
        console.error('Error invoking N8N toggle function:', n8nError);
      }
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'whatsapp': return <img src="/assets/icon-send-whatsapp.svg" alt="WhatsApp" className="w-4 h-4" />;
      case 'instagram': return <MessageSquare className="w-4 h-4 text-purple-500" />; // Placeholder icon
      case 'facebook': return <MessageSquare className="w-4 h-4 text-blue-700" />; // Placeholder icon
      case 'website': return <MessageSquare className="w-4 h-4 text-green-500" />; // Placeholder icon
      default: return null;
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const messageDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    if (messageDate.getTime() === today.getTime()) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (messageDate.getTime() === today.getTime() - (24 * 60 * 60 * 1000)) {
      return 'Ontem';
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <div className="flex h-[calc(100vh-100px)] bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
      {/* Conversations List */}
      <div className="w-1/3 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Pesquisar conversas..."
              className="w-full bg-gray-100 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {loadingConversations ? (
            <div className="p-4 text-center text-gray-500">Carregando conversas...</div>
          ) : conversations.length === 0 ? (
            <div className="p-4 text-center text-gray-500">Nenhuma conversa encontrada.</div>
          ) : (
            conversations
              .filter((conv) =>
                conv.patient_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                conv.last_message_preview.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((conv) => (
              <div
                key={conv.id}
                className={`p-4 flex items-center cursor-pointer hover:bg-gray-100 ${selectedConversation?.id === conv.id ? 'bg-blue-100' : ''}`}
                onClick={() => setSelectedConversation(conv)}
              >
                <img src={conv.patient_avatar_url} alt={conv.patient_name} className="w-12 h-12 rounded-full mr-4" />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{conv.patient_name}</h3>
                    <span className="text-xs text-gray-500">{formatTimestamp(conv.last_message_at)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600 truncate">{conv.last_message_preview}</p>
                    {conv.unread_count > 0 && (
                      <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{conv.unread_count}</span>
                    )}
                  </div>
                  <div className="flex justify-end mt-1">
                    {getPlatformIcon(conv.platform)}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Message View */}
      <div className="w-2/3 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <img src={selectedConversation.patient_avatar_url} alt={selectedConversation.patient_name} className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">{selectedConversation.patient_name}</h3>
                  <p className="text-sm text-green-500">Online</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {/* N8N Toggle */}
                <div className="flex items-center">
                  <span className="mr-2 text-sm text-gray-600">N8N Automation</span>
                  <label htmlFor="n8n-toggle" className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="n8n-toggle"
                        className="sr-only"
                        checked={selectedConversation.n8n_workflow_enabled}
                        onChange={handleToggleN8N}
                      />
                      <div className="block bg-gray-300 w-10 h-6 rounded-full toggle-bg"></div>
                      <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform transform"></div>
                    </div>
                  </label>
                </div>
                <button className="text-gray-500 hover:text-gray-700"><Settings size={20} /></button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
              {loadingMessages ? (
                <div className="p-4 text-center text-gray-500">Carregando mensagens...</div>
              ) : messages.length === 0 ? (
                <div className="p-4 text-center text-gray-500">Nenhuma mensagem nesta conversa.</div>
              ) : (
                messages.map((msg) => (
                  <div key={msg.id} className={`flex mb-4 ${msg.sender_type === 'clinic' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`rounded-lg px-4 py-2 max-w-lg ${msg.sender_type === 'clinic' ? 'bg-blue-500 text-white' : 'bg-white shadow'}`}>
                      {msg.type === 'text' && <p>{msg.content}</p>}
                      {msg.type === 'audio' && (
                        <div className="flex items-center space-x-2">
                          <audio controls src={msg.file_url} className="w-full"></audio>
                        </div>
                      )}
                      {msg.type === 'file' && (
                        <a
                          href={msg.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline flex items-center"
                        >
                          <Paperclip size={16} className="mr-1" />
                          {msg.file_metadata?.fileName || 'File'}
                        </a>
                      )}
                      <div className="flex items-center justify-end mt-1 space-x-1">
                        <span className="text-xs text-gray-400">{formatTimestamp(msg.created_at)}</span>
                        {msg.sender_type === 'clinic' && (
                          <span className="text-xs text-gray-500">{msg.status === 'sent' ? '✓' : msg.status === 'delivered' ? '✓✓' : '✓✓'}</span> // Simple indicators
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  className="w-full bg-gray-100 rounded-full pl-5 pr-24 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage('text', messageInput)}
                />
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileSelect}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-3">
                  <button
                    onClick={handleAudioRecord}
                    className={`p-2 rounded-full ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    <Mic size={24} />
                  </button>
                  <button onClick={handleFileUpload} className="text-gray-500 hover:text-gray-700"><Paperclip size={24} /></button>
                  <button
                    onClick={() => handleSendMessage('text', messageInput)}
                    className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Selecione uma conversa para começar a conversar.
          </div>
        )}
      </div>
    </div>
  );
}
