import { CheckIcon, XIcon, MessageCircle, ClipboardList, Mail } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const FeaturesSection = (): JSX.Element => {
  const plans = [
    {
      name: "Plano Básico",
      price: "R$ 899",
      period: "/mês",
      description: "Ideal para clínicas pequenas com até 500 pacientes/mês.",
      implementationFee: "R$ 2.999",
      features: [
        { name: "Suporte a 1 canais de comunicação", included: true },
        { name: "Agendamento automatizado", included: true },
        { name: "Lembretes de consulta", included: true },
        { name: "Acompanhamento pós-consulta básico", included: true },
        { name: "Pesquisas de satisfação", included: false },
        { name: "Gestão avançada de retornos", included: false },
      ],
      buttonColor: "bg-gray-600",
      highlighted: false,
    },
    {
      name: "Plano Padrão",
      price: "R$ 1.299",
      period: "/mês",
      description: "Perfeito para clínicas médias com até 2.000 pacientes/mês.",
      implementationFee: "R$ 4.999",
      features: [
        { name: "Suporte a todos os canais", included: true },
        { name: "Agendamento automatizado avançado", included: true },
        { name: "Lembretes personalizados", included: true },
        { name: "Acompanhamento pós-consulta completo", included: true },
        { name: "Pesquisas de satisfação", included: true },
        { name: "Integrações avançadas", included: false },
      ],
      buttonColor: "bg-[#0080df]",
      highlighted: true,
      badge: "MAIS POPULAR",
    },
    {
      name: "Plano Empresarial",
      price: "Personalizado",
      period: "",
      description:
        "Para grandes clínicas e redes com necessidades específicas.",
      implementationFee: "Personalizada",
      features: [
        { name: "Suporte a todos os canais", included: true },
        { name: "Agendamento automatizado avançado", included: true },
        { name: "Lembretes totalmente personalizados", included: true },
        { name: "Acompanhamento pós-consulta completo", included: true },
        { name: "Pesquisas de satisfação avançadas", included: true },
        { name: "Integrações personalizadas", included: true },
      ],
      buttonColor: "bg-gray-600",
      highlighted: false,
    },
  ];

  const comparisonFeatures = [/*... seu array existente ...*/];

  return (
    <section className="container mx-auto py-16 px-4">
      <div className="flex flex-col items-center mb-16">
        <h2
          id="nossos-planos"
          className="font-bold text-3xl text-gray-800 font-['Poppins',Helvetica] text-center leading-9 scroll-mt-[120px]"
        >
          Nossos Planos
        </h2>
        <div className="w-20 h-1 bg-[#27a987] my-4"></div>
        <p className="font-normal text-gray-600 text-lg text-center font-['Poppins',Helvetica] leading-7">
          Escolha o plano ideal para as necessidades da sua clínica.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {plans.map((plan, index) => (
          <Card
            key={`plan-${index}`}
            className={`relative ${
              plan.highlighted
                ? "bg-white border-t-4 border-t-[#0aa0ff] shadow-lg transform scale-105 z-10"
                : "bg-gray-50 border-t-4 border-t-gray-300 shadow-sm"
            } rounded-xl overflow-hidden`}
          >
            {plan.highlighted && (
              <Badge className="absolute right-0 top-0 bg-[#0aa0ff] text-white rounded-none font-bold text-xs px-3 py-0.5">
                {plan.badge}
              </Badge>
            )}

            <CardHeader className="pt-6 pb-0">
              <h3 className="font-semibold text-xl text-gray-800 font-['Poppins',Helvetica] leading-7">
                {plan.name}
              </h3>
              <div className="flex items-end mt-2">
                <span className="font-bold text-3xl text-gray-800 font-['Poppins',Helvetica]">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-gray-600 font-normal ml-1 mb-1 font-['Poppins',Helvetica]">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="text-base text-gray-600 font-normal font-['Poppins',Helvetica] leading-6 mt-2">
                {plan.description}
              </p>
            </CardHeader>

            <CardContent className="pt-6">
              <div className="mb-6">
                <p className="text-xs font-medium text-gray-500 font-['Poppins',Helvetica] uppercase tracking-[0.6px]">
                  TAXA DE IMPLEMENTAÇÃO
                </p>
                <p className="text-lg font-semibold text-gray-800 font-['Poppins',Helvetica] mt-2">
                  {plan.implementationFee}
                </p>
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={`feature-${index}-${featureIndex}`}
                    className="flex items-start"
                  >
                    {feature.included ? (
                      <CheckIcon className="h-4 w-3.5 text-gray-800 mt-1 flex-shrink-0" />
                    ) : (
                      <XIcon className="h-4 w-3 text-gray-400 mt-1 flex-shrink-0" />
                    )}
                    <span
                      className={`ml-2 text-base leading-6 font-['Poppins',Helvetica] ${
                        feature.included ? "text-gray-800" : "text-gray-400"
                      } font-normal`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>

            {(() => {
              const getIcon = (planName: string) => {
                switch (planName) {
                  case "Plano Padrão":
                    return ClipboardList;
                  case "Plano Empresarial":
                    return Mail;
                  default:
                    return MessageCircle;
                }
              };

              const Icon = getIcon(plan.name);

              return (
                <CardFooter className="pt-4 pb-6">
                  <Button
                    className={`
                      w-full 
                      ${plan.buttonColor} 
                      hover:brightness-110 
                      hover:scale-[1.07] 
                      active:scale-100 
                      transition-all 
                      duration-1000
                      ease-in-out
                      text-white 
                      text-base 
                      font-medium 
                      font-['Poppins',Helvetica] 
                      py-3 
                      px-4 
                      rounded-md 
                      shadow-sm
                    `}
                    aria-label={`Entrar em contato sobre o ${plan.name}`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Icon className="h-4 w-4" />
                      {plan.name === "Plano Padrão"
                        ? "Quero Este Plano"
                        : plan.name === "Plano Empresarial"
                        ? "Solicitar Proposta"
                        : "Fale Conosco"}
                    </span>
                  </Button>
                </CardFooter>
              );
            })()}
          </Card>
        ))}
      </div>
      {/* Comparison Table */}
      <Card className="rounded-xl shadow-sm overflow-hidden">
        <CardHeader className="bg-gray-50 border-b py-4">
          <h3 className="font-semibold text-lg text-gray-800 font-['Poppins',Helvetica]">
            Comparação de Recursos
          </h3>
        </CardHeader>

        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-1/4 py-2.5 px-6 text-xs font-medium text-gray-500 tracking-[0.6px]">
                  Recurso
                </TableHead>
                <TableHead className="w-1/4 py-2.5 text-center text-xs font-medium text-gray-500 tracking-[0.6px]">
                  Básico
                </TableHead>
                <TableHead className="w-1/4 py-2.5 text-center text-xs font-medium text-[#0080df] tracking-[0.6px]">
                  Padrão
                </TableHead>
                <TableHead className="w-1/4 py-2.5 text-center text-xs font-medium text-gray-500 tracking-[0.6px]">
                  Empresarial
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {comparisonFeatures.map((feature, index) => (
                <TableRow key={`comparison-${index}`}>
                  <TableCell className="py-4 px-6 text-sm font-normal text-gray-800 font-['Poppins',Helvetica]">
                    {feature.name}
                  </TableCell>
                  <TableCell
                    className={`py-4 text-center text-sm font-normal text-gray-600 font-['Poppins',Helvetica] ${index % 2 !== 0 ? "" : ""}`}
                  >
                    {typeof feature.basic === "boolean" ? (
                      feature.basic ? (
                        <CheckIcon className="h-3.5 w-3.5 mx-auto text-gray-800" />
                      ) : (
                        <XIcon className="h-3.5 w-3.5 mx-auto text-gray-400" />
                      )
                    ) : (
                      feature.basic
                    )}
                  </TableCell>
                  <TableCell
                    className={`py-4 text-center text-sm font-normal text-gray-800 font-['Poppins',Helvetica] bg-gray-50`}
                  >
                    {typeof feature.standard === "boolean" ? (
                      feature.standard ? (
                        <CheckIcon className="h-3.5 w-3.5 mx-auto text-gray-800" />
                      ) : (
                        <XIcon className="h-3.5 w-3.5 mx-auto text-gray-400" />
                      )
                    ) : (
                      feature.standard
                    )}
                  </TableCell>
                  <TableCell
                    className={`py-4 text-center text-sm font-normal text-gray-600 font-['Poppins',Helvetica] ${index % 2 !== 0 ? "" : ""}`}
                  >
                    {typeof feature.enterprise === "boolean" ? (
                      feature.enterprise ? (
                        <CheckIcon className="h-3.5 w-3.5 mx-auto text-gray-800" />
                      ) : (
                        <XIcon className="h-3.5 w-3.5 mx-auto text-gray-400" />
                      )
                    ) : (
                      feature.enterprise
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
};
