"use client"

import { useState, useEffect } from "react"

interface CurrentDateInfo {
  formattedDate: string
  dayName: string
  shortDate: string
  timestamp: Date
}

export function useCurrentDate(): CurrentDateInfo {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())

  useEffect(() => {
    // Update immediately on mount
    setCurrentDate(new Date())

    // Update every minute to keep the date current
    const interval = setInterval(() => {
      setCurrentDate(new Date())
    }, 60000) // Update every minute

    // Cleanup interval on unmount
    return () => clearInterval(interval)
  }, [])

  // Format the date in a user-friendly manner
  const formatDate = (date: Date): CurrentDateInfo => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }

    const shortOptions: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }

    const dayOptions: Intl.DateTimeFormatOptions = {
      weekday: "long",
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }

    return {
      formattedDate: date.toLocaleDateString("en-US", options),
      dayName: date.toLocaleDateString("en-US", dayOptions),
      shortDate: date.toLocaleDateString("en-US", shortOptions),
      timestamp: date,
    }
  }

  return formatDate(currentDate)
}
