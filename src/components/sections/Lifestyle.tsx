"use client";
import React, { useState } from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";

const VALUE_POINTS = [
  {
    icon: "💰",
    title: "40-60% Lower Build Costs",
    description:
      "Build a luxury custom home for significantly less than comparable coastal properties in Southern California -without comprimising desing or quality.",
    stat: "Save $400K+",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: "🏖️",
    title: "True Beachfront Living",
    description:
      "Oceanfront and panaromic-view properties that are increasingly rare and oftern unattainable in California coastal markets.",
    stat: "50+ Beachfront Lots",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: "😎",
    title: "Year-Round Coastal Lifestyle",
    description:
      "Mild climate, ocean breezes, and proximity to the U.S. make Baja ideal for vacation homes, retirement living, or long-term investment.",
    stat: "300+ Sunny Days",
    gradient: "from-amber-500 to-orange-600",
  },
];

const LIFESTYLE_FEATURES = [
  { label: "30 min to San Diego", icon: "🚗" },
  { label: "World-Class Surfing", icon: "🏄" },
  { label: "Wine Country Nearby", icon: "🍷" },
  { label: "Fresh Seafood Daily", icon: "🦞" },
];

export default function Lifestyle() {
  const [activePoint, setActivePoint] = useState(0);

  return (
    <section
      id="lifestyle"
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 text-sm font-semibold mb-4">
            <span className="text-lg">🌊</span>
            <span>Lifestyle & Value</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Build on the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Baja Coast?
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Baja California offers a rare combination of beachfront access,
            architectural freedom, and long-term value — especially for U.S. &
            Canadian buyers seeking more than just a second home.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center mb-12 sm:mb-16">
          {/* Image with Overlays */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/puntaPiedra/poolAmenity.jpg"
                alt="Beachfront lifestyle in Rosarito and Ensenada"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Floating Stats Cards */}
              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 font-medium">
                        Average Home Value
                      </div>
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                        $650K - $1.2M
                      </div>
                    </div>
                    <div className="text-3xl">🏡</div>
                  </div>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 font-medium">
                        California Equivalent
                      </div>
                      <div className="text-2xl font-bold text-gray-400 line-through">
                        $1.5M - $3M+
                      </div>
                    </div>
                    <div className="text-3xl">💸</div>
                  </div>
                </div>
              </div>

              {/* Top Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  🔥 High Demand Area
                </div>
              </div>
            </div>

            {/* Lifestyle Features */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {LIFESTYLE_FEATURES.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-sm font-semibold text-gray-700">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Value Points */}
          <div className="space-y-6 order-1 lg:order-2">
            {VALUE_POINTS.map((point, index) => (
              <div
                key={index}
                className={`group relative p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  activePoint === index
                    ? "bg-white border-amber-400 shadow-xl shadow-amber-500/20 scale-105"
                    : "bg-white/50 border-gray-200 hover:border-gray-300 hover:shadow-lg"
                }`}
                onMouseEnter={() => setActivePoint(index)}
              >
                {/* Icon Badge */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${point.gradient} text-white text-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform`}
                >
                  {point.icon}
                </div>

                {/* Stat Badge */}
                <div className="absolute top-6 right-6">
                  <div
                    className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${point.gradient} text-white text-xs font-bold shadow-md`}
                  >
                    {point.stat}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 transition-all">
                  {point.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>

                {/* Progress Indicator */}
                <div
                  className={`mt-4 h-1 rounded-full bg-gradient-to-r ${
                    point.gradient
                  } transition-all duration-300 ${
                    activePoint === index ? "w-full" : "w-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Chart */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-10 lg:p-12 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              See the Real Value Difference
            </h3>
            <p className="text-gray-300 text-lg">
              Compare what you get for your investment
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {/* Baja Column */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 sm:p-8 transform hover:scale-105 transition-transform">
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-3">
                  🌊 Baja California
                </div>
                <div className="text-4xl font-bold">$700K</div>
                <div className="text-emerald-100 text-sm mt-1">
                  Average Investment
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "4,000 sq ft custom home",
                  "Beachfront or ocean view lot",
                  "Premium finishes & materials",
                  "Infinity pool & outdoor living",
                  "10-14 month build timeline",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-white text-xl mt-0.5">✓</span>
                    <span className="text-white/95">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* California Column */}
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 sm:p-8">
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold mb-3">
                  🏖️ Southern California
                </div>
                <div className="text-4xl font-bold text-gray-400 line-through">
                  $1.8M+
                </div>
                <div className="text-gray-300 text-sm mt-1">
                  Comparable Property
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Smaller home (2,500-3,000 sq ft)",
                  "Limited coastal availability",
                  "Standard builder finishes",
                  "Basic outdoor space",
                  "18-24 month timeline + permits",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gray-400 text-xl mt-0.5">○</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <span>📊</span>
              <span>
                <Link href="#contact">Get Your Custom Cost Estimate</Link>
              </span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
