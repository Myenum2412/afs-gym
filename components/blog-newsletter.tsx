"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Gift, Check, Star, Users, BookOpen } from "lucide-react"

export function BlogNewsletter() {
  const [email, setEmail] = useState("")
  const [interests, setInterests] = useState<string[]>([])
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const interestOptions = [
    { id: "fitness", label: "Fitness Tips", icon: "💪" },
    { id: "nutrition", label: "Nutrition Guides", icon: "🥗" },
    { id: "wellness", label: "Wellness & Mental Health", icon: "🧘" },
    { id: "workouts", label: "Workout Plans", icon: "🏋️" },
    { id: "recipes", label: "Healthy Recipes", icon: "👨‍🍳" },
    { id: "recovery", label: "Recovery & Sleep", icon: "😴" },
  ]

  const handleInterestChange = (interestId: string, checked: boolean) => {
    if (checked) {
      setInterests([...interests, interestId])
    } else {
      setInterests(interests.filter((id) => id !== interestId))
    }
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubscribed(true)
    setIsLoading(false)
  }

  if (isSubscribed) {
    return (
      <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-green-800">Welcome to the FitZone Family!</h3>
          <p className="text-green-700 mb-6">
            Thank you for subscribing! Check your email for a welcome message and your free workout guide.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-green-600">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>10,000+ subscribers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>4.9/5 rating</span>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-orange-800">Stay Fit & Informed</h3>
          <p className="text-gray-600">
            Get exclusive fitness tips, workout plans, and nutrition guides delivered weekly.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2 text-sm">
            <Gift className="w-4 h-4 text-orange-500" />
            <span>Free workout guide</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <BookOpen className="w-4 h-4 text-orange-500" />
            <span>Weekly tips</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Star className="w-4 h-4 text-orange-500" />
            <span>Exclusive content</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Users className="w-4 h-4 text-orange-500" />
            <span>Community access</span>
          </div>
        </div>

        <form onSubmit={handleSubscribe} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-orange-200 focus:border-orange-500"
          />

          {/* Interest Selection */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-3">What interests you most?</p>
            <div className="grid grid-cols-2 gap-2">
              {interestOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.id}
                    checked={interests.includes(option.id)}
                    onCheckedChange={(checked) => handleInterestChange(option.id, checked as boolean)}
                  />
                  <label htmlFor={option.id} className="text-sm cursor-pointer">
                    {option.icon} {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
            disabled={isLoading}
          >
            {isLoading ? "Subscribing..." : "Subscribe Now"}
          </Button>
        </form>

        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">Join 10,000+ fitness enthusiasts. Unsubscribe anytime.</p>
          <div className="flex items-center justify-center space-x-4 mt-2">
            <Badge variant="secondary" className="text-xs">
              ⭐ 4.9/5 rating
            </Badge>
            <Badge variant="secondary" className="text-xs">
              📧 Weekly delivery
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
