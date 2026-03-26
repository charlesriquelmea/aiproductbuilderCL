"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"

export function UrgencyCTASection() {
  const [cuposTaken, setCuposTaken] = useState(0)

  useEffect(() => {
    setCuposTaken(Math.floor(Math.random() * 5) + 7)
  }, [])

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08),transparent_70%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Countdown */}
          <CountdownTimer />

          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
              Cierran inscripciones el 6 de Abril.
            </h2>
            <p className="text-lg text-[#a1a1aa]">
              {/* Start: <span className="text-white font-semibold">7 de Abril 2026</span> 
              — Para el <span className="text-white font-semibold">10 de Mayo de 2026</span> */}
              Start: <span className="text-white font-semibold">10 de Mayo de 2026</span>
            </p>
          </div>

          {/* Cupos counter */}
          <div className="flex items-center gap-3" suppressHydrationWarning>
            <span className="size-3 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[#a1a1aa]">
              Solo 20 cupos{" "}
              <span className="text-white font-mono font-semibold">{cuposTaken}</span>{" "}
              ya tomados
            </span>
          </div>

          {/* CTA */}
          <a href="#aplicar">
            <Button
              size="lg"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-lg px-10 py-7 font-semibold shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] transition-all"
            >
              <span className="text-black">Quiero ser AI Product Builder</span>
            </Button>
          </a>

          <p className="text-sm text-[#71717a]">
            $900.000 CLP o 3x $300.000 CLP (a 0, 30 y 60 días)
          </p>
        </motion.div>
      </div>
    </section>
  )
}
