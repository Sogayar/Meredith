import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const AboutUsSection = (): JSX.Element => {
  const steps = [
    {
      title: "Análise",
      description: "Levantamos os fluxos e necessidades da sua clínica.",
      image: "/assets/edf56de4-100b-4b67-8e90-9435c9e97c6f-1.png",
      alt: "Análise",
    },
    {
      title: "Configuração",
      description: "Adaptamos a IA ao seu sistema e perfil de atendimento.",
      image: "/assets/20121dc6-9e0d-4b1e-a091-0f5a44b897d2-1.png",
      alt: "Configuração",
    },
    {
      title: "Treinamento",
      description: "Treinamos sua equipe em poucos minutos.",
      image: "/assets/8009b747-cada-417c-b95e-eef56695cf98-1.png",
      alt: "Treinamento",
    },
    {
      title: "Operação",
      description: "A IA entra em ação com suporte contínuo da nossa equipe.",
      image: "/assets/b3148e3c-88f2-44e4-826f-f8a1723605a8-1.png",
      alt: "Operação",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-bold text-3xl text-gray-800 font-['Poppins',Helvetica] text-center mb-3">
            Como Funciona
          </h2>
          <Separator className="w-20 h-1 bg-[#27a987] mb-6" />
          <p className="font-normal text-lg text-gray-600 font-['Poppins',Helvetica] text-center max-w-3xl">
            Conheça o processo simples de implementação <br />
            do nosso agente de automação em sua clínica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 bg-transparent">
              <CardContent className="flex flex-col items-center pt-6">
                <div className="flex flex-col items-center mb-3">
                  <img
                    className="w-[100px] h-[100px] object-cover mb-4"
                    alt={step.alt}
                    src={step.image}
                  />
                  <h3 className="font-semibold text-xl text-gray-800 font-['Poppins',Helvetica] text-center">
                    {step.title}
                  </h3>
                </div>
                <p className="font-normal text-base text-gray-600 font-['Poppins',Helvetica] text-center">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
