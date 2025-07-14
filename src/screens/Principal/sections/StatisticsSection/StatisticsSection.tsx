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
      value: "60%",
      description: "A mais de conversão dos pacientes em consulta",
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
      <div className="relative w-full -mt-24 lg:-mt-36">
        <div className="bg-white p-8 lg:p-12 rounded-lg shadow-lg px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-2xl lg:text-4xl font-bold text-[#0080df] mb-2 lg:mb-4">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-center text-sm lg:text-base">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div id="sobre-nos" className="max-w-7xl mx-auto mt-16 px-4 scroll-mt-[120px]">
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-bold text-2xl lg:text-3xl text-gray-800 text-center font-['Poppins',Helvetica] leading-9">
            Sobre Nós
          </h2>
          <Separator className="w-20 h-1 bg-[#27a987] my-4" />
          <p className="max-w-[691px] text-center text-gray-600 text-base lg:text-lg font-['Poppins',Helvetica] leading-7">
            Somos especialistas em transformar a experiência de pacientes e
            otimizar a operação de clínicas de saúde através de automação
            inteligente.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-stretch">
          {/* Left side image */}
          <div className="flex-1 order-2 lg:order-1 flex justify-center lg:justify-end">
            <img
              className="max-w-[600px] w-full h-auto self-center"
              alt="Sobre nós"
              src="/assets/about-us.svg"
            />
          </div>

          {/* Right side content */}
          <div className="flex-1 py-4 lg:py-8 order-1 lg:order-2">
            <div className="mb-10">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 font-['Poppins',Helvetica] leading-8 mb-4">
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
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 font-['Poppins',Helvetica] leading-8 mb-4">
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
              <h4 className="text-base lg:text-lg font-medium text-gray-800 font-['Poppins',Helvetica] leading-7 mb-4">
                Certificações e Parcerias
              </h4>
              <div className="flex flex-wrap gap-3 lg:gap-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="shadow-[0px_1px_2px_#0000000d] rounded-lg">
                    <CardContent className="flex items-center p-2 lg:p-3">
                      <div className="w-4 h-4 mr-2 flex items-center justify-center flex-shrink-0">
                        <img
                          className="w-full h-auto"
                          alt="Certification icon"
                          src={cert.icon}
                        />
                      </div>
                      <span className="text-gray-800 text-sm lg:text-base font-['Poppins',Helvetica] whitespace-nowrap">
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