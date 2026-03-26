"use client"

import { motion } from "framer-motion"
import { ArrowRight, X, Check } from "lucide-react"

const comparativa = [
  {
    col: "Usuario de ChatGPT",
    rows: [
      { label: "El Humano", text: "Pide que le hagan el trabajo." },
      { label: "La IA", text: "Ejecuta a ciegas (y a menudo falla)." },
      { label: "El Resultado", text: "Un fragmento de código aislado o un texto genérico. Dependencia total." },
    ],
    variant: "bad" as const,
  },
  {
    col: "Vibe Coder (AI Product Builder)",
    rows: [
      { label: "El Humano", text: "Define el problema, toma decisiones de negocio y dirige la visión creativa." },
      { label: "La IA", text: "Sugiere soluciones, explica conceptos y escribe el código táctico." },
      { label: "El Resultado", text: "Un sistema completo, integrado y desplegado en producción. El humano domina la arquitectura." },
    ],
    variant: "good" as const,
  },
]

export function TransformationSection() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f14] to-[#0a0a0a]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#7c3aed] font-mono text-sm mb-3 uppercase tracking-wider">
            La diferencia
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            La IA no te reemplaza, te potencia como arquitecto.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {comparativa.map((col, i) => (
            <motion.div
              key={col.col}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`rounded-xl p-6 md:p-8 border ${
                col.variant === "bad"
                  ? "bg-[#111111] border-[#27272a]"
                  : "bg-[#111111] border-[#7c3aed]/30 relative overflow-hidden"
              }`}
            >
              {col.variant === "good" && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/5 to-transparent pointer-events-none" />
              )}
              <div className="relative">
                <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border ${
                  col.variant === "bad"
                    ? "bg-[#1a1a1a] border-[#27272a]"
                    : "bg-[#7c3aed]/10 border-[#7c3aed]/30"
                }`}>
                  <span className={`size-2 rounded-full ${col.variant === "bad" ? "bg-[#71717a]" : "bg-[#7c3aed]"}`} />
                  <span className={`text-sm font-semibold ${col.variant === "bad" ? "text-[#71717a]" : "text-[#c4b5fd]"}`}>
                    {col.col}
                  </span>
                </div>
                <ul className="space-y-5">
                  {col.rows.map((row) => (
                    <li key={row.label} className="flex items-start gap-3">
                      {col.variant === "bad"
                        ? <X className="size-4 text-red-500/60 mt-0.5 shrink-0" />
                        : <Check className="size-4 text-[#22c55e] mt-0.5 shrink-0" />
                      }
                      <div>
                        <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${col.variant === "bad" ? "text-[#52525b]" : "text-[#7c3aed]"}`}>
                          {row.label}:
                        </span>
                        <p className={`text-sm leading-relaxed mt-0.5 ${col.variant === "bad" ? "text-[#71717a]" : "text-[#e4e4e7]"}`}>
                          {row.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#7c3aed]/10 via-[#7c3aed]/5 to-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-xl p-6 md:p-8 text-center">
            <ArrowRight className="size-6 text-[#7c3aed] mx-auto mb-4" />
            <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
              En 8 semanas, pasarás de no saber programar a construir aplicaciones
              reales usando{" "}
              <span className="text-[#7c3aed] font-semibold">IA como tu copiloto</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
