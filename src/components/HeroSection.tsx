"use client";

import { Button } from "@/components/ui/button";
import { Bookmark, Check, Heart, MessageCircle, Share } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: "🎬",
      title: "Short-Form Videos",
      image: "https://ext.same-assets.com/809642106/3878752110.png",
    },
    {
      icon: "📱",
      title: "Social Media Posts",
      image: "https://ext.same-assets.com/809642106/866148084.png",
      hasInteractions: true,
    },
    {
      icon: "📱",
      title: "Social Media Posts",
      image: "https://ext.same-assets.com/809642106/2993250603.png",
      hasInteractions: true,
    },
    {
      icon: "📸",
      title: "Instagram Stories",
      image: "https://ext.same-assets.com/809642106/2506643447.png",
    },
    {
      icon: "📈",
      title: "Instagram Growth",
      content: (
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="text-sm text-gray-600 mb-2">Instagram Growth</div>
          <div className="space-y-3">
            <div>
              <div className="text-xs text-gray-500">Followers</div>
              <div className="text-2xl font-bold">8.4K</div>
              <div className="text-green-500 text-xs">+648%</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Last 3 months</div>
              <div className="text-2xl font-bold">129K</div>
              <div className="text-green-500 text-xs">+68</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: "📧",
      title: "Email Design",
      image: "https://ext.same-assets.com/809642106/3220331445.png",
    },
  ];

  const socialIcons = [
    "https://ext.same-assets.com/809642106/1253732697.svg", // Facebook
    "https://ext.same-assets.com/809642106/839331577.svg", // Instagram
    "https://ext.same-assets.com/809642106/3904589956.svg", // LinkedIn
    "https://ext.same-assets.com/809642106/490787819.svg", // Pinterest
    "https://ext.same-assets.com/809642106/2179754786.svg", // TikTok
    "https://ext.same-assets.com/809642106/1069089541.svg", // YouTube
    "https://ext.same-assets.com/809642106/770780318.svg", // Discord
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const InstagramPost = ({
    image,
    hasInteractions,
  }: { image: string; hasInteractions?: boolean }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm">
      <div className="flex items-center gap-3 p-3 border-b">
        <img
          src="https://ext.same-assets.com/809642106/2983385468.png"
          alt="Business"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <div className="font-semibold text-sm">Business</div>
          <div className="text-xs text-gray-500">Sponsored</div>
        </div>
        <img
          src="https://ext.same-assets.com/809642106/2531785305.svg"
          alt="Instagram"
          className="w-4 h-4 ml-auto"
        />
      </div>
      <img
        src={image}
        alt="Post"
        className="w-full aspect-square object-cover"
      />
      {hasInteractions && (
        <div className="p-3">
          <div className="flex items-center gap-4 mb-2">
            <Heart className="w-6 h-6" />
            <MessageCircle className="w-6 h-6" />
            <Share className="w-6 h-6" />
            <Bookmark className="w-6 h-6 ml-auto" />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <img
                src="https://ext.same-assets.com/809642106/2420194156.svg"
                alt="Star"
                className="w-4 h-4"
              />
              <span className="font-medium">
                TOP 1% OF GLOBAL CREATIVE TALENT
              </span>
            </div>

            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Expert social media management from only{" "}
                <span className="text-blue-600">$99/mo</span>
              </h1>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">
                  <strong>Premium</strong> content with your branding
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">
                  <strong>80% cheaper</strong> than alternatives
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">
                  Made by real people - <strong>not AI</strong>
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
              >
                Schedule a free demo call
                <span className="ml-2">→</span>
              </Button>

              <div className="text-sm text-gray-600">
                <span>Trusted by </span>
                <strong>12,000+</strong>
                <span> businesses</span>
              </div>

              <div className="text-sm text-gray-500">Cancel anytime</div>
            </div>

            <div>
              <div className="text-sm text-gray-600 mb-3">
                Supported social media channels
              </div>
              <div className="flex items-center gap-3">
                {socialIcons.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt="Social platform"
                    className="w-8 h-8"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Animated Service Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Animated service cards */}
              <div className="space-y-4">
                <div className="transform transition-all duration-500 hover:scale-105">
                  {services[currentIndex]?.content || (
                    <InstagramPost
                      image={services[currentIndex]?.image || services[0].image}
                      hasInteractions={services[currentIndex]?.hasInteractions}
                    />
                  )}
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="transform transition-all duration-500 hover:scale-105">
                  <InstagramPost
                    image={
                      services[(currentIndex + 1) % services.length]?.image ||
                      services[1].image
                    }
                    hasInteractions={
                      services[(currentIndex + 1) % services.length]
                        ?.hasInteractions
                    }
                  />
                </div>

                {/* Instagram Growth Chart */}
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-sm text-gray-600 mb-2">
                    Instagram Growth
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-gray-500">Followers</div>
                      <div className="text-2xl font-bold">8.4K</div>
                      <div className="text-green-500 text-xs">+648%</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Last 3 months</div>
                      <div className="text-2xl font-bold">129K</div>
                      <div className="text-green-500 text-xs">+68</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
