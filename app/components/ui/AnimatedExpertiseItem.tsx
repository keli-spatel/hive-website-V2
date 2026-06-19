"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedExpertiseItemProps {
  icon: React.ReactNode
  text: React.ReactNode
  className?: string
}

export function AnimatedExpertiseItem({ icon, text, className }: AnimatedExpertiseItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={cn("expertise-item group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="expertise-icon relative overflow-hidden flex items-center justify-center">
        <motion.span
          initial={false}
          animate={isHovered ? { y: -30, opacity: 0, scale: 0.8 } : { y: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          style={{ position: "absolute", inset: 5 }}
          className="flex items-center justify-center icon-wrapper"
        >
          {icon}
        </motion.span>
        <motion.span
          initial={false}
          animate={isHovered ? { y: 0, opacity: 1, scale: 1 } : { y: 30, opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          style={{ position: "absolute", inset: 5 }}
          className="flex items-center justify-center icon-wrapper-hover"
        >
          {icon}
        </motion.span>
      </div>
      <span className="expertise-text">
        {text}
      </span>
    </div>
  )
}
