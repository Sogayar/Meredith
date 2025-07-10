import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const HeroSection = (): JSX.Element => {
  // Chat messages data
  const chatMessages = [
    {
      type: "sent",
      text: "Oi, tem horário hoje?",
      time: "14:32",
    },
    {
      type: "received",
      text: [
        "Olá! Sim, tenho horários disponíveis hoje.",
        "Que tipo de consulta você precisa?",
      ],
      time: "14:33",
    },
    {
      type: "sent",
      text: "Consulta de rotina",
      time: "14:33",
    },
    {
      type: "received",
      text: ["Perfeito! Tenho 14h e 16h30 disponíveis.", "Qual prefere?"],
      time: "14:34",
    },
  ];

  return (
    <section className="w-full min-h-[600px] lg:h-[697px] bg-[linear-gradient(90deg,rgba(0,128,223,1)_0%,rgba(0,86,148,1)_100%)] relative overflow-hidden">
      <div className="relative w-full max-w-[1256px] h-full mx-auto px-4 py-8 lg:py-[55px]">
        {/* Hero Text Content */}
        <div className="flex flex-col items-center lg:items-start lg:max-w-[50%]">
          <h1 className="w-full max-w-[592px] text-3xl lg:text-[56px] text-center lg:text-left leading-tight lg:leading-[64px] [font-family:'Albert_Sans',Helvetica] font-medium">
            <span className="font-medium text-white tracking-[0.28px]">
              Conheça sua{" "}
            </span>
            <span className="font-bold text-[#00eeff] tracking-[0.28px]">
              nova
            </span>
            <span className="font-medium text-white tracking-[0.28px]">
              {" "}
              secretária{" "}
            </span>
            <span className="font-bold text-white tracking-[0.28px]">
              Inteligente
            </span>
            <span className="font-medium text-white tracking-[0.28px]">, </span>
            <span className="font-bold text-white tracking-[0.28px]">
              humanizada
            </span>
            <span className="font-medium text-white tracking-[0.28px]">
              {" "}
              e{" "}
            </span>
            <span className="font-bold text-white tracking-[0.28px]">
              sempre disponível.
            </span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8 lg:mt-[59px] mb-8 lg:mb-[59px] w-full sm:w-auto">
            <Button className="h-12 lg:h-16 w-full sm:w-[238px] bg-white text-black rounded-lg border-2 border-solid font-bold text-base lg:text-lg [font-family:'Outfit',Helvetica] hover:bg-[#0080df] hover:text-white transition-colors duration-300">
              <img
                className="w-[14px] h-[18px] mr-2"
                alt="Frame"
                src="/assets/icon-test-button.svg"
              />
              <a href="#teste-agora">Teste Agora</a>
            </Button>

            <Button
              variant="outline"
              className="h-12 lg:h-16 w-full sm:w-[222px] rounded-lg border-2 border-solid bg-[#0080df] border-white text-white font-normal text-base lg:text-lg [font-family:'Outfit',Helvetica] hover:bg-white hover:text-[#0080df] hover:border-[#0080df] transition-colors duration-300"
            >
              <a href="#teste-agora">Solicitar Demonstração</a>
            </Button>
          </div>

          
        </div>

        {/* Subtitle */}
        <p className="w-full max-w-[1040px] text-white text-lg lg:text-2xl text-center tracking-[0.15px] leading-6 [font-family:'Albert_Sans',Helvetica] font-medium mt-8 lg:mt-[65px] mx-auto">
          Ela atende, organiza, agenda e responde seus pacientes com empatia.
          <br />
          Como uma secretária real, mas incansável.
        </p>

        {/* Chat Card */}
        <Card className="absolute w-[320px] lg:w-[584px] h-[400px] lg:h-[456px] top-4 lg:top-16 right-4 lg:right-0 rounded-2xl shadow-[0px_25px_50px_#00000040] overflow-hidden bg-white">
          <CardContent className="p-0">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 lg:p-6 border-b bg-white">
              <div className="flex items-center">
                <Avatar className="w-10 lg:w-12 h-10 lg:h-12 shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a]">
                  <img
                    src="/assets/avatar-dra-sofia.png"
                    alt="Doctor profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </Avatar>
                <div className="ml-3">
                  <p className="[font-family:'Outfit',Helvetica] font-normal text-gray-900 text-sm lg:text-base leading-6">
                    Dra. Sofia
                  </p>
                  <p className="[font-family:'Outfit',Helvetica] font-normal text-green-500 text-xs lg:text-sm leading-5">
                    Online agora
                  </p>
                </div>
              </div>
              <div className="w-10 lg:w-[50px] h-10 lg:h-[50px] bg-white rounded-full shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] flex items-center justify-center">
                <img
                  className="w-4 lg:w-[18px] h-4 lg:h-5"
                  alt="Frame"
                  src="/assets/agenda-check.svg"
                />
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[250px] lg:h-[298px] p-3 lg:p-4 overflow-y-auto bg-[#e5ddd5] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPgo=')] bg-repeat">
              {chatMessages.map((message, index) => (
                <div
                  key={index} 
                  className={`flex ${message.type === "sent" ? "justify-end" : "justify-start"} mb-2`}
                >
                  <div
                    className={`relative px-3 py-2 lg:px-4 lg:py-2 max-w-[75%] ${
                      message.type === "sent" 
                        ? "bg-[#dcf8c6] rounded-tl-[18px] rounded-tr-[4px] rounded-bl-[18px] rounded-br-[18px] ml-auto" 
                        : "bg-white rounded-tl-[4px] rounded-tr-[18px] rounded-bl-[18px] rounded-br-[18px] mr-auto shadow-sm"
                    }`}
                  >
                    {/* Message tail */}
                    <div className={`absolute top-0 w-2 h-2 ${
                      message.type === "sent" 
                        ? "right-0 bg-[#dcf8c6] transform rotate-45 translate-x-1 -translate-y-1" 
                        : "left-0 bg-white transform rotate-45 -translate-x-1 -translate-y-1"
                    }`} />
                    
                    {Array.isArray(message.text) ? (
                      message.text.map((line, i) => (
                        <p
                          key={i}
                          className={`[font-family:'Segoe_UI',system-ui,sans-serif] font-normal text-sm lg:text-[15px] text-gray-800 leading-[1.3] ${i > 0 ? "mt-1" : ""}`}
                        >
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className="[font-family:'Segoe_UI',system-ui,sans-serif] font-normal text-sm lg:text-[15px] text-gray-800 leading-[1.3]">
                        {message.text}
                      </p>
                    )}

                    {/* Message time and status */}
                    <div className={`flex items-center justify-end mt-1 gap-1 ${
                      message.type === "sent" ? "text-gray-600" : "text-gray-500"
                    }`}>
                      <span className="text-[11px] font-normal">
                        {message.time}
                      </span>
                      {message.type === "sent" && (
                        <div className="flex">
                          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                            <path d="M1.5 5L5 8.5L14.5 1" stroke="#4fc3f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.5 5L9 8.5L18.5 1" stroke="#4fc3f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="flex items-center p-2 lg:p-3 border-t bg-[#f0f0f0] relative">
              <div className="flex items-center w-full">
                <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66L9.64 16.2a2 2 0 01-2.83-2.83l8.49-8.49" stroke="#8696a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <div className="relative flex-1 bg-gray-100 rounded-full">
                  <Input
                    className="h-9 lg:h-10 pl-3 lg:pl-4 pr-16 lg:pr-20 bg-transparent border-none [font-family:'Segoe_UI',system-ui,sans-serif] font-normal text-sm lg:text-[15px] focus:outline-none"
                    placeholder="Digite uma mensagem"
                  />
                  <div className="absolute right-2 lg:right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#8696a0" strokeWidth="2"/>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#8696a0" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="9" y1="9" x2="9.01" y2="9" stroke="#8696a0" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="15" y1="9" x2="15.01" y2="9" stroke="#8696a0" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <button className="ml-2 w-10 h-10 lg:w-11 lg:h-11 bg-[#00a884] hover:bg-[#008f72] rounded-full flex items-center justify-center transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" fill="white"/>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" fill="white"/>
                    <path d="M2 2l7.586 7.586" stroke="white" strokeWidth="2"/>
                  </svg>
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
