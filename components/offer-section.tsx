"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Zap, Award } from "lucide-react"

const valueStack = [
  { item: "Programa completo 8 semanas", value: "$997" },
  { item: "Acceso vitalicio a actualizaciones del curriculum", value: "$500" },
  { item: "Sesi\u00f3n 1-on-1 de 20 min con el fundador para revisar portafolio", value: "$200" },
  { item: 'Badge digital "Founding Member"', value: "Exclusivo" },
  { item: "Comunidad post-bootcamp", value: "Priceless" },
]

export function OfferSection() {
  const [cuposTaken, setCuposTaken] = useState(0)

  useEffect(() => {
    setCuposTaken(Math.floor(Math.random() * 5) + 7)
  }, [])

  return (
    <section id="oferta" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-full px-4 py-1.5 mb-6">
            <Award className="size-4 text-[#7c3aed]" />
            <span className="text-sm text-[#c4b5fd] font-medium">Oferta Exclusiva Cohort #1</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            Lo que obtienes como Founding Member
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#111111] border border-[#27272a] rounded-2xl overflow-hidden"
          >
            {/* Price header */}
            <div className="bg-gradient-to-r from-[#7c3aed]/10 via-[#111111] to-[#22c55e]/10 p-8 text-center border-b border-[#27272a]">
              <p className="text-[#71717a] text-lg line-through mb-2">$1.149.990 CLP</p>
              <div className="flex items-baseline justify-center gap-2">
                <span
                  className="text-5xl md:text-6xl font-bold text-[#22c55e] font-mono"
                  style={{ textShadow: "0 0 30px rgba(34,197,94,0.3)" }}
                >
                  $900.000
                </span>
                <span className="text-[#a1a1aa] text-lg">CLP</span>
              </div>
              <p className="text-sm text-[#71717a] mt-3">
                o 3 pagos de $300.000 CLP a 0, 30 y 60 días (Tarjeta de Crédito)
              </p>

              <p className="text-sm text-[#71717a] mt-3">
                $700.000 CLP (Solo por referido: Si traes un amigo, familiar y juntos c/u paga) Hasta 3 pagos de $233.333 CLP a 0, 30 y 60 días  (Tarjeta de Crédito)
              </p>
            </div>

            {/* Value stack */}
            <div className="p-6 md:p-8">
              <ul className="space-y-4">
                {valueStack.map((vs) => (
                  <li key={vs.item} className="flex items-start gap-3">
                    <Check className="size-5 text-[#22c55e] mt-0.5 shrink-0" />
                    <div className="flex-1 flex items-start justify-between gap-4">
                      <span className="text-[#e4e4e7] text-sm leading-relaxed">{vs.item}</span>
                      <span className="text-[#7c3aed] font-mono text-sm whitespace-nowrap">{vs.value}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-[#27272a]">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[#71717a] text-sm">Valor total: $1.149.990 CLP+</span>
                  <span className="text-white font-semibold">Tu inversión hoy: <span className="text-[#22c55e]">$900.000 CLP</span></span>
                </div>

                <a href="#aplicar">
                  <Button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-lg py-6 font-semibold shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                    <span className="text-black">Quiero ser AI Product Builder</span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Urgency bar */}
            <div className="bg-[#0c0c0c] border-t border-[#27272a] px-6 py-4 text-center" suppressHydrationWarning>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Zap className="size-4 text-[#f59e0b]" />
                <span className="text-[#a1a1aa]">
                  Solo quedan{" "}
                  <span className="text-white font-semibold font-mono">{20 - cuposTaken}</span>{" "}
                  de 20 cupos disponibles
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
