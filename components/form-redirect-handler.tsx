"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, CheckCircle, ExternalLink, Loader2, Info } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface FormRedirectConfig {
  googleFormsUrl?: string
  redirectDelay?: number
  showLoadingMessage?: boolean
  customMessage?: string
  trackAnalytics?: boolean
  showCountdown?: boolean
}

interface RedirectState {
  isRedirecting: boolean
  error: string | null
  success: boolean
}

const DEFAULT_GOOGLE_FORMS_URL = "https://forms.google.com/forms/d/e/1FAIpQLSdummy/viewform"
const DEFAULT_CONFIG: FormRedirectConfig = {
  googleFormsUrl: DEFAULT_GOOGLE_FORMS_URL,
  redirectDelay: 2000,
  showLoadingMessage: true,
  trackAnalytics: true,
  showCountdown: true,
}

export function FormRedirectHandler({
  config = DEFAULT_CONFIG,
  children,
  className = "",
}: { config?: FormRedirectConfig; children?: React.ReactNode; className?: string }) {
  const [redirectState, setRedirectState] = useState<RedirectState>({
    isRedirecting: false,
    error: null,
    success: false,
  })
  const [countdown, setCountdown] = useState(0)

  const finalConfig = { ...DEFAULT_CONFIG, ...config }

  useEffect(() => {
    const handleFormSubmission = async (event: Event) => {
      const form = event.target as HTMLFormElement

      // Check if this form should be redirected (has data-redirect attribute)
      if (!form.hasAttribute("data-redirect-to-google-forms")) {
        return
      }

      // Prevent default form submission
      event.preventDefault()
      event.stopPropagation()

      try {
        setRedirectState({
          isRedirecting: true,
          error: null,
          success: false,
        })

        // Validate form data before redirect
        const formData = new FormData(form)
        const isValid = validateFormData(formData, form)

        if (!isValid) {
          throw new Error("Please fill in all required fields correctly.")
        }

        // Track analytics if enabled
        if (finalConfig.trackAnalytics) {
          trackFormSubmission(form.id || "unknown-form", formData)
        }

        // Show success state
        setRedirectState({
          isRedirecting: true,
          error: null,
          success: true,
        })

        // Announce to screen readers
        announceToScreenReader("Form submitted successfully. Redirecting to external form...")

        if (finalConfig.showCountdown) {
          setCountdown(Math.ceil(finalConfig.redirectDelay / 1000))
          const countdownInterval = setInterval(() => {
            setCountdown((prev) => {
              if (prev <= 1) {
                clearInterval(countdownInterval)
                return 0
              }
              return prev - 1
            })
          }, 1000)
        }

        // Redirect after delay
        setTimeout(() => {
          try {
            // Use window.open for better cross-origin handling
            const newWindow = window.open(finalConfig.googleFormsUrl, "_blank", "noopener,noreferrer")

            if (!newWindow) {
              // Fallback to location.href if popup blocked
              window.location.href = finalConfig.googleFormsUrl
            } else {
              // Reset state after successful redirect
              setTimeout(() => {
                setRedirectState({
                  isRedirecting: false,
                  error: null,
                  success: false,
                })
              }, 1000)
            }
          } catch (redirectError) {
            console.error("Redirect error:", redirectError)
            setRedirectState({
              isRedirecting: false,
              error: "Unable to redirect. Please click the link below to continue.",
              success: false,
            })
          }
        }, finalConfig.redirectDelay)
      } catch (error) {
        console.error("Form submission error:", error)
        setRedirectState({
          isRedirecting: false,
          error: error instanceof Error ? error.message : "An unexpected error occurred.",
          success: false,
        })
      }
    }

    // Add event listener to document for form submissions
    document.addEventListener("submit", handleFormSubmission as EventListener)

    // Cleanup
    return () => {
      document.removeEventListener("submit", handleFormSubmission as EventListener)
    }
  }, []) // Removed finalConfig from dependencies

  const validateFormData = (formData: FormData, form: HTMLFormElement): boolean => {
    const requiredFields = form.querySelectorAll("[required]")

    for (const field of requiredFields) {
      const input = field as HTMLInputElement
      const value = formData.get(input.name)

      if (!value || (typeof value === "string" && value.trim() === "")) {
        // Focus the invalid field for accessibility
        input.focus()
        input.setAttribute("aria-invalid", "true")
        return false
      }

      // Email validation
      if (input.type === "email" && typeof value === "string") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) {
          input.focus()
          input.setAttribute("aria-invalid", "true")
          return false
        }
      }

      input.setAttribute("aria-invalid", "false")
    }

    return true
  }

  const trackFormSubmission = (formId: string, formData: FormData) => {
    try {
      // Track with Google Analytics if available
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "form_submit", {
          form_id: formId,
          form_destination: "google_forms",
        })
      }

      // Track with custom analytics
      if (typeof window !== "undefined" && (window as any).analytics) {
        ;(window as any).analytics.track("Form Submitted", {
          formId,
          destination: "google_forms",
          timestamp: new Date().toISOString(),
        })
      }
    } catch (error) {
      console.warn("Analytics tracking failed:", error)
    }
  }

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement("div")
    announcement.setAttribute("aria-live", "polite")
    announcement.setAttribute("aria-atomic", "true")
    announcement.className = "sr-only"
    announcement.textContent = message

    document.body.appendChild(announcement)

    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }

  const handleManualRedirect = () => {
    window.open(finalConfig.googleFormsUrl, "_blank", "noopener,noreferrer")
  }

  // Render redirect feedback UI
  if (redirectState.isRedirecting || redirectState.error || redirectState.success) {
    return (
      <div
        className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="redirect-title"
        aria-describedby="redirect-description"
      >
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            {redirectState.isRedirecting && !redirectState.error && (
              <>
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {redirectState.success ? (
                    <CheckCircle className="w-16 h-16 text-green-500" />
                  ) : (
                    <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />
                  )}
                </div>
                <h3 id="redirect-title" className="text-xl font-semibold mb-2">
                  {redirectState.success ? "Success!" : "Processing..."}
                </h3>
                <p id="redirect-description" className="text-gray-600 mb-4">
                  {finalConfig.customMessage ||
                    (redirectState.success
                      ? "Thank you for your submission! Redirecting you to complete the process..."
                      : "Please wait while we process your request...")}
                </p>
                {finalConfig.showCountdown && countdown > 0 && (
                  <p className="text-sm text-gray-500">
                    Redirecting in {countdown} second{countdown !== 1 ? "s" : ""}...
                  </p>
                )}
              </>
            )}

            {redirectState.error && (
              <>
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <AlertCircle className="w-16 h-16 text-red-500" />
                </div>
                <h3 id="redirect-title" className="text-xl font-semibold mb-2 text-red-600">
                  Redirect Error
                </h3>
                <p id="redirect-description" className="text-gray-600 mb-4">
                  {redirectState.error}
                </p>
                <div className="space-y-3">
                  <Button onClick={handleManualRedirect} className="w-full bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Continue to Form
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setRedirectState({ isRedirecting: false, error: null, success: false })}
                    className="w-full"
                  >
                    Close
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  return <>{children}</>
}

// Hook for easy integration
export function useFormRedirect(config?: Partial<FormRedirectConfig>) {
  const finalConfig = { ...DEFAULT_CONFIG, ...config }

  const setupFormRedirect = (formElement: HTMLFormElement) => {
    formElement.setAttribute("data-redirect-to-google-forms", "true")

    // Add ARIA attributes for accessibility
    formElement.setAttribute("aria-describedby", "form-redirect-info")

    // Add hidden description for screen readers
    const description = document.createElement("div")
    description.id = "form-redirect-info"
    description.className = "sr-only"
    description.textContent = "This form will redirect you to an external Google Form upon submission."
    formElement.appendChild(description)
  }

  return { setupFormRedirect, config: finalConfig }
}

// Utility component for adding redirect info to forms
export function FormRedirectInfo({ className = "" }: { className?: string }) {
  return (
    <Alert className={`border-blue-200 bg-blue-50 ${className}`}>
      <Info className="h-4 w-4 text-blue-600" />
      <AlertDescription className="text-blue-800 text-sm">
        <div className="flex items-center justify-between">
          <span>This form will redirect to Google Forms for submission</span>
          <Button variant="outline" size="sm" className="text-blue-600 hover:text-blue-800 p-0 h-auto bg-transparent">
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}
