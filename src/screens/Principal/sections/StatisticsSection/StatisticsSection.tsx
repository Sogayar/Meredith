import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const StatisticsSection = (): JSX.Element => {
  // Statistics data
  const statistics = [
    {
      value: "50%",
      description: "Redução no tempo gasto com agendamentos",
    },
    {
      value: "95%",
      description: "Taxa de satisfação dos pacientes",
    },
    {
      value: "70%",
      description: "Redução em faltas às consultas",
    },
    {
      value: "300+",
      description: "Clínicas atendidas",
    },
  ];

  // Certification data
  const certifications = [
    {
      icon: "/assets/icon-iso27001.svg",
      text: "ISO 27001",
    },
    {
      icon: "/assets/icon-lgpd.svg",
      text: "LGPD Compliance",
    },
    {
      icon: "/assets/icon-healthtech.svg",
      text: "Health Tech Alliance",
    },
  ];

  return (
    <section className="relative w-full bg-gray-50 py-24">
      {/* Statistics Cards */}
      <div className="relative w-full max-w-7xl mx-auto -mt-36">
        <div className="bg-white p-12">
          <div className="grid grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-4xl font-bold text-[#0080df] mb-4">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-center text-base">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-bold text-3xl text-gray-800 text-center font-['Poppins',Helvetica] leading-9">
            Sobre Nós
          </h2>
          <Separator className="w-20 h-1 bg-[#27a987] my-4" />
          <p className="max-w-[691px] text-center text-gray-600 text-lg font-['Poppins',Helvetica] leading-7">
            Somos especialistas em transformar a experiência de pacientes e
            otimizar a operação de clínicas de saúde através de automação
            inteligente.
          </p>
        </div>

        <div className="flex gap-12">
          {/* Left side image */}
          <div className="flex-1">
            <img className="w-full h-auto" alt="Sobre nós" src="/assets/about-us-illustration.svg" />
          </div>

          {/* Right side content */}
          <div className="flex-1 py-8">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 font-['Poppins',Helvetica] leading-8 mb-4">
                Nossa Missão
              </h3>
              <p className="text-gray-600 text-base font-['Poppins',Helvetica] leading-6">
                Democratizar o acesso à tecnologia de automação para clínicas de
                saúde de todos os portes, melhorando a experiência dos pacientes
                e a eficiência operacional, sempre com respeito às normas éticas
                e legais.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 font-['Poppins',Helvetica] leading-8 mb-4">
                Nossa Experiência
              </h3>
              <p className="text-gray-600 text-base font-['Poppins',Helvetica] leading-6">
                Com mais de 5 anos no mercado de tecnologia para saúde, nossa
                equipe combina expertise em inteligência artificial,
                desenvolvimento de software e conhecimento profundo do setor de
                saúde.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-800 font-['Poppins',Helvetica] leading-7 mb-4">
                Certificações e Parcerias
              </h4>
              <div className="flex gap-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="shadow-[0px_1px_2px_#0000000d]">
                    <CardContent className="flex items-center p-3">
                      <div className="w-4 h-4 mr-2 flex items-center justify-center">
                        <img
                          className="w-full h-auto"
                          alt="Certification icon"
                          src={cert.icon}
                        />
                      </div>
                      <span className="text-gray-800 text-base font-['Poppins',Helvetica]">
                        {cert.text}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
