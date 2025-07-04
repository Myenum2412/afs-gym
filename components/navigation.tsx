"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, Dumbbell, Users, MapPin, Phone, Heart, Target, Shield, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  {name: "Services", href: "/services" }, 
  { name: "Schedule", href: "/schedule" },
  { name: "Membership", href: "/membership" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/logo.png" // Update this path to your logo image
                alt="Aura Fitness Logo"
                width={48}
                height={48}
                className={cn(
                  "w-full h-full object-contain",
                  isScrolled ? "" : "brightness-0 invert" // Makes logo white when not scrolled
                )}
              />
            </div>
            {/* Optional: Keep or remove the text part */}
            <div className="hidden sm:block">
              <span
                className={cn(
                  "text-xl lg:text-2xl font-black transition-colors",
                  isScrolled ? "text-gray-900" : "text-white",
                )}
              >
                Aura
              </span>
              <span className="text-xl lg:text-2xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Fitness
              </span>
              <span
                className={cn(
                  "text-sm lg:text-base font-bold block -mt-1 transition-colors",
                  isScrolled ? "text-gray-600" : "text-gray-300",
                )}
              >
                Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent",
                            isScrolled ? "text-gray-700 hover:text-orange-600" : "text-white hover:text-orange-400",
                          )}
                        >
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[400px] gap-3 p-4">
                            {item.children.map((child) => (
                              <NavigationMenuLink key={child.name} asChild>
                                <Link
                                  href={child.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                                      <child.icon className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <div>
                                      <div className="text-sm font-medium leading-none">{child.name}</div>
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                        {child.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "px-3 py-2 text-sm font-medium transition-colors relative group",
                          pathname === item.href
                            ? isScrolled
                              ? "text-orange-600"
                              : "text-orange-400"
                            : isScrolled
                              ? "text-gray-700 hover:text-orange-600"
                              : "text-white hover:text-orange-400",
                        )}
                      >
                        {item.name}
                        {pathname === item.href && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                        )}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="tel:+919943799969"
                className={cn(
                  "flex items-center space-x-2 hover:text-orange-500 transition-colors",
                  isScrolled ? "text-gray-600" : "text-gray-300",
                )}
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 99437 99969</span>
              </a>
            </div>
            <Button
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/membership">Join Now</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "p-2",
                    isScrolled ? "text-gray-700 hover:text-orange-600" : "text-white hover:text-orange-400",
                  )}
                >
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between pb-6 border-b">
                    <Link href="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                        <Image
                          src="/logo.png" // Update this path to your logo image
                          alt="Aura Fitness Logo"
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <span className="text-xl font-black text-gray-900">Aura</span>
                        <span className="text-xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                          Fitness
                        </span>
                        <span className="text-sm font-bold text-gray-600 block -mt-1">Studio</span>
                      </div>
                    </Link>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 py-6">
                    <div className="space-y-4">
                      {navigation.map((item) => (
                        <div key={item.name}>
                          {item.children ? (
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold text-gray-900">{item.name}</span>
                                <ChevronDown className="w-4 h-4 text-gray-500" />
                              </div>
                              <div className="pl-4 space-y-2">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                                      <child.icon className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <div>
                                      <div className="font-medium text-gray-900">{child.name}</div>
                                      <div className="text-sm text-gray-600">{child.description}</div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              className={cn(
                                "block py-2 text-lg font-medium transition-colors",
                                pathname === item.href ? "text-orange-600" : "text-gray-900 hover:text-orange-600",
                              )}
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Contact & CTA */}
                  <div className="border-t pt-6 space-y-4">
                    <div className="space-y-3">
                      <a
                        href="tel:+919943799969"
                        className="flex items-center space-x-3 text-gray-600 hover:text-orange-600 transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        <span className="font-medium">+91 99437 99969</span>
                      </a>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <MapPin className="w-5 h-5" />
                        <span className="text-sm">Salem, Tamil Nadu</span>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/membership">Join Aura Fitness</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}