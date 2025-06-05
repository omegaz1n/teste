import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQSection() {
  const faqs = [
    {
      question: "How much does it cost?",
      answer:
        "Our services start from $99/mo for social media posts. Pricing varies based on the services you choose and the volume of content you need.",
    },
    {
      question: "Why are you so affordable?",
      answer:
        "We use efficient processes and technology to deliver high-quality content at scale, allowing us to offer premium services at affordable prices.",
    },
    {
      question: "Where is Feedbird's team located?",
      answer:
        "Our team is distributed globally, with team members in various locations to provide round-the-clock service and diverse creative perspectives.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply choose your service package, complete our onboarding questionnaire, and we'll start creating content for your brand within 48 hours.",
    },
    {
      question: "What happens after I sign up?",
      answer:
        "After signing up, you'll receive an onboarding questionnaire to understand your brand, goals, and preferences. Then we'll start creating your first batch of content.",
    },
    {
      question: "How will I communicate with your team?",
      answer:
        "You'll have access to a dedicated client portal where you can communicate directly with your account manager and creative team.",
    },
    {
      question: "What happens if I don't like what you create?",
      answer:
        "We offer unlimited revisions to ensure you're completely satisfied with the content. Our goal is to create content that perfectly represents your brand.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time with no long-term contracts or cancellation fees. We believe in earning your business every month.",
    },
    {
      question: "Are there any refunds if I don't like the service?",
      answer:
        "We offer a satisfaction guarantee. If you're not happy with our service in the first 30 days, we'll work to make it right or provide a refund.",
    },
    {
      question: "How often am I charged?",
      answer:
        "All subscriptions are billed monthly on the same date you initially subscribed. You can upgrade, downgrade, or cancel at any time.",
    },
    {
      question: "Which services do you offer?",
      answer:
        "We offer social media posts, short-form videos, email design, SEO blog posts, SEO backlinks, Instagram growth, and Meta ads management.",
    },
    {
      question: "Where do you get the visuals from?",
      answer:
        "We create custom visuals using professional design tools, stock photography, and original photography when needed. All content is unique to your brand.",
    },
    {
      question: "Is the content custom made just for me?",
      answer:
        "Yes, all content is created specifically for your brand based on your guidelines, industry, and target audience. We never reuse content between clients.",
    },
    {
      question: "Do I need to share my login details?",
      answer:
        "No, you don't need to share login credentials. We can work through approval processes, or you can add us as contributors to your social media accounts.",
    },
    {
      question: "I want to resell your service to my clients",
      answer:
        "We have a reseller program available. Contact us to learn about partnership opportunities and white-label solutions for agencies and consultants.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - FAQ */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              ❓ QUESTIONS & ANSWERS
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently asked questions
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              If you have any questions that aren't listed below, feel free to{" "}
              <Link
                href="/schedule-demo"
                className="text-blue-600 hover:underline"
              >
                schedule a demo
              </Link>{" "}
              to speak with someone from our team.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column - CTA */}
          <div className="lg:sticky lg:top-8">
            <div className="text-center bg-gray-50 rounded-2xl p-8">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">👋</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get started with a<br />
                free strategy call!
              </h3>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 mb-6">
                Schedule Demo →
              </Button>

              <p className="text-sm text-gray-600">
                Book a 20-minute call with someone from our team and get any of
                your questions answered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
