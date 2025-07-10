import React from "react";
import { Card } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  // Data for compliance cards
  const complianceItems = [
    {
      id: 1,
      title: "Conforme LGPD (Brasil)",
      icon: "/assets/icon-lgpd.svg",
    },
    {
      id: 2,
      title: "Criptografia de ponta a ponta",
      icon: null,
    },
    {
      id: 3,
      title: "Compatível com HIPAA (EUA)",
      icon: "/assets/icon-hipaa.svg",
    },
    {
      id: 4,
      title: "Servidores seguros no Brasil",
      icon: "/assets/icon-server-brazil.svg",
    },
    {
      id: 5,
      title: "Compatível com GDPR (Europa)",
      icon: "/assets/icon-gdpr.svg",
    },
    {
      id: 6,
      title: "Infraestrutura validada por especialistas",
      icon: "/assets/icon-infrastructure.svg",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="bg-[#e6f1ff] rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="flex-1 lg:pr-8">
              <h2 className="font-bold text-2xl lg:text-3xl text-gray-900 font-['Poppins',Helvetica] leading-8 mb-6">
                Conformidade e Segurança
              </h2>

              <p className="text-lg text-gray-700 font-['Poppins',Helvetica] font-normal leading-7 mb-8">
                O HealthAssist foi desenvolvido priorizando a segurança dos dados e
                a conformidade com as regulamentações de saúde.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {complianceItems.map((item) => (
                  <Card
                    key={item.id}
                    className="min-h-[60px] flex items-center bg-white shadow-[0px_1px_2px_#0000000d] border-0 rounded-lg"
                  >
                    <div className="flex items-center px-4 py-3 w-full">
                      {item.icon ? (
                        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                          <img className="w-5 h-5" alt="Icon" src={item.icon} />
                        </div>
                      ) : null}
                      <div className="ml-3 font-['Poppins',Helvetica] font-medium text-gray-800 text-sm lg:text-base leading-tight">
                        {item.title}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center lg:w-80">
              <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                <div className="w-full h-full bg-white rounded-full shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] flex items-center justify-center">
                  <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center">
                    <img
                      className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]"
                      alt="Security Icon"
                      src="/assets/blindado.svg"
                    />
                  </div>

                  <div className="absolute w-10 h-10 lg:w-12 lg:h-12 top-0 right-0 bg-[#00b389] rounded-full shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] flex items-center justify-center">
                    <div className="w-4 h-4 lg:w-[18px] lg:h-5 flex items-center justify-center">
                      <img
                        className="w-4 h-4 lg:w-[18px] lg:h-5"
                        alt="Check Icon"
                        src="/assets/icon-check-white.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
