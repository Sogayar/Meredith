import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const AboutUsSection = (): JSX.Element => {
  const steps = [
    {
      title: "Análise",
      description: "Levantamos os fluxos e necessidades da sua clínica.",
      image: "/assets/icon-analysis.png",
      alt: "Análise",
    },
    {
      title: "Configuração",
      description: "Adaptamos a IA ao seu sistema e perfil de atendimento.",
      image: "/assets/icon-configuration.png",
      alt: "Configuração",
    },
    {
      title: "Treinamento",
      description: "Treinamos sua equipe e proporcionamos suporte necessário",
      image: "/assets/icon-training.png",
      alt: "Treinamento",
    },
    {
      title: "Operação",
      description: "A IA entra em ação com suporte contínuo da nossa equipe.",
      image: "/assets/icon-operation.png",
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
              <CardContent className="flex flex-col items-center justify-center text-center pt-6">
                <div className="flex flex-col items-center justify-center mb-3">
                  <img
                    className="w-[100px] h-[100px] object-cover mb-4"
                    alt={step.alt}
                    src={step.image}
                  />
                  <h3 className="font-semibold text-xl text-gray-800 font-['Poppins',Helvetica]">
                    {step.title}
                  </h3>
                </div>
                <p className="font-normal text-base text-gray-600 font-['Poppins',Helvetica]">
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
