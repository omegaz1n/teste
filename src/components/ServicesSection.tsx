import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: "📱",
      title: "Social Media Posts",
      description:
        "Static, single-image social media content created & posted directly to your channels.",
      price: "$99",
      priceNote: "Pricing from",
      features: ["10 posts - $99/mo"],
      buttonText: "Checkout →",
      learnMore: true,
    },
    {
      icon: "🎬",
      title: "Short-Form Videos",
      description: "Simple 15-60 second videos for TikTok, Reels, and Shorts.",
      price: "$99",
      priceNote: "Pricing from",
      features: ["4 videos - $99/mo"],
      buttonText: "Checkout →",
      learnMore: true,
    },
    {
      icon: "📧",
      title: "Email Design",
      description:
        "Custom emails for your campaigns & flows. Works with any email platform.",
      price: "$149",
      priceNote: "Pricing from",
      features: ["2 emails - $149/mo"],
      buttonText: "Checkout →",
      learnMore: true,
    },
    {
      icon: "✍️",
      title: "Blog Posts",
      description:
        "Full-length blog posts written by content specialists. SEO optimized and well researched.",
      price: "$149",
      priceNote: "Pricing from",
      features: ["2 blog posts - $149/mo"],
      buttonText: "Checkout →",
      learnMore: true,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            All Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your creative & marketing work done without the hassle of
            unreliable freelancers, costly agencies. Pay a fixed, monthly, and
            predictable rate, with no contracts or surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl mx-auto mb-4">
                  {service.icon}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                  {service.icon === "📱"
                    ? "SOCIAL MEDIA"
                    : service.icon === "🎬"
                      ? "SOCIAL MEDIA"
                      : service.icon === "📧"
                        ? "EMAIL MARKETING"
                        : "SEO"}
                </div>
                <CardTitle className="text-xl font-bold">
                  {service.title}
                </CardTitle>
                <p className="text-sm text-gray-600 mt-2">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold mb-1">{service.price}</div>
                  <div className="text-sm text-gray-500">
                    {service.priceNote}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {service.buttonText}
                  </Button>
                  {service.learnMore && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-blue-600 hover:text-blue-700"
                    >
                      Learn more ℹ️
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reseller Section */}
        <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  Looking to resell our services to your clients?
                </h3>
                <p className="text-gray-600">
                  Apply to join the Feedbird reseller program
                </p>
              </div>
            </div>
            <Button className="bg-black hover:bg-gray-800">
              Apply to become a reseller
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
