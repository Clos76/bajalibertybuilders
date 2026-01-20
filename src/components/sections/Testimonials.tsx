"use client";
import React, { useState } from "react";

import Container from "../ui/Container";
import Link from "next/link";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Jennifer & Mark Patterson",
    location: "San Diego, California",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    quote:
      "Building in Mexico felt overwhelming at first, but this team made everything crystal clear. Weekly video updates, English-speaking project managers, and complete transparency on costs meant we never felt in the dark. Our beachfront home in Rosarito exceeded our expectations.",
    outcome: "3,600 sq ft California Contemporary",
    videoUrl: null, // Set to video URL if available
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    name: "Robert Chen",
    location: "Vancouver, Canada",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    quote:
      "As a Canadian buyer, I was nervous about the legal process and building remotely. The team handled everything—from building permit setup to final walkthrough. They even helped me navigate currency exchange. The entire process took 13 months and came in under budget.",
    outcome: "4,200 sq ft Mediterranean Villa",
    videoUrl: null,
    rating: 5,
    featured: true,
  },
  {
    id: 3,
    name: "Susan & David Miller",
    location: "Orange County, California",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    quote:
      "We visited the site three times during construction, but honestly, the weekly photo and video reports made us feel like we were there every day. The quality is exceptional—better than our California home—at a fraction of the cost.",
    outcome: "3,800 sq ft Oceanfront Home",
    videoUrl: null,
    rating: 5,
    featured: false,
  },
];

const TRUST_STATS = [
  { number: "98%", label: "Client Satisfaction", icon: "❤️" },
  { number: "200+", label: "Homes Delivered", icon: "🏡" },
  { number: "4.9/5", label: "Average Rating", icon: "⭐" },
  { number: "15+", label: "Years Experience", icon: "🏆" },
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const featuredTestimonials = TESTIMONIALS.filter((t) => t.featured);

  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -right-64 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -left-64 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold mb-6 border border-blue-200">
            <span className="text-lg">💬</span>
            <span>Client Stories</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hear From{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              U.S. & Foreing
            </span>{" "}
            Homeowners
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Real stories from buyers who trusted us with their dream home
            investment in Baja California.
          </p>
        </div>

        {/* Featured Testimonials - Large Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mb-16 sm:mb-20">
          {featuredTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-200"
            >
              {/* Video Badge if available */}
              {testimonial.videoUrl && (
                <div className="absolute top-6 right-6 z-10">
                  <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-bold shadow-lg flex items-center gap-1">
                    <span>▶</span>
                    <span>VIDEO</span>
                  </div>
                </div>
              )}

              <div className="p-8 sm:p-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-amber-400">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 relative">
                  <span className="text-6xl text-blue-200 absolute -top-4 -left-2 font-serif">
                    "
                  </span>
                  <p className="relative z-10">{testimonial.quote}</p>
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-6 border-t-2 border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-lg text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      {testimonial.location}
                    </div>
                    <div className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      {testimonial.outcome}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Third Testimonial - Compact Row */}
        {TESTIMONIALS.filter((t) => !t.featured).map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl shadow-2xl overflow-hidden mb-16 sm:mb-20"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8 sm:p-12 items-center text-white">
              {/* Left: Client Photo & Info */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-2xl mb-6"
                />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-amber-300">
                      ★
                    </span>
                  ))}
                </div>
                <div className="font-bold text-2xl mb-2">
                  {testimonial.name}
                </div>
                <div className="text-blue-200 mb-2">{testimonial.location}</div>
                <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold">
                  {testimonial.outcome}
                </div>
              </div>

              {/* Right: Quote */}
              <div className="relative">
                <span className="text-8xl text-white/20 absolute -top-8 -left-4 font-serif">
                  "
                </span>
                <blockquote className="text-xl leading-relaxed relative z-10 text-blue-50">
                  {testimonial.quote}
                </blockquote>
              </div>
            </div>
          </div>
        ))}

        {/* Trust Statistics Bar */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border-2 border-gray-100 mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Trusted by North American and Foreing Buyers
            </h3>
            <p className="text-gray-600">Our track record speaks for itself</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_STATS.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof Badges */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-200 text-center">
            <div className="text-4xl mb-3">✓</div>
            <div className="font-bold text-lg text-gray-900 mb-2">
              Licensed & Insured
            </div>
            <div className="text-sm text-gray-600">
              Fully compliant with Mexican building regulations
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200 text-center">
            <div className="text-4xl mb-3">🏆</div>
            <div className="font-bold text-lg text-gray-900 mb-2">
              Award-Winning Designs
            </div>
            <div className="text-sm text-gray-600">
              Recognized for architectural excellence
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200 text-center">
            <div className="text-4xl mb-3">🤝</div>
            <div className="font-bold text-lg text-gray-900 mb-2">
              3-Year Warranty
            </div>
            <div className="text-sm text-gray-600">
              Comprehensive coverage on structural and general workmenship
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 sm:p-12 border-2 border-gray-200 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join satisfied homeowners who trusted us with their Baja dream
              home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <span>📅</span>
                <span>
                  <a href="#contact">Schedule Free Consultation</a>
                </span>
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold text-lg rounded-full border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                <span>💬</span>
                <span>Read More Reviews</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
