"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Rocket, DollarSign } from "lucide-react"
import { AnimatedTerminal } from "@/components/animated-terminal"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-violet/10 via-[#0a0a0a] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_60%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <Badge
                variant="outline"
                className="border-violet/50 bg-violet/10 text-[#c4b5fd] px-4 py-2 text-sm gap-2 w-fit"
              >
                <span className="size-2 rounded-full bg-violet animate-blink inline-block" />
                {"Solo 20 cupos disponibles \u2014 Cohort #1"}
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white text-balance"
            >
              {"Conviértete en un"}{" "}
              <span className="text-violet">AI Product Builder</span>{" "}
              by Protolylat
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-lg text-[#a1a1aa] leading-relaxed max-w-xl"
            >
              Un programa intensivo de 8 semanas para fusionar la{" "}
              {"visi\u00f3n estrat\u00e9gica"} de producto con la agilidad del Visual Coding.
              De no saber programar, a construir aplicaciones reales usando la{" "}
              {"IA como tu copiloto."}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#aplicar">
                <Button
                  size="lg"
                  className="bg-neon-green hover:bg-[#16a34a] text-lg px-8 py-6 font-semibold shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-all"
                >
                  <span className="text-black">Quiero ser AI Product Builder</span>
                </Button>
              </a>
              <a href="#curriculum">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#27272a] text-white hover:bg-[#1a1a1a] hover:text-white text-lg px-8 py-6"
                >
                  {"Ver el programa completo \u2193"}
                </Button>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#a1a1aa]"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle className="size-4 text-neon-green" />
                20 cupos
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4 text-violet" />
                Cierra 6 de Abril
              </span>
              <span className="flex items-center gap-1.5">
                <Rocket className="size-4 text-violet" />
                Start: 10 de Mayo
              </span>
              <span className="flex items-center gap-1.5">
                <DollarSign className="size-4 text-neon-green" />
                {"Garant\u00eda incluida"}
              </span>
            </motion.div>
          </div>

          {/* Right side: animated terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <AnimatedTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
