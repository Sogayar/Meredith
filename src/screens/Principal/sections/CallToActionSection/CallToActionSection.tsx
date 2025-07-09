import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      quote:
        '"O HealthBot reduziu em 50% o tempo que gastávamos com agendamentos e lembretes. Nossa secretária agora consegue focar em tarefas mais importantes e o índice de faltas caiu drasticamente."',
      author: "Dr. João Silva",
      clinic: "Clínica Dermatológica Silva",
      avatar: "/assets/avatar-dr-joao.png",
      avatarFallback: "JS",
    },
    {
      quote:
        '"Nossos pacientes adoram a facilidade de comunicação. Conseguimos aumentar a adesão aos tratamentos com os lembretes automáticos e o feedback tem sido extremamente positivo."',
      author: "Dra. Ana Oliveira",
      clinic: "Centro Médico Bem Estar",
      avatar: "/assets/avatar-dra-ana.png",
      avatarFallback: "AO",
    },
    {
      quote:
        '"A implementação foi surpreendentemente rápida e o suporte é excelente. Nossa rede de clínicas conseguiu padronizar a comunicação com pacientes, mantendo um alto nível de personalização."',
      author: "Dr. Carlos Mendes",
      clinic: "Rede Saúde Prime",
      avatar: "/assets/avatar-dr-carlos.png",
      avatarFallback: "CM",
    },
  ];

  // Star rating component
  const StarRating = () => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((_, index) => (
        {
          const starSrc = index === 4 && testimonials.indexOf(testimonials[2]) === 2
            ? "/assets/star-half.svg"
            : "/assets/star-full.svg";
          
          return (
            <div
              key={index}
              className="flex w-[18px] h-4 items-center justify-center"
            >
              <img
                className="relative w-[18px] h-4"
                alt="Star rating"
                src={starSrc}
              />
            </div>
          );
        }
      ))}
    </div>
  );

  return (
    <section className="w-full py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-bold text-3xl text-gray-800 text-center font-['Poppins',Helvetica] mb-3">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="w-20 h-1 bg-[#27a987] mb-6" />
          <p className="text-lg text-gray-600 text-center font-['Poppins',Helvetica] max-w-3xl">
            Veja como o HealthBot está transformando clínicas de saúde em todo o
            Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-50 shadow-[0px_1px_2px_#0000000d] rounded-xl border-0"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <StarRating />
                </div>

                <div className="mb-8 font-['Poppins',Helvetica] text-gray-600 text-base">
                  {testimonial.quote}
                </div>

                <div className="flex items-center">
                  <Avatar className="h-12 w-12 rounded-full">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.author}
                    />
                    <AvatarFallback>
                      {testimonial.avatarFallback}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-medium text-gray-800 text-base font-['Poppins',Helvetica]">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500 text-sm font-['Poppins',Helvetica]">
                      {testimonial.clinic}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

          <div
            key={index}
            className="flex w-[18px] h-4 items-center justify-center"
          >
            <img
              className="relative w-[18px] h-4"
              alt="Star rating"
              src={starSrc}
            />
          </div>
        );
      ))}
    </div>
  );

  return (
    <section className="w-full py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-bold text-3xl text-gray-800 text-center font-['Poppins',Helvetica] mb-3">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="w-20 h-1 bg-[#27a987] mb-6" />
          <p className="text-lg text-gray-600 text-center font-['Poppins',Helvetica] max-w-3xl">
            Veja como o HealthBot está transformando clínicas de saúde em todo o
            Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-50 shadow-[0px_1px_2px_#0000000d] rounded-xl border-0"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <StarRating />
                </div>

                <div className="mb-8 font-['Poppins',Helvetica] text-gray-600 text-base">
                  {testimonial.quote}
                </div>

                <div className="flex items-center">
                  <Avatar className="h-12 w-12 rounded-full">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.author}
                    />
                    <AvatarFallback>
                      {testimonial.avatarFallback}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-medium text-gray-800 text-base font-['Poppins',Helvetica]">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500 text-sm font-['Poppins',Helvetica]">
                      {testimonial.clinic}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
