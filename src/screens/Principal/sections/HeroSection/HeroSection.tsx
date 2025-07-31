// src/screens/HeroSection/HeroSection.tsx
import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#0080df] to-[#005694] overflow-hidden flex items-center justify-center text-white px-4 py-12">
      <svg
        viewBox="0 0 200 100"
        className="absolute z-0 text-white opacity-20 w-[95vw] h-[50vh] sm:w-[1100px] sm:h-[500px] bottom-0 sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6">
            <circle cx="5" cy="5" r="2" fill="white">
              <animate attributeName="r" values="0;3;2" dur="1.6s" repeatCount="indefinite" />
            </circle>
          </marker>
        </defs>

      {[
        { d: "M35 85 Q70 20 100 48", dur: 4 },    // robot
        { d: "M20 48 Q50 0 100 48", dur: 6 },     // terminal
        { d: "M63 12 Q90 0 100 58", dur: 3 },     // gpu
        { d: "M163 11 Q130 0 100 48", dur: 5 },   // router
        { d: "M175 60 Q140 0 100 48", dur: 4.5 }, // cpu
        { d: "M90 87 Q101 40 105 40", dur: 3.4 }, // database
        { d: "M130 77 Q110 0 100 48", dur: 6.2 }    // network
      ].map(({ d, dur }, i) => (
        <g
          key={i}
          stroke="currentColor"
          fill="none"
          strokeWidth="0.8"
          strokeDasharray="100 100"
          pathLength="100"
          markerStart="url(#dot)"
        >
          <path d={d} />
          <animate
            attributeName="stroke-dashoffset"
            values="100;0;100"
            dur={`${dur}s`}
            begin={`${i * 0.4}s`}
            repeatCount="indefinite"
          />
        </g>
      ))}

        {/* Ícones SVG posicionados */}
        {[
          { x: 30, y: 86, svg: "cpu" },
          { x: 15, y: 49, svg: "terminal" },
          { x: 57, y: 2, svg: "gpu" },
          { x: 165, y: 4, svg: "router" },
          { x: 172, y: 61, svg: "cable" },
          { x: 85, y: 88, svg: "database" },
          { x: 125, y: 78, svg: "network" }
        ].map(({ x, y, svg }, i) => (
          <foreignObject key={i} x={x} y={y} width="10" height="10">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              dangerouslySetInnerHTML={{
                __html: `
                <svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-${svg}-icon lucide-${svg}'>
                  ${{
                    cpu: `<path d='M12 20v2'/><path d='M12 2v2'/><path d='M17 20v2'/><path d='M17 2v2'/><path d='M2 12h2'/><path d='M2 17h2'/><path d='M2 7h2'/><path d='M20 12h2'/><path d='M20 17h2'/><path d='M20 7h2'/><path d='M7 20v2'/><path d='M7 2v2'/><rect x='4' y='4' width='16' height='16' rx='2'/><rect x='8' y='8' width='8' height='8' rx='1'/>`,
                    gpu: `<path d='M2 21V3'/><path d='M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26'/><path d='M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3'/><circle cx='16' cy='11' r='2'/><circle cx='8' cy='11' r='2'/>`,
                    cable: `<path d='M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z'/><path d='M17 21v-2'/><path d='M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10'/><path d='M21 21v-2'/><path d='M3 5V3'/><path d='M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z'/><path d='M7 5V3'/>`,
                    database: `<ellipse cx='12' cy='5' rx='9' ry='3'/><path d='M3 5V19A9 3 0 0 0 21 19V5'/><path d='M3 12A9 3 0 0 0 21 12'/>`,
                    terminal: `<path d='m7 11 2-2-2-2'/><path d='M11 13h4'/><rect width='18' height='18' x='3' y='3' rx='2' ry='2'/>`,
                    router: `<rect width='20' height='8' x='2' y='14' rx='2'/><path d='M6.01 18H6'/><path d='M10.01 18H10'/><path d='M15 10v4'/><path d='M17.84 7.17a4 4 0 0 0-5.66 0'/><path d='M20.66 4.34a8 8 0 0 0-11.31 0'/>`,
                    network: `<rect x='16' y='16' width='6' height='6' rx='1'/><rect x='2' y='16' width='6' height='6' rx='1'/><rect x='9' y='2' width='6' height='6' rx='1'/><path d='M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3'/><path d='M12 12V8'/>`
                  }[svg]}
                </svg>`
              }}
            />
          </foreignObject>
        ))}

        <g>
          <rect x="92" y="40" width="16" height="16" rx="4" fill="#006ab9" />
          <g transform="translate(92,40)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
              <path d="M9 13a4.5 4.5 0 0 0 3-4" />
              <path d="M12 13h4M12 18h6a2 2 0 0 1 2 2v1M12 8h8M16 8V5a2 2 0 0 1 2-2" />
              <circle cx="16" cy="13" r=".5" />
              <circle cx="18" cy="3" r=".5" />
              <circle cx="20" cy="21" r=".5" />
              <circle cx="20" cy="8" r=".5" />
            </svg>
          </g>
        </g>
      </svg>

      <div className="relative z-10 max-w-[800px] text-center px-4 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight -mt-6 mb-3">
          Conheça sua <span className="text-cyan-300">nova</span> secretária <br />
          Inteligente, Humanizada e Disponível 24/7.
        </h1>
        <p className="mt-14 text-lg md:text-xl text-white/80 font-medium">
          Meredith atende, agenda e conversa com seus pacientes como uma verdadeira assistente — mas sem falhas e sem folgas.
        </p>
        <div className="mt-10">
          <button className="bg-white text-blue-700 hover:bg-blue-100 font-semibold px-6 py-3 rounded-full shadow-md transition-all">
            <a href="#teste-agora">Use Agora, É Grátis</a>
          </button>
        </div>
      </div>
    </section>
  );
};
