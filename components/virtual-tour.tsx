"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, X, ChevronLeft, ChevronRight, Maximize2, Volume2, VolumeX } from "lucide-react"

const tourStops = [
  {
    id: 1,
    title: "Main Entrance & Reception",
    description: "Welcome to FitZone Pro! Our friendly staff is here to help you get started.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "0:30",
    highlights: ["24/7 keycard access", "Member check-in", "Guest registration", "Information desk"],
  },
  {
    id: 2,
    title: "Cardio Zone",
    description: "State-of-the-art cardio equipment with entertainment systems and city views.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "1:15",
    highlights: ["50+ cardio machines", "Individual TV screens", "Heart rate monitoring", "Towel service"],
  },
  {
    id: 3,
    title: "Strength Training Area",
    description: "Professional-grade free weights and strength training equipment.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "1:45",
    highlights: ["Olympic lifting platform", "Cable machines", "Free weights up to 150lbs", "Functional training"],
  },
  {
    id: 4,
    title: "Group Fitness Studios",
    description: "Spacious studios for yoga, pilates, HIIT, and dance classes.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "1:20",
    highlights: ["3 dedicated studios", "Sound systems", "Mirrored walls", "Props storage"],
  },
  {
    id: 5,
    title: "Locker Rooms & Amenities",
    description: "Clean, spacious locker rooms with premium amenities.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "1:00",
    highlights: ["Day lockers", "Showers", "Sauna", "Grooming stations"],
  },
  {
    id: 6,
    title: "Recovery & Wellness Area",
    description: "Dedicated space for stretching, recovery, and relaxation.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "0:45",
    highlights: ["Massage chairs", "Stretching area", "Foam rollers", "Recovery tools"],
  },
]

export default function VirtualTour() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStop, setCurrentStop] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const nextStop = () => {
    setCurrentStop((prev) => (prev + 1) % tourStops.length)
  }

  const prevStop = () => {
    setCurrentStop((prev) => (prev - 1 + tourStops.length) % tourStops.length)
  }

  const startTour = () => {
    setIsPlaying(true)
    setCurrentStop(0)
  }

  const stopTour = () => {
    setIsPlaying(false)
    setCurrentStop(0)
  }

  const currentTourStop = tourStops[currentStop]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-600 border-0 px-6 py-2 text-lg">
            🏃‍♂️ Virtual Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Take a Virtual Tour
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our world-class facilities from the comfort of your home. Get a realistic preview of our equipment,
            studios, and amenities.
          </p>
        </div>

        {!isPlaying ? (
          /* Tour Preview */
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="relative h-96 bg-gradient-to-br from-purple-600 to-blue-600">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="FitZone Pro Virtual Tour Preview"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-white/30 transition-colors cursor-pointer">
                      <Play className="w-12 h-12 ml-2" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Interactive Virtual Tour</h3>
                    <p className="text-xl mb-6 opacity-90">Explore 6 key areas of our facility</p>
                    <Button
                      size="lg"
                      className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
                      onClick={startTour}
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Start Virtual Tour
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-bold mb-2">Interactive Experience</h4>
                    <p className="text-gray-600 text-sm">Navigate through our facilities at your own pace</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Maximize2 className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold mb-2">High-Quality Views</h4>
                    <p className="text-gray-600 text-sm">Crystal clear 360° views of every area</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Volume2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-bold mb-2">Audio Guide</h4>
                    <p className="text-gray-600 text-sm">Professional narration with detailed information</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tour Stops Preview */}
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tourStops.map((stop, index) => (
                <Card
                  key={stop.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                  onClick={() => {
                    setCurrentStop(index)
                    startTour()
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={stop.image || "/placeholder.svg"}
                      alt={stop.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-purple-500 text-white">{stop.duration}</Badge>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-gray-800 ml-1" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors">
                      {stop.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{stop.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          /* Active Tour Player */
          <div className={`${isFullscreen ? "fixed inset-0 z-50 bg-black" : "max-w-6xl mx-auto"}`}>
            <Card className={`border-0 ${isFullscreen ? "h-full" : "shadow-2xl"} overflow-hidden`}>
              {/* Tour Header */}
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium">LIVE TOUR</span>
                    </div>
                    <div className="text-sm opacity-75">
                      Stop {currentStop + 1} of {tourStops.length}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20 h-8 w-8"
                      onClick={() => setIsMuted(!isMuted)}
                      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20 h-8 w-8"
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                    >
                      <Maximize2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20 h-8 w-8"
                      onClick={stopTour}
                      aria-label="Close tour"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <div className="relative">
                {/* Main Tour View */}
                <div className={`relative ${isFullscreen ? "h-[calc(100vh-200px)]" : "h-96"} bg-gray-900`}>
                  <Image
                    src={currentTourStop.image || "/placeholder.svg"}
                    alt={currentTourStop.title}
                    fill
                    className="object-cover"
                  />

                  {/* Navigation Controls */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 h-12 w-12"
                    onClick={prevStop}
                    aria-label="Previous stop"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 h-12 w-12"
                    onClick={nextStop}
                    aria-label="Next stop"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>

                  {/* Tour Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-4 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{currentTourStop.title}</h3>
                    <p className="text-gray-300 mb-3">{currentTourStop.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {currentTourStop.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-white/20 text-white">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tour Progress Bar */}
                <div className="bg-gray-100 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Tour Progress</span>
                    <span className="text-sm text-gray-500">
                      {currentStop + 1} / {tourStops.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentStop + 1) / tourStops.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Tour Navigation Thumbnails */}
                <div className="bg-white p-4 border-t">
                  <div className="flex space-x-3 overflow-x-auto">
                    {tourStops.map((stop, index) => (
                      <button
                        key={stop.id}
                        className={`flex-shrink-0 relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          index === currentStop
                            ? "border-purple-500 ring-2 ring-purple-200"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                        onClick={() => setCurrentStop(index)}
                        aria-label={`Go to ${stop.title}`}
                      >
                        <Image src={stop.image || "/placeholder.svg"} alt={stop.title} fill className="object-cover" />
                        {index === currentStop && (
                          <div className="absolute inset-0 bg-purple-500/20 flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
