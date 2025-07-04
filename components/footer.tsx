"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  Heart,
  Star,
  ExternalLink,
  Settings,
  Building,
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "Personal Training", href: "/services/personal-training" },
    { name: "Group Classes", href: "/services/group-classes" },
    { name: "Nutrition Coaching", href: "/services/nutrition" },
    { name: "Wellness Programs", href: "/services/wellness" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Accessibility", href: "/accessibility" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/aurafitnessstudio" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/aurafitnessstudio" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/aurafitnessstudio" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/aurafitnessstudio" },
];

export function Footer() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Arthanari+Bakkiam+Complex,+39/7,+Vasagasalai+St,+near+ponganapathi+temple,+Ponnammapet,+Salem,+Tamil+Nadu+636001";

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main 3 Columns */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1: Logo & Contact Info */}
          <div>
            <Link href="/" className="block mb-6">
              <Image
                src="/logo.jpeg" // Replace with your actual logo path
                alt="Aura Fitness Logo"
                width={160}
                height={60}
                className="object-contain rounded-full"
              />
            </Link>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 transition-all"
                >
                  <social.icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <div className="flex items-center mb-4">
              <Settings className="w-5 h-5 text-orange-400 mr-2" />
              <h3 className="text-lg font-bold">Services</h3>
            </div>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <div className="flex items-center mb-4">
              <Building className="w-5 h-5 text-orange-400 mr-2" />
              <h3 className="text-lg font-bold">Company</h3>
            </div>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Stay Updated</h3>
              <p className="text-gray-300">
                Get fitness tips, workout routines, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <span>© 2024 Aura Fitness Studio. All rights reserved.</span>
          <div className="flex space-x-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-orange-400 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
