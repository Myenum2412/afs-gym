import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Star, Clock, Users, Zap } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Membership Plans - Join FitZone Pro Today",
  description:
    "Choose from our flexible membership plans designed to fit your lifestyle and budget. Premium facilities, expert trainers, and unlimited access.",
}

export default function MembershipPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Membership Plans</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join the FitZone Pro Family</h1>
            <p className="text-xl leading-relaxed">
              Choose the membership plan that fits your lifestyle and start your transformation today. All plans include
              access to our premium facilities and expert support.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Flexible Plans for Every Goal</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're just starting out or you're a fitness enthusiast, we have the perfect plan for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Basic",
                price: "1000/",
                period: "/month",
                description: "Perfect for getting started",
                popular: false,
                color: "gray",
                features: [
                  "Access to gym facilities",
                  "Standard equipment usage",
                  "Locker room access",
                  "Free Wi-Fi",
                  "Monthly fitness assessment"
                ]
              },
              {
                name: "Premium",
                price: "15000",
                period: "/month",
                description: "Our most popular choice",
                popular: true,
                color: "orange",
                features: [
                  "All Basic features",
                  "Unlimited group classes",
                  "2 personal training sessions",
                  "Sauna and steam room access",
                  "Guest passes (2/month)"
                ]
              },
              {
                name: "Elite",
                price: "2500",
                period: "/month",
                description: "Complete fitness solution",
                popular: false,
                color: "purple",
                features: [
                  "All Premium features",
                  "Unlimited personal training",
                  "24/7 access",
                  "Nutrition planning",
                  "Massage therapy (1/month)",
                  "Priority booking"
                ]
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg relative ${plan.popular ? "ring-2 ring-orange-500 scale-105" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-orange-500">{plan.price}</span>
                    <span className="text-gray-600 text-lg">{plan.period}</span>
                  </div>
                  <div className="space-y-4 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                        : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.popular ? "Get Started Today" : "Choose Plan"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Plans */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-600">Save More</Badge>
            <h2 className="text-4xl font-bold mb-6">Annual Membership Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Save up to 20% with our annual membership plans and enjoy additional exclusive benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Save 20%</h3>
                <p className="text-gray-600">Pay annually and save up to $200 compared to monthly payments.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Family Discounts</h3>
                <p className="text-gray-600">Add family members at 50% off when you choose an annual plan.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Exclusive Perks</h3>
                <p className="text-gray-600">Access to members-only events, workshops, and special programs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Memberships */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-600">Corporate Wellness</Badge>
              <h2 className="text-4xl font-bold mb-6">Corporate Membership Programs</h2>
              <p className="text-lg text-gray-600 mb-6">
                Invest in your team's health and productivity with our corporate wellness programs. We offer flexible
                packages for businesses of all sizes.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Discounted group rates for employees",
                  "On-site fitness assessments",
                  "Corporate wellness challenges",
                  "Flexible billing and administration",
                  "Dedicated account management",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Request Corporate Quote</Button>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Get a Custom Quote</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Employees</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>Select range</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-100</option>
                    <option>100+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter email address"
                  />
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Quote</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Can I freeze my membership?",
                answer:
                  "Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel. A small administrative fee applies.",
              },
              {
                question: "Is there a contract commitment?",
                answer:
                  "Our monthly memberships are month-to-month with no long-term contract. Annual memberships require a 12-month commitment but offer significant savings.",
              },
              {
                question: "Can I bring guests?",
                answer:
                  "Premium and Elite members receive guest passes each month. Basic members can purchase day passes for guests at a discounted rate.",
              },
              {
                question: "What if I want to cancel?",
                answer:
                  "Monthly memberships can be cancelled with 30 days notice. Annual memberships can be cancelled with a cancellation fee after the first 3 months.",
              },
              {
                question: "Do you offer student discounts?",
                answer:
                  "Yes! We offer a 25% discount for full-time students with valid student ID. Student memberships include all Basic plan features.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of members who have transformed their lives at FitZone Pro. Start with a free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 text-lg bg-transparent"
            >
              Schedule Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}