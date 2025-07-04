import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Star, ArrowRight, Clock, Play, Heart, Target, TrendingUp, Shield, Sparkles, Eye } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Executive",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "FitZone Pro transformed my fitness journey. The trainers are exceptional and the facilities are world-class.",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Software Engineer",
    image: "/placeholder.svg?height=100&width=100",
    content: "Best gym I've ever joined. The community here is incredibly supportive and motivating.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher",
    image: "/placeholder.svg?height=100&width=100",
    content: "The variety of classes and equipment is amazing. I've achieved goals I never thought possible.",
    rating: 5,
  },
]

const classes = [
{
    name: "Functional Strength Circuit",
    instructor: "Ravi Kumar",
    time: "6:00 AM - 7:00 AM",
    difficulty: "High",
    spots: 10,
    image: "/HighFunctionalStrengthCircuit.jpeg",
  },
  {
    name: "Core & Conditioning",
    instructor: "Neha Singh",
    time: "8:00 AM - 9:00 AM",
    difficulty: "Medium",
    spots: 15,
    image: "/MediumCore&Conditioning.jpeg",
  },
  {
    name: "Bodybuilding Basics",
    instructor: "Arjun Mehta",
    time: "6:00 PM - 7:00 PM",
    difficulty: "High",
    spots: 8,
    image: "/BodybuildingBasics.jpeg",
  },
]

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Exercises for Building Core Strength",
    excerpt: "Discover the most effective core exercises that will help you build a strong foundation.",
    author: "Alex Rodriguez",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Fitness",
    image: "/10EssentialforBuilding.jpeg?height=300&width=400",
    slug: "10-essential-exercises-for-building-core-strength",
    views: 1250,
  },
  {
    id: 2,
    title: "The Ultimate Guide to Pre and Post Workout Nutrition",
    excerpt: "Learn what to eat before and after your workouts to maximize performance and recovery.",
    author: "Dr. Sarah Kim",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Nutrition",
    image: "/TheUltimateGuidetoPreandPostWorkoutNutrition.jpeg?height=300&width=400",
    slug: "ultimate-guide-pre-post-workout-nutrition",
    views: 980,
  },
  {
    id: 3,
    title: "Mental Health Benefits of Regular Exercise",
    excerpt: "Explore how consistent physical activity can improve your mental well-being and reduce stress.",
    author: "Dr. Lisa Chen",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Wellness",
    image: "/MentalHealthBenefitsofRegularExercise.jpeg?height=300&width=400",
    slug: "mental-health-benefits-regular-exercise",
    views: 1450,
  },
]

const stats = [
  { number: "5000+", label: "Happy Members", icon: Users, color: "from-blue-500 to-purple-600" },
  { number: "50+", label: "Expert Trainers", icon: Target, color: "from-green-500 to-teal-600" },
  { number: "100+", label: "Group Classes", icon: Heart, color: "from-yellow-500 to-orange-600" },
  { number: "24/7", label: "Access Available", icon: Clock, color: "from-pink-500 to-red-600" },
]

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

const trustIndicators = [
  {
    icon: Shield,
    title: "Certified Excellence",
    description: "IHRSA certified with highest safety standards",
    color: "bg-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "98% member satisfaction rate",
    color: "bg-green-500",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "50+ certified trainers and specialists",
    color: "bg-purple-500",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description: "Luxury amenities and cutting-edge equipment",
    color: "bg-orange-500",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r z-10" />

        {/* Background Image */}
        <div className="absolute inset-0 ">
          <Image
            src="/public/home.jpeg?height=1080&width=1920"
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
          <div className="animate-fade-in-up">
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

      {/* Enhanced Stats Section */}
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

      {/* Enhanced Features Section */}
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
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 border-0 px-6 py-2 text-lg">
              🏋️ Popular Classes
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Today's Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our expert-led classes designed for all fitness levels and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {classes.map((classItem, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={classItem.image || "/placeholder.svg"}
                    alt={classItem.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <Badge
                    className={`absolute top-4 left-4 ${
                      classItem.difficulty === "High"
                        ? "bg-red-500"
                        : classItem.difficulty === "Medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                    } text-white`}
                  >
                    {classItem.difficulty}
                  </Badge>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg">{classItem.name}</p>
                    <p className="text-sm opacity-90">{classItem.instructor}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{classItem.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{classItem.spots} spots left</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white bg-transparent"
              asChild
            >
              <Link href="/schedule">
                View Full Schedule
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <Badge className="mb-4 bg-gradient-to-r from-blue-700 to-purple-700 text-white border-0 px-6 py-2 text-lg">
        💬 Member Stories
      </Badge>
      <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
        What Our Members Say
      </h2>
      <p className="text-xl text-white max-w-2xl mx-auto">
        Real stories from real people who transformed their lives at FitZone Pro.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group p-6 bg-gray-800">
          <CardContent className="p-0">
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            <p className="text-white mb-6 leading-relaxed">"{testimonial.content}"</p>

            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-300">{testimonial.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Blog Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-green-100 to-teal-100 text-green-600 border-0 px-6 py-2 text-lg">
              📚 Fitness Knowledge
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert insights, tips, and guides to help you achieve your fitness goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-orange-500 text-white">{post.category}</Badge>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {post.views.toLocaleString()}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white bg-transparent"
                    asChild
                  >
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white bg-transparent"
              asChild
            >
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-600 border-0 px-6 py-2 text-lg">🏆 Trusted Excellence</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Why 5000+ Members Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1000ms" }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            Ready to Start Your
            <br />
            <span className="text-yellow-300">Transformation?</span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Join thousands of members who have already transformed their lives at FitZone Pro. Your journey to a
            healthier, stronger you starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/membership">Join Now - Special Offer</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-12 py-6 text-xl font-bold rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/contact">Schedule Free Tour</Link>
            </Button>
          </div>

          <div className="mt-12 flex justify-center items-center space-x-8 text-sm opacity-75">
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-2" />
              No Commitment Required
            </div>
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-2" />
              Free Fitness Assessment
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          size="lg"
          className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-110 animate-pulse"
          aria-label="Quick contact"
          asChild
        >
          <Link href="/contact">
            <Heart className="w-8 h-8" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
