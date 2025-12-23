"use client";

import { useState } from "react";
import Container from "../ui/Container";

export default function FinalCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py- bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <Container>
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-8xl mx-auto">
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Gradient Border Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ padding: "2px", zIndex: 0 }}
              />

              <div className="relative text-center bg-white rounded-3xl p-8 sm:p-12 lg:p-16">
                {/* Icon/Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 mb-6">
                  <span className="text-3xl">🏖️</span>
                </div>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Thinking About Building in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                    Baja?
                  </span>
                </h2>

                {/* Text */}
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
                  If you're exploring a custom beachfront home in Rosarito or
                  Ensenada, we offer a{" "}
                  <span className="font-semibold text-gray-900">
                    complimentary virtual consultation
                  </span>{" "}
                  to discuss feasibility, budget, and timelines.
                </p>

                {/* Value Props - Quick Benefits */}
                <div className="grid sm:grid-cols-3 gap-4 mb-10">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                      <span className="text-xl">💬</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm mb-1">
                        Free Consultation
                      </div>
                      <div className="text-xs text-gray-600">
                        No obligation call
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                      <span className="text-xl">📊</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm mb-1">
                        Budget Clarity
                      </div>
                      <div className="text-xs text-gray-600">
                        Transparent pricing
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                      <span className="text-xl">⏱️</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm mb-1">
                        Quick Response
                      </div>
                      <div className="text-xs text-gray-600">
                        Within 24 hours
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="group relative w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/40"
                  >
                    {/* Shimmer Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-700 ${
                        isHovered ? "translate-x-full" : "-translate-x-full"
                      }`}
                    />

                    <span className="relative flex items-center justify-center gap-2 text-lg">
                      <svg
                        className="w-5 h-5 transition-transform group-hover:scale-110"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Schedule a Virtual Consultation
                    </span>
                  </button>

                  {/* Secondary Action */}
                  <a
                    href="tel:+18587587768"
                    className="group flex items-center gap-3 text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-amber-100 flex items-center justify-center transition-colors flex-shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-500 mb-0.5">
                        Or call us directly
                      </div>
                      <div className="text-4xl sm:text-4xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                        (858) 758-7768
                      </div>
                    </div>
                  </a>
                </div>

                {/* Trust Signal */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>15+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>100% Client Satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional: Small Print Below */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Serving Rosarito, Ensenada, and surrounding Baja California
              coastal communities
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
