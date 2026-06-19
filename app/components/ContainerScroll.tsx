"use client"

import * as React from "react"
import { HTMLMotionProps, motion } from "motion/react"

import { cn } from "@/lib/utils"

interface CardStickyProps extends HTMLMotionProps<"div"> {
  index: number
  incrementY?: number
  offsetY?: number
  incrementZ?: number
}

const ContainerScroll = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      {...props}
    >
      {children}
    </div>
  )
})
ContainerScroll.displayName = "ContainerScroll"

const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
  (
    {
      index,
      incrementY = 10,
      offsetY = 100,
      incrementZ,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const y = offsetY + index * incrementY
    // Use scale instead of translateZ to avoid clickability issues in 3D space
    const scale = 1 - index * 0.04

    return (
      <motion.div
        ref={ref}
        style={{
          top: y,
          scale,
          transformOrigin: "top center",
          zIndex: index, // Ensure stacking order is clean
          ...style,
        }}
        className={cn("sticky", className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

CardSticky.displayName = "CardSticky"

export { ContainerScroll, CardSticky }
