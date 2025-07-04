"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, X, ChevronLeft, ChevronRight, Camera, Video } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    title: "State-of-the-Art Cardio Zone",
    category: "Equipment",
    description: "Modern treadmills, ellipticals, and bikes with entertainment systems",
  },
  {
    id: 2,
    type: "video",
    src: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    title: "HIIT Class in Action",
    category: "Classes",
    description: "High-intensity interval training with our expert instructors",
  },
  {
    id: 3,
    type: "image",
    src: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    title: "Premium Weight Training Area",
    category: "Equipment",
    description: "Professional-grade free weights and strength training equipment",
  },
  {
    id: 4,
    type: "image",
    src: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    title: "Serene Yoga Studio",
    category: "Studios",
    description: "Peaceful environment for yoga, pilates, and meditation classes",
  },
  {
    id: 5,
    type: "video",
    src: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    title: "Personal Training Session",
    category: "Training",
    description: "One-on-one coaching with certified personal trainers",
  },
  {
    id: 6,
    type: "image",
    src: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    title: "Luxurious Locker Rooms",
    category: "Facilities",
    description: "Clean, spacious locker rooms with premium amenities",
  },
  {
    id: 7,
    type: "image",
    src: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    title: "Group Fitness Studio",
    category: "Studios",
    description: "Spacious studio for group classes and team workouts",
  },
  {
    id: 8,
    type: "video",
    src: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    title: "Spin Class Energy",
    category: "Classes",
    description: "High-energy cycling classes with motivating music",
  },
  {
    id: 9,
    type: "image",
    src: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    title: "Functional Training Zone",
    category: "Equipment",
    description: "Versatile space for functional and athletic training",
  },
  {
    id: 10,
    type: "image",
    src: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    title: "Recovery & Wellness Area",
    category: "Facilities",
    description: "Dedicated space for stretching, recovery, and wellness",
  },
  {
    id: 11,
    type: "video",
    src: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    title: "Boxing Training",
    category: "Training",
    description: "Professional boxing training with heavy bags and speed bags",
  },
  {
    id: 12,
    type: "image",
    src: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    title: "Nutrition Bar & Café",
    category: "Facilities",
    description: "Healthy smoothies, protein shakes, and nutritious snacks",
  },
]

const categories = ["All", "Equipment", "Classes", "Studios", "Training", "Facilities"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredItems.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-0 px-6 py-2 text-lg">📸 Visual Tour</Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Gallery &</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Virtual Tour
              </span>
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Explore our world-class facilities, state-of-the-art equipment, and vibrant community. See why FitZone Pro
              is the premier fitness destination.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-purple-600 mb-2">15,000</div>
              <div className="text-gray-600">Sq Ft Facility</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-600 mb-2">200+</div>
              <div className="text-gray-600">Equipment Pieces</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-600 mb-2">8</div>
              <div className="text-gray-600">Specialized Studios</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Access Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Media Type Indicator */}
                  <div className="absolute top-4 right-4">
                    <Badge className={`${item.type === "video" ? "bg-red-500" : "bg-blue-500"} text-white`}>
                      {item.type === "video" ? <Video className="w-3 h-3 mr-1" /> : <Camera className="w-3 h-3 mr-1" />}
                      {item.type === "video" ? "Video" : "Photo"}
                    </Badge>
                  </div>

                  {/* Play Button for Videos */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-gray-800 ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {item.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Want to See More?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a personal tour with one of our team members and experience our facilities firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              Schedule Tour
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Image/Video */}
            <div className="relative">
              <Image
                src={filteredItems[currentImage]?.src || "/placeholder.svg"}
                alt={filteredItems[currentImage]?.title || "Gallery image"}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{filteredItems[currentImage]?.title}</h3>
                <p className="text-gray-300">{filteredItems[currentImage]?.description}</p>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImage + 1} / {filteredItems.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
