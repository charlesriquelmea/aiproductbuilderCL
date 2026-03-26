"use client"

import { motion } from "framer-motion"
import { Building2, Users, Gem } from "lucide-react"

const proofCards = [
  {
    icon: Building2,
    title: "Metodolog\u00eda probada",
    desc: "Buskero es un spin-off de Protoly, una software factory con experiencia real construyendo productos digitales para clientes reales.",
    accent: "text-[#7c3aed]",
    border: "border-[#7c3aed]/20",
  },
  {
    icon: Users,
    title: "Fundadores en las trincheras",
    desc: "No somos te\u00f3ricos. Construimos, desplegamos y monetizamos productos todos los d\u00edas. Ense\u00f1amos lo que practicamos.",
    accent: "text-[#22c55e]",
    border: "border-[#22c55e]/20",
  },
  {
    icon: Gem,
    title: "Primera edici\u00f3n exclusiva",
    desc: "El Cohort #1 es una oportunidad \u00fanica: acceso directo a los fundadores, precio de founding member, y la oportunidad de dar forma al programa.",
    accent: "text-[#f97316]",
    border: "border-[#f97316]/20",
  },
]

export function SocialProofSection() {
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
            Credibilidad
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            Respaldado por experiencia
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {proofCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-[#111111]/80 backdrop-blur border ${card.border} rounded-xl p-6`}
            >
              <div className={`inline-flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-[#27272a] p-3 mb-4`}>
                <card.icon className={`size-6 ${card.accent}`} />
              </div>
              <h3 className="font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-[#7c3aed]/10 via-[#7c3aed]/5 to-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-xl p-6 md:p-8 text-center"
        >
          <p className="text-xl md:text-2xl font-bold text-white mb-3 text-balance">
            El código ya no es una barrera.
          </p>
          <p className="text-xl md:text-2xl font-bold text-[#7c3aed] mb-5 text-balance">
            Es tu material de construcción.
          </p>
          <p className="text-[#a1a1aa] leading-relaxed">
            Tienes el blueprint, las herramientas y la comunidad. En 8 semanas, pasarás de la idea
            a la ejecución arquitectónica. Tu portafolio te está esperando.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
