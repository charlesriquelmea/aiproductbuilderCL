"use client"

import { motion } from "framer-motion"
import { Palette, Bot, Zap, Database, Globe, Lock, CreditCard, Github } from "lucide-react"

const mainTools = [
  {
    icon: Palette,
    name: "v0.app",
    label: "Interfaces (Frontend)",
    desc: "Generación de UI responsiva mediante prompts directos.",
    color: "from-[#7c3aed]/20 to-[#7c3aed]/5",
    borderColor: "border-[#7c3aed]/30",
    iconColor: "text-[#7c3aed]",
  },
  {
    icon: Bot,
    name: "Claude Code / KiloCode",
    label: "Lógica (El Cerebro)",
    desc: "Manipulación de datos, reglas de negocio y Vibe Coding real.",
    color: "from-[#f97316]/20 to-[#f97316]/5",
    borderColor: "border-[#f97316]/30",
    iconColor: "text-[#f97316]",
  },
  {
    icon: Zap,
    name: "n8n",
    label: "Orquestación",
    desc: "Workflows visuales y conexión de APIs.",
    color: "from-[#22c55e]/20 to-[#22c55e]/5",
    borderColor: "border-[#22c55e]/30",
    iconColor: "text-[#22c55e]",
  },
]

const supportTools = [
  { icon: Database, name: "Supabase", label: "Datos (Backend)" },
  { icon: Globe, name: "Vercel / Netlify", label: "Despliegue (Cloud)" },
  { icon: Lock, name: "Supabase Auth (RLS)", label: "Seguridad" },
  { icon: CreditCard, name: "Stripe / MercadoPago", label: "Pagos" },
  { icon: Github, name: "GitHub", label: "Control de versiones" },
]

export function ToolsSection() {
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
            Stack Tecnológico
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            El stack tecnológico del Product Builder.
          </h2>
        </motion.div>

        {/* Main tools */}
        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-10">
          {mainTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative bg-gradient-to-br ${tool.color} border ${tool.borderColor} rounded-xl p-6 hover:shadow-lg hover:shadow-[#7c3aed]/5 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="rounded-xl bg-[#111111] border border-[#27272a] p-3">
                  <tool.icon className={`size-8 ${tool.iconColor}`} />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#71717a] uppercase tracking-wider mb-1">{tool.label}</p>
                  <h3 className="text-lg font-bold text-white font-mono">{tool.name}</h3>
                </div>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">{tool.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
        >
          {supportTools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2 bg-[#111111] border border-[#27272a] rounded-lg px-4 py-2.5 text-sm text-[#a1a1aa]"
            >
              <tool.icon className="size-4 text-[#71717a]" />
              <span>
                <span className="text-[#52525b] text-xs mr-1">{tool.label}:</span>
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
