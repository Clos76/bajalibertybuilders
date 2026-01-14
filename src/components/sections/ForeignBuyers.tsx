"use client";

import React, { useState } from "react";
import Container from "../ui/Container";

/* ----------------------------------
   Image URLs
---------------------------------- */
const heroImage = "/images/puntaPiedra/kitchenBeachView.jpg";

const constructionImage = "/images/puntaPiedra/entry.jpg";
/* ----------------------------------
   Data
---------------------------------- */
const FEATURES = [
  {
    icon: "⚖️",
    title: "Expert Guidance on Building Permits",
    description:
      "We handle the permits and requirements — ensuring you have full rights to build on your beachfront home.",
    gradient: "from-blue-500 to-indigo-600",
    stat: "100% Secure",
  },
  {
    icon: "💵",
    title: "Transparent USD Pricing & Fixed Milestones",
    description:
      "All pricing, contracts, and progress payments are in U.S. dollars with clear milestones and change-order protections.",
    gradient: "from-emerald-500 to-teal-600",
    stat: "Zero Hidden Fees",
  },
  {
    icon: "🗣️",
    title: "English-Speaking Team & Bi-Weekly Reports",
    description:
      "Bilingual project managers provide weekly updates with photos, videos, and timelines — always in English.",
    gradient: "from-purple-500 to-pink-600",
    stat: "Weekly Updates",
  },
  {
    icon: "🏗️",
    title: "North American Quality Standards",
    description:
      "We build to U.S. standards —  We have a team of licensed architects and engineers to help build your home.",
    gradient: "from-orange-500 to-red-600",
    stat: "Premium Quality",
  },
  {
    icon: "🤝",
    title: "Vetted Professional Network",
    description:
      "Trusted notaries, architects, engineers, and attorneys experienced with U.S. & Canadian buyers.",
    gradient: "from-cyan-500 to-blue-600",
    stat: "200+ Professionals",
  },
  {
    icon: "📱",
    title: "Remote Oversight Made Easy",
    description:
      "Live walkthroughs, virtual meetings, and secure approvals let you manage your build from anywhere.",
    gradient: "from-amber-500 to-orange-600",
    stat: "24/7 Access",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Free video call to discuss your vision and budget",
    duration: "30-60 min",
    icon: "💬",
  },
  {
    number: "02",
    title: "Legal Setup",
    description: "Permits, and contracts handled for you",
    duration: "2-4 weeks",
    icon: "📋",
  },
  {
    number: "03",
    title: "Design & Planning",
    description: "Custom architecture and detailed planning",
    duration: "4-8 weeks",
    icon: "📐",
  },
  {
    number: "04",
    title: "Transparent Build",
    description: "Bi-weekly updates with photos and video walkthroughs",
    duration: "10-14 months",
    icon: "🏗️",
  },
];

const COMMON_CONCERNS = [
  {
    concern: "Is it safe to own property in Mexico as a foreigner?",
    answer:
      "Absolutely. The fideicomiso (bank trust) is a secure, government-backed system that's been protecting foreign owners since 1973. You have full rights to use, rent, sell, or pass on your property.",
  },
  {
    concern: "What if I can't visit the site frequently?",
    answer:
      "No problem. We provide Bi-weekly video walkthroughs, live virtual meetings, and a dedicated project portal with photos and progress updates. Many of our clients successfully build from California, Canada, or beyond.",
  },
  {
    concern: "How do payments work across the border?",
    answer:
      "All contracts and payments are in USD. We use secure wire transfers or checks, with milestone-based payments that protect both parties. You only pay when work is completed and approved.",
  },
];

export default function ForeignBuyers() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [expandedConcern, setExpandedConcern] = useState<number | null>(null);

  return (
    <section
      id="foreign-buyers"
      className="relative bg-gradient-to-b from-amber-50 via-orange-100 to-white overflow-hidden"
    >
      {/* Enhanced Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 -right-48 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-20 -left-48 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-100/20 to-blue-100/20 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Enhanced Hero Section */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 sm:mb-28">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 text-blue-800 text-sm font-semibold shadow-sm">
              <span className="text-lg">🇺🇸</span>
              <span>Built for North American and Foreing Buyers</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We Take the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Stress & Confusion
              </span>{" "}
              Out of Building in Baja
            </h2>

            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Building a beachfront home shouldn't feel overwhelming. We guide
              U.S. and Foreign buyers through every step—from permit setup to
              final walkthrough—with full transparency and zero surprises.
            </p>

            {/* Value Prop Box */}
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white p-6 sm:p-8 rounded-2xl shadow-2xl mb-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
              <div className="relative">
                <div className="text-2xl mb-3">🤝</div>
                <p className="font-semibold text-lg mb-2">
                  You're not just hiring a contractor
                </p>
                <p className="text-blue-100">
                  You're gaining a trusted partner who speaks your language,
                  understands your concerns, and protects your investment every
                  step of the way.
                </p>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "200+", label: "Homes Built", icon: "🏡" },
                { number: "15+", label: "Years Experience", icon: "⭐" },
                { number: "98%", label: "Client Satisfaction", icon: "❤️" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="group text-center bg-white p-4 rounded-xl border-2 border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Hero Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Custom beachfront home in Rosarito"
                className="w-full h-[420px] sm:h-[520px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 font-medium">
                        Your Investment
                      </div>
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                        40-60% Less
                      </div>
                    </div>
                    <div className="text-3xl">💰</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Than comparable California coastal properties
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="mb-20 sm:mb-28">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Handled With Care
              </span>
            </h3>
            <p className="text-lg text-gray-600">
              We've designed our process specifically for North American and
              Foreign buyers who want clarity, quality, and peace of mind.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {FEATURES.map((feature, index) => (
                <div
                  key={feature.title}
                  onMouseEnter={() => setActiveFeature(index)}
                  className={`group p-6 text-left rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    activeFeature === index
                      ? "border-blue-500 shadow-xl bg-white scale-105"
                      : "border-gray-200 bg-white hover:shadow-lg hover:border-gray-300"
                  }`}
                >
                  {/* Icon and Stat */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      {feature.icon}
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full bg-gradient-to-r ${feature.gradient} text-white text-xs font-bold shadow-sm`}
                    >
                      {feature.stat}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Progress Bar */}
                  <div
                    className={`mt-4 h-1 rounded-full bg-gradient-to-r ${
                      feature.gradient
                    } transition-all duration-500 ${
                      activeFeature === index ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Sticky Construction Image */}
            <div className="hidden lg:block sticky top-24">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={constructionImage}
                  alt="Construction progress"
                  className="w-full h-[640px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm font-semibold mb-2 text-blue-300">
                    Live Progress Updates
                  </div>
                  <h4 className="text-xl font-bold mb-2">
                    See Your Dream Taking Shape
                  </h4>
                  <p className="text-sm text-gray-200">
                    Monthly photo & video documentation of every milestone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Process Timeline */}
        <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-3xl p-8 sm:p-12 mb-20 sm:mb-28 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              A Simple, Proven Process
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From your first call to move-in day, every step is clearly defined
              and fully transparent.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 -translate-x-1/2" />
                )}

                <div className="relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 text-center group">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-white text-2xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>

                  <div className="text-sm font-bold text-blue-600 mb-2">
                    {step.number}
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-900">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                    ⏱️ {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Concerns FAQ */}
        <div className="mb-20 sm:mb-28">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your Questions,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Answered
              </span>
            </h3>
            <p className="text-lg text-gray-600">
              We understand building across the border raises questions. Here
              are the most common concerns we address.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {COMMON_CONCERNS.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setExpandedConcern(expandedConcern === index ? null : index)
                  }
                  className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg text-gray-900 flex-1">
                    {item.concern}
                  </span>
                  <span
                    className={`text-2xl text-blue-600 transition-transform duration-300 ${
                      expandedConcern === index ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedConcern === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-200 pt-6">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />

          <div className="relative max-w-3xl mx-auto">
            <div className="text-5xl mb-6">🏖️</div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Build Your Beachfront Dream Home?
            </h3>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              Schedule a free, no-obligation consultation and get clear answers
              to all your questions before you commit to anything.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-blue-600 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>📅</span>
                <span>Schedule Free Consultation</span>
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                <span>🏡</span>
                <span>View Our Portfolio</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <span className="text-xl">✓</span>
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">✓</span>
                <span>Free guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">✓</span>
                <span>English-speaking team</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
