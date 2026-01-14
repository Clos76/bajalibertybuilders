import React from "react";

import Container from "../ui/Container";
import Button from "../ui/Button";
import { BUILD_ID_FILE } from "next/dist/shared/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Background Image with overlay */}

      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/puntaPiedra/customKitchenPuntaPiedra.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Animated Gradient Accent  */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 via-transparent to-blue-600/20 animate-pulse"
          style={{ animationDuration: "4s" }}
        />
      </div>

      {/*Container */}
      <Container className="relative z-20 py-20 sm:py-24">
        <div className="max-w-4xl">
          {/*Eyebrow text */}
          <div className="inline-flex item-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 sm:mb-8">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            <span className="text-sm sm:text-base text-white/90 font-medium"></span>
            Trusted by 200+ US Homeowners
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
          Are You Ready To Build Your Custom{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            Beachfront Home
          </span>{" "}
          in Baja California?
        </h1>

        {/* Subheading */}
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-gray=200 leading-relaxed max-w-2xl">
          California-Style and Mediterranean villas build for U.S. & Foreign
          buyers, with{" "}
          <span className="text-amber-400 font-semibold">
            full build guidance
          </span>{" "}
          and{" "}
          <span className="text-amber-400 font-semibold">
            transparent timelines
          </span>
        </p>

        {/* Lead */}
        <div className="mt-8 text-center p-6 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl border border-amber-400/30 backdrop-blur-sm">
          <p className="text-2xl md:text-3xl font-bold text-white mb-2 ">
            Get Your Free Build Cost & Timeline Report
          </p>
          <p className="text-lg text-gray-200 ">
            10 quick questions · Instant results · 2,847 homeowners trust us
          </p>
          <Button className="mt-4" href="/assessment">
            Start Your Free Assessment →
          </Button>
        </div>

        {/* Key Benefits -mobile optim */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl">
          {[
            { icon: "💰", text: "40% Less Than CA" },
            { icon: "⚖️", text: "Full Building Permit Support" },
            { icon: "⏱️", text: "10-14 Month Build" },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 "
            >
              <span className="text-2xl">{benefit.icon}</span>
              <span className="text-white font-medium text-sm sm:text-base">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons*
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4">
          <Button href="#lead-magnet">📥 Download Planning Guide</Button>
          <Button variant="outline" href="#portfolio">
            🏡 View Portfolio
          </Button>
        </div> */}

        {/* * Trust Indicators
        <div className="mt-10 sm:mt-12 flex flex-wrap item-center gap-6 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-40 to-orange-600 border-2 border-black "
                ></div>
              ))}
            </div>
            <span>200+ Happy Homeowners</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-amber-400">★★★★★</span>
            <span className="ml-1">4.9/5 Rating</span>
          </div>
        </div> */}
      </Container>

      {/**Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 rounded-full border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
