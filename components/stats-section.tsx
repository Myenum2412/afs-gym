"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, Heart, Target } from "lucide-react"

const stats = [
  { number: "5000+", label: "Happy Members", icon: Users, color: "from-blue-500 to-purple-600" },
  { number: "50+", label: "Expert Trainers", icon: Target, color: "from-green-500 to-teal-600" },
  { number: "100+", label: "Group Classes", icon: Heart, color: "from-yellow-500 to-orange-600" },
  { number: "24/7", label: "Access Available", icon: Clock, color: "from-pink-500 to-red-600" },
]

function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [value, duration])

  return <span>{count}</span>
}

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1920')] opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 border border-orange-500/30 px-6 py-2 text-lg">
            📊 Our Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Numbers That Speak
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="relative">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl font-black text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
