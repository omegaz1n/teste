"use client";

import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

export default function BeforeAfterSection() {
  const [currentClient, setCurrentClient] = useState(0);

  const clients = [
    "KokoKai Foods LLC",
    "Crystal Imagery",
    "True North Wellness",
    "No Place Like Home",
    "Darkhorse Solutions Elevation",
    "Bare Addiction",
    "Velofree",
  ];

  const beforeAfterData = {
    before: {
      title: "Before",
      image: "https://ext.same-assets.com/809642106/1725508684.webp",
      issues: [
        "Inconsistent visual identity across posts",
        "Basic stock-like content without personality",
        "Limited content variety and formats",
        "Missed engagement opportunities",
      ],
    },
    after: {
      title: "After",
      image: "https://ext.same-assets.com/809642106/1731088653.webp",
      benefits: [
        "Strong brand consistency across posts",
        "Custom designed content that stands out",
        "Diverse content mix to keep feeds fresh",
        "Strategic content that drives engagement",
      ],
    },
  };

  const nextClient = () => {
    setCurrentClient((prev) => (prev + 1) % clients.length);
  };

  const prevClient = () => {
    setCurrentClient((prev) => (prev - 1 + clients.length) % clients.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Fully managed marketing services
            <br />
            for small businesses
          </h2>
        </div>

        {/* Before/After Comparison */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Before */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Before Feedbird.
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              {beforeAfterData.before.issues.map((issue, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-gray-700">{issue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">After Feedbird.</h3>
            </div>

            <div className="space-y-4 mb-8">
              {beforeAfterData.after.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-blue-50">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Showcase Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            📸 CLIENT WORK
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Before & After
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our social media makeovers and brand transformations.
          </p>
        </div>

        {/* Client Selector */}
        <div className="flex items-center justify-center gap-4 mb-8 overflow-x-auto">
          {clients.map((client, index) => (
            <Button
              key={index}
              variant={currentClient === index ? "default" : "outline"}
              onClick={() => setCurrentClient(index)}
              className="whitespace-nowrap text-sm"
            >
              {client}
            </Button>
          ))}
        </div>

        {/* Before/After Images */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Before</h3>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://ext.same-assets.com/809642106/1725508684.webp"
                alt="Before transformation"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">After</h3>
            <div className="bg-blue-50 rounded-lg overflow-hidden">
              <img
                src="https://ext.same-assets.com/809642106/1731088653.webp"
                alt="After transformation"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevClient}
            className="rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <span className="text-sm text-gray-500">
            {currentClient + 1} / {clients.length}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextClient}
            className="rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
