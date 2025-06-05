"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useState } from "react";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const mainTestimonial = {
    quote:
      "Hands down the best social media service. It's like Hootsuite, but they create amazing content for us and post to our socials after we approve",
    author: "Filip N.",
    title: "CMO at Reflectly",
    avatar: "https://ext.same-assets.com/809642106/3756183460.jpeg",
    verified: true,
  };

  const videoTestimonials = [
    {
      id: 1,
      thumbnail: "https://ext.same-assets.com/809642106/2374665417.jpeg",
      quote: "Smooth process",
      author: "Client 1",
    },
    {
      id: 2,
      thumbnail: "https://ext.same-assets.com/809642106/3584504985.webp",
      quote: "They made beautiful posts",
      author: "Client 2",
    },
    {
      id: 3,
      thumbnail: "https://ext.same-assets.com/809642106/3428435091.jpeg",
      quote: "Great quality work",
      author: "Client 3",
    },
    {
      id: 4,
      thumbnail: "https://ext.same-assets.com/809642106/4077418478.jpeg",
      quote: "Fast and very responsive",
      author: "Client 4",
    },
  ];

  const writtenTestimonials = [
    {
      quote:
        "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!",
      author: "Cecilia M.",
      title: "Co-Founder",
      avatar: "https://ext.same-assets.com/809642106/3756183460.jpeg",
      verified: true,
    },
    {
      quote:
        "There is little for me to do, other than send an email with updates about my business which they transform into beautiful social media posts.",
      author: "Timothy Y.",
      title: "CEO",
      avatar: "https://ext.same-assets.com/809642106/3756183460.jpeg",
      verified: true,
    },
    {
      quote:
        "They have saved me so much time and effort with handling my social media posting, I now have more time for other areas of my business!",
      author: "Tim S.",
      title: "Founder & CEO",
      avatar: "https://ext.same-assets.com/809642106/3756183460.jpeg",
      verified: true,
    },
    {
      quote:
        "Consistent, quality content that accurately represents my brand. The increase in social engagement and followers since I started using Feedbird is impressive.",
      author: "Isaac S.",
      title: "Product Marketing Manager",
      avatar: "https://ext.same-assets.com/809642106/3756183460.jpeg",
      verified: true,
    },
    {
      quote:
        "Feedbird is the best. Solid, reliable posts for a very fair price. Could not be happier with Feedbird",
      author: "Stephen K.",
      title: "Founder & CEO",
      avatar: "https://ext.same-assets.com/809642106/3756183460.jpeg",
      verified: true,
    },
    {
      quote:
        "Absolutely incredible company. I have told everyone about Feedbird. Always relevant, engaging content and fantastic visual designs.",
      author: "Amy M.",
      title: "Founder",
      avatar: "https://ext.same-assets.com/809642106/3756183460.jpeg",
      verified: true,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) =>
        (prev - 1 + videoTestimonials.length) % videoTestimonials.length,
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Wall of Love Badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            💙 WALL OF LOVE
          </div>

          <blockquote className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-4xl mx-auto mb-8">
            "Hands down the{" "}
            <span className="text-blue-600">best social media service</span>.
            It's like Hootsuite, but they create amazing content for us and post
            to our socials after we approve"
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <img
              src={mainTestimonial.avatar}
              alt={mainTestimonial.author}
              className="w-12 h-12 rounded-full"
            />
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{mainTestimonial.author}</span>
                {mainTestimonial.verified && (
                  <span className="text-blue-500">✓</span>
                )}
              </div>
              <div className="text-gray-600 text-sm">
                {mainTestimonial.title}
              </div>
            </div>
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="relative mb-16">
          <div className="flex items-center justify-center gap-8 overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 z-10 bg-white shadow-lg rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex gap-6 transition-transform duration-300">
              {videoTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`relative flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    index === currentTestimonial
                      ? "w-80 h-64"
                      : "w-64 h-48 opacity-60"
                  }`}
                >
                  <img
                    src={testimonial.thumbnail}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-semibold text-lg">
                      "{testimonial.quote}"
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 z-10 bg-white shadow-lg rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Written Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {writtenTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <blockquote className="text-gray-700 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{testimonial.author}</span>
                    {testimonial.verified && (
                      <span className="text-blue-500">✓</span>
                    )}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="flex items-center gap-3 justify-center mb-4">
            <img
              src="https://ext.same-assets.com/809642106/3756183460.jpeg"
              alt="Scott R."
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Scott R.</span>
                <span className="text-blue-500">✓</span>
              </div>
              <div className="text-gray-600 text-sm">Managing Partner</div>
            </div>
          </div>
          <blockquote className="text-lg text-gray-700 max-w-4xl mx-auto">
            "Feedbird creates social media content that is better and more
            affordable than what we can produce in-house. Went from 6 hours per
            client to just the 15 minutes needed for review and approval. They
            do this at a price that's one-third of our in-house cost and the
            margins we derived from offering SMM to clients doubled because of
            Feedbird."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
