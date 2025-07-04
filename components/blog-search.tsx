"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, X, TrendingUp, Clock, Filter } from "lucide-react"

interface BlogSearchProps {
  onSearch: (term: string) => void
  onCategoryFilter: (category: string) => void
  onTagFilter: (tag: string) => void
  searchTerm: string
  selectedCategory: string
}

const popularSearches = [
  "core strength",
  "nutrition tips",
  "HIIT workouts",
  "muscle building",
  "weight loss",
  "recovery",
  "beginner fitness",
  "meal prep",
]

const recentSearches = ["deadlift form", "protein intake", "cardio vs strength", "sleep and fitness"]

export function BlogSearch({ onSearch, onCategoryFilter, onTagFilter, searchTerm, selectedCategory }: BlogSearchProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [searchHistory, setSearchHistory] = useState<string[]>([])

  useEffect(() => {
    // Load search history from localStorage
    const history = localStorage.getItem("blog-search-history")
    if (history) {
      setSearchHistory(JSON.parse(history))
    }
  }, [])

  const handleSearch = (term: string) => {
    onSearch(term)

    // Add to search history
    if (term && !searchHistory.includes(term)) {
      const newHistory = [term, ...searchHistory.slice(0, 4)]
      setSearchHistory(newHistory)
      localStorage.setItem("blog-search-history", JSON.stringify(newHistory))
    }

    setIsSearchFocused(false)
  }

  const clearSearch = () => {
    onSearch("")
    setIsSearchFocused(false)
  }

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="Search articles, authors, or topics..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          className="pl-12 pr-12 py-3 bg-white border-gray-300 rounded-full text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"
            onClick={clearSearch}
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Search Dropdown */}
      {isSearchFocused && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 shadow-xl border border-gray-200">
          <CardContent className="p-6">
            {/* Recent Searches */}
            {searchHistory.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <h3 className="text-sm font-medium text-gray-700">Recent Searches</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {searchHistory.map((term, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full"
                      onClick={() => handleSearch(term)}
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <TrendingUp className="w-4 h-4 text-gray-500" />
                <h3 className="text-sm font-medium text-gray-700">Popular Searches</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <Button
                    key={term}
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full"
                    onClick={() => handleSearch(term)}
                  >
                    {term}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Filters */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Filter className="w-4 h-4 text-gray-500" />
                <h3 className="text-sm font-medium text-gray-700">Quick Filters</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Fitness", "Nutrition", "Wellness", "Recovery"].map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "secondary"}
                    className="cursor-pointer hover:bg-orange-100 hover:text-orange-700"
                    onClick={() => onCategoryFilter(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Backdrop */}
      {isSearchFocused && <div className="fixed inset-0 z-40" onClick={() => setIsSearchFocused(false)} />}
    </div>
  )
}
