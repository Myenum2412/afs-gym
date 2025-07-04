import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Award,
  Users,
  Heart,
  Target,
  Star,
  Calendar,
  MapPin,
  Phone,
  Quote,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Eye,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Aura Fitness Studio - Our Story, Mission & Expert Team | Salem",
  description:
    "Discover Aura Fitness Studio's inspiring journey in Salem, Tamil Nadu. Learn about our mission to transform lives through fitness and meet our world-class trainers. Join our community of 2,500+ members achieving their fitness goals.",
  keywords:
    "gym story Salem, fitness mission Tamil Nadu, personal trainers Salem, gym community, fitness transformation, health and wellness Salem",
  openGraph: {
    title: "About Aura Fitness Studio - Our Story & Mission",
    description:
      "Learn about our inspiring journey in Salem and meet the expert team dedicated to your fitness success.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

const stats = [
  { label: "Happy Members", value: "2,500+", icon: Users, color: "text-blue-600" },
  { label: "Years in Salem", value: "8+", icon: Award, color: "text-orange-600" },
  { label: "Expert Trainers", value: "15+", icon: Target, color: "text-green-600" },
  { label: "Success Stories", value: "800+", icon: TrendingUp, color: "text-purple-600" },
]

const values = [
  {
    icon: Heart,
    title: "Community First",
    description: "Building a supportive family in Salem where everyone feels welcome, motivated, and celebrated.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Maintaining the highest standards in equipment, facilities, and personalized service in Tamil Nadu.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Creating an environment where people of all backgrounds and fitness levels thrive together.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focusing on measurable outcomes and helping every member achieve their personal goals.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Prioritizing member safety with proper equipment maintenance and expert guidance.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Continuously evolving with the latest fitness technology and training methodologies.",
    color: "bg-yellow-100 text-yellow-600",
  },
]

const team = [
  {
    name: "S. Ajith",
    role: "Fitness & Boxing Coach",
    specialties: ["Boxing", "Weight Loss", "Weight Gain", "CrossFit Training"],
    experience: "8+ years",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Ajith is a dedicated coach specializing in boxing and advanced fitness transformation. His training methods help clients reach their body goals through disciplined and effective routines.",
    certifications: ["Diploma in IT"],
    achievements: ["Expert in CrossFit & Boxing"],
    social: {
      instagram: "#",
      facebook: "#",
    },
  },
  {
    name: "Arun Kumar R",
    role: "Fitness Trainer",
    specialties: ["General Training", "Bodybuilding", "Client Transformation"],
    experience: "2+ years",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Arun is a passionate trainer with a strong drive to help beginners and intermediate clients achieve visible results. Recognized for excellence in fitness competitions in Salem.",
    certifications: [],
    achievements: ["Senior Mr. Salem Gold 🥇", "Email: arunr2599@gmail.com"],
    social: {
      instagram: "#",
    },
  },
  {
    name: "Unnamed Trainer",
    role: "Strength & Powerlifting Coach",
    specialties: ["Arm Wrestling", "Powerlifting", "Weightlifting"],
    experience: "5+ years Gym / 2+ years Trainer",
    image: "/placeholder.svg?height=400&width=300",
    bio: "A competitive strength athlete and expert trainer with national and state-level achievements in arm wrestling, bench press, and powerlifting. Focused on building raw strength and proper technique.",
    certifications: [],
    achievements: [
      "National Arm Wrestling 🥉",
      "Anna University Powerlifting 🥉",
      "District Bench Press 🥇",
      "State Bench Press 🥇",
      "State Weightlifting 🥉"
    ],
    social: {
      instagram: "#",
    },
  }
];


const testimonials = [
  {
    name: "Kavitha Raman",
    role: "Software Engineer",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Aura Fitness Studio transformed not just my body, but my entire mindset. The trainers here don't just teach exercises—they inspire you to become the best version of yourself. Best gym in Salem!",
    rating: 5,
    achievement: "Lost 28 lbs in 5 months",
  },
  {
    name: "Suresh Babu",
    role: "Business Owner",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "As someone who spent years avoiding gyms, Aura Fitness Studio made me feel welcome from day one. The community here is incredible, and the results speak for themselves.",
    rating: 5,
    achievement: "Gained 15 lbs muscle",
  },
  {
    name: "Lakshmi Devi",
    role: "Teacher",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The yoga and wellness programs here have been life-changing. Priya's classes helped me find balance in both my body and mind during a stressful period in my life.",
    rating: 5,
    achievement: "Improved flexibility 180%",
  },
]

const timeline = [
  {
    year: "2016",
    title: "The Dream Begins",
    description:
      "Rajesh Kumar opens Aura Fitness Studio in Salem with a vision to create a community-focused fitness experience.",
    image: "/placeholder.svg?height=200&width=300",
    milestone: "First 30 members",
  },
  {
    year: "2018",
    title: "Expanding Horizons",
    description:
      "Added group fitness studios and launche our signature wellness programs, attracting members from across Tamil Nadu.",
    image: "/placeholder.svg?height=200&width=300",
    milestone: "500+ members",
  },
  {
    year: "2020",
    title: "Adapting & Growing",
    description:
      "Successfully navigated challenges by introducing virtual training and enhanced safety protocols, keeping our community connected.",
    image: "/placeholder.svg?height=200&width=300",
    milestone: "Online programs launched",
  },
  {
    year: "2022",
    title: "Recognition & Awards",
    description:
      "Received 'Best Gym in Salem' award and expanded our team with specialized trainers and nutritionists.",
    image: "/placeholder.svg?height=200&width=300",
    milestone: "1,500+ members",
  },
  {
    year: "2024",
    title: "Leading the Future",
    description:
      "Today, we're Salem's premier fitness destination with 2,500+ members and continue to set new standards in health and wellness.",
    image: "/placeholder.svg?height=200&width=300",
    milestone: "2,500+ members",
  },
]

const facilities = [
  {
    name: "State-of-the-Art Equipment",
    description: "Latest cardio machines, strength training equipment, and functional fitness tools",
    icon: Zap,
  },
  {
    name: "Group Fitness Studios",
    description: "Dedicated spaces for yoga, HIIT, dance, and specialized group classes",
    icon: Users,
  },
  {
    name: "Personal Training Areas",
    description: "Private spaces for one-on-one training sessions and assessments",
    icon: Target,
  },
  {
    name: "Wellness Center",
    description: "Recovery area with massage therapy, stretching zones, and relaxation space",
    icon: Heart,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-500/20 border-orange-500 text-orange-300 px-6 py-2 text-lg backdrop-blur-sm">
              🏋️ Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black mb-8">
              About
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Aura Fitness Studio
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              For over 8 years, we've been Salem's premier fitness destination, transforming lives and building a
              community where everyone can achieve their health and wellness goals.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="font-medium">Salem, Tamil Nadu</span>
              </div>
              <a
                href="tel:+919943799969"
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="font-medium">+91 99437 99969</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl text-black md:text-4xl font-bold mb-6">Our Mission & Vision</h2>
              <p className="text-xl text-black max-w-3xl mx-auto">
                Empowering the Salem community to live healthier, stronger, and more fulfilling lives through
                exceptional fitness experiences and unwavering support.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To provide Salem with a world-class fitness facility where every individual—regardless of age,
                    fitness level, or background—can discover their strength, build confidence, and achieve their
                    personal health goals in a supportive, inclusive environment.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">Our Vision</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To be Tamil Nadu's most trusted fitness community, known for transforming lives, fostering lasting
                    relationships, and setting the gold standard for health and wellness services that inspire people to
                    live their best lives.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Aura Fitness Studio mission and vision"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl">
                  <Heart className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do at Aura Fitness Studio and shape the experience we create for
                our Salem community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                    >
                      <value.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* Team Section */}
<section className="py-20 bg-white" id="team">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-orange-500/20 border-orange-500 text-orange-600 px-6 py-1.5 text-sm">
          WORLD-CLASS TRAINERS
        </Badge>
        <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">Meet Our Expert Team</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our certified trainers bring diverse expertise and proven results to help you achieve your fitness goals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <Card 
            key={index} 
            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={400}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="text-orange-300 font-medium">{member.role}</p>
              </div>
              <Badge className="absolute top-4 right-4 bg-white text-orange-600 border-orange-200">
                {member.experience}
              </Badge>
            </div>
            
            <CardContent className="p-6">
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-gray-900">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="text-xs bg-orange-50 text-orange-700 border-orange-200"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{member.bio}</p>

              {member.achievements.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-900">Achievements</h4>
                  <ul className="space-y-2">
                    {member.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                <div className="flex space-x-2">
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors"
                      aria-label={`${member.name} Instagram`}
                    >
                      <Instagram className="w-4 h-4 text-gray-600 hover:text-orange-600" />
                    </a>
                  )}
                  {member.social.facebook && (
                    <a
                      href={member.social.facebook}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors"
                      aria-label={`${member.name} Facebook`}
                    >
                      <Facebook className="w-4 h-4 text-gray-600 hover:text-orange-600" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 text-gray-600 hover:text-orange-600" />
                    </a>
                  )}
                </div>
                
                <Button variant="outline" size="sm" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16">
        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 px-8 py-6 text-lg font-semibold">
          Meet All Our Trainers
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  </div>
</section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From a small dream to Salem's premier fitness destination—here's how we've grown together with our
                amazing community.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-red-500 rounded-full" />

              <div className="space-y-16">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-8">
                          <Badge className="mb-4 bg-orange-500 text-white">{item.year}</Badge>
                          <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                          <div className="flex items-center space-x-2 text-orange-600 font-semibold">
                            <Star className="w-4 h-4" />
                            <span>{item.milestone}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}>
                      <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={300}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Members Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real stories from real people who've transformed their lives at Aura Fitness Studio.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        <div className="flex space-x-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <Quote className="w-8 h-8 text-orange-400 mb-4" />
                    <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                    <Badge className="bg-green-100 text-green-800 border-green-200">{testimonial.achievement}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">World-Class Facilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience Salem's most advanced fitness facility, designed with your success and comfort in mind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 flex items-start space-x-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <facility.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{facility.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Aura Fitness Family?</h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Take the first step towards your fitness transformation. Our Salem community is waiting to welcome you
              with open arms and help you achieve your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link href="/membership">
                  Join Our Community
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold bg-transparent"
                asChild
              >
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91 99437 99969
                </Link>
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-lg opacity-90">
                <MapPin className="w-5 h-5 inline mr-2" />
                Arthanari Bakkiam Complex, Vasagasalai Street, Near Ponganapathi Temple, Ponnammapet, Salem, Tamil Nadu
                636001
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
