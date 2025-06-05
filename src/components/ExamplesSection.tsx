"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bookmark, Heart, MessageCircle, Share } from "lucide-react";
import { useState } from "react";

export default function ExamplesSection() {
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  const categories = [
    "Featured",
    "Beauty Services",
    "Food & Beverages",
    "Health & Wellness",
    "Home Services",
    "Products",
    "Professional Services",
    "Real Estate",
    "SaaS & Tech",
    "Travel",
  ];

  const posts = [
    {
      id: 1,
      image: "https://ext.same-assets.com/809642106/1826841787.webp",
      category: "Beauty Services",
      likes: 234,
      comments: 12,
    },
    {
      id: 2,
      image: "https://ext.same-assets.com/809642106/3189594602.png",
      category: "Travel",
      likes: 156,
      comments: 8,
    },
    {
      id: 3,
      image: "https://ext.same-assets.com/809642106/2247974444.webp",
      category: "Products",
      likes: 89,
      comments: 15,
    },
    {
      id: 4,
      image: "https://ext.same-assets.com/809642106/2913097516.webp",
      category: "Food & Beverages",
      likes: 345,
      comments: 23,
    },
    {
      id: 5,
      image: "https://ext.same-assets.com/809642106/3688615205.webp",
      category: "Travel",
      likes: 278,
      comments: 19,
    },
    {
      id: 6,
      image: "https://ext.same-assets.com/809642106/3383584715.webp",
      category: "Health & Wellness",
      likes: 134,
      comments: 7,
    },
  ];

  const filteredPosts =
    selectedCategory === "Featured"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Examples of our work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your design & marketing work done without the hassle of
            unreliable freelancers, costly agencies. Pay a fixed, monthly, and
            predictable rate, with no contracts or surprises.
          </p>
        </div>

        <Tabs defaultValue="Posts" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12">
            <TabsTrigger value="Posts" className="flex items-center gap-2">
              <span>📱</span>
              Posts
            </TabsTrigger>
            <TabsTrigger value="Videos" className="flex items-center gap-2">
              <span>🎬</span>
              Videos
            </TabsTrigger>
            <TabsTrigger value="Emails" className="flex items-center gap-2">
              <span>📧</span>
              Emails
            </TabsTrigger>
            <TabsTrigger value="Blogs" className="flex items-center gap-2">
              <span>✍️</span>
              Blogs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="Posts">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 p-4 border-b">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      F
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Feedbird</div>
                      <div className="text-xs text-gray-500">Sponsored</div>
                    </div>
                    <div className="ml-auto">⋯</div>
                  </div>

                  <img
                    src={post.image}
                    alt="Social media post"
                    className="w-full aspect-square object-cover"
                  />

                  <div className="p-4">
                    <div className="flex items-center gap-4 mb-3">
                      <Heart className="w-6 h-6 hover:text-red-500 cursor-pointer" />
                      <MessageCircle className="w-6 h-6 hover:text-gray-600 cursor-pointer" />
                      <Share className="w-6 h-6 hover:text-gray-600 cursor-pointer" />
                      <Bookmark className="w-6 h-6 ml-auto hover:text-gray-600 cursor-pointer" />
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">{post.likes}</span> likes
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg">
                Load more
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="Videos">
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">Short-Form Videos</h3>
              <p className="text-gray-600 mb-8">
                Engaging video content for your social media channels
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <span className="text-4xl">🎬</span>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <span className="text-4xl">✨</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="Emails">
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">Email Designs</h3>
              <p className="text-gray-600 mb-8">
                Beautiful email templates that convert
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-100 rounded-lg aspect-[4/5] flex items-center justify-center">
                  <span className="text-4xl">📧</span>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-[4/5] flex items-center justify-center">
                  <span className="text-4xl">💌</span>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-[4/5] flex items-center justify-center">
                  <span className="text-4xl">📮</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="Blogs">
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">SEO Blog Posts</h3>
              <p className="text-gray-600 mb-8">
                High-quality content that ranks and converts
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-100 rounded-lg aspect-[4/3] flex items-center justify-center">
                  <span className="text-4xl">✍️</span>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-[4/3] flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-[4/3] flex items-center justify-center">
                  <span className="text-4xl">📊</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
