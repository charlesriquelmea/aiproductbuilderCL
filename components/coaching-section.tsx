"use client"

import { motion } from "framer-motion"
import { MonitorPlay, Bot, Users, Clock, Presentation, MessageSquare } from "lucide-react"

const mainFeatures = [
  {
    icon: MonitorPlay,
    level: "Nivel 3",
    title: "Instructores Expertos",
    desc: "Office Hours diarias de 1h para debugging en vivo y mentoría estratégica durante las sesiones sincrónicas.",
    accent: "text-[#7c3aed]",
  },
  {
    icon: Users,
    level: "Nivel 2",
    title: "Peers (Comunidad)",
    desc: "Buddy Coding (parejas semanales) para pair programming virtual y resolución colaborativa en canales activos.",
    accent: "text-[#f97316]",
  },
  {
    icon: Bot,
    level: "Nivel 1",
    title: "Agente IA (24/7)",
    desc: "Un \"colega\" entrenado específicamente con nuestro currículum. Resuelve dudas técnicas inmediatas a cualquier hora.",
    accent: "text-[#22c55e]",
  },
]

const secondaryFeatures = [
  { icon: MonitorPlay, text: "Build Together (instructor codea en vivo)" },
  { icon: MessageSquare, text: "Q&A Estructurado por votación" },
  { icon: Presentation, text: "Show & Tell semanal" },
  { icon: Clock, text: "Daily Wins antes de las 10 PM" },
  { icon: Users, text: "Peer Code Review cruzado" },
  { icon: Clock, text: "Friday Ship Party" },
]

export function CoachingSection() {
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
            Soporte
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            Un ecosistema de soporte infalible: Nunca te quedas atascado.
          </h2>
          <p className="text-[#71717a] mt-4 max-w-xl mx-auto text-sm">
            Metodología 'Build Together': El ritmo que asegura la finalización.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-10">
          {mainFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#111111] border border-[#27272a] rounded-xl p-6 text-center"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="inline-flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-[#27272a] p-3">
                  <feature.icon className={`size-6 ${feature.accent}`} />
                </div>
                <span className="text-xs font-mono text-[#52525b] uppercase tracking-wider">{feature.level}</span>
              </div>
              <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-[#71717a] leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {secondaryFeatures.map((sf) => (
            <div
              key={sf.text}
              className="flex items-center gap-2 bg-[#111111] border border-[#27272a] rounded-lg px-4 py-2.5 text-sm text-[#a1a1aa]"
            >
              <sf.icon className="size-4 text-[#71717a]" />
              {sf.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
