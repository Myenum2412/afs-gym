import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - Aura Fitness Studio Salem",
  description:
    "Get in touch with Aura Fitness Studio in Salem, Tamil Nadu. Visit us at Arthanari Bakkiam Complex, Vasagasalai Street, near Ponganapathi Temple. Call +91 99437 99969.",
  keywords: "contact, aura fitness studio, salem gym, fitness center salem, gym near ponganapathi temple",
}

export default function ContactPage() {
  return <ContactPageClient />
}
