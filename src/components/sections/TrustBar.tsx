import React from "react";
import Container from "../ui/Container";

const TRUST_ITEMS = [
  {
    icon: "🇺🇸",
    title: "Built for U.S. & Canadian Buyers",
    subtitle: "Clear legal guidance & transparent process",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    icon: "🏖️",
    title: "Beachfront Expertise",
    subtitle: "Rosarito & Ensenada coastal homes",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    icon: "⏱️",
    title: "10–14 Month Timelines",
    subtitle: "Defined milestones & regular updates",
    accent: "from-amber-500 to-orange-600",
  },
];

export default function TrustBar() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white border-y border-gray-200">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 py-8 sm:py-12 md:grid-cols-3">
          {TRUST_ITEMS.map((item, index) => (
            <div key={index} className="group relative">
              {/* Card Container */}
              <div className="flex flex-col sm:flex-row md:flex-col items-center sm:items-start md:items-center text-center sm:text-left md:text-center gap-4 p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                {/* Icon with Gradient Background */}
                <div
                  className={`flex-shrink-0 w-14 h-14 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${item.accent} flex items-center justify-center text-2xl sm:text-xl md:text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-sm md:text-lg font-bold text-gray-900 leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-xs md:text-sm text-gray-600 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Decorative Element */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>

              {/* Divider Line (hidden on last item on desktop) */}
              {index < TRUST_ITEMS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>

        {/* Optional: Bottom Stats Bar */}
        <div className="border-t border-gray-200 py-6 sm:py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                200+
              </div>
              <div className="mt-1 text-xs sm:text-sm text-gray-600 font-medium">
                Homes Built
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                15+
              </div>
              <div className="mt-1 text-xs sm:text-sm text-gray-600 font-medium">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                98%
              </div>
              <div className="mt-1 text-xs sm:text-sm text-gray-600 font-medium">
                On-Time Delivery
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                4.9★
              </div>
              <div className="mt-1 text-xs sm:text-sm text-gray-600 font-medium">
                Client Rating
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
