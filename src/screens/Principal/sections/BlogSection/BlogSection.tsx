import { SendIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";

export const BlogSection = (): JSX.Element => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneValid, setPhoneValid] = useState(true); // New state for phone validation
  const [clinicName, setClinicName] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (fullName && email && phone && clinicName && termsAccepted && phoneValid) {
      // In a real application, you would handle form submission here (e.g., send data to a server)
      console.log('Form Submitted:', { fullName, email, phone, clinicName, termsAccepted });
      setFormSubmitted(true);
    } else {
      alert('Por favor, preencha todos os campos, insira um telefone válido e aceite os termos de privacidade.');
    }
  };

  // Form field labels
  const formFields = [
    { id: "fullName", label: "Nome completo", placeholder: "Seu nome completo" },
    { id: "email", label: "Email", placeholder: "Seu melhor email" },
    { id: "phone", label: "Telefone", placeholder: "(XX) XXXXX-XXXX" },
    { id: "clinicName", label: "Nome da clínica", placeholder: "Nome da sua clínica" },
  ];

  // Chat messages data
  const chatMessages = [
    {
      sender: "assistant",
      content: [
        "Olá! Sou o Meredith , assistente",
        "virtual da Clínica Saúde Total.",
        "Como posso ajudar você hoje?",
      ],
    },
    {
      sender: "user",
      content: ["Olá, gostaria de agendar uma", "consulta."],
    },
    {
      sender: "assistant",
      content: [
        "Claro! Para qual especialidade",
        "você gostaria de agendar a",
        "consulta?",
      ],
    },
    {
      sender: "user",
      content: ["Dermatologia."],
    },
    {
      sender: "assistant",
      content: [
        "Temos disponibilidade com a Dra.",
        "Ana Silva nos seguintes horários:",
        "Segunda-feira, 15/07 às 14:00",
        "Terça-feira, 16/07 às 10:30",
        "Quinta-feira, 18/07 às 16:00",
        "Qual seria a melhor opção para",
        "você?",
      ],
      hasBulletPoints: true,
      bulletPointsStartIndex: 2,
      bulletPointsEndIndex: 5,
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch">
          {/* Left side - Form */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 id="teste-agora" className="font-bold text-3xl text-gray-800 font-['Poppins',Helvetica] scroll-mt-[120px]">
              Teste Nosso Agente
            </h2>

            <div className="w-20 h-1 bg-[#27a987]" />

            <p className="text-lg text-gray-600 font-['Poppins',Helvetica]">
              Experimente como seria a interação de seus pacientes com nosso
              agente de automação. Preencha o formulário e receba uma
              demonstração.
            </p>

            <div className="space-y-8 mt-8">
              <form onSubmit={handleSubmit}>
              {formFields.map((field) => (
                <div key={field.id} className="space-y-2">
                  <label
                    htmlFor={field.id}
                    className="block font-medium text-sm text-gray-700 font-['Poppins',Helvetica]"
                  >
                    {field.label}
                  </label>
                  <Input
                    id={field.id}
                    className={`w-full h-[42px] rounded-lg border ${field.id === 'phone' && !phoneValid ? 'border-red-500' : 'border-gray-300'}`}
                    value={field.id === 'fullName' ? fullName : field.id === 'email' ? email : field.id === 'phone' ? phone : clinicName}
                    onChange={(e) => {
                      if (field.id === 'fullName') setFullName(e.target.value);
                      else if (field.id === 'email') setEmail(e.target.value);
                      else if (field.id === 'phone') {
                        const value = e.target.value;
                        setPhone(value);
                        // Basic phone number validation (e.g., (XX) XXXXX-XXXX or (XX) XXXX-XXXX)
                        const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
                        setPhoneValid(phoneRegex.test(value));
                      }
                      else if (field.id === 'clinicName') setClinicName(e.target.value);
                    }}
                    placeholder={field.placeholder}
                  />
                  {field.id === 'phone' && !phoneValid && phone !== '' && (
                    <p className="text-red-500 text-sm mt-1">Por favor, insira um número de telefone válido no formato (XX) XXXXX-XXXX.</p>
                  )}
                </div>
              ))}

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  className="mt-1 border-black border-[0.5px] rounded-[1px]"
                  checked={termsAccepted}
                  onCheckedChange={setTermsAccepted}
                />
                <div className="space-y-1">
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-600 font-['Poppins',Helvetica]"
                  >
                    Concordo que meus dados sejam usados para fins de marketing,
                    conforme a{" "}
                    <span className="text-[#0080df]">
                      política de privacidade
                    </span>
                    .
                  </label>
                </div>
              </div>

              <Button className="w-full h-12 bg-[#0080df] hover:bg-[#0070c5] rounded-lg font-medium text-base font-['Poppins',Helvetica]">
                Receber Demonstração
              </Button>
              </form>
            </div>
          </div>

          {/* Right side - Chat demo */}
          <div className={`w-full lg:w-1/2 ${!formSubmitted ? 'blur-sm pointer-events-none' : ''}`}>
            <Card className="shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] rounded-xl border-0 h-full">
              <CardContent className="p-0 flex flex-col h-full">
                {/* Chat header */}
                <div className="p-6 border-b">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#dcf3ff] rounded-full flex items-center justify-center">
                      <img className="w-5 h-5" alt="Logo" src="/assets/logo-chat.svg" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-base text-gray-800 font-['Poppins',Helvetica]">
                        Meredith
                      </p>
                      <p className="text-xs text-gray-500 font-['Poppins',Helvetica]">
                        Assistente virtual
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="p-6 flex-1 max-h-[350px] overflow-y-auto">
                  {chatMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${
                        message.sender === "user" ? "flex justify-end" : ""
                      }`}
                    >
                      <div
                        className={`max-w-[320px] p-4 rounded-lg ${
                          message.sender === "assistant"
                            ? "bg-[#dcf3ff]"
                            : "bg-gray-100"
                        }`}
                      >
                        {message.content.map((line, lineIndex) => {
                          if (
                            message.hasBulletPoints &&
                            lineIndex >= message.bulletPointsStartIndex &&
                            lineIndex <= message.bulletPointsEndIndex
                          ) {
                            return (
                              <div key={lineIndex} className="ml-5 flex">
                                <span className="font-normal text-base text-gray-800 font-['Poppins',Helvetica]">
                                  {line}
                                </span>
                              </div>
                            );
                          }
                          return (
                            <p
                              key={lineIndex}
                              className="font-normal text-base text-gray-800 font-['Poppins',Helvetica]"
                            >
                              {line}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat input */}
                <div className="p-6 pt-4 pb-2 border-t">
                  <div className="flex">
                    <Input
                      className="rounded-r-none h-12 border-gray-300 font-['Poppins',Helvetica] text-base"
                      placeholder="Digite sua mensagem..."
                      disabled={!formSubmitted}
                    />
                    <Button className="h-12 w-12 rounded-l-none bg-[#0080df] hover:bg-[#0070c5]" disabled={!formSubmitted}>
                      <SendIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
