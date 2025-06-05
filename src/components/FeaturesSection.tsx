import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🔧 FEATURES
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Seamless experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Feedbird is a flexible subscription-based service enabled by
            technology to deliver compelling creative at scale.
          </p>
        </div>

        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-12">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
            <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
            <TabsTrigger value="scheduling">Scheduling</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="services">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Select services
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Choose services, add-ons, and social platforms to create the
                  perfect package for your business needs.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <span className="font-medium">Social Media Posts</span>
                    <span className="text-blue-600">✓ Selected</span>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                    <span className="font-medium">Short-form Videos</span>
                    <span className="text-gray-400">Add service</span>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                    <span className="font-medium">Email Design</span>
                    <span className="text-gray-400">Add service</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="onboarding">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Quick onboarding
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Get started in minutes with our streamlined onboarding
                  process. Share your brand guidelines and preferences.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                    <span>Brand guidelines uploaded</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                    <span>Social accounts connected</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <span>Content preferences set</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="communication">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Direct communication
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Stay in touch with your dedicated creative team through our
                  built-in messaging system.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        ML
                      </div>
                      <div>
                        <div className="font-semibold">Martin Lawrence</div>
                        <div className="text-sm text-gray-500">3:06 PM</div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      If you need any help, I'm your Account Manager.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        AC
                      </div>
                      <div>
                        <div className="font-semibold">Anna Carlson</div>
                        <div className="text-sm text-gray-500">3:08 PM</div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Thanks Martin, I'll reach out soon about billing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="collaboration">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Easy collaboration
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Review, approve, or request changes with simple approval
                  workflows and feedback tools.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <img
                      src="https://ext.same-assets.com/809642106/3162840347.webp"
                      alt="Content preview"
                      className="w-full h-32 object-cover rounded mb-4"
                    />
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded text-sm">
                        ✓ Approve
                      </button>
                      <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded text-sm">
                        ✗ Decline
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="scheduling">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Flexible scheduling
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Schedule content at optimal times or let our AI determine the
                  best posting schedule for your audience.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="text-center mb-4">
                      <div className="text-xl font-bold">April</div>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center text-sm">
                      <div className="font-medium">Mo</div>
                      <div className="font-medium">Tu</div>
                      <div className="font-medium">We</div>
                      <div className="font-medium">Th</div>
                      <div className="font-medium">Fr</div>
                      <div className="font-medium">Sa</div>
                      <div className="font-medium">Su</div>
                      {[...Array(30)].map((_, i) => (
                        <div
                          key={i}
                          className={`p-2 rounded ${
                            [2, 5, 9, 12, 16, 19, 23, 26, 30].includes(i + 1)
                              ? "bg-blue-100 text-blue-700"
                              : ""
                          }`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Performance analytics
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Track engagement, reach, and growth with detailed analytics
                  and reporting.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">
                        Engagement Rate
                      </span>
                      <span className="text-sm font-bold">4.2%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "84%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Reach</span>
                      <span className="text-sm font-bold">12.5K</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "68%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">
                        Follower Growth
                      </span>
                      <span className="text-sm font-bold">+156</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
