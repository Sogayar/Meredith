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
      className: "bg-green-500 text-white ml-auto",
    },
    {
      type: "received",
      text: [
        "Olá! Sim, tenho horários disponíveis hoje.",
        "Que tipo de consulta você precisa?",
      ],
      hasAudio: true,
      className: "bg-gray-100 text-black",
    },
    {
      type: "sent",
      text: "Consulta de rotina",
      className: "bg-green-500 text-white ml-auto",
    },
    {
      type: "received",
      text: ["Perfeito! Tenho 14h e 16h30 disponíveis.", "Qual prefere?"],
      className: "bg-gray-100 text-black",
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
            <Button className="h-12 lg:h-16 w-full sm:w-[238px] bg-white text-black rounded-lg border-2 border-solid font-bold text-base lg:text-lg [font-family:'Outfit',Helvetica]">
              <img
                className="w-[14px] h-[18px] mr-2"
                alt="Frame"
                src="/assets/icon-test-button.svg"
              />
              Teste Agora
            </Button>

            <Button
              variant="outline"
              className="h-12 lg:h-16 w-full sm:w-[222px] rounded-lg border-2 border-solid border-white text-white font-normal text-base lg:text-lg [font-family:'Outfit',Helvetica]"
            >
              Ver Demonstração
            </Button>
          </div>

          {/* Subtitle */}
          <p className="w-full max-w-[1040px] text-white text-lg lg:text-2xl text-center lg:text-left tracking-[0.15px] leading-6 [font-family:'Albert_Sans',Helvetica] font-medium mt-8 lg:mt-[65px]">
            Ela atende, organiza, agenda e responde seus pacientes com empatia.{" "}
            <br />
            Como uma secretária real, mas incansável.
          </p>
        </div>

        {/* Chat Card */}
        <Card className="absolute w-[320px] lg:w-[584px] h-[400px] lg:h-[456px] top-4 lg:top-0 right-4 lg:right-0 rounded-2xl shadow-[0px_25px_50px_#00000040] overflow-hidden">
          <CardContent className="p-0">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 lg:p-6 border-b">
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
                  src="/assets/icon-call.svg"
                />
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[250px] lg:h-[298px] p-4 lg:p-6 overflow-y-auto">
              {chatMessages.map((message, index) => (
                <div
                  key={index} 
                  className={`flex ${message.type === "sent" ? "justify-end" : "justify-start"} mb-4 lg:mb-6`}
                >
                  <div
                    className={`rounded-2xl p-2 lg:p-3 ${message.className} ${message.type === "sent" ? "max-w-[140px] lg:max-w-[174px]" : "max-w-[240px] lg:max-w-[320px]"}`}
                  >
                    {Array.isArray(message.text) ? (
                      message.text.map((line, i) => (
                        <p
                          key={i}
                          className={`[font-family:'Outfit',Helvetica] font-normal text-sm lg:text-base ${i > 0 ? "mt-1" : ""}`}
                        >
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-sm lg:text-base">
                        {message.text}
                      </p>
                    )}

                    {message.hasAudio && (
                      <div className="flex items-center mt-3">
                        <img
                          className="w-3 lg:w-[15px] h-2 lg:h-[12px]"
                          alt="Frame"
                          src="/assets/icon-audio.svg"
                        />
                        <span className="ml-1 [font-family:'Outfit',Helvetica] font-normal text-gray-500 text-xs lg:text-xs">
                          Áudio enviado
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="flex items-center p-3 lg:p-4 border-t">
              <div className="flex items-center w-full">
                <img
                  className="w-3 lg:w-[16px] h-4 lg:h-[18px] mr-2"
                  alt="Frame"
                  src="/assets/icon-attachment.svg"
                />
                <div className="relative flex-1 bg-gray-100 rounded-full">
                  <Input
                    className="h-8 lg:h-10 pl-3 lg:pl-4 pr-12 lg:pr-16 bg-transparent border-none [font-family:'Roboto',Helvetica] font-normal text-xs lg:text-sm"
                    placeholder="Digite uma mensagem"
                  />
                  <div className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 lg:gap-2">
                    <img
                      className="w-3 lg:w-[14px] h-3 lg:h-4"
                      alt="Frame"
                      src="/assets/icon-emoji.svg"
                    />
                    <img className="w-3 lg:w-4 h-3 lg:h-4" alt="Frame" src="/assets/icon-microphone.svg" />
                  </div>
                </div>
                <div className="ml-2 lg:ml-3 w-6 lg:w-[30px] h-8 lg:h-11 bg-[#25d366] rounded-full flex items-center justify-center">
                  <img
                    className="w-3 lg:w-[14px] h-4 lg:h-[18px]"
                    alt="Frame"
                    src="/assets/icon-send-whatsapp.svg"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};