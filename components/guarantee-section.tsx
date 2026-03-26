"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div
            className="inline-flex items-center justify-center rounded-full p-4 mb-6"
            style={{ boxShadow: "0 0 40px rgba(34,197,94,0.2)" }}
          >
            <ShieldCheck className="size-12 text-[#22c55e]" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
            {"Garant\u00eda de Inversi\u00f3n Segura"}
          </h2>

          <div className="bg-[#111111] border border-[#22c55e]/20 rounded-2xl p-8 md:p-10">
            <p className="text-lg text-[#e4e4e7] leading-relaxed mb-6">
              Si completas el 100% de los proyectos semanales y no construyes al menos
              3 portafolios funcionales al final del programa, te incluimos en el{" "}
              <span className="text-[#22c55e] font-semibold">
                {"pr\u00f3ximo cohort completamente gratis"}
              </span>.
            </p>
            <p className="text-[#7c3aed] font-semibold text-lg">
              Queremos que ganes. Punto.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
