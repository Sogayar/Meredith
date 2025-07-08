import { CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Service data for mapping
const services = [
  {
    icon: "/frame-27.svg",
    title: "Comunicação Multicanal",
    description:
      "Integração com WhatsApp, Instagram, Facebook, e-mail e outros canais para comunicação eficiente com seus pacientes.",
    features: [
      "Mensagens personalizadas",
      "Respostas automáticas",
      "Chatbot inteligente",
    ],
  },
  {
    icon: "/frame-21.svg",
    title: "Agendamento Inteligente",
    description:
      "Automatize o processo de agendamento, remarcação e cancelamento de consultas com confirmação automática.",
    features: [
      "Integração com calendários",
      "Lembretes automáticos",
      "Gestão de disponibilidade",
    ],
  },
  {
    icon: "/frame-26.svg",
    title: "Acompanhamento Pós-Consulta",
    description:
      "Mantenha contato com seus pacientes após as consultas, garantindo melhor adesão aos tratamentos.",
    features: [
      "Lembretes de medicação",
      "Monitoramento de sintomas",
      "Pesquisas de satisfação",
    ],
  },
  {
    icon: "/frame-24.svg",
    title: "Pesquisas e Feedback",
    description:
      "Colete feedback dos pacientes para melhorar continuamente seus serviços e atendimento.",
    features: [
      "Pesquisas automáticas",
      "Análise de sentimento",
      "Relatórios detalhados",
    ],
  },
  {
    icon: "/frame-79.svg",
    title: "Gestão de Retornos",
    description:
      "Automatize lembretes para consultas de retorno e renovação de procedimentos periódicos.",
    features: [
      "Agendamento proativo",
      "Lembretes personalizados",
      "Controle de periodicidade",
    ],
  },
  {
    icon: "/frame-17.svg",
    title: "Conformidade e Segurança",
    description:
      "Garanta que todas as comunicações estejam em conformidade com as regulamentações de saúde e proteção de dados.",
    features: [
      "Conformidade com LGPD/HIPAA/GDPR",
      "Criptografia de dados",
      "Gestão de consentimento",
    ],
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-bold text-3xl text-gray-800 font-['Poppins',Helvetica] mb-3">
            Nossos Serviços
          </h2>
          <div className="w-20 h-1 bg-[#27a987] mb-6" />
          <p className="text-lg text-gray-600 font-['Poppins',Helvetica] text-center max-w-[704px]">
            Conheça as funcionalidades do nosso agente de <br />
            automação inteligente para clínicas de saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gray-50 rounded-xl shadow-[0px_1px_2px_#0000000d] overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#dcf3ff] rounded-full flex items-center justify-center mb-10">
                  <img
                    className="w-6 h-6"
                    alt="Service icon"
                    src={service.icon}
                  />
                </div>

                <h3 className="font-semibold text-xl text-gray-800 font-['Poppins',Helvetica] mb-4">
                  {service.title}
                </h3>

                <p className="text-base text-gray-600 font-['Poppins',Helvetica] mb-8">
                  {service.description}
                </p>

                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="mr-2 mt-1">
                        <CheckIcon className="h-4 w-3.5 text-gray-600" />
                      </span>
                      <span className="text-base text-gray-600 font-['Poppins',Helvetica]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
