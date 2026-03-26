"use client"

import { motion } from "framer-motion"
import { Globe, Zap, Cpu } from "lucide-react"

const deliverables = [
  {
    icon: Globe,
    title: "Landing Page Funcional",
    desc: "Un sitio web profesional optimizado para la captura de leads, con arquitectura de información efectiva e interfaces creadas rápidamente mediante constructores visuales.",
    badge: "Semana 2",
    color: "from-[#7c3aed]/20 to-[#7c3aed]/5",
    border: "border-[#7c3aed]/30",
    iconColor: "text-[#7c3aed]",
    badgeColor: "bg-[#7c3aed]/10 text-[#c4b5fd] border-[#7c3aed]/20",
  },
  {
    icon: Zap,
    title: "Sistema de Automatización",
    desc: "Un motor impulsado por IA, construido en n8n, capaz de extraer, transformar y enviar datos entre plataformas usando Webhooks y APIs sin intervención manual.",
    badge: "Sprint 2",
    color: "from-[#22c55e]/20 to-[#22c55e]/5",
    border: "border-[#22c55e]/30",
    iconColor: "text-[#22c55e]",
    badgeColor: "bg-[#22c55e]/10 text-[#86efac] border-[#22c55e]/20",
  },
  {
    icon: Cpu,
    title: "Single-Function App",
    desc: "Tu propio Producto Mínimo Viable (MVP) resolviendo un problema real, conectado a bases de datos, lógica de negocio y completamente desplegado en la nube.",
    badge: "Sprint 3",
    color: "from-[#f97316]/20 to-[#f97316]/5",
    border: "border-[#f97316]/30",
    iconColor: "text-[#f97316]",
    badgeColor: "bg-[#f97316]/10 text-[#fdba74] border-[#f97316]/20",
  },
]

export function PortfolioSection() {
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
            Portafolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            Tu portafolio en producción al finalizar la cohorte.
          </h2>
          <p className="text-[#71717a] mt-4 max-w-xl mx-auto">
            3 entregables reales, desplegados y funcionando. No proyectos académicos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {deliverables.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative bg-gradient-to-br ${item.color} border ${item.border} rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-[#111111] border border-[#27272a] p-3">
                    <item.icon className={`size-6 ${item.iconColor}`} />
                  </div>
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
