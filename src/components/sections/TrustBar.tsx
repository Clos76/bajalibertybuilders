import React from "react";
import Container from "../ui/Container";

const TRUST_ITEMS = [
  {
    icon: "🇺🇸",
    title: "Built for U.S. & Canadian Buyers",
    subtitle:
      "Bilingual team • Full Building Permit support • Remote oversight",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    icon: "🏖️",
    title: "Beachfront Expertise",
    subtitle: "200+ homes in USA, Rosarito, La Misión & Ensenada",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    icon: "⏱️",
    title: "10–14 Month Build Time",
    subtitle: "Fixed timeline • Milestone payments • Weekly updates",
    accent: "from-amber-500 to-orange-600",
  },
  {
    icon: "💰",
    title: "40% Cost Savings",
    subtitle: "Save vs. California • Fixed USD pricing • No surprises",
    accent: "from-emerald-500 to-teal-600",
  },
];

const STATS = [
  {
    number: "200+",
    label: "Homes Built",
    gradient: "from-amber-600 to-orange-600",
  },
  {
    number: "15+",
    label: "Years Experience",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    number: "98%",
    label: "On-Time Delivery",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    number: "4.9★",
    label: "Client Rating",
    gradient: "from-purple-600 to-pink-600",
  },
];

const CREDENTIALS = [
  { icon: "✅", text: "US Licensed & Insured" },
  { icon: "🛡️", text: "Full Warranty Coverage" },
  // { icon: "🏆", text: "A+ BBB Rating" },
  { icon: "📋", text: "Permit Specialists" },
];

export default function TrustBar() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 border-y border-gray-200">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Main Trust Items */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 py-8 sm:py-12 md:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item, index) => (
            <div key={index} className="group relative">
              <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-sm hover:shadow-xl hover:border-transparent transition-all duration-300 hover:-translate-y-2 h-full">
                {/* Icon with Gradient Background */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  {item.icon}
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Hover Gradient Overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Credentials Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {CREDENTIALS.map((cred, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-700">
                <span className="text-xl">{cred.icon}</span>
                <span className="text-sm sm:text-base font-medium">
                  {cred.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-t border-gray-200 py-8 sm:py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center group cursor-default">
                <div
                  className={`text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} group-hover:scale-110 transition-transform inline-block`}
                >
                  {stat.number}
                </div>
                <div className="mt-2 text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement Banner */}
        <div className="border-t border-gray-200 pt-8 pb-6">
          <div className="bg-gradient-to-r from-blue-50 via-amber-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-blue-200">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-amber-600 rounded-full flex items-center justify-center text-2xl">
                ❤️
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                  Building Homes, Transforming Lives
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  100% of proceeds support Liberty Ranch's faith-based recovery
                  programs, helping participants develop construction skills
                  while building your dream home.
                </p>
              </div>
              <a
                href="https://libertyranch.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all text-sm"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
