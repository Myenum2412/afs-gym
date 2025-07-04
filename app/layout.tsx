import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FitZone Pro - Premium Fitness Center | Transform Your Life",
  description:
    "Join FitZone Pro, the premier fitness center offering state-of-the-art equipment, expert personal training, group classes, and a supportive community. Start your fitness journey today!",
  keywords: "gym, fitness center, personal training, group classes, workout, health, wellness, FitZone Pro",
  authors: [{ name: "FitZone Pro Team" }],
  creator: "FitZone Pro",
  publisher: "FitZone Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fitzonepro.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FitZone Pro - Premium Fitness Center",
    description:
      "Transform your life at FitZone Pro. State-of-the-art equipment, expert trainers, and a supportive community await you.",
    url: "https://fitzonepro.com",
    siteName: "FitZone Pro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FitZone Pro Fitness Center",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FitZone Pro - Premium Fitness Center",
    description:
      "Transform your life at FitZone Pro. State-of-the-art equipment, expert trainers, and a supportive community await you.",
    images: ["/twitter-image.jpg"],
    creator: "@fitzonepro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
