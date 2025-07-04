"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    // Performance monitoring logic
    if (typeof window !== "undefined" && "performance" in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log performance metrics
          console.log(`${entry.name}: ${entry.duration}ms`)
        }
      })

      observer.observe({ entryTypes: ["measure", "navigation"] })

      return () => observer.disconnect()
    }
  }, [])

  return null
}
