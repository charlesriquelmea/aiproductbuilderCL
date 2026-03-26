"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "\u00bfNecesito saber programar?",
    a: "No. Aprendes arquitectura y vibe coding con IA. El programa est\u00e1 dise\u00f1ado para personas sin experiencia t\u00e9cnica previa.",
  },
  {
    q: "\u00bfCu\u00e1nto tiempo debo dedicar?",
    a: "8-10 horas semanales recomendadas. Incluye sesiones en vivo (3 horas) y trabajo en proyectos (5-7 horas).",
  },
  {
    q: "\u00bfEl precio sube despu\u00e9s?",
    a: "S\u00ed. $1.149.990 CLP despu\u00e9s del Cohort #1. El precio de founding member es exclusivo para los primeros 20.",
  },
  {
    q: "\u00bfQu\u00e9 pasa si no puedo en alguna sesi\u00f3n en vivo?",
    a: "Quedan grabadas y disponibles en la plataforma. Adem\u00e1s tienes acceso al AI Teaching Assistant 24/7 para resolver dudas.",
  },
  {
    q: "\u00bfLa garant\u00eda tiene letra peque\u00f1a?",
    a: "Solo completar los proyectos semanales. Si haces el trabajo y no obtienes resultados, entras gratis al siguiente cohort.",
  },
  {
    q: "\u00bfEn qu\u00e9 idioma es el bootcamp?",
    a: "Espa\u00f1ol, dise\u00f1ado para Latinos. Las herramientas son en ingl\u00e9s pero el soporte, sesiones y comunidad son 100% en espa\u00f1ol.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#7c3aed] font-mono text-sm mb-3 uppercase tracking-wider">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-[#111111] border border-[#27272a] rounded-xl px-6 data-[state=open]:border-[#7c3aed]/30"
              >
                <AccordionTrigger className="text-white hover:no-underline text-left py-5 text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#a1a1aa] leading-relaxed text-sm pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
