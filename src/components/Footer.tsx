import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    feedbird: [
      { label: "About Us", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Our Work", href: "/examples" },
      { label: "Reviews", href: "/reviews" },
      { label: "Book a Demo", href: "/schedule-demo" },
      { label: "Watch Demo Video", href: "/video-demo" },
      { label: "Blog", href: "/blog" },
      { label: "Glossary", href: "/glossary" },
    ],
    services: [
      { label: "Social Media Management", href: "/social-media" },
      { label: "Short-Form Videos", href: "/short-form-video" },
      { label: "Email Design", href: "/email-design" },
      { label: "SEO Blog Posts", href: "/seo-blog-posts" },
      { label: "SEO Backlinks", href: "/seo-backlinks" },
      { label: "Instagram Growth", href: "/instagram-growth" },
      { label: "Become a Reseller", href: "/become-reseller" },
    ],
    comparisons: [
      { label: "98 Buck Social", href: "/compare/98-buck-social" },
      { label: "Smarcomms", href: "/compare/smarcomms" },
      { label: "SocialSinQ", href: "/compare/socialsinq" },
      { label: "Socinova", href: "/compare/socinova" },
      { label: "Schedult", href: "/compare/schedult" },
    ],
    resources: [
      { label: "Sign Up", href: "/pricing" },
      { label: "Log In", href: "/login" },
      { label: "Referral Program", href: "/referral" },
      { label: "Compare", href: "/compare" },
      { label: "Help Center", href: "/help" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Feedbird Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Feedbird</h3>
            <ul className="space-y-3">
              {footerLinks.feedbird.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Comparisons Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Comparisons</h3>
            <ul className="space-y-3">
              {footerLinks.comparisons.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo and Description */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://ext.same-assets.com/809642106/2924301001.svg"
                alt="Feedbird"
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm max-w-lg">
              Feedbird is a creative subscription service, trusted by 12,000+
              businesses to get exceptional creative services faster, more
              reliably and at the lowest cost. Using technology, we're radically
              changing the process of content creation, making it scalable and
              affordable while maintaining high quality.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center lg:text-right">
            <h3 className="text-2xl font-bold mb-4">Ready to give us a try?</h3>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 mb-4">
              Book a Demo →
            </Button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 mt-8">
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-gray-500">
          <Link href="/terms" className="hover:text-gray-300">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="/refund-policy" className="hover:text-gray-300">
            Refund Policy
          </Link>
        </div>

        {/* Service Status */}
        <div className="mt-8">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-green-400 px-3 py-1 rounded-full text-xs">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            ALL SERVICES OPERATIONAL
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          © Feedbird. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
