"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Mail, 
  Table2, 
  Database, 
  Lock, 
  CreditCard, 
  Check, 
  Rocket,
  Circle,
  User,
  KeyRound
} from "lucide-react"

// Sprint 1 Mockup: Lead Capture Flow
function LeadCaptureMockup() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-6 p-4 rounded-xl bg-[#0a0a0a]/50 border border-[#27272a]"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
        {/* Form Card */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="w-full md:w-48 p-4 rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#27272a] shadow-xl"
        >
          <div className="space-y-2">
            <div className="h-2 w-16 bg-[#71717a]/30 rounded" />
            <div className="h-8 w-full bg-[#27272a] rounded border border-[#3f3f46]" />
            <div className="h-2 w-12 bg-[#71717a]/30 rounded" />
            <div className="h-8 w-full bg-[#27272a] rounded border border-[#3f3f46]" />
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="h-8 w-full bg-gradient-to-r from-[#7c3aed] to-[#9333ea] rounded flex items-center justify-center"
            >
              <span className="text-xs text-white font-medium">Enviar</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Arrows and Flow */}
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <ArrowRight className="size-5 text-[#7c3aed]" />
          </motion.div>
        </div>

        {/* Google Sheets Icon */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="size-14 rounded-xl bg-gradient-to-br from-[#22c55e]/20 to-[#16a34a]/10 border border-[#22c55e]/30 flex items-center justify-center">
            <Table2 className="size-7 text-[#22c55e]" />
          </div>
          <span className="text-xs text-[#71717a] font-mono">Sheets</span>
        </motion.div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <ArrowRight className="size-5 text-[#22c55e]" />
          </motion.div>
        </div>

        {/* Email Icon */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="size-14 rounded-xl bg-gradient-to-br from-[#f97316]/20 to-[#ea580c]/10 border border-[#f97316]/30 flex items-center justify-center">
            <Mail className="size-7 text-[#f97316]" />
          </div>
          <span className="text-xs text-[#71717a] font-mono">Email</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Sprint 2 Mockup: Database + JSON + Flow Nodes
function DatabaseFlowMockup() {
  const jsonCode = `{
  "user_id": "usr_7x2k",
  "action": "create",
  "data": {
    "name": "Lead #142",
    "status": "active"
  }
}`

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-6 p-4 rounded-xl bg-[#0a0a0a]/50 border border-[#27272a]"
    >
      <div className="flex flex-col lg:flex-row items-stretch gap-4">
        {/* Database Interface */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex-1 rounded-lg bg-[#111111] border border-[#27272a] overflow-hidden"
        >
          <div className="px-3 py-2 bg-[#1a1a1a] border-b border-[#27272a] flex items-center gap-2">
            <Database className="size-4 text-[#22c55e]" />
            <span className="text-xs font-mono text-[#a1a1aa]">supabase/leads</span>
          </div>
          <div className="p-3">
            <div className="grid grid-cols-3 gap-2 text-xs font-mono mb-2 pb-2 border-b border-[#27272a]">
              <span className="text-[#7c3aed]">id</span>
              <span className="text-[#7c3aed]">name</span>
              <span className="text-[#7c3aed]">status</span>
            </div>
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                className="grid grid-cols-3 gap-2 text-xs font-mono py-1.5 border-b border-[#27272a]/50 last:border-0"
              >
                <span className="text-[#71717a]">{i}</span>
                <span className="text-[#e4e4e7]">Lead #{140 + i}</span>
                <span className="text-[#22c55e]">active</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* JSON Code Block */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex-1 rounded-lg bg-[#0d0d0d] border border-[#27272a] overflow-hidden"
        >
          <div className="px-3 py-2 bg-[#1a1a1a] border-b border-[#27272a] flex items-center gap-2">
            <span className="text-xs font-mono text-[#71717a]">response.json</span>
          </div>
          <pre className="p-3 text-xs font-mono overflow-x-auto">
            <code>
              <span className="text-[#71717a]">{'{'}</span>{'\n'}
              <span className="text-[#c4b5fd]">  "user_id"</span><span className="text-[#71717a]">:</span> <span className="text-[#22c55e]">"usr_7x2k"</span><span className="text-[#71717a]">,</span>{'\n'}
              <span className="text-[#c4b5fd]">  "action"</span><span className="text-[#71717a]">:</span> <span className="text-[#22c55e]">"create"</span><span className="text-[#71717a]">,</span>{'\n'}
              <span className="text-[#c4b5fd]">  "data"</span><span className="text-[#71717a]">:</span> <span className="text-[#71717a]">{'{'}</span>{'\n'}
              <span className="text-[#c4b5fd]">    "name"</span><span className="text-[#71717a]">:</span> <span className="text-[#22c55e]">"Lead #142"</span>{'\n'}
              <span className="text-[#71717a]">  {'}'}</span>{'\n'}
              <span className="text-[#71717a]">{'}'}</span>
            </code>
          </pre>
        </motion.div>

        {/* Flow Nodes */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="flex flex-row lg:flex-col items-center justify-center gap-3 py-4 lg:py-0"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="size-10 rounded-full bg-[#7c3aed]/20 border-2 border-[#7c3aed] flex items-center justify-center"
          >
            <Circle className="size-3 fill-[#7c3aed] text-[#7c3aed]" />
          </motion.div>
          <div className="w-8 h-0.5 lg:w-0.5 lg:h-8 bg-gradient-to-r lg:bg-gradient-to-b from-[#7c3aed] to-[#22c55e]" />
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="size-10 rounded-full bg-[#22c55e]/20 border-2 border-[#22c55e] flex items-center justify-center"
          >
            <Circle className="size-3 fill-[#22c55e] text-[#22c55e]" />
          </motion.div>
          <div className="w-8 h-0.5 lg:w-0.5 lg:h-8 bg-gradient-to-r lg:bg-gradient-to-b from-[#22c55e] to-[#f97316]" />
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="size-10 rounded-full bg-[#f97316]/20 border-2 border-[#f97316] flex items-center justify-center"
          >
            <Circle className="size-3 fill-[#f97316] text-[#f97316]" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Sprint 3 Mockup: Login + Stripe Success Toast
function AuthPaymentMockup() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-6 p-4 rounded-xl bg-[#0a0a0a]/50 border border-[#27272a]"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Login Form */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="w-full md:w-56 p-5 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#27272a] shadow-2xl relative"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="size-10 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#9333ea] flex items-center justify-center">
              <Lock className="size-5 text-white" />
            </div>
          </div>
          <h4 className="text-sm font-semibold text-white text-center mb-4">Iniciar Sesion</h4>
          <div className="space-y-3">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-[#71717a]" />
              <div className="h-9 w-full bg-[#27272a] rounded-lg border border-[#3f3f46] pl-9 flex items-center">
                <span className="text-xs text-[#71717a]">email@ejemplo.com</span>
              </div>
            </div>
            <div className="relative">
              <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-[#71717a]" />
              <div className="h-9 w-full bg-[#27272a] rounded-lg border border-[#3f3f46] pl-9 flex items-center">
                <span className="text-xs text-[#71717a]">************</span>
              </div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="h-9 w-full bg-gradient-to-r from-[#7c3aed] to-[#9333ea] rounded-lg flex items-center justify-center cursor-pointer"
            >
              <span className="text-xs text-white font-medium">Acceder</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Stripe Success Toast */}
        <motion.div 
          initial={{ y: -20, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
          className="relative"
        >
          <div className="px-5 py-4 rounded-xl bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-[#22c55e]/40 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
            <div className="flex items-center gap-3">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.8, type: "spring", stiffness: 300 }}
                className="size-10 rounded-full bg-[#22c55e] flex items-center justify-center"
              >
                <Check className="size-5 text-black" strokeWidth={3} />
              </motion.div>
              <div>
                <p className="text-sm font-semibold text-white">Payment Successful</p>
                <p className="text-xs text-[#71717a]">Transaction completed</p>
              </div>
              <div className="ml-4 pl-4 border-l border-[#27272a]">
                <div className="flex items-center gap-1.5">
                  <CreditCard className="size-4 text-[#7c3aed]" />
                  <span className="text-lg font-bold text-[#22c55e]">$47.00</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Sprint 4 Mockup: Terminal + Vercel Rocket with Glow
function DeploymentMockup() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-6 p-4 rounded-xl bg-[#0a0a0a]/50 border border-[#27272a]"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* macOS Terminal */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="w-full md:w-80 rounded-xl bg-[#1a1a1a] border border-[#27272a] shadow-2xl overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="px-4 py-3 bg-[#27272a] flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="size-3 rounded-full bg-[#ef4444]" />
              <div className="size-3 rounded-full bg-[#f59e0b]" />
              <div className="size-3 rounded-full bg-[#22c55e]" />
            </div>
            <span className="ml-4 text-xs font-mono text-[#71717a]">terminal -- vercel deploy</span>
          </div>
          {/* Terminal Content */}
          <div className="p-4 font-mono text-sm space-y-1.5">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="text-[#71717a]">$</span>
              <span className="text-[#e4e4e7]">vercel deploy --prod</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="text-[#71717a]"
            >
              Vercel CLI 36.2.0
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="text-[#22c55e]"
            >
              Building...
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1.1 }}
              className="text-[#22c55e] font-semibold"
            >
              Done in 1.2s
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1.3 }}
              className="text-[#22c55e] font-semibold"
            >
              Deployed to Production
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1.5 }}
              className="flex items-center gap-2 pt-1"
            >
              <span className="text-[#71717a]">URL:</span>
              <span className="text-[#7c3aed] underline">tu-app.vercel.app</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Vercel Rocket with Glow */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
          className="relative"
        >
          <motion.div 
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(124, 58, 237, 0.3), 0 0 40px rgba(124, 58, 237, 0.1)",
                "0 0 40px rgba(124, 58, 237, 0.5), 0 0 80px rgba(124, 58, 237, 0.2)",
                "0 0 20px rgba(124, 58, 237, 0.3), 0 0 40px rgba(124, 58, 237, 0.1)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="size-24 rounded-full bg-gradient-to-br from-[#7c3aed]/20 to-[#9333ea]/10 border border-[#7c3aed]/40 flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Rocket className="size-12 text-[#c4b5fd]" />
            </motion.div>
          </motion.div>
          {/* Glow particles */}
          <motion.div 
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-8 bg-gradient-to-t from-[#f97316]/30 to-transparent blur-xl"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

const sprints = [
  {
    num: 1,
    title: "Fundamentos y Captura",
    weeks: "Semanas 1-2",
    description: "Pensamiento en sistemas, lógica computacional, diseño de interfaces y el ecosistema Low-Code.",
    topics: ["Interacción Cliente/Servidor", "Inputs/Outputs", "Diseño Responsivo", "HTML/CSS básico"],
    tools: ["n8n", "v0.app"],
    outcome: "Landing Page profesional conectada a automatización de leads.",
    MockupComponent: LeadCaptureMockup,
    accentColor: "#7c3aed",
  },
  {
    num: 2,
    title: "Backend & Data Logic",
    weeks: "Semanas 3-4",
    description: "APIs, webhooks, JSON, operaciones CRUD y arquitectura de agentes con datos persistentes.",
    topics: ["Webhooks & JSON", "Métodos HTTP", "Operaciones CRUD", "Integración de LLMs"],
    tools: ["Claude Code", "Supabase"],
    outcome: "Sistema de notificaciones y apps con datos dinámicos.",
    MockupComponent: DatabaseFlowMockup,
    accentColor: "#22c55e",
  },
  {
    num: 3,
    title: "Auth & Monetizacion",
    weeks: "Semanas 5-6",
    description: "Autenticación, gestión de sesiones, seguridad RLS e integraciones de pago.",
    topics: ["Login/Registro", "Row Level Security", "APIs REST", "Flujos de pago"],
    tools: ["Supabase Auth", "Stripe", "n8n"],
    outcome: "MVP con usuarios autenticados y monetización real.",
    MockupComponent: AuthPaymentMockup,
    accentColor: "#f97316",
  },
  {
    num: 4,
    title: "Deployment & Scale",
    weeks: "Semanas 7-8",
    description: "Ambientes Dev/Prod, Cloud/Hosting, logs, testing y documentación técnica.",
    topics: ["Dev vs Production", "Lectura de logs", "Testing básico", "Documentación"],
    tools: ["Vercel", "Stack completo"],
    outcome: "Portfolio Final en producción con dominio propio.",
    MockupComponent: DeploymentMockup,
    accentColor: "#c4b5fd",
  },
]

export function CurriculumSection() {
  return (
    <section id="curriculum" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7c3aed]/5 to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7c3aed] font-mono text-sm mb-3 uppercase tracking-wider">
            Curriculo de Sprints
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
            8 semanas para dominar el stack completo
          </h2>
          <p className="text-[#71717a] mt-4 max-w-2xl mx-auto text-lg">
            4 sprints intensivos con entregables reales en cada fase
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#7c3aed] via-[#22c55e] to-[#c4b5fd]" />

          <div className="space-y-12 lg:space-y-24">
            {sprints.map((sprint, index) => (
              <motion.div
                key={sprint.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                {/* Timeline dot for desktop */}
                <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="size-12 rounded-full border-4 flex items-center justify-center font-mono font-bold text-lg"
                    style={{ 
                      backgroundColor: `${sprint.accentColor}20`,
                      borderColor: sprint.accentColor,
                      color: sprint.accentColor
                    }}
                  >
                    {sprint.num}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16 lg:col-start-2"}`}>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#111111] border border-[#27272a] rounded-2xl overflow-hidden hover:border-[#3f3f46] transition-colors"
                  >
                    {/* Header */}
                    <div className="p-6 border-b border-[#27272a]">
                      <div className="flex items-center gap-3 mb-3">
                        <span 
                          className="lg:hidden flex items-center justify-center size-10 rounded-xl font-mono font-bold"
                          style={{ 
                            backgroundColor: `${sprint.accentColor}20`,
                            border: `2px solid ${sprint.accentColor}40`,
                            color: sprint.accentColor
                          }}
                        >
                          S{sprint.num}
                        </span>
                        <div>
                          <span className="text-xs font-mono uppercase tracking-wider" style={{ color: sprint.accentColor }}>
                            Sprint {sprint.num} — {sprint.weeks}
                          </span>
                          <h3 className="text-xl font-bold text-white mt-1">
                            {sprint.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm text-[#a1a1aa] leading-relaxed">
                        {sprint.description}
                      </p>
                    </div>

                    {/* Topics */}
                    <div className="p-6 border-b border-[#27272a]">
                      <div className="flex flex-wrap gap-2">
                        {sprint.topics.map((topic) => (
                          <Badge 
                            key={topic}
                            variant="outline" 
                            className="border-[#27272a] bg-[#1a1a1a] text-[#e4e4e7] text-xs"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <span className="text-xs text-[#71717a]">Herramientas:</span>
                        {sprint.tools.map((tool) => (
                          <Badge 
                            key={tool}
                            className="text-xs"
                            style={{ 
                              backgroundColor: `${sprint.accentColor}20`,
                              color: sprint.accentColor,
                              border: `1px solid ${sprint.accentColor}40`
                            }}
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Mockup */}
                    <div className="px-6 pb-6">
                      <sprint.MockupComponent />
                    </div>

                    {/* Outcome */}
                    <div 
                      className="px-6 py-4 border-t"
                      style={{ 
                        borderColor: `${sprint.accentColor}30`,
                        backgroundColor: `${sprint.accentColor}08`
                      }}
                    >
                      <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: sprint.accentColor }}>
                        Outcome
                      </p>
                      <p className="text-sm text-[#e4e4e7] leading-relaxed">
                        {sprint.outcome}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
