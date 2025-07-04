import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Clock } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Expert Trainers",
    description:
      "Certified professionals with years of experience to guide your fitness journey and ensure proper form.",
    gradient: "from-blue-500 to-purple-600",
    bgGradient: "from-blue-50 to-purple-50",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Join a supportive community of fitness enthusiasts who motivate and inspire each other.",
    gradient: "from-green-500 to-teal-600",
    bgGradient: "from-green-50 to-teal-50",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "24/7 access for premium members, with extended hours to fit your busy lifestyle.",
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 border-0 px-6 py-2 text-lg">
            ✨ Why Choose FitZone Pro
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Premium Fitness Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide everything you need to achieve your fitness goals in a supportive, motivating environment with
            cutting-edge technology and expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <CardContent className="p-10 text-center relative z-10">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-gray-800 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
