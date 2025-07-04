"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCurrentDate } from "@/hooks/use-current-date"
import { FormRedirectHandler, FormRedirectInfo } from "@/components/form-redirect-handler"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Users,
  Award,
  Star,
  Heart,
  Shield,
  Target,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Navigation,
  Car,
  Bus,
  CalendarDays,
  Timer,
} from "lucide-react"

const quickActions = [
  {
    title: "Book Free Trial",
    description: "Experience our facilities with a complimentary session",
    icon: Calendar,
    href: "/trial",
    color: "bg-green-500",
  },
  {
    title: "Schedule Tour",
    description: "Get a guided tour of our state-of-the-art facility",
    icon: Users,
    href: "/tour",
    color: "bg-blue-500",
  },
  {
    title: "Join Membership",
    description: "Become part of the Aura Fitness family today",
    icon: Heart,
    href: "/membership",
    color: "bg-purple-500",
  },
  {
    title: "Personal Training",
    description: "One-on-one sessions with certified trainers",
    icon: Target,
    href: "/services/personal-training",
    color: "bg-orange-500",
  },
]

const contactStats = [
  { label: "Response Time", value: "< 2 Hours", icon: Clock },
  { label: "Member Satisfaction", value: "98%", icon: Star },
  { label: "Years of Service", value: "8+", icon: Award },
  { label: "Happy Members", value: "2,500+", icon: Users },
]

const departments = [
  {
    name: "Membership & Sales",
    phone: "+91 99437 99969",
    email: "membership@aurafitnessstudio.com",
    description: "New memberships, pricing, and general inquiries",
    hours: "Mon-Sun: 6:00 AM - 10:00 PM",
    icon: Users,
  },
  {
    name: "Personal Training",
    phone: "+91 99437 99969",
    email: "training@aurafitnessstudio.com",
    description: "Personal training sessions and fitness consultations",
    hours: "Mon-Sun: 6:00 AM - 9:00 PM",
    icon: Target,
  },
  {
    name: "Group Classes",
    phone: "+91 99437 99969",
    email: "classes@aurafitnessstudio.com",
    description: "Group fitness classes and schedules",
    hours: "Mon-Sun: 6:00 AM - 8:00 PM",
    icon: Heart,
  },
  {
    name: "Customer Support",
    phone: "+91 99437 99969",
    email: "support@aurafitnessstudio.com",
    description: "Technical support and general assistance",
    hours: "Mon-Sun: 8:00 AM - 8:00 PM",
    icon: Shield,
  },
]

const operatingHours = [
  { day: "Monday - Friday", hours: "5:00 AM - 11:00 PM", isToday: false },
  { day: "Saturday", hours: "6:00 AM - 10:00 PM", isToday: false },
  { day: "Sunday", hours: "7:00 AM - 9:00 PM", isToday: true },
  { day: "Public Holidays", hours: "8:00 AM - 6:00 PM", isToday: false },
]

const directions = [
  {
    mode: "By Car",
    icon: Car,
    instructions: [
      "From Salem Junction: Take NH44 towards Bangalore",
      "Turn right at Ponnammapet signal",
      "Continue on Vasagasalai Street for 500m",
      "Look for Arthanari Bakkiam Complex on your left",
      "Free parking available",
    ],
    duration: "15 minutes from city center",
  },
  {
    mode: "By Bus",
    icon: Bus,
    instructions: [
      "Take Salem City Bus Route 12 or 15",
      "Get down at Ponnammapet Bus Stop",
      "Walk 200m towards Ponganapathi Temple",
      "Arthanari Bakkiam Complex is next to the temple",
    ],
    duration: "25-30 minutes from Salem Junction",
  },
  {
    mode: "By Auto/Taxi",
    icon: Navigation,
    instructions: [
      "Show this address to driver:",
      "Arthanari Bakkiam Complex, Vasagasalai St",
      "Near Ponganapathi Temple, Ponnammapet",
      "Most drivers know the temple location",
    ],
    duration: "20 minutes from Salem Railway Station",
  },
]

export default function ContactPageClient() {
  const [activeTab, setActiveTab] = useState("contact")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  const currentDate = useCurrentDate()
  const googleMapsUrl =
    "https://www.google.com/maps/place/Aura+Fitness+Studio/@11.6668826,78.0969286,15908m/data=!3m1!1e3!4m10!1m2!2m1!1sArthanari+Bakkiam+Complex,+39%2F7,+Vasagasalai+St,+near+ponganapathi+temple,+Ponnammapet,+Salem,+Tamil+Nadu+636001!3m6!1s0x3babf15db672f29d:0xcd6aef5dc0538236!8m2!3d11.6668826!4d78.1731463!15sCnBBcnRoYW5hcmkgQmFra2lhbSBDb21wbGV4LCAzOS83LCBWYXNhZ2FzYWxhaSBTdCwgbmVhciBwb25nYW5hcGF0aGkgdGVtcGxlLCBQb25uYW1tYXBldCwgU2FsZW0sIFRhbWlsIE5hZHUgNjM2MDAxWmwiamFydGhhbmFyaSBiYWtraWFtIGNvbXBsZXggMzkgNyB2YXNhZ2FzYWxhaSBzdCBuZWFyIHBvbmdhbmFwYXRoaSB0ZW1wbGUgcG9ubmFtbWFwZXQgc2FsZW0gdGFtaWwgbmFkdSA2MzYwMDGSAQNneW2aASNDaFpEU1VoTk1HOW5TMFZKUTBGblRVUkJOWE0zUVV4bkVBReABAPoBBAgvEEc!16s%2Fg%2F11y98tmsrb?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen pt-20">
      <FormRedirectHandler
        config={{
          customMessage:
            "Thank you for contacting Aura Fitness Studio! We're redirecting you to complete your inquiry...",
          redirectDelay: 1500,
          showCountdown: true,
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-500/20 border-orange-500 text-orange-300 px-6 py-2 text-lg backdrop-blur-sm">
              📞 Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black mb-8">
              Contact
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Aura Fitness Studio
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Ready to start your fitness journey? We're here to help you every step of the way. Get in touch with our
              friendly team in Salem, Tamil Nadu.
            </p>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a
                href="tel:+919943799969"
                className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 hover:bg-white/20 transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">+91 99437 99969</span>
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 hover:bg-white/20 transition-all duration-300 group"
              >
                <MapPin className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Visit Us in Salem</span>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {contactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Actions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get started immediately with these popular options</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {quickActions.map((action, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${action.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-orange-600 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{action.description}</p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    <Link href={action.href}>
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="contact">Contact Info</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
              <TabsTrigger value="hours">Hours</TabsTrigger>
              <TabsTrigger value="form">Message Us</TabsTrigger>
            </TabsList>

            <TabsContent value="contact" className="space-y-8">
              {/* Studio Information */}
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <CardTitle className="text-2xl flex items-center">
                    <MapPin className="w-6 h-6 mr-3" />
                    Aura Fitness Studio - Salem
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-white">Visit Our Studio</h3>
                      <address className="not-italic text-white leading-relaxed mb-6">
                        <strong>Arthanari Bakkiam Complex</strong>
                        <br />
                        39/7, Vasagasalai Street
                        <br />
                        Near Ponganapathi Temple
                        <br />
                        Ponnammapet, Salem
                        <br />
                        Tamil Nadu 636001
                        <br />
                        India
                      </address>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-orange-500" />
                          <div>
                            <p className="font-semibold text-white">Call Us</p>
                            <a href="tel:+919943799969" className="text-orange-600 hover:text-orange-700 font-medium">
                              +91 99437 99969
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-orange-500" />
                          <div>
                            <p className="font-semibold text-white">Email Us</p>
                            <a
                              href="mailto:info@aurafitnessstudio.com"
                              className="text-orange-600 hover:text-orange-700"
                            >
                              info@aurafitnessstudio.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
                      <div className="space-y-3">
                        <a
                          href={googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg hover:bg-orange-100 transition-colors group"
                        >
                          <Navigation className="w-5 h-5 text-orange-500" />
                          <span className="font-medium group-hover:text-orange-600">Get Directions</span>
                          <ExternalLink className="w-4 h-4 text-white" />
                        </a>

                        <a
                          href="tel:+919943799969"
                          className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg hover:bg-green-100 transition-colors group"
                        >
                          <Phone className="w-5 h-5 text-green-500" />
                          <span className="font-medium group-hover:text-green-600">Call Now</span>
                        </a>

                        <Link
                          href="/membership"
                          className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg hover:bg-purple-100 transition-colors group"
                        >
                          <Heart className="w-5 h-5 text-purple-500" />
                          <span className="font-medium group-hover:text-purple-600">Join Today</span>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Department Contacts */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Department Contacts</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {departments.map((dept, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                            <dept.icon className="w-6 h-6 text-orange-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{dept.name}</h3>
                            <p className="text-sm text-gray-600">{dept.hours}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{dept.description}</p>
                        <div className="space-y-2">
                          <a
                            href={`tel:${dept.phone}`}
                            className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium"
                          >
                            <Phone className="w-4 h-4" />
                            <span>{dept.phone}</span>
                          </a>
                          <a
                            href={`mailto:${dept.email}`}
                            className="flex items-center space-x-2 text-gray-600 hover:text-orange-600"
                          >
                            <Mail className="w-4 h-4" />
                            <span className="text-sm">{dept.email}</span>
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="location" className="space-y-8">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Location & Directions</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">How to Reach Us</h3>
                      <div className="space-y-6">
                        {directions.map((direction, index) => (
                          <div key={index} className="border-l-4 border-orange-500 pl-6">
                            <div className="flex items-center space-x-3 mb-3">
                              <direction.icon className="w-6 h-6 text-orange-600" />
                              <h4 className="font-bold text-gray-900">{direction.mode}</h4>
                              <Badge variant="secondary" className="text-xs">
                                {direction.duration}
                              </Badge>
                            </div>
                            <ul className="space-y-1 text-gray-600">
                              {direction.instructions.map((instruction, idx) => (
                                <li key={idx} className="text-sm flex items-start">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  {instruction}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Interactive Map</h3>
                      <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4">
                        <div className="text-center text-gray-600">
                          <MapPin className="w-12 h-12 mx-auto mb-2 text-orange-500" />
                          <p className="font-medium">Interactive Map</p>
                          <p className="text-sm">Click below to open in Google Maps</p>
                        </div>
                      </div>
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                      >
                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                          <Navigation className="w-4 h-4 mr-2" />
                          Open in Google Maps
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hours" className="space-y-8">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Clock className="w-6 h-6 mr-3" />
                    Operating Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {operatingHours.map((schedule, index) => (
                      <div
                        key={index}
                        className={`flex justify-between items-center p-4 rounded-lg ${
                          schedule.isToday ? "bg-orange-100 border-2 border-orange-500" : "bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Clock className={`w-5 h-5 ${schedule.isToday ? "text-orange-600" : "text-gray-500"}`} />
                          <span className={`font-medium ${schedule.isToday ? "text-orange-900" : "text-gray-900"}`}>
                            {schedule.day}
                          </span>
                          {schedule.isToday && <Badge className="bg-orange-500 text-white">Today</Badge>}
                        </div>
                        <span className={`font-bold ${schedule.isToday ? "text-orange-600" : "text-gray-600"}`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-2">Special Notes</h4>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li>• Last entry 30 minutes before closing time</li>
                      <li>• Extended hours during festival seasons</li>
                      <li>• 24/7 access available for premium members</li>
                      <li>• Holiday hours may vary - call to confirm</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="form" className="space-y-8">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Mail className="w-6 h-6 mr-3" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Current Date Display */}
                  <div className="mb-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                          <CalendarDays className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Today's Date</h3>
                          <p className="text-2xl font-bold text-orange-600">{currentDate.formattedDate}</p>
                          <p className="text-sm text-gray-600 flex items-center mt-1">
                            <Timer className="w-4 h-4 mr-1" />
                            Form submitted on {currentDate.dayName}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-700 mb-2">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Live Date
                        </Badge>
                        <p className="text-xs text-gray-500">Auto-updated</p>
                      </div>
                    </div>
                  </div>

                  <form id="contact-form" data-redirect-to-google-forms className="space-y-6">
                    {/* Hidden field for date */}
                    <input type="hidden" name="submission_date" value={currentDate.formattedDate} />
                    <input type="hidden" name="submission_day" value={currentDate.dayName} />
                    <input type="hidden" name="submission_timestamp" value={currentDate.timestamp.toISOString()} />

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          required
                          className="w-full"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          className="w-full"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        className="w-full"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>

                    <FormRedirectInfo className="mb-4" />

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 text-lg font-semibold"
                    >
                      Send Message
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    {/* Form Summary */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
                      <h4 className="font-semibold text-gray-900 mb-2">Form Summary</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Submission Date:</span>
                          <br />
                          {currentDate.shortDate}
                        </div>
                        <div>
                          <span className="font-medium">Day:</span>
                          <br />
                          {currentDate.dayName}
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
