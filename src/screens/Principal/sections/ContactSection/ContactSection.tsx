import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactSection = (): JSX.Element => {
  const blogPosts = [
    {
      id: 1,
      date: "12 de Julho, 2023",
      title: "Como a Automação Está Revolucionando Clínicas de Saúde",
      description:
        "Descubra como a automação inteligente está transformando a experiência do paciente e a eficiência operacional em clínicas de saúde.",
      image: "/assets/blog-automacao.png",
    },
    {
      id: 2,
      date: "5 de Julho, 2023",
      title: "5 Estratégias para Reduzir Faltas em Consultas Médicas",
      description:
        "Implementando lembretes eficientes e estratégias de comunicação para minimizar cancelamentos de última hora e não comparecimentos.",
      image: "/assets/blog-estrategias.png",
    },
    {
      id: 3,
      date: "28 de Junho, 2023",
      title: "LGPD na Saúde: O Que Sua Clínica Precisa Saber",
      description:
        "Um guia completo sobre conformidade com a Lei Geral de Proteção de Dados para instituições de saúde no Brasil.",
      image: "/assets/blog-lgpd.png",
    },
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto py-16">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16">
        <h2 id="blog" className="font-bold text-3xl text-gray-800 text-center font-['Poppins',Helvetica] leading-9 scroll-mt-[120px]">
          Blog e Recursos
        </h2>
        <div className="w-20 h-1 my-4 bg-[#27a987]" />
        <p className="max-w-[747px] font-normal text-gray-600 text-lg text-center font-['Poppins',Helvetica] leading-7">
          Conteúdo relevante sobre automação na saúde e melhores práticas para
          clínicas.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1024px] mx-auto">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="w-full max-w-[320px] rounded-xl overflow-hidden shadow-[0px_1px_2px_#0000000d]"
          >
            <div
              className="w-full h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${post.image})` }}
            />
            <CardContent className="p-6">
              <div className="mb-4">
                <p className="font-['Poppins',Helvetica] font-normal text-gray-500 text-sm">
                  {post.date}
                </p>
              </div>
              <h3 className="font-['Poppins',Helvetica] font-semibold text-gray-800 text-xl leading-7 mb-6">
                {post.title}
              </h3>
              <p className="font-['Poppins',Helvetica] font-normal text-gray-600 text-base leading-6 mb-8">
                {post.description}
              </p>
              <div className="flex items-center">
                <span className="font-['Poppins',Helvetica] font-medium text-[#0080df] text-base leading-6">
                  Ler mais
                </span>
                <ChevronRightIcon className="w-3.5 h-4 ml-2 text-[#0080df]" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Indicator */}
      <div className="flex justify-center mt-12">
        <div className="w-[50px] h-[26px] bg-white rounded-lg border border-solid border-gray-300" />
      </div>
    </section>
  );
};
