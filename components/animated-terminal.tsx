"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Palette, Bot, Zap } from "lucide-react"

const lines = [
  { text: "$ init --stack vibe-coding", delay: 0, color: "text-[#22c55e]" },
  { text: "  Connecting to v0.app...", delay: 800, color: "text-[#71717a]" },
  { text: "  UI generated in 4.2s", delay: 1600, color: "text-white" },
  { text: "  Sending to Claude Code...", delay: 2400, color: "text-[#71717a]" },
  { text: "  Business logic deployed", delay: 3200, color: "text-white" },
  { text: "  n8n workflow activated", delay: 4000, color: "text-[#71717a]" },
  { text: "  App live at app", delay: 4800, color: "text-[#22c55e]" },
  { text: "", delay: 5600, color: "text-white" },
  { text: "  Ready to ship.", delay: 5800, color: "text-[#7c3aed]" },
]

export function AnimatedTerminal() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const timers = lines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="relative">
      {/* Glow effect behind terminal */}
      <div className="absolute -inset-4 bg-[#7c3aed]/5 rounded-2xl blur-2xl" />

      <div className="relative bg-[#0f0f0f] border border-[#27272a] rounded-xl overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#27272a] bg-[#111111]">
          <div className="flex gap-1.5">
            <div className="size-3 rounded-full bg-[#ef4444]/70" />
            <div className="size-3 rounded-full bg-[#eab308]/70" />
            <div className="size-3 rounded-full bg-[#22c55e]/70" />
          </div>
          <span className="text-xs text-[#71717a] font-mono ml-2">vibe-coder-terminal</span>
        </div>

        {/* Terminal content */}
        <div className="p-5 font-mono text-sm leading-relaxed min-h-[280px]">
          {lines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`${line.color}`}
            >
              {line.text || "\u00A0"}
            </motion.div>
          ))}
          {visibleLines < lines.length && (
            <span className="inline-block w-2 h-4 bg-[#22c55e] animate-pulse" />
          )}
        </div>

        {/* Tool icons at bottom */}
        <div className="flex items-center justify-center gap-8 px-5 py-4 border-t border-[#27272a] bg-[#0c0c0c]">
          <div className="flex items-center gap-2 text-xs text-[#71717a]">
            <Palette className="size-4 text-[#7c3aed]" />
            <span>v0.app</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#71717a]">
            <Bot className="size-4 text-[#f97316]" />
            <span>Claude Code</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#71717a]">
            <Zap className="size-4 text-[#22c55e]" />
            <span>n8n</span>
          </div>
        </div>
      </div>
    </div>
  )
}
