import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Clock, Users, Target, Heart, Zap } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services - Personal Training, Classes & Wellness Programs",
  description:
    "Explore our comprehensive fitness services including personal training, group classes, nutrition coaching, and wellness programs. Find the perfect fit for your goals.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Our Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Comprehensive Fitness Solutions</h1>
            <p className="text-xl leading-relaxed">
              From personal training to group classes, we offer everything you need to achieve your fitness goals in a
              supportive, professional environment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-orange-100 text-orange-600">Personal Training</Badge>
                <h2 className="text-4xl font-bold mb-6">One-on-One Expert Guidance</h2>
                <p className="text-lg text-white mb-6">
                  Work directly with our certified trainers to create a personalized fitness plan tailored to your
                  specific goals, fitness level, and lifestyle.
                </p>
                <div className="space-y-3">
                  {[
                    "Customized workout plans",
                    "Proper form and technique coaching",
                    "Nutrition guidance and meal planning",
                    "Progress tracking and adjustments",
                    "Flexible scheduling options",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-orange-500" />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">Book Consultation</Button>
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-full">
              <Image
                src="/OneonOneExpertGuidance.jpeg?height=500&width=600"
                alt="Personal training session"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Service Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Group Fitness Classes",
                description: "High-energy classes for all fitness levels",
                features: ["HIIT", "Zumba", "Spin", "Boot Camp"],
              },
              {
                icon: Heart,
                title: "Yoga & Pilates",
                description: "Mind-body wellness in dedicated studios",
                features: ["Hatha Yoga", "Vinyasa Flow", "Pilates", "Meditation"],
              },
              {
                icon: Zap,
                title: "Strength Training",
                description: "Build muscle with expert guidance",
                features: ["Free Weights", "Machines", "Functional Training", "Powerlifting"],
              },
              {
                icon: Target,
                title: "Cardio Programs",
                description: "Improve cardiovascular health and endurance",
                features: ["Treadmills", "Ellipticals", "Rowing", "Cycling"],
              },
              {
                icon: Clock,
                title: "Nutrition Coaching",
                description: "Personalized meal plans and guidance",
                features: ["Meal Planning", "Macro Tracking", "Supplements", "Consultations"],
              },
              {
                icon: Heart,
                title: "Wellness Programs",
                description: "Holistic approach to health and wellness",
                features: ["Massage Therapy", "Recovery", "Stress Management", "Sleep Optimization"],
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gray-900 text-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white mb-4">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-orange-500" />
                        <span className="text-sm text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" passHref>
                    <Button
                      variant="outline"
                      className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Fitness Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free consultation with one of our expert trainers and discover the perfect service package for your
            goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 font-semibold">
              Book Free Consultation
            </Button>
            <Link href="/contact" passHref>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 bg-transparent"
              >
                View Membership Options
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
