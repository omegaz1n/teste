"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const companyLinks = [
    { href: "/pricing", label: "Pricing", icon: "💰" },
    { href: "/examples", label: "Our Work", icon: "🎨" },
    { href: "/reviews", label: "Reviews", icon: "⭐" },
    { href: "/about", label: "About Us", icon: "👥" },
    { href: "/compare", label: "Compare", icon: "📊" },
    { href: "/schedule-demo", label: "Book a Demo", icon: "📅" },
    { href: "/video-demo", label: "Watch Demo Video", icon: "📹" },
    { href: "/blog", label: "Blog", icon: "📝" },
    { href: "/marketing-glossary", label: "Glossary", icon: "📚" },
  ];

  const serviceLinks = [
    { href: "/social-media", label: "Social Media Management", icon: "📱" },
    { href: "/short-form-video", label: "Short-Form Videos", icon: "🎬" },
    { href: "/email-design", label: "Email Design", icon: "📧" },
    { href: "/meta-ads-management", label: "Meta Ads Management", icon: "📈" },
    { href: "/seo-blog-posts", label: "SEO Blog Posts", icon: "✍️" },
    { href: "/seo-backlinks", label: "SEO Backlinks", icon: "🔗" },
    { href: "/instagram-growth", label: "Instagram Growth", icon: "📸" },
    {
      href: "/social-media-management-reseller",
      label: "Become a Reseller",
      icon: "🤝",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://ext.same-assets.com/809642106/2924301001.svg"
              alt="Feedbird"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
                Company
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                <div className="p-2">
                  <div className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                    Services
                  </div>
                  {companyLinks.slice(0, 3).map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 px-3 py-2"
                      >
                        <span>{link.icon}</span>
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <div className="text-xs font-semibold text-gray-500 mb-2 mt-4 uppercase tracking-wide">
                    Company
                  </div>
                  {companyLinks.slice(3, 6).map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 px-3 py-2"
                      >
                        <span>{link.icon}</span>
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <div className="text-xs font-semibold text-gray-500 mb-2 mt-4 uppercase tracking-wide">
                    Learn
                  </div>
                  {companyLinks.slice(6).map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 px-3 py-2"
                      >
                        <span>{link.icon}</span>
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80">
                <div className="p-2">
                  {serviceLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 px-3 py-2"
                      >
                        <span>{link.icon}</span>
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/examples"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Examples
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/pricing">Get Started</Link>
            </Button>
            <Button asChild className="bg-black hover:bg-gray-800">
              <Link href="/schedule-demo">
                Book a Demo
                <span className="ml-2">→</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 mt-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
                  <div className="space-y-2">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-3 py-2 text-gray-600 hover:text-gray-900"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{link.icon}</span>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
                  <div className="space-y-2">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-3 py-2 text-gray-600 hover:text-gray-900"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{link.icon}</span>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6 space-y-3">
                  <Button
                    variant="ghost"
                    asChild
                    className="w-full justify-start"
                  >
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      Log in
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/pricing" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                  <Button asChild className="w-full bg-black hover:bg-gray-800">
                    <Link
                      href="/schedule-demo"
                      onClick={() => setIsOpen(false)}
                    >
                      Book a Demo →
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
