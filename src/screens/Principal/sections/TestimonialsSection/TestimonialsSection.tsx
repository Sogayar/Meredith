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
    <section className="w-full max-w-[1248px] h-[418px] mx-auto bg-[#e6f1ff] rounded-2xl p-12">
      <div className="flex h-full">
        <div className="flex-1 pr-12">
          <h2 className="font-bold text-2xl text-gray-900 font-['Poppins',Helvetica] leading-8">
            Conformidade e Segurança
          </h2>

          <p className="mt-[45px] text-lg text-gray-700 font-['Poppins',Helvetica] font-normal leading-7 max-w-[639px]">
            O HealthAssist foi desenvolvido priorizando a segurança dos dados e
            a conformidade com as regulamentações de saúde.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {complianceItems.map((item) => (
              <Card
                key={item.id}
                className="h-[60px] flex items-center bg-white shadow-[0px_1px_2px_#0000000d] border-0"
              >
                <div className="flex items-center px-4">
                  {item.icon ? (
                    <div className="w-5 h-5 flex items-center justify-center">
                      <img className="w-5 h-5" alt="Icon" src={item.icon} />
                    </div>
                  ) : item.id === 5 ? (
                    <img
                      className="w-6 h-6"
                      alt="GlobeIcon LockIcon Icon"
                      src="/assets/icon-gdpr.svg"
                    />
                  ) : null}
                  <div className="ml-3 font-['Poppins',Helvetica] font-medium text-gray-800 text-base">
                    {item.title}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex items-start justify-center w-96">
          <div className="relative w-40 h-40">
            <div className="h-40 bg-white rounded-full shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] flex items-center justify-center">
              <div className="w-[60px] h-[60px] flex items-center justify-center">
                <img
                  className="w-[60px] h-[60px]"
                  alt="Security Icon"
                  src="/assets/icon-security-main.svg"
                />
              </div>

              <div className="absolute w-12 h-12 top-0 right-0 bg-[#00b389] rounded-full shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] flex items-center justify-center">
                <div className="w-[18px] h-5 flex items-center justify-center">
                  <img
                    className="w-[18px] h-5"
                    alt="Check Icon"
                    src="/assets/icon-check-green.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
