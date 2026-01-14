import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image/Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/libertyRanch/truckLogo.jpg"
                alt="Liberty Ranch Construction Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Overlay Stats */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                    <div className="text-3xl font-bold text-white">200+</div>
                    <div className="text-xs text-white/90 mt-1">
                      Homes Built
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                    <div className="text-3xl font-bold text-white">15+</div>
                    <div className="text-xs text-white/90 mt-1">Years Exp.</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                    <div className="text-3xl font-bold text-white">98%</div>
                    <div className="text-xs text-white/90 mt-1">On-Time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-2xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform">
              <div className="text-center">
                <div className="text-3xl font-bold">CA Licensed</div>
                <div className="text-sm">& Insured</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-amber-100 text-blue-800 text-sm font-semibold mb-6 border border-blue-200">
              <span className="text-lg">🏡</span>
              <span>About Us</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Building Dreams in Baja California{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Since 2010
              </span>
            </h2>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                Liberty Ranch Construction is a faith-based building company
                with over 15 years of experience creating exceptional beachfront
                homes in Rosarito, La Misión, and Ensenada for U.S. and Canadian
                buyers.
              </p>

              <p>
                We're not your typical Mexican contractor. Our bilingual team
                handles everything from legal guidance and permits to final
                walkthrough—delivering California-quality homes at{" "}
                <span className="font-semibold text-gray-900">
                  40% less than U.S. costs
                </span>
                .
              </p>

              <p>
                What sets us apart?{" "}
                <span className="font-semibold text-gray-900">Our mission</span>
                . All proceeds support Liberty Ranch's transformative recovery
                programs, giving participants valuable construction skills while
                building your dream home.
              </p>
            </div>

            {/* Mission Highlight */}
            <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-6 border border-blue-200 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-2xl">
                  ❤️
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Building Homes, Transforming Lives
                  </h3>
                  <p className="text-sm text-gray-700">
                    When you build with us, you're not just getting a beautiful
                    home—you're supporting a ministry that helps men and women
                    achieve sobriety, develop life skills, and build better
                    futures.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Differentiators */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: "⚖️", text: "Complete Build Permit Support" },
                { icon: "💰", text: "Fixed USD Pricing" },
                { icon: "🇺🇸", text: "Bilingual Team" },
                { icon: "📸", text: "Bi-Weekly Updates" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/assessment">See If You Qualify</Button>
              <Button href="#process" variant="outline">
                Our Build Process
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-gray-200">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Serving Three Baja California Locations
            </h3>
            <p className="text-gray-600">
              With local teams ready to build your dream home
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                location: "La Misión",
                address: "Calle Las Rocas 567E",
                phone: "(646) 135-4024",
                icon: "🏖️",
                gradient: "from-blue-500 to-cyan-600",
              },
              {
                location: "Rosarito / Ensenada",
                address: "Coastal Region",
                phone: "(858) 758-7768",
                icon: "🌊",
                gradient: "from-amber-500 to-orange-600",
              },
              {
                location: "Todos Santos",
                address: "La Paz 518n, Centro",
                phone: "(612) 212-9597",
                icon: "🌴",
                gradient: "from-emerald-500 to-teal-600",
              },
            ].map((loc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${loc.gradient} flex items-center justify-center text-3xl mb-4 mx-auto`}
                >
                  {loc.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {loc.location}
                </h4>
                <p className="text-sm text-gray-600 text-center mb-3">
                  {loc.address}
                </p>
                {/* <a
                  href={`tel:${loc.phone.replace(/\D/g, "")}`}
                  className="block text-center text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                >
                  {loc.phone}
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
