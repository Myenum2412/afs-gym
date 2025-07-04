"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Calendar,
  Clock,
  Search,
  ArrowRight,
  Heart,
  Share2,
  BookOpen,
  Filter,
  TrendingUp,
  Eye,
  MessageCircle,
  Star,
  ChevronRight,
  Bookmark,
  Download,
  Play,
  Loader2,
  AlertCircle,
} from "lucide-react"

// Mock data for blog posts with full content
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Exercises for Building Core Strength",
    slug: "10-essential-exercises-building-core-strength",
    excerpt:
      "Discover the most effective core exercises that will help you build a strong foundation for all your workouts and daily activities. Learn proper form and progression techniques.",
    content: `
      <h2>Introduction</h2>
      <p>A strong core is the foundation of all movement and athletic performance. In this comprehensive guide, we'll explore the ten most effective exercises that target all areas of your core, including the rectus abdominis, obliques, and deep stabilizing muscles.</p>
      
      <h2>Why Core Strength Matters</h2>
      <p>Your core is much more than just your "abs." It includes all the muscles that stabilize your spine and pelvis, providing a solid foundation for movement in your arms and legs. A strong core:</p>
      <ul>
        <li>Improves posture and reduces back pain</li>
        <li>Enhances athletic performance</li>
        <li>Increases stability and balance</li>
        <li>Reduces risk of injury</li>
        <li>Improves functional movement patterns</li>
      </ul>
      
      <h2>The 10 Essential Core Exercises</h2>
      
      <h3>1. Plank</h3>
      <p>The plank is the gold standard of core exercises. It targets your entire core while also engaging your shoulders, arms, and glutes.</p>
      <p><strong>How to perform:</strong></p>
      <ol>
        <li>Start in a push-up position with your forearms on the ground</li>
        <li>Keep your body in a straight line from head to heels</li>
        <li>Engage your core and hold the position</li>
        <li>Start with 30 seconds and work up to 2 minutes</li>
      </ol>
      
      <h3>2. Dead Bug</h3>
      <p>This exercise teaches core stability while moving your limbs independently, mimicking real-world movement patterns.</p>
      
      <h3>3. Bird Dog</h3>
      <p>Perfect for improving core stability and coordination while strengthening your back muscles.</p>
      
      <h2>Programming Your Core Workouts</h2>
      <p>For optimal results, incorporate these exercises into your routine 3-4 times per week. Start with 2-3 sets of each exercise and gradually increase the duration or repetitions as you get stronger.</p>
      
      <h2>Common Mistakes to Avoid</h2>
      <p>When performing core exercises, avoid these common mistakes:</p>
      <ul>
        <li>Holding your breath during exercises</li>
        <li>Allowing your lower back to arch excessively</li>
        <li>Rushing through movements</li>
        <li>Neglecting proper form for higher repetitions</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building a strong core takes time and consistency, but the benefits are worth the effort. Start with these fundamental exercises and gradually progress as your strength improves. Remember, quality always trumps quantity when it comes to core training.</p>
    `,
    author: {
      name: "Alex Rodriguez",
      bio: "Certified Personal Trainer with 8+ years of experience specializing in functional fitness and core strength.",
      avatar: "/placeholder.svg?height=100&width=100",
      social: {
        instagram: "@alexfitness",
        twitter: "@alexrodriguezfit",
      },
    },
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Fitness",
    tags: ["Core", "Strength", "Exercises", "Beginner"],
    image: "/10EssentialforBuilding.jpeg?height=400&width=600",
    featured: true,
    views: 2847,
    likes: 156,
    comments: 23,
    rating: 4.8,
    videoUrl: "/videos/core-workout.mp4",
    metaDescription:
      "Learn the 10 most effective core exercises to build strength, improve posture, and enhance athletic performance. Complete guide with proper form instructions.",
    keywords: ["core exercises", "core strength", "plank", "abs workout", "fitness training"],
  },
  {
    id: 2,
    title: "The Ultimate Guide to Pre and Post Workout Nutrition",
    slug: "ultimate-guide-pre-post-workout-nutrition",
    excerpt:
      "Learn what to eat before and after your workouts to maximize performance, recovery, and results. Complete meal plans and timing strategies included.",
    content: `
      <h2>Introduction</h2>
      <p>Proper nutrition timing can make or break your fitness goals. This comprehensive guide covers everything you need to know about fueling your workouts and optimizing recovery through strategic nutrition choices.</p>
      
      <h2>Pre-Workout Nutrition</h2>
      <p>What you eat before your workout can significantly impact your performance, energy levels, and ability to push through challenging sessions.</p>
      
      <h3>Timing Your Pre-Workout Meal</h3>
      <ul>
        <li><strong>3-4 hours before:</strong> Large meal with complex carbs, lean protein, and healthy fats</li>
        <li><strong>1-2 hours before:</strong> Smaller meal focusing on easily digestible carbs and moderate protein</li>
        <li><strong>30-60 minutes before:</strong> Light snack with simple carbs</li>
      </ul>
      
      <h2>Post-Workout Nutrition</h2>
      <p>The post-workout period is crucial for recovery, muscle protein synthesis, and replenishing energy stores.</p>
      
      <h3>The Anabolic Window</h3>
      <p>While the "anabolic window" isn't as narrow as once believed, consuming protein and carbs within 2 hours post-workout can optimize recovery.</p>
      
      <h2>Hydration Strategies</h2>
      <p>Proper hydration is essential for optimal performance and recovery. Aim to drink water throughout the day and monitor your urine color as an indicator of hydration status.</p>
      
      <h2>Sample Meal Plans</h2>
      <p>Here are some practical meal and snack ideas for different workout times and goals.</p>
      
      <h2>Supplements to Consider</h2>
      <p>While whole foods should be your primary focus, certain supplements can support your nutrition goals when used appropriately.</p>
    `,
    author: {
      name: "Dr. Sarah Kim",
      bio: "Sports Nutritionist and Registered Dietitian with expertise in performance nutrition and metabolic health.",
      avatar: "/placeholder.svg?height=100&width=100",
      social: {
        instagram: "@drsarahnutrition",
        linkedin: "dr-sarah-kim-nutrition",
      },
    },
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Nutrition",
    tags: ["Nutrition", "Recovery", "Performance", "Diet"],
    image: "/TheUltimateGuidetoPreandPostWorkoutNutrition.jpeg?height=400&width=600",
    featured: false,
    views: 3421,
    likes: 234,
    comments: 45,
    rating: 4.9,
    metaDescription:
      "Complete guide to pre and post workout nutrition for optimal performance and recovery. Includes meal timing, food choices, and practical meal plans.",
    keywords: ["workout nutrition", "pre workout meal", "post workout recovery", "sports nutrition", "meal timing"],
  },
  {
    id: 3,
    title: "HIIT vs Steady State Cardio: Which is Better for Your Goals?",
    slug: "hiit-vs-steady-state-cardio-better-goals",
    excerpt:
      "Compare the benefits of high-intensity interval training versus traditional steady-state cardio for different fitness goals. Science-backed recommendations included.",
    content: `
      <h2>Introduction</h2>
      <p>The debate between HIIT and steady-state cardio continues to evolve as new research emerges. Let's dive deep into the science and practical applications of both training methods.</p>
      
      <h2>Understanding HIIT</h2>
      <p>High-Intensity Interval Training (HIIT) involves alternating between short bursts of intense activity and periods of rest or low-intensity exercise.</p>
      
      <h2>Understanding Steady-State Cardio</h2>
      <p>Steady-state cardio involves maintaining a consistent, moderate intensity for an extended period, typically 20-60 minutes.</p>
      
      <h2>Benefits of HIIT</h2>
      <ul>
        <li>Time-efficient workouts</li>
        <li>Increased EPOC (excess post-exercise oxygen consumption)</li>
        <li>Improved cardiovascular fitness</li>
        <li>Enhanced fat oxidation</li>
        <li>Preserved muscle mass during fat loss</li>
      </ul>
      
      <h2>Benefits of Steady-State Cardio</h2>
      <ul>
        <li>Lower impact on recovery</li>
        <li>Sustainable for longer durations</li>
        <li>Improved aerobic base</li>
        <li>Lower injury risk</li>
        <li>Better for beginners</li>
      </ul>
      
      <h2>Which is Better for Fat Loss?</h2>
      <p>Both methods can be effective for fat loss, but the choice depends on your preferences, fitness level, and lifestyle factors.</p>
      
      <h2>Recommendations by Goal</h2>
      <p>Choose your cardio method based on your primary fitness objectives and current fitness level.</p>
    `,
    author: {
      name: "Marcus Johnson",
      bio: "Exercise Physiologist and former competitive athlete specializing in cardiovascular training methodologies.",
      avatar: "/placeholder.svg?height=100&width=100",
      social: {
        instagram: "@marcusfit",
        twitter: "@marcusjohnsonfit",
      },
    },
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Cardio",
    tags: ["HIIT", "Cardio", "Fat Loss", "Training"],
    image: "/HIITvsSteady.jpeg?height=400&width=600",
    featured: false,
    views: 1923,
    likes: 98,
    comments: 17,
    rating: 4.7,
    metaDescription:
      "Compare HIIT vs steady-state cardio for different fitness goals. Science-based analysis to help you choose the best cardio method for your objectives.",
    keywords: ["HIIT", "steady state cardio", "cardio comparison", "fat loss", "cardiovascular training"],
  },
  {
    id: 4,
    title: "Mental Health Benefits of Regular Exercise: A Complete Guide",
    slug: "mental-health-benefits-regular-exercise-guide",
    excerpt:
      "Explore how consistent physical activity can improve your mental well-being, reduce stress, and boost confidence. Evidence-based strategies for mental wellness.",
    content: `
      <h2>Introduction</h2>
      <p>Exercise isn't just about physical transformation – it's one of the most powerful tools for mental health and emotional well-being. This guide explores the science behind exercise and mental health.</p>
      
      <h2>The Science Behind Exercise and Mental Health</h2>
      <p>Regular physical activity triggers numerous physiological changes that directly impact brain function and mental well-being.</p>
      
      <h2>Key Mental Health Benefits</h2>
      <ul>
        <li>Reduced symptoms of depression and anxiety</li>
        <li>Improved mood and emotional regulation</li>
        <li>Enhanced self-esteem and confidence</li>
        <li>Better stress management</li>
        <li>Improved cognitive function</li>
        <li>Better sleep quality</li>
      </ul>
      
      <h2>How Exercise Affects the Brain</h2>
      <p>Physical activity stimulates the production of endorphins, BDNF, and other neurochemicals that support brain health and mood regulation.</p>
      
      <h2>Best Exercises for Mental Health</h2>
      <p>While any movement is beneficial, certain types of exercise may be particularly effective for mental health improvements.</p>
      
      <h2>Creating a Mental Health-Focused Exercise Routine</h2>
      <p>Learn how to design a workout program that prioritizes mental well-being alongside physical fitness goals.</p>
      
      <h2>Overcoming Mental Barriers to Exercise</h2>
      <p>Address common psychological obstacles that prevent people from maintaining consistent exercise habits.</p>
    `,
    author: {
      name: "Dr. Lisa Chen",
      bio: "Clinical Psychologist specializing in exercise psychology and mental health interventions through physical activity.",
      avatar: "/placeholder.svg?height=100&width=100",
      social: {
        linkedin: "dr-lisa-chen-psychology",
        twitter: "@drlisachen",
      },
    },
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Wellness",
    tags: ["Mental Health", "Wellness", "Stress", "Confidence"],
    image: "/MentalHealthBenefitsofRegularExercise.jpeg?height=400&width=600",
    featured: true,
    views: 4156,
    likes: 312,
    comments: 67,
    rating: 4.9,
    metaDescription:
      "Discover how regular exercise improves mental health, reduces stress, and boosts confidence. Evidence-based guide to exercise for mental wellness.",
    keywords: [
      "exercise mental health",
      "fitness wellness",
      "stress reduction",
      "exercise psychology",
      "mental wellness",
    ],
  },
  {
    id: 5,
    title: "Building Muscle After 40: A Complete Science-Based Guide",
    slug: "building-muscle-after-40-science-based-guide",
    excerpt:
      "Age is just a number when it comes to building muscle. Learn the strategies, considerations, and modifications for effective strength training later in life.",
    content: `
      <h2>Introduction</h2>
      <p>Many people believe that building muscle after 40 is impossible or significantly more difficult. While there are physiological changes that occur with age, muscle building remains very achievable with the right approach.</p>
      
      <h2>Age-Related Changes in Muscle Building</h2>
      <p>Understanding the physiological changes that occur with aging helps inform training and nutrition strategies.</p>
      
      <h2>Training Modifications for Mature Adults</h2>
      <ul>
        <li>Increased focus on recovery</li>
        <li>Progressive overload with patience</li>
        <li>Emphasis on compound movements</li>
        <li>Attention to mobility and flexibility</li>
        <li>Injury prevention strategies</li>
      </ul>
      
      <h2>Nutrition Considerations</h2>
      <p>Nutritional needs may change with age, requiring adjustments to support muscle building and overall health.</p>
      
      <h2>Recovery and Sleep</h2>
      <p>Recovery becomes increasingly important as we age, making sleep and stress management crucial for muscle building success.</p>
      
      <h2>Sample Training Programs</h2>
      <p>Practical workout templates designed specifically for individuals over 40 looking to build muscle safely and effectively.</p>
      
      <h2>Common Mistakes to Avoid</h2>
      <p>Learn from the most common errors that prevent mature adults from achieving their muscle building goals.</p>
    `,
    author: {
      name: "Alex Rodriguez",
      bio: "Certified Personal Trainer with 8+ years of experience specializing in functional fitness and core strength.",
      avatar: "/placeholder.svg?height=100&width=100",
      social: {
        instagram: "@alexfitness",
        twitter: "@alexrodriguezfit",
      },
    },
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Fitness",
    tags: ["Muscle Building", "Age", "Strength", "Mature Adults"],
    image: "/BuildingMuscleAfterACompleteScienceBasedGuide.jpeg?height=400&width=600",
    featured: false,
    views: 2734,
    likes: 187,
    comments: 34,
    rating: 4.8,
    metaDescription:
      "Complete guide to building muscle after 40. Science-based strategies for effective strength training and muscle building for mature adults.",
    keywords: [
      "muscle building over 40",
      "strength training mature adults",
      "fitness after 40",
      "muscle building age",
      "senior fitness",
    ],
  },
  {
    id: 6,
    title: "The Science of Sleep and Recovery: Optimize Your Rest",
    slug: "science-sleep-recovery-optimize-rest",
    excerpt:
      "Understand how quality sleep impacts your fitness goals and learn evidence-based strategies to optimize your recovery and performance.",
    content: `
      <h2>Introduction</h2>
      <p>Sleep is when the magic happens for your fitness goals. During quality sleep, your body repairs muscle tissue, consolidates memories, and prepares for the next day's challenges.</p>
      
      <h2>The Sleep-Fitness Connection</h2>
      <p>Quality sleep is essential for muscle recovery, hormone regulation, and overall performance in the gym and daily life.</p>
      
      <h2>Stages of Sleep and Recovery</h2>
      <p>Understanding the different stages of sleep helps explain why quality matters as much as quantity for recovery.</p>
      
      <h2>Sleep's Impact on Performance</h2>
      <ul>
        <li>Muscle protein synthesis</li>
        <li>Growth hormone release</li>
        <li>Cognitive function and focus</li>
        <li>Immune system support</li>
        <li>Metabolic health</li>
      </ul>
      
      <h2>Optimizing Sleep for Recovery</h2>
      <p>Practical strategies to improve sleep quality and duration for better recovery and performance.</p>
      
      <h2>Sleep Hygiene Best Practices</h2>
      <p>Evidence-based recommendations for creating an optimal sleep environment and routine.</p>
      
      <h2>Troubleshooting Common Sleep Issues</h2>
      <p>Address common sleep problems that may be hindering your recovery and fitness progress.</p>
    `,
    author: {
      name: "Dr. Lisa Chen",
      bio: "Clinical Psychologist specializing in exercise psychology and mental health interventions through physical activity.",
      avatar: "/placeholder.svg?height=100&width=100",
      social: {
        linkedin: "dr-lisa-chen-psychology",
        twitter: "@drlisachen",
      },
    },
    date: "2024-01-03",
    readTime: "9 min read",
    category: "Recovery",
    tags: ["Sleep", "Recovery", "Performance", "Health"],
    image: "/TheScienceofSleepandRecoveryOptimizeYourRest.jpeg?height=400&width=600",
    featured: false,
    views: 1876,
    likes: 143,
    comments: 28,
    rating: 4.7,
    metaDescription:
      "Learn how quality sleep impacts fitness goals and discover evidence-based strategies to optimize recovery and performance through better rest.",
    keywords: ["sleep recovery", "sleep fitness", "recovery optimization", "sleep performance", "rest and recovery"],
  },
]

const categories = [
  { name: "All", count: blogPosts.length, color: "bg-gray-500" },
  { name: "Fitness", count: blogPosts.filter((post) => post.category === "Fitness").length, color: "bg-orange-500" },
  { name: "Nutrition", count: blogPosts.filter((post) => post.category === "Nutrition").length, color: "bg-green-500" },
  { name: "Wellness", count: blogPosts.filter((post) => post.category === "Wellness").length, color: "bg-blue-500" },
  { name: "Cardio", count: blogPosts.filter((post) => post.category === "Cardio").length, color: "bg-red-500" },
  { name: "Recovery", count: blogPosts.filter((post) => post.category === "Recovery").length, color: "bg-purple-500" },
]

const popularTags = ["Core", "Strength", "Nutrition", "HIIT", "Mental Health", "Recovery", "Beginner", "Advanced"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("latest")
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([])
  const [likedPosts, setLikedPosts] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const filteredPosts = blogPosts
    .filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        post.author.name.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return b.views - a.views
        case "rating":
          return b.rating - a.rating
        case "comments":
          return b.comments - a.comments
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
    })

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.slice(0, 5)
  const popularPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 5)

  const toggleBookmark = (postId: number) => {
    setBookmarkedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  const handleReadMore = async (post: (typeof blogPosts)[0]) => {
    try {
      setIsLoading(true)
      setError(null)

      // Simulate loading delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 300))

      // Navigate to the individual blog post page
      router.push(`/blog/${post.slug}`)
    } catch (err) {
      setError("Failed to load article. Please try again.")
      console.error("Error loading article:", err)
    } finally {
      setIsLoading(false)
    }
  }

  // Loading skeleton component
  const PostSkeleton = () => (
    <Card className="border-0 shadow-lg overflow-hidden bg-white">
      <div className="md:flex">
        <div className="relative md:w-1/3 h-48 md:h-auto overflow-hidden">
          <Skeleton className="w-full h-full" />
        </div>
        <CardContent className="md:w-2/3 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Skeleton className="w-8 h-8 rounded-full" />
              <div>
                <Skeleton className="w-24 h-4 mb-1" />
                <Skeleton className="w-32 h-3" />
              </div>
            </div>
            <Skeleton className="w-12 h-4" />
          </div>
          <Skeleton className="w-full h-6 mb-3" />
          <Skeleton className="w-full h-4 mb-2" />
          <Skeleton className="w-3/4 h-4 mb-4" />
          <div className="flex flex-wrap gap-2 mb-4">
            <Skeleton className="w-16 h-6" />
            <Skeleton className="w-20 h-6" />
            <Skeleton className="w-14 h-6" />
          </div>
          <div className="flex items-center justify-between">
            <Skeleton className="w-24 h-8" />
            <div className="flex items-center space-x-2">
              <Skeleton className="w-8 h-8" />
              <Skeleton className="w-8 h-8" />
              <Skeleton className="w-8 h-8" />
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-0 px-6 py-2 text-lg backdrop-blur-sm">
              📚 Knowledge Hub
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Fitness</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl leading-relaxed opacity-90 mb-8 max-w-3xl mx-auto">
              Expert insights, evidence-based tips, and comprehensive guides to help you achieve your fitness goals.
              Stay informed with the latest in fitness, nutrition, and wellness from our certified professionals.
            </p>

            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles, authors, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder-gray-300 rounded-full text-lg focus:bg-white/20 transition-all duration-300"
                />
              </div>
              {searchTerm && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-60 overflow-y-auto z-50">
                  {filteredPosts.slice(0, 5).map((post) => (
                    <div
                      key={post.id}
                      className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      onClick={() => handleReadMore(post)}
                    >
                      <div className="flex items-center space-x-3">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={40}
                          height={40}
                          className="rounded object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{post.title}</p>
                          <p className="text-xs text-gray-500">
                            {post.category} • {post.readTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Popular Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {popularTags.map((tag) => (
                <Button
                  key={tag}
                  variant="outline"
                  size="sm"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-full"
                  onClick={() => setSearchTerm(tag)}
                >
                  #{tag}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Error Alert */}
      {error && (
        <div className="container mx-auto px-4 py-4">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      )}

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-orange-100 to-red-100 text-orange border-0 px-6 py-2 text-lg">
                ⭐ Featured Articles
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Editor's Picks
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hand-selected articles from our expert team covering the most important topics in fitness and wellness.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className={`border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden ${
                    index === 0 ? "md:col-span-2 md:flex" : ""
                  }`}
                >
                  <div className={`relative overflow-hidden ${index === 0 ? "md:w-1/2" : "h-64"}`}>
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Overlay Content */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-orange-500 text-white">Featured</Badge>
                      <Badge className="bg-black/50 text-white backdrop-blur-sm">{post.category}</Badge>
                    </div>

                    {/* Video Play Button */}
                    {post.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button
                          size="lg"
                          className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 rounded-full w-16 h-16"
                        >
                          <Play className="w-6 h-6" />
                        </Button>
                      </div>
                    )}

                    {/* Engagement Stats */}
                    <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white text-sm">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className={`p-8 ${index === 0 ? "md:w-1/2" : ""}`}>
                    {/* Author Info */}
                    <div className="flex items-center space-x-3 mb-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                        <AvatarFallback>
                          {post.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{post.author.name}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-text-orange transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{post.excerpt}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(post.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({post.rating})</span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <Button
                        variant="outline"
                        className="border-orange-500 text-orange hover:bg-orange-500 hover:text-white transition-all duration-300 bg-transparent"
                        onClick={() => handleReadMore(post)}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                            Loading...
                          </>
                        ) : (
                          <>
                            Read More
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>

                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className={`${likedPosts.includes(post.id) ? "text-red-500" : "text-gray-400 hover:text-red-500"}`}
                          onClick={() => toggleLike(post.id)}
                          aria-label={`${likedPosts.includes(post.id) ? "Unlike" : "Like"} this article`}
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className={`${bookmarkedPosts.includes(post.id) ? "text-blue-500" : "text-gray-400 hover:text-blue-500"}`}
                          onClick={() => toggleBookmark(post.id)}
                          aria-label={`${bookmarkedPosts.includes(post.id) ? "Remove bookmark" : "Bookmark"} this article`}
                        >
                          <Bookmark className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-400 hover:text-blue-500"
                          aria-label="Share this article"
                        >
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter & Sort */}
      <section className="py-12 bg-gray-100 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.name
                      ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg"
                      : "border-gray-300 text-gray-600 hover:bg-orange-600 hover:text-white hover:border-orange-600"
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 font-medium">Sort by:</span>
              <div className="flex space-x-2">
                {[
                  { value: "latest", label: "Latest" },
                  { value: "popular", label: "Popular" },
                  { value: "rating", label: "Rating" },
                  { value: "comments", label: "Most Discussed" },
                ].map((option) => (
                  <Button
                    key={option.value}
                    variant={sortBy === option.value ? "default" : "ghost"}
                    size="sm"
                    className={sortBy === option.value ? "bg-orange-600 text-white" : "text-gray-600"}
                    onClick={() => setSortBy(option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Results Info */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {searchTerm ? `Search Results for "${searchTerm}"` : `${selectedCategory} Articles`}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
                  </p>
                </div>
                <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                </Button>
              </div>

              {/* Articles Grid */}
              <div className="grid gap-8">
                {isLoading ? (
                  // Show loading skeletons
                  Array.from({ length: 3 }).map((_, index) => <PostSkeleton key={index} />)
                ) : filteredPosts.length === 0 ? (
                  // No results found
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                    <p className="text-gray-600 mb-4">
                      Try adjusting your search terms or browse our categories to find what you're looking for.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchTerm("")
                        setSelectedCategory("All")
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  filteredPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white"
                    >
                      <div className="md:flex">
                        <div className="relative md:w-1/3 h-48 md:h-auto overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-orange-500 text-white">{post.category}</Badge>
                          </div>

                          {/* Engagement Overlay */}
                          <div className="absolute bottom-4 left-4 flex items-center space-x-3 text-white text-sm">
                            <div className="flex items-center space-x-1 bg-black/50 rounded-full px-2 py-1">
                              <Eye className="w-3 h-3" />
                              <span>{post.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1 bg-black/50 rounded-full px-2 py-1">
                              <Heart className="w-3 h-3" />
                              <span>{post.likes}</span>
                            </div>
                          </div>
                        </div>

                        <CardContent className="md:w-2/3 p-6">
                          {/* Author & Meta */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <Avatar className="w-8 h-8">
                                <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                                <AvatarFallback className="text-xs">
                                  {post.author.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{post.author.name}</p>
                                <div className="flex items-center text-xs text-gray-500">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                                  <Clock className="w-3 h-3 mr-1" />
                                  <span>{post.readTime}</span>
                                </div>
                              </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-600">{post.rating}</span>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold mb-3 group-text-orange transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {post.tags.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{post.tags.length - 3} more
                              </Badge>
                            )}
                          </div>

                          {/* Actions */}
                          <div className="flex items-center justify-between">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-orange-500 text-orange hover:bg-orange-500 hover:text-white bg-transparent transition-all duration-300"
                              onClick={() => handleReadMore(post)}
                              disabled={isLoading}
                            >
                              {isLoading ? (
                                <>
                                  <Loader2 className="mr-2 w-3 h-3 animate-spin" />
                                  Loading...
                                </>
                              ) : (
                                <>
                                  Read More
                                  <ArrowRight className="ml-2 w-3 h-3" />
                                </>
                              )}
                            </Button>

                            <div className="flex items-center space-x-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                className={`h-8 w-8 ${likedPosts.includes(post.id) ? "text-red-500" : "text-gray-400 hover:text-red-500"}`}
                                onClick={() => toggleLike(post.id)}
                                aria-label={`${likedPosts.includes(post.id) ? "Unlike" : "Like"} this article`}
                              >
                                <Heart className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className={`h-8 w-8 ${bookmarkedPosts.includes(post.id) ? "text-blue-500" : "text-gray-400 hover:text-blue-500"}`}
                                onClick={() => toggleBookmark(post.id)}
                                aria-label={`${bookmarkedPosts.includes(post.id) ? "Remove bookmark" : "Bookmark"} this article`}
                              >
                                <Bookmark className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-gray-400 hover:text-blue-500 h-8 w-8"
                                aria-label="Share this article"
                              >
                                <Share2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))
                )}
              </div>

              {/* Load More Button */}
              {!isLoading && filteredPosts.length > 0 && (
                <div className="text-center mt-12">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-full"
                  >
                    Load More Articles
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Newsletter Signup */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-orange-800">Stay Updated</h3>
                  <p className="text-gray-600 mb-6">
                    Get the latest fitness tips, workout plans, and exclusive content delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="border-orange-200 focus:border-orange-500 text-gray-900"
                    />
                    <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                      Subscribe Now
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">Join 10,000+ fitness enthusiasts. Unsubscribe anytime.</p>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-900">
                    <TrendingUp className="w-5 h-5 mr-2 text-orange" />
                    Popular Posts
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="space-y-4">
                    {popularPosts.map((post, index) => (
                      <div
                        key={post.id}
                        className="flex space-x-3 group cursor-pointer"
                        onClick={() => handleReadMore(post)}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-text-orange transition-colors">
                            {post.title}
                          </h4>
                          <div className="flex items-center text-xs text-gray-500 mt-1 space-x-2">
                            <div className="flex items-center">
                              <Eye className="w-3 h-3 mr-1" />
                              {post.views.toLocaleString()}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-900">Categories</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="space-y-3">
                    {categories.slice(1).map((category) => (
                      <div
                        key={category.name}
                        className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0 cursor-pointer group"
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${category.color}`} />
                          <span className="text-gray-600 group-text-orange transition-colors">
                            {category.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-text-orange transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Download Guide CTA */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-900 to-black text-white">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Free Workout Guide</h3>
                  <p className="text-gray-300 mb-6">
                    Download our comprehensive 30-day workout plan designed by certified trainers.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                    Download Now
                    <Download className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Put Knowledge into Action?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join FitZone Pro and turn these insights into real results with our expert trainers and premium facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
            >
              <Link href="/membership">Start Your Journey</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white text-orange px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
            >
              <Link href="/contact">Get Expert Advice</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}