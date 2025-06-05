"use client";

import { Button } from "@/components/ui/button";
import { Bookmark, Heart, MessageCircle, Share } from "lucide-react";
import { useState } from "react";

export default function SocialMediaGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Beauty");

  const categories = [
    "Beauty",
    "Skincare",
    "Real Estate",
    "Dental Clinic",
    "Food Products",
    "Yoga",
  ];

  const posts = [
    {
      id: 1,
      image: "https://ext.same-assets.com/809642106/3058445463.webp",
      category: "Beauty",
    },
    {
      id: 2,
      image: "https://ext.same-assets.com/809642106/1387243388.webp",
      category: "Skincare",
    },
    {
      id: 3,
      image: "https://ext.same-assets.com/809642106/810408623.webp",
      category: "Food Products",
    },
    {
      id: 4,
      image: "https://ext.same-assets.com/809642106/3162840347.webp",
      category: "Beauty",
    },
    {
      id: 5,
      image: "https://ext.same-assets.com/809642106/121578953.webp",
      category: "Skincare",
    },
    {
      id: 6,
      image: "https://ext.same-assets.com/809642106/322769880.webp",
      category: "Real Estate",
    },
    {
      id: 7,
      image: "https://ext.same-assets.com/809642106/1008709916.webp",
      category: "Food Products",
    },
    {
      id: 8,
      image: "https://ext.same-assets.com/809642106/3297031469.webp",
      category: "Yoga",
    },
  ];

  const filteredPosts = posts.filter(
    (post) => post.category === selectedCategory,
  );

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Button variant="outline" size="sm" className="mb-6">
            📸 MORE EXAMPLES
          </Button>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Social Media Grid Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our branded masterpieces, where every post fits into a
            larger, cohesive picture.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm px-6 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-orange-100 text-orange-700 border-orange-200"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              {category === "Beauty" && "💄"}
              {category === "Skincare" && "🧴"}
              {category === "Real Estate" && "🏠"}
              {category === "Dental Clinic" && "🦷"}
              {category === "Food Products" && "🍽️"}
              {category === "Yoga" && "🧘"}
              {" " + category}
            </Button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 p-3 border-b">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  F
                </div>
                <div>
                  <div className="font-semibold text-xs">Feedbird</div>
                </div>
                <div className="ml-auto text-sm">⋯</div>
              </div>

              <img
                src={post.image}
                alt="Social media post"
                className="w-full aspect-square object-cover"
              />

              <div className="p-3">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 hover:text-red-500 cursor-pointer" />
                  <MessageCircle className="w-5 h-5 hover:text-gray-600 cursor-pointer" />
                  <Share className="w-5 h-5 hover:text-gray-600 cursor-pointer" />
                  <Bookmark className="w-5 h-5 ml-auto hover:text-gray-600 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Grid Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-30">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="bg-blue-100 rounded-lg aspect-square"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
