"use client"

import { LucideIcon, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { useState } from "react"
import Link from "next/link"

interface AnimatedButtonProps {
  className?: string
  onClick?: () => void
  href?: string
  children: React.ReactNode
  icon?: React.ReactNode
  type?: "button" | "submit" | "reset"
  target?: string
  rel?: string
  variant?: "primary" | "secondary" | "dark"
}

export function AnimatedButton({ 
  className, 
  onClick, 
  href, 
  children, 
  icon = <ArrowRight />,
  type = "button",
  target,
  rel,
  variant = "primary"
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  let variantClasses = ""
  let textColor = "#ffffff"
  
  if (variant === "primary") {
    variantClasses = "bg-gradient-to-r from-[#ff3434] to-[#df2424] hover:from-[#df2424] hover:to-[#c21f1f] shadow-lg hover:shadow-xl border border-[#ff3434]/20 focus:ring-[#ff3434]/30"
    textColor = "#ffffff"
  } else if (variant === "secondary") {
    variantClasses = "bg-white hover:bg-gray-50 shadow-sm hover:shadow-md border border-gray-200 focus:ring-gray-200"
    textColor = "#111214"
  } else if (variant === "dark") {
    variantClasses = "bg-black hover:bg-gray-900 shadow-lg hover:shadow-xl border border-black/20 focus:ring-black/30"
    textColor = "#ffffff"
  }

  const innerContent = (
    <>
      <div className="relative flex items-center justify-center gap-3">
        <span className="relative flex items-center justify-center" style={{ width: 20, height: 20 }}>
          <motion.span
            initial={false}
            animate={isHovered ? { y: -18, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            style={{ position: "absolute", left: 0, right: 0 }}
            className="flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5"
          >
            {icon}
          </motion.span>
          <motion.span
            initial={false}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 18, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            style={{ position: "absolute", left: 0, right: 0 }}
            className="flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5"
          >
            {icon}
          </motion.span>
        </span>

        {/* Text with subtle shift */}
        <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 whitespace-nowrap">
          {children}
        </span>
      </div>

      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                        transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                        transition-transform duration-1000 ease-out"
        />
      </div>
    </>
  )

  const commonClasses = cn(
    "group relative overflow-hidden inline-flex items-center justify-center",
    "px-6 py-3 rounded-xl",
    "font-semibold text-[15px]",
    "transition-all duration-300 ease-out",
    "transform active:scale-95",
    "focus:outline-none focus:ring-4",
    "cursor-pointer no-underline",
    variantClasses,
    className
  )

  if (href) {
    return (
      <Link 
        href={href}
        className={commonClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target={target}
        rel={rel}
        style={{ color: textColor }}
      >
        {innerContent}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={commonClasses}
      style={{ color: textColor }}
    >
      {innerContent}
    </button>
  )
}
