"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Calendar,
  Clock,
  ArrowLeft,
  Heart,
  Share2,
  BookOpen,
  Eye,
  MessageCircle,
  Star,
  ChevronRight,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  ThumbsUp,
  Flag,
  Loader2,
  AlertCircle,
  Home,
  ArrowRight,
} from "lucide-react"

// Mock data for blog posts (same as in main blog page)
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
      <p><strong>How to perform:</strong></p>
      <ol>
        <li>Lie on your back with arms extended toward the ceiling</li>
        <li>Bring knees to 90 degrees</li>
        <li>Slowly lower opposite arm and leg</li>
        <li>Return to starting position and repeat on other side</li>
      </ol>
      
      <h3>3. Bird Dog</h3>
      <p>Perfect for improving core stability and coordination while strengthening your back muscles.</p>
      <p><strong>How to perform:</strong></p>
      <ol>
        <li>Start on hands and knees in tabletop position</li>
        <li>Extend opposite arm and leg simultaneously</li>
        <li>Hold for 2-3 seconds</li>
        <li>Return to start and repeat on other side</li>
      </ol>
      
      <h3>4. Russian Twists</h3>
      <p>This exercise targets the obliques and improves rotational strength.</p>
      
      <h3>5. Mountain Climbers</h3>
      <p>A dynamic exercise that combines core strength with cardiovascular conditioning.</p>
      
      <h3>6. Hollow Body Hold</h3>
      <p>An isometric exercise that builds incredible core strength and body awareness.</p>
      
      <h3>7. Side Plank</h3>
      <p>Essential for lateral core strength and stability.</p>
      
      <h3>8. Bicycle Crunches</h3>
      <p>A classic exercise that targets multiple core muscles simultaneously.</p>
      
      <h3>9. Bear Crawl</h3>
      <p>A full-body exercise that challenges core stability in motion.</p>
      
      <h3>10. Turkish Get-Up</h3>
      <p>A complex movement that integrates core strength with full-body coordination.</p>
      
      <h2>Programming Your Core Workouts</h2>
      <p>For optimal results, incorporate these exercises into your routine 3-4 times per week. Start with 2-3 sets of each exercise and gradually increase the duration or repetitions as you get stronger.</p>
      
      <h3>Beginner Program (Weeks 1-4)</h3>
      <ul>
        <li>Plank: 3 sets of 20-30 seconds</li>
        <li>Dead Bug: 3 sets of 8-10 per side</li>
        <li>Bird Dog: 3 sets of 8-10 per side</li>
        <li>Side Plank: 2 sets of 15-20 seconds per side</li>
      </ul>
      
      <h3>Intermediate Program (Weeks 5-8)</h3>
      <ul>
        <li>Plank: 3 sets of 45-60 seconds</li>
        <li>Russian Twists: 3 sets of 15-20 per side</li>
        <li>Mountain Climbers: 3 sets of 20-30 per side</li>
        <li>Hollow Body Hold: 3 sets of 20-30 seconds</li>
      </ul>
      
      <h2>Common Mistakes to Avoid</h2>
      <p>When performing core exercises, avoid these common mistakes:</p>
      <ul>
        <li><strong>Holding your breath:</strong> Remember to breathe consistently throughout each exercise</li>
        <li><strong>Excessive lower back arch:</strong> Keep your spine in neutral alignment</li>
        <li><strong>Rushing through movements:</strong> Focus on quality over quantity</li>
        <li><strong>Neglecting proper form:</strong> Perfect your technique before increasing difficulty</li>
        <li><strong>Ignoring progression:</strong> Gradually increase difficulty as you get stronger</li>
      </ul>
      
      <h2>Nutrition for Core Development</h2>
      <p>While you can't spot-reduce fat, proper nutrition supports core development by:</p>
      <ul>
        <li>Reducing overall body fat percentage</li>
        <li>Providing energy for workouts</li>
        <li>Supporting muscle recovery and growth</li>
        <li>Maintaining consistent energy levels</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building a strong core takes time and consistency, but the benefits are worth the effort. Start with these fundamental exercises and gradually progress as your strength improves. Remember, quality always trumps quantity when it comes to core training.</p>
      
      <p>Consistency is key – aim to perform core exercises 3-4 times per week, and you'll start seeing improvements in strength, stability, and overall fitness within just a few weeks. Your future self will thank you for the investment in core strength!</p>
    `,
    author: {
      name: "Alex Rodriguez",
      bio: "Certified Personal Trainer with 8+ years of experience specializing in functional fitness and core strength. Alex holds certifications from NASM and ACSM, and has helped hundreds of clients build stronger, more resilient bodies.",
      avatar: "/10EssentialforBuilding.jpeg?height=100&width=100",
      social: {
        instagram: "@alexfitness",
        twitter: "@alexrodriguezfit",
        linkedin: "alex-rodriguez-fitness",
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
  // Add other posts here...
]

// Mock comments data
const mockComments = [
  {
    id: 1,
    author: "Mike Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2024-01-16",
    content:
      "This is exactly what I needed! I've been struggling with core strength and these exercises look perfect for beginners. Thanks for the detailed instructions!",
    likes: 12,
    replies: [
      {
        id: 2,
        author: "Alex Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        date: "2024-01-16",
        content:
          "Glad you found it helpful, Mike! Start with the beginner program and focus on form over speed. You'll see great results!",
        likes: 5,
        isAuthor: true,
      },
    ],
  },
  {
    id: 3,
    author: "Sarah Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2024-01-15",
    content:
      "I've been doing planks wrong this whole time! The cue about keeping a straight line from head to heels really helped. My core is already feeling more engaged.",
    likes: 8,
    replies: [],
  },
  {
    id: 4,
    author: "David Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2024-01-15",
    content:
      "Great article! Could you do a follow-up on advanced core exercises? I've mastered these and looking for the next challenge.",
    likes: 15,
    replies: [],
  },
]

// Related posts
const getRelatedPosts = (currentPost: (typeof blogPosts)[0]) => {
  return blogPosts
    .filter(
      (post) =>
        post.id !== currentPost.id &&
        (post.category === currentPost.category || post.tags.some((tag) => currentPost.tags.includes(tag))),
    )
    .slice(0, 3)
}

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [post, setPost] = useState<(typeof blogPosts)[0] | null>(null)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [shareUrl, setShareUrl] = useState("")
  const [copied, setCopied] = useState(false)
  const [newComment, setNewComment] = useState("")
  const [isSubmittingComment, setIsSubmittingComment] = useState(false)
  const [comments, setComments] = useState(mockComments)
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const loadPost = async () => {
      try {
        setIsLoading(true)
        setError(null)

        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 500))

        const foundPost = blogPosts.find((p) => p.slug === params.slug)

        if (!foundPost) {
          setError("Article not found")
          return
        }

        setPost(foundPost)
        setShareUrl(window.location.href)

        // Simulate loading user preferences
        setIsLiked(Math.random() > 0.7)
        setIsBookmarked(Math.random() > 0.8)
      } catch (err) {
        setError("Failed to load article. Please try again.")
        console.error("Error loading post:", err)
      } finally {
        setIsLoading(false)
      }
    }

    if (params.slug) {
      loadPost()
    }
  }, [params.slug])

  // Reading progress tracker
  useEffect(() => {
    const updateReadingProgress = () => {
      const article = document.getElementById("article-content")
      if (!article) return

      const scrollTop = window.scrollY
      const docHeight = article.offsetHeight
      const winHeight = window.innerHeight
      const scrollPercent = scrollTop / (docHeight - winHeight)
      const progress = Math.min(100, Math.max(0, scrollPercent * 100))

      setReadingProgress(progress)
    }

    window.addEventListener("scroll", updateReadingProgress)
    return () => window.removeEventListener("scroll", updateReadingProgress)
  }, [post])

  const handleShare = async (platform: string) => {
    if (!post) return

    const url = shareUrl
    const text = `Check out this article: ${post.title}`

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
          "_blank",
        )
        break
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
        break
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank")
        break
      case "copy":
        try {
          await navigator.clipboard.writeText(url)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        } catch (err) {
          console.error("Failed to copy URL:", err)
        }
        break
    }
  }

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    setIsSubmittingComment(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const comment = {
        id: Date.now(),
        author: "You",
        avatar: "/placeholder.svg?height=40&width=40",
        date: new Date().toISOString().split("T")[0],
        content: newComment,
        likes: 0,
        replies: [],
      }

      setComments((prev) => [comment, ...prev])
      setNewComment("")
    } catch (err) {
      console.error("Error submitting comment:", err)
    } finally {
      setIsSubmittingComment(false)
    }
  }

  const toggleLike = () => {
    setIsLiked(!isLiked)
    if (post) {
      // Update post likes count
      post.likes += isLiked ? -1 : 1
    }
  }

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Reading Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"
            style={{ width: "0%" }}
          />
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb Skeleton */}
          <div className="flex items-center space-x-2 mb-8">
            <Skeleton className="w-12 h-4" />
            <Skeleton className="w-4 h-4" />
            <Skeleton className="w-16 h-4" />
            <Skeleton className="w-4 h-4" />
            <Skeleton className="w-32 h-4" />
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Header Skeleton */}
                <div className="relative h-96">
                  <Skeleton className="w-full h-full" />
                </div>

                <div className="p-8">
                  <Skeleton className="w-3/4 h-8 mb-4" />
                  <div className="flex items-center space-x-4 mb-6">
                    <Skeleton className="w-12 h-12 rounded-full" />
                    <div>
                      <Skeleton className="w-24 h-4 mb-2" />
                      <Skeleton className="w-32 h-3" />
                    </div>
                  </div>

                  {/* Content Skeleton */}
                  <div className="space-y-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <Skeleton key={i} className="w-full h-4" />
                    ))}
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar Skeleton */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <Skeleton className="w-full h-32" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Error state
  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Article Not Found</h1>
          <p className="text-gray-600 mb-6">
            {error || "The article you're looking for doesn't exist or has been moved."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => router.back()} variant="outline">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Go Back
            </Button>
            <Button asChild>
              <Link href="/blog">
                <BookOpen className="mr-2 w-4 h-4" />
                Browse Articles
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const relatedPosts = getRelatedPosts(post)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-orange-600 transition-colors flex items-center">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-orange-600 transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/blog?category=${post.category}`} className="hover:text-orange-600 transition-colors">
            {post.category}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium truncate max-w-xs">{post.title}</span>
        </nav>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Article Header */}
              <div className="relative h-96 overflow-hidden">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Header Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <Badge className="bg-orange-500 text-white">{post.category}</Badge>
                    {post.featured && <Badge className="bg-yellow-500 text-white">Featured</Badge>}
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{post.rating}</span>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">{post.title}</h1>
                  <p className="text-xl opacity-90 leading-relaxed">{post.excerpt}</p>
                </div>
              </div>

              {/* Article Meta & Actions */}
              <div className="p-8 border-b border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                      <AvatarFallback className="text-lg">
                        {post.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{post.author.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{post.author.bio}</p>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`${isLiked ? "text-red-500 border-red-500" : "text-gray-600"} hover:text-red-500 hover:border-red-500`}
                      onClick={toggleLike}
                    >
                      <Heart className={`w-4 h-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                      {post.likes}
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      className={`${isBookmarked ? "text-blue-500 border-blue-500" : "text-gray-600"} hover:text-blue-500 hover:border-blue-500`}
                      onClick={toggleBookmark}
                    >
                      <Bookmark className={`w-4 h-4 mr-2 ${isBookmarked ? "fill-current" : ""}`} />
                      {isBookmarked ? "Saved" : "Save"}
                    </Button>

                    {/* Share Dropdown */}
                    <div className="relative group">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-gray-600 hover:text-blue-500 hover:border-blue-500 bg-transparent"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>

                      <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                        <div className="p-2">
                          <button
                            onClick={() => handleShare("twitter")}
                            className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                          >
                            <Twitter className="w-4 h-4 text-blue-400" />
                            <span>Twitter</span>
                          </button>
                          <button
                            onClick={() => handleShare("facebook")}
                            className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                          >
                            <Facebook className="w-4 h-4 text-blue-600" />
                            <span>Facebook</span>
                          </button>
                          <button
                            onClick={() => handleShare("linkedin")}
                            className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                          >
                            <Linkedin className="w-4 h-4 text-blue-700" />
                            <span>LinkedIn</span>
                          </button>
                          <button
                            onClick={() => handleShare("copy")}
                            className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                          >
                            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                            <span>{copied ? "Copied!" : "Copy Link"}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
                      <Flag className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {post.tags.map((tag) => (
                    <Link key={tag} href={`/blog?search=${tag}`}>
                      <Badge
                        variant="secondary"
                        className="hover:bg-orange-100 hover:text-orange-600 cursor-pointer transition-colors"
                      >
                        #{tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8" id="article-content">
                <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* Article Footer */}
              <div className="p-8 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Was this article helpful?</h4>
                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-green-600 hover:bg-green-50 hover:border-green-600 bg-transparent"
                      >
                        <ThumbsUp className="w-4 h-4 mr-2" />
                        Yes
                      </Button>
                      <Button variant="outline" size="sm" className="text-gray-600 hover:bg-gray-50 bg-transparent">
                        <ThumbsUp className="w-4 h-4 mr-2 rotate-180" />
                        No
                      </Button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-2">Follow {post.author.name}</p>
                    <div className="flex items-center space-x-3">
                      {post.author.social.instagram && (
                        <a
                          href={`https://instagram.com/${post.author.social.instagram.replace("@", "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-pink-500 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      )}
                      {post.author.social.twitter && (
                        <a
                          href={`https://twitter.com/${post.author.social.twitter.replace("@", "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-500 transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {post.author.social.linkedin && (
                        <a
                          href={`https://linkedin.com/in/${post.author.social.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-700 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Comments Section */}
            <Card className="mt-8 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-orange-600" />
                  Comments ({comments.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Comment Form */}
                <form onSubmit={handleCommentSubmit} className="mb-8">
                  <div className="flex space-x-4">
                    <Avatar className="w-10 h-10 flex-shrink-0">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="You" />
                      <AvatarFallback>You</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <Textarea
                        placeholder="Share your thoughts about this article..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="mb-3 min-h-[100px] resize-none"
                        disabled={isSubmittingComment}
                      />
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-500">Be respectful and constructive in your comments.</p>
                        <Button
                          type="submit"
                          disabled={!newComment.trim() || isSubmittingComment}
                          className="bg-orange-600 hover:bg-orange-700"
                        >
                          {isSubmittingComment ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Posting...
                            </>
                          ) : (
                            "Post Comment"
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-4">
                      <Avatar className="w-10 h-10 flex-shrink-0">
                        <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.author} />
                        <AvatarFallback>
                          {comment.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-grow">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-medium text-gray-900">{comment.author}</h4>
                              {comment.isAuthor && (
                                <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-600">
                                  Author
                                </Badge>
                              )}
                            </div>
                            <span className="text-sm text-gray-500">{new Date(comment.date).toLocaleDateString()}</span>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                        </div>

                        <div className="flex items-center space-x-4 mt-2">
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-500 p-0 h-auto">
                            <Heart className="w-4 h-4 mr-1" />
                            {comment.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-500 p-0 h-auto">
                            Reply
                          </Button>
                        </div>

                        {/* Replies */}
                        {comment.replies && comment.replies.length > 0 && (
                          <div className="mt-4 space-y-4">
                            {comment.replies.map((reply) => (
                              <div key={reply.id} className="flex space-x-3 ml-6">
                                <Avatar className="w-8 h-8 flex-shrink-0">
                                  <AvatarImage src={reply.avatar || "/placeholder.svg"} alt={reply.author} />
                                  <AvatarFallback className="text-xs">
                                    {reply.author
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-grow">
                                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                                    <div className="flex items-center justify-between mb-2">
                                      <div className="flex items-center space-x-2">
                                        <h5 className="font-medium text-gray-900 text-sm">{reply.author}</h5>
                                        {reply.isAuthor && (
                                          <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-600">
                                            Author
                                          </Badge>
                                        )}
                                      </div>
                                      <span className="text-xs text-gray-500">
                                        {new Date(reply.date).toLocaleDateString()}
                                      </span>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">{reply.content}</p>
                                  </div>
                                  <div className="flex items-center space-x-3 mt-2">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="text-gray-500 hover:text-red-500 p-0 h-auto text-xs"
                                    >
                                      <Heart className="w-3 h-3 mr-1" />
                                      {reply.likes}
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Table of Contents */}
            <Card className="sticky top-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Table of Contents</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <nav className="space-y-2">
                  <a
                    href="#introduction"
                    className="block text-sm text-gray-600 hover:text-orange-600 transition-colors py-1"
                  >
                    Introduction
                  </a>
                  <a
                    href="#why-core-strength-matters"
                    className="block text-sm text-gray-600 hover:text-orange-600 transition-colors py-1"
                  >
                    Why Core Strength Matters
                  </a>
                  <a
                    href="#the-10-essential-core-exercises"
                    className="block text-sm text-gray-600 hover:text-orange-600 transition-colors py-1"
                  >
                    The 10 Essential Core Exercises
                  </a>
                  <a
                    href="#programming-your-core-workouts"
                    className="block text-sm text-gray-600 hover:text-orange-600 transition-colors py-1"
                  >
                    Programming Your Core Workouts
                  </a>
                  <a
                    href="#common-mistakes-to-avoid"
                    className="block text-sm text-gray-600 hover:text-orange-600 transition-colors py-1"
                  >
                    Common Mistakes to Avoid
                  </a>
                  <a
                    href="#conclusion"
                    className="block text-sm text-gray-600 hover:text-orange-600 transition-colors py-1"
                  >
                    Conclusion
                  </a>
                </nav>
              </CardContent>
            </Card>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-orange-600" />
                    Related Articles
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block group">
                        <div className="flex space-x-3">
                          <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                            <Image
                              src={relatedPost.image || "/placeholder.svg"}
                              alt={relatedPost.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-grow min-w-0">
                            <h4 className="text-sm font-medium line-clamp-2 group-hover:text-orange-600 transition-colors">
                              {relatedPost.title}
                            </h4>
                            <div className="flex items-center text-xs text-gray-500 mt-1 space-x-2">
                              <span>{relatedPost.category}</span>
                              <span>•</span>
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/blog">
                      View All Articles
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Newsletter Signup */}
            <Card className="shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-orange-800">Never Miss an Update</h3>
                <p className="text-gray-600 mb-6">Get expert fitness tips and exclusive content delivered weekly.</p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="border-orange-200 focus:border-orange-500"
                  />
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                    Subscribe Now
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-3">Join 10,000+ fitness enthusiasts</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Button variant="outline" onClick={() => router.back()} className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Button>

          <Button asChild>
            <Link href="/blog" className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>More Articles</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
