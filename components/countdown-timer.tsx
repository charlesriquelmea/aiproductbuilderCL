"use client"

import { useState, useEffect } from "react"

const TARGET_DATE = new Date("2026-04-06T23:59:59").getTime()

export function CountdownTimer({ compact = false }: { compact?: boolean }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTime = () => {
      const now = Date.now()
      const diff = Math.max(0, TARGET_DATE - now)

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  if (compact) {
    return (
      <div className="flex items-center gap-1.5 font-mono text-sm" suppressHydrationWarning>
        <TimeUnit value={timeLeft.days} label="D" compact />
        <span className="text-[#71717a]">:</span>
        <TimeUnit value={timeLeft.hours} label="H" compact />
        <span className="text-[#71717a]">:</span>
        <TimeUnit value={timeLeft.minutes} label="M" compact />
        <span className="text-[#71717a]">:</span>
        <TimeUnit value={timeLeft.seconds} label="S" compact />
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3 md:gap-4" suppressHydrationWarning>
      <TimeUnit value={timeLeft.days} label="Dias" />
      <span className="text-2xl text-[#71717a] font-light">:</span>
      <TimeUnit value={timeLeft.hours} label="Hrs" />
      <span className="text-2xl text-[#71717a] font-light">:</span>
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <span className="text-2xl text-[#71717a] font-light">:</span>
      <TimeUnit value={timeLeft.seconds} label="Seg" />
    </div>
  )
}

function TimeUnit({
  value,
  label,
  compact = false,
}: {
  value: number
  label: string
  compact?: boolean
}) {
  if (compact) {
    return (
      <span className="tabular-nums text-white">
        {String(value).padStart(2, "0")}
        <span className="text-xs text-white ml-0.5">{label}</span>
      </span>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#111111] border border-[#27272a] rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[52px] md:min-w-[64px]">
        <span className="text-2xl md:text-3xl font-mono font-bold tabular-nums text-white">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs mt-1.5 text-white font-medium uppercase tracking-wider">
        {label}
      </span>
    </div>
  )
}
