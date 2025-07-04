"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Users, Heart, Building, Zap, Shield } from "lucide-react"

const partnerships = [
  {
    id: 1,
    name: "HealthTech Solutions",
    type: "Technology Partner",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Providing cutting-edge fitness tracking and health monitoring technology",
    benefits: ["Advanced heart rate monitoring", "Personalized workout analytics", "Health data integration"],
    website: "https://healthtech.com",
    icon: Zap,
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "NutriWell Supplements",
    type: "Nutrition Partner",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Premium supplements and nutrition products for optimal performance",
    benefits: ["20% member discount", "Expert nutrition consultations", "Custom supplement plans"],
    website: "https://nutriwell.com",
    icon: Heart,
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "City Medical Center",
    type: "Healthcare Partner",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Comprehensive healthcare services and sports medicine support",
    benefits: ["Sports injury treatment", "Physical therapy", "Health screenings"],
    website: "https://citymedical.com",
    icon: Shield,
    color: "bg-red-500",
  },
  {
    id: 4,
    name: "Corporate Wellness Alliance",
    type: "Business Network",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Connecting businesses with comprehensive employee wellness programs",
    benefits: ["Corporate membership rates", "Employee wellness seminars", "Workplace fitness programs"],
    website: "https://corpwellness.com",
    icon: Building,
    color: "bg-purple-500",
  },
  {
    id: 5,
    name: "Local Sports Teams",
    type: "Community Partner",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Supporting local athletes and sports teams with training facilities",
    benefits: ["Team training discounts", "Athletic performance programs", "Community events"],
    website: "https://localsports.com",
    icon: Users,
    color: "bg-orange-500",
  },
  {
    id: 6,
    name: "Fitness Industry Association",
    type: "Professional Organization",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Member of the leading fitness industry professional organization",
    benefits: ["Industry best practices", "Continuing education", "Quality standards"],
    website: "https://fitnessassoc.com",
    icon: Award,
    color: "bg-yellow-500",
  },
]

const certifications = [
  {
    name: "Better Business Bureau",
    rating: "A+",
    description: "Accredited business with highest rating",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "IHRSA Member",
    rating: "Certified",
    description: "International Health, Racquet & Sportsclub Association",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "Green Business Certified",
    rating: "Gold",
    description: "Environmentally responsible business practices",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "Safety First Certified",
    rating: "Platinum",
    description: "Highest safety and cleanliness standards",
    logo: "/placeholder.svg?height=60&width=120",
  },
]

export default function PartnershipsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-100 text-indigo-600 border-0 px-6 py-2 text-lg">
            🤝 Partnerships & Affiliations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Trusted Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry leaders and local organizations to provide you with the best possible fitness
            experience and comprehensive wellness support.
          </p>
        </div>

        {/* Main Partnerships */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partnerships.map((partner) => (
            <Card
              key={partner.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 ${partner.color} rounded-lg flex items-center justify-center`}>
                    <partner.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold group-hover:text-indigo-600 transition-colors">
                        {partner.name}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {partner.type}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{partner.description}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="relative h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={40}
                      className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm text-gray-700">Member Benefits:</h4>
                  {partner.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white bg-transparent"
                  onClick={() => window.open(partner.website, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Accreditations */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Certifications & Accreditations</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is recognized by leading industry organizations and certification bodies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="relative h-20 mb-4 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <Image
                    src={cert.logo || "/placeholder.svg"}
                    alt={`${cert.name} certification`}
                    width={100}
                    height={50}
                    className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h4 className="font-bold mb-1">{cert.name}</h4>
                <Badge className="mb-2 bg-green-100 text-green-600">{cert.rating}</Badge>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Impact */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-indigo-50 to-purple-50">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6 text-indigo-800">Community Impact</h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-black text-indigo-600 mb-2">$50K+</div>
                  <div className="text-gray-600">Donated to Local Charities</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-indigo-600 mb-2">25+</div>
                  <div className="text-gray-600">Community Events Hosted</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-indigo-600 mb-2">500+</div>
                  <div className="text-gray-600">Free Fitness Classes Provided</div>
                </div>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We believe in giving back to our community. Through partnerships with local organizations, charity
                events, and free fitness programs, we're committed to making our community healthier and stronger.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
