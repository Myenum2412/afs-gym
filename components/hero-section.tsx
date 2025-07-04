import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />

      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Premium gym with modern equipment and energetic atmosphere"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse" />
      <div
        className="absolute bottom-32 right-16 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1000ms" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-lg animate-pulse"
        style={{ animationDelay: "500ms" }}
      />

      <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-4">
        <div>
          <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-6 py-2 text-lg font-medium">
            🏆 #1 Premium Fitness Experience
          </Badge>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Fitness Journey
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Experience the future of fitness with our state-of-the-art facilities, world-class trainers, and
            personalized programs designed to unlock your full potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/membership">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-black px-10 py-6 text-xl font-semibold rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/gallery">
                <Play className="mr-2 w-5 h-5" />
                Watch Tour
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
