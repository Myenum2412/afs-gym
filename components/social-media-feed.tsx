"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share2, ExternalLink, Instagram, Facebook, Twitter, Youtube } from "lucide-react"

const socialPosts = [
  {
    id: 1,
    platform: "instagram",
    content:
      "💪 Monday motivation! Check out Sarah's incredible transformation after 6 months at FitZone Pro. What's your fitness goal for this week?",
    image: "/placeholder.svg?height=300&width=300",
    likes: 234,
    comments: 18,
    timestamp: "2 hours ago",
    hashtags: ["#MondayMotivation", "#Transformation", "#FitZonePro"],
  },
  {
    id: 2,
    platform: "facebook",
    content:
      "🎉 New HIIT class starting this Thursday at 7 PM! High-intensity, maximum results. Limited spots available - book now!",
    image: "/placeholder.svg?height=300&width=300",
    likes: 156,
    comments: 12,
    timestamp: "5 hours ago",
    hashtags: ["#HIIT", "#NewClass", "#BookNow"],
  },
  {
    id: 3,
    platform: "twitter",
    content:
      "Quick tip: Stay hydrated! 💧 Aim for at least 8 glasses of water daily, especially during workouts. Your body will thank you! #HealthTip",
    likes: 89,
    comments: 7,
    timestamp: "1 day ago",
    hashtags: ["#HealthTip", "#Hydration", "#Wellness"],
  },
  {
    id: 4,
    platform: "youtube",
    content:
      "🎥 NEW VIDEO: 10-Minute Morning Stretch Routine. Perfect for starting your day energized! Watch now and follow along.",
    image: "/placeholder.svg?height=300&width=300",
    likes: 312,
    comments: 24,
    timestamp: "2 days ago",
    hashtags: ["#MorningStretch", "#Yoga", "#Wellness"],
  },
]

const platformIcons = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
}

const platformColors = {
  instagram: "text-pink-500",
  facebook: "text-blue-600",
  twitter: "text-blue-400",
  youtube: "text-red-500",
}

export default function SocialMediaFeed() {
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const handleLike = (postId: number) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  const handleShare = (post: (typeof socialPosts)[0]) => {
    if (navigator.share) {
      navigator.share({
        title: "FitZone Pro",
        text: post.content,
        url: window.location.href,
      })
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(`${post.content} - ${window.location.href}`)
    }
  }

  return (
    <Card className="border-0 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <CardTitle className="text-xl flex items-center">
          <Instagram className="w-5 h-5 mr-3" />
          Social Media Feed
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {socialPosts.map((post) => {
            const PlatformIcon = platformIcons[post.platform as keyof typeof platformIcons]
            const isLiked = likedPosts.includes(post.id)

            return (
              <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                {/* Post Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <PlatformIcon
                      className={`w-5 h-5 ${platformColors[post.platform as keyof typeof platformColors]}`}
                    />
                    <span className="font-semibold text-sm">@fitzonepro</span>
                    <Badge variant="secondary" className="text-xs">
                      {post.timestamp}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>

                {/* Post Content */}
                <p className="text-gray-700 mb-3 text-sm leading-relaxed">{post.content}</p>

                {/* Post Image */}
                {post.image && (
                  <div className="relative h-48 mb-3 rounded-lg overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt="Social media post"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.hashtags.map((hashtag, index) => (
                    <Badge key={index} variant="outline" className="text-xs text-blue-600 border-blue-200">
                      {hashtag}
                    </Badge>
                  ))}
                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`h-8 ${isLiked ? "text-red-500" : "text-gray-500"} hover:text-red-500`}
                      onClick={() => handleLike(post.id)}
                    >
                      <Heart className={`w-4 h-4 mr-1 ${isLiked ? "fill-current" : ""}`} />
                      <span className="text-xs">{post.likes + (isLiked ? 1 : 0)}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 text-gray-500 hover:text-blue-500">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span className="text-xs">{post.comments}</span>
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 text-gray-500 hover:text-green-500"
                    onClick={() => handleShare(post)}
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Follow Us Section */}
        <div className="mt-8 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
          <h4 className="font-bold mb-4 text-center">Follow Us for More Updates!</h4>
          <div className="flex justify-center space-x-4">
            {Object.entries(platformIcons).map(([platform, Icon]) => (
              <Button
                key={platform}
                variant="outline"
                size="icon"
                className={`hover:${platformColors[platform as keyof typeof platformColors]} hover:border-current`}
                aria-label={`Follow us on ${platform}`}
              >
                <Icon className="w-5 h-5" />
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
