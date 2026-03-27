"use client";

import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const stats = [
  { value: "12", label: "AÑOS EN TECH" },
  { value: "9", label: "INCUBACIONES" },
  { value: "0", label: "CAPITAL EXTERNO" },
  { value: "∞", label: "RESILIENCIA" },
];

export default function FounderSection() {
  return (
    <section className="w-full text-zinc-100 py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Tagline superior */}
        <div className="text-center space-y-3">
          <Badge className="bg-linear-to-r from-violet-600 to-purple-500 text-white px-3 py-1 rounded-full text-xs uppercase tracking-widest">
            El Fundador
          </Badge>
          <p className="text-2xl md:text-3xl font-bold text-[#c4b5fd] max-w-2xl mx-auto leading-snug">
            No un consultor. No un coach. Un builder que construyó esto 9 veces.
          </p>
        </div>

        {/* Card principal */}
        <div className="border border-violet-500/40 rounded-2xl bg-[#111111] overflow-hidden">
          <div className="grid md:grid-cols-[280px_1fr]">

            {/* Sidebar izquierdo */}
            <div className="bg-violet-950/30 border-b md:border-b-0 md:border-r border-violet-500/20 p-8 flex flex-col gap-6">
              {/* Avatar */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-violet-600 to-indigo-500 flex items-center justify-center text-white text-xl font-bold shadow-[0_0_24px_rgba(124,58,237,0.4)]">
                  CR
                </div>
                <div>
                  <p className="text-lg font-bold text-white">Carlos Riquelme</p>
                  <p className="text-sm text-[#c4b5fd]">Founder & Builder</p>
                  <p className="text-sm text-[#a1a1aa]">Builder Latino</p>
                  <p className="text-sm text-[#a1a1aa] mt-1">Santiago, Chile</p>
                </div>
              </div>

              <div className="border-t border-violet-500/20 pt-5 space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#a1a1aa]">
                  <span className="text-green-400 font-semibold">+12</span>
                  <span>años en tech e innovación</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#a1a1aa]">
                  <span className="text-green-400 font-semibold">+9</span>
                  <span>incubaciones</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#a1a1aa]">
                  <span className="text-[#c4b5fd] font-semibold">100%</span>
                  <span>bootstrapping puro</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#a1a1aa]">
                  <span className="text-[#c4b5fd] font-semibold">IA + Internet</span>
                  <span>como igualadores</span>
                </div>
              </div>

              <a
                href="https://carlosriquelme.protolylat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-1.5 text-sm text-[#c4b5fd] hover:text-white transition-colors group"
              >
                carlosriquelme.protolylat.com
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Contenido derecho */}
            <div className="p-8 md:p-10 space-y-6">
              <div className="space-y-4 text-[#a1a1aa] text-[15px] leading-relaxed">
                <p>
                  Nací en Santiago, Chile — lejos de Silicon Valley, en un lugar donde la cancha suele estar inclinada. Mi primer "MBA" no fue un diploma, fue la calle. A los 3 años, vendiendo junto a mi padre, aprendiendo a sostener la mirada, a persistir, y a convertir el "no" en supervivencia. Hoy construyo productos y sistemas de innovación con bootstrapping real: sin capital externo, pura recursividad, colaboración y código junto a mis amigos developers.
                </p>
                <p>
                  No enseño desde un aula, construyo desde la experiencia empírica. Crecí entendiendo algo incómodo: el sistema rara vez está diseñado para hacerte libre; está diseñado para hacerte funcional. Esa revelación no me volvió cínico — me volvió intencional. Si la estructura no ayuda, entonces diseñas una nueva.
                </p>
                <p>
                  Creo en la mentalidad autodidacta, en aprender por ósmosis, y en la tecnología como palanca de movilidad. La innovación no son "ideas bonitas" — es ejecución bajo restricciones.{" "}
                  <span className="text-[#c4b5fd] font-medium">
                    Internet es el mayor motor de generación de riqueza que jamás haya existido.
                  </span>
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-violet-500/20">
                {stats.map(({ value, label }) => (
                  <div key={label} className="text-center space-y-1">
                    <p className="text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-b from-[#c4b5fd] to-indigo-400">
                      {value}
                    </p>
                    <p className="text-[10px] font-semibold tracking-widest text-[#a1a1aa] uppercase">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}