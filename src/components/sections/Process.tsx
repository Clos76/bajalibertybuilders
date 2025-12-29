"use client";

import Container from "../ui/Container";

import React, { useState } from "react";
import Link from "next/link";
import AssessmentCTA from "./AssessmentCTA";
import Button from "../ui/Button";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Design Consultation",
    description:
      "We start with a comprehensive discussion about your vision, lifestyle needs, and budget. This is where we understand what 'home' means to you.",
    icon: "💭",
    deliverables: [
      "Initial site visit",
      "Vision board creation",
      "Budget framework",
    ],
    duration: "1-2 weeks",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    number: "02",
    title: "Concept + Budget Alignment",
    description:
      "We develop preliminary designs and provide transparent cost estimates, ensuring your dream home aligns perfectly with your investment goals.",
    icon: "📊",
    deliverables: [
      "3D concept renders",
      "Detailed cost breakdown",
      "Material selections",
    ],
    duration: "2-3 weeks",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    number: "03",
    title: "Architectural & Engineering Plans",
    description:
      "Our licensed architects and engineers create detailed construction documents that meet both U.S. and Mexican building standards.",
    icon: "📐",
    deliverables: [
      "Complete blueprints",
      "Structural engineering",
      "MEP systems design",
    ],
    duration: "4-6 weeks",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    number: "04",
    title: "Permits & Legal Setup",
    description:
      "We handle all the paperwork and setup, construction permits, and municipal approvals—so you don't have to navigate Mexican bureaucracy.",
    icon: "📋",
    deliverables: [
      "Building plans established",
      "Building permits secured",
      "Contract finalized",
    ],
    duration: "3-4 weeks",
    gradient: "from-orange-500 to-red-600",
  },
  {
    number: "05",
    title: "Construction (Milestone Updates)",
    description:
      "Build begins with bi-weekly photo/video updates, milestone inspections, and transparent communication every step of the way.",
    icon: "🏗️",
    deliverables: [
      "Bi-Weekly progress reports",
      "Milestone payments",
      "Quality inspections",
    ],
    duration: "10-12 months",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    number: "06",
    title: "Final Walkthrough & Delivery",
    description:
      "We conduct a comprehensive final inspection with you, address any punch-list items, and hand over the keys to your completed dream home.",
    icon: "🔑",
    deliverables: [
      "Full property inspection",
      "Warranty documentation",
      "Keys & celebration!",
    ],
    duration: "1-2 weeks",
    gradient: "from-indigo-500 to-purple-600",
  },
];

const REASSURANCE_POINTS = [
  {
    icon: "⏱️",
    stat: "10-14 Months",
    label: "Average Timeline",
    description: "Most beachfront homes completed on schedule",
  },
  {
    icon: "📸",
    stat: "Bi-Weekly Updates",
    label: "Progress Reports",
    description: "Photos, videos & detailed status reports",
  },
  {
    icon: "✓",
    stat: "100% Transparent",
    label: "Zero Surprises",
    description: "Fixed milestones & change-order protection",
  },
  {
    icon: "🛡️",
    stat: "Full Warranty",
    label: "Quality Guaranteed",
    description: "Comprehensive warranty on all work",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section
      id="process"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold mb-6 border border-blue-200">
            <span className="text-lg">🏗️</span>
            <span>Our Process</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Proven{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              6-Step Build Process
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            From your first consultation to the day you get your keys, every
            phase is carefully planned, clearly communicated, and designed to
            give you complete peace of mind.
          </p>
        </div>

        {/* Timeline Visual */}
        <div className="mb-16 sm:mb-20">
          <div className="relative">
            {/* Progress Line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gray-200">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 transition-all duration-500"
                style={{
                  width: `${((activeStep + 1) / PROCESS_STEPS.length) * 100}%`,
                }}
              />
            </div>

            {/* Steps Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {PROCESS_STEPS.map((step, index) => (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`relative bg-white rounded-2xl p-6 sm:p-8 border-2 transition-all duration-300 cursor-pointer ${
                    activeStep === index
                      ? "border-blue-500 shadow-2xl scale-105 lg:scale-110"
                      : hoveredStep === index
                      ? "border-gray-300 shadow-lg"
                      : "border-gray-200 shadow-sm hover:shadow-md"
                  }`}
                >
                  {/* Step Number Badge */}
                  <div
                    className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br ${
                      step.gradient
                    } text-white font-bold text-xl flex items-center justify-center shadow-lg ${
                      activeStep === index ? "scale-125" : ""
                    } transition-transform`}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${
                      step.gradient
                    } text-white text-3xl mb-4 shadow-lg ${
                      activeStep === index ? "scale-110" : ""
                    } transition-transform`}
                  >
                    {step.icon}
                  </div>

                  {/* Duration Badge */}
                  <div className="mb-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${step.gradient} text-white text-xs font-bold`}
                    >
                      ⏱️ {step.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div
                    className={`space-y-2 transition-all duration-300 ${
                      activeStep === index
                        ? "opacity-100 max-h-96"
                        : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                  >
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Key Deliverables:
                    </div>
                    {step.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Progress Indicator */}
                  <div
                    className={`mt-4 h-1 rounded-full bg-gradient-to-r ${
                      step.gradient
                    } transition-all duration-500 ${
                      activeStep === index ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Reassurance */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-12 lg:p-16 text-white mb-16 sm:mb-20 overflow-hidden relative shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />

          <div className="relative">
            <div className="text-center mb-10">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-3">
                Your Timeline, Clearly Defined
              </h3>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Most beachfront homes are completed in{" "}
                <span className="font-bold text-white">10–14 months</span> from
                permit approval to final walkthrough.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {REASSURANCE_POINTS.map((point, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {point.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold mb-2">
                    {point.stat}
                  </div>
                  <div className="text-sm font-semibold text-blue-200 mb-2">
                    {point.label}
                  </div>
                  <p className="text-sm text-blue-100">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Comparison: Us vs Others */}
        <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 sm:p-12 shadow-xl">
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Our Process Is Different
            </h3>
            <p className="text-lg text-gray-600">
              We've refined our approach specifically for North American and
              Foreign buyers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Our Approach */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center text-2xl">
                  ✓
                </div>
                <h4 className="text-2xl font-bold text-gray-900">With Us</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Bi-Weekly photo & video updates in English",
                  "Fixed USD pricing with milestone payments",
                  "Dedicated bilingual project manager",
                  "Remote oversight",
                  "Complete legal guidance & permits setup",
                  "North American quality standards",
                  "Transparent change-order process",
                  "Full warranty & post-completion support",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-600 text-xl mt-0.5">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Traditional Approach */}
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-400 text-white flex items-center justify-center text-2xl">
                  ✗
                </div>
                <h4 className="text-2xl font-bold text-gray-600">
                  Traditional Builders
                </h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Sporadic updates, often in Spanish only",
                  "Pricing in pesos subject to exchange rates",
                  "Limited English communication",
                  "Must visit site frequently for oversight",
                  "DIY legal navigation & bureaucracy",
                  "Inconsistent quality standards",
                  "Unclear change-order costs",
                  "Limited post-construction support",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gray-400 text-xl mt-0.5">✗</span>
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Build Journey?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Take our 60-second assessment to get your personalized cost estimate
            and timeline—plus see if you qualify for our 2025 build slots.
          </p>
        </div>

        {/* Assessment CTA - HERO STYLE */}
        <div className="mt-12 -mx-8 sm:-mx-12 lg:-mx-16 px-4">
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500">
            {/* Glowing effect - outside the border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-3xl blur-xl opacity-60 animate-pulse" />

            {/* Inner content */}
            <div className="relative bg-gradient-to-r from-gray-900 to-black rounded-3xl p-10 sm:p-14 lg:p-20 text-center">
              <div className="text-5xl sm:text-6xl mb-6">🏖️</div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to See If You Qualify?
              </h3>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Find out in 2 minutes
              </p>
              <Button
                href="/assessment"
                className="text-xl py-6 px-12 shadow-2xl shadow-amber-500/50"
              >
                Start Your Free Assessment →
              </Button>
              <p className="text-sm text-gray-500 mt-6">
                ✨ 2,847 homeowners have taken this assessment
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
