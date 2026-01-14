"use client";
import React, { useState } from "react";
import Container from "../ui/Container";

const FAQ_CATEGORIES = [
  {
    category: "Legal & Ownership",
    icon: "⚖️",
    gradient: "from-blue-500 to-indigo-600",
    questions: [
      {
        question: "Can foreigners own beachfront property in Mexico?",
        answer:
          "Yes, absolutely. Through a legal structure called a fideicomiso (bank trust), foreigners have full rights to beachfront property in Mexico. This government-backed system has been protecting foreign owners since 1973. You can use, rent, sell, inherit, or mortgage the property just like direct ownership. The bank acts as the trustee, but you maintain complete control and beneficial ownership. We work with many clients who have land on fideicomisos and are set up with trusted Mexican banks that specialize in foreign property ownership.",
      },
      {
        question: "How does the legal process work?",
        answer:
          "The process is straightforward with the right guidance. We coordinate with your notario to confirm the property is properly titled under your existing fideicomiso, then secure all required municipal permits and approvals. We execute a clear bilingual (English & Spanish) construction contract, manage inspections and documentation throughout the build, and provide all completion records so your notario can update the property file if required. We handle all construction-related paperwork, translations, and coordination to ensure full compliance with Mexican law.",
      },
      {
        question: "Is my property investment secure?",
        answer:
          "Yes. The fideicomiso is a Mexican constitutional guarantee, backed by Mexican banking law and overseen by the Mexican Banking Commission. Your ownership rights are as secure as any property ownership in the U.S. or Canada. Additionally, we work exclusively with title companies that provide title insurance for added protection. You'll have full documentation, registered property rights, and the ability to pass the property to heirs or sell it at any time.",
      },
    ],
  },
  {
    category: "Costs & Budget",
    icon: "💰",
    gradient: "from-emerald-500 to-teal-600",
    questions: [
      {
        question: "What is the typical total cost to build?",
        answer:
          "Total construction costs vary based on size, design, and finish level. Most projects fall within the following ranges: Standard builds typically start around $120–$140 USD per square foot, upgraded builds average $140 USD per square foot, and premium custom homes begin at $160+ USD per square foot. These figures generally include design coordination, permits, and construction. Final pricing depends on architectural complexity, site conditions, and selected finishes. We provide detailed, itemized estimates upfront with no hidden fees, and all pricing is quoted in USD to protect you from currency fluctuations.",
      },
      {
        question: "Are there ongoing costs I should know about?",
        answer:
          "Yes — and we’re completely transparent about them. Annual costs include fideicomiso renewal (typically $500–$800/year), property taxes (predial, usually a few hundred dollars annually even on higher-value homes in Rosarito), utilities (electric, water, internet averaging $200–$400/month), and homeowners insurance ($600–$1,200/year). If you’re in a gated community, HOA fees may run $100–$400/month. You or your property manager can handle these.",
      },
      {
        question: "Do you offer financing options?",
        answer:
          "At the moment we do not offer building financing options. Many of our clients also use home equity lines of credit, 401k loans, or cash from property sales. Please speak to your financial advisors for loans in cross-border real estate to explore your best options.",
      },
    ],
  },
  {
    category: "Construction & Communication",
    icon: "🏗️",
    gradient: "from-orange-500 to-red-600",
    questions: [
      {
        question: "How often do I get construction updates?",
        answer:
          "Bi-Weekly, without fail.  You'll receive a detailed progress report via email with: high-resolution photos from multiple angles, video walkthrough of new work completed, written summary of the week's progress, next week's schedule and milestones, and any decisions or approvals needed from you. You also get 24/7 access to a secure online project in google drive where you can view all photos, documents, and communication history. Your dedicated bilingual project manager is available via phone, email, or WhatsApp for questions anytime.",
      },
      {
        question: "Do I need to visit the construction site frequently?",
        answer:
          "No. While you're welcome to visit as often as you like (and many clients do), it's not required. Our remote oversight system is designed for buyers who can't be on-site regularly. We provide virtual site visits via video call, make decisions via email with photo documentation, and handle all inspections and approvals with local authorities. Many of our clients only visit 2-3 times: once during design, once mid-construction, and once for final walkthrough.",
      },
      {
        question: "What if I want to make changes during construction?",
        answer:
          "Changes happen, and we have a clear process for them. All change requests are documented with a detailed scope, cost impact (if any), and timeline adjustment. You'll receive a written change order to approve before any work proceeds. These changes are addressed on an individual basis. Changes are paid for at the time of change. Our transparent change-order system protects both parties and prevents surprises at the end.",
      },
    ],
  },
  {
    category: "Quality & Warranties",
    icon: "🛡️",
    gradient: "from-purple-500 to-pink-600",
    questions: [
      {
        question: "What warranties are included?",
        answer:
          "We provide comprehensive warranty coverage: 3-year general structural and workmenship; Warranty on finishes, fixtures, and appliances; 3 year warranty on all workmanship and materials. Appliences hold their manufacturer warranties (HVAC, water heaters, appliances). Post-completion, we offer a 60-day punch-list period to address any minor items, and we conduct 6-month and 1-year follow-up inspections.",
      },
      {
        question: "How do you ensure North American quality standards?",
        answer:
          "We build to meet or exceed U.S./Canadian building codes, not just Mexican minimums. This includes: windows and doors, proper insulation and vapor barriers, seismic engineering for earthquake zones, U.S.-grade electrical systems (120V), quality plumbing with proper venting, and energy-efficient HVAC systems. We use third-party inspectors at key milestones and import critical materials from the U.S. when necessary to ensure quality. Our construction supervisors are trained in North American building practices.",
      },
      {
        question: "What happens if there's an issue after I move in?",
        answer:
          "We stand behind our work. After move-in, you have direct contact with our customer service team. For warranty items, we respond within 24-48 hours and dispatch repair crews as needed. We maintain relationships with all our subcontractors and suppliers, making it easy to source parts or coordinate repairs. Many of our project managers continue to serve clients long after project completion, helping with everything from contractor referrals to property management recommendations.",
      },
    ],
  },
];

const OBJECTION_BUSTERS = [
  {
    concern: "Building in another country sounds risky",
    response:
      "We understand that concern—it's why we've built our entire process around transparency and protection for foreign buyers.",
    icon: "🛡️",
  },
  {
    concern: "I don't speak Spanish",
    response:
      "You don't need to. Our entire team is bilingual, all documents are in English, and we handle all Spanish interactions.",
    icon: "🗣️",
  },
  {
    concern: "What if something goes wrong?",
    response:
      "We carry comprehensive insurance, provide ironclad contracts, and have a 15-year track record of delivering on promises.",
    icon: "✓",
  },
];

export default function FAQSection() {
  const [expandedCategory, setExpandedCategory] = useState(0);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const questionId = `${categoryIndex}-${questionIndex}`;
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold mb-6 border border-blue-200">
            <span className="text-lg">❓</span>
            <span>Questions & Answers</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              to Know
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            We answer the most common questions from U.S. & Foreing buyers about
            building in Baja California.
          </p>
        </div>

        {/* Quick Objection Busters */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 sm:mb-20">
          {OBJECTION_BUSTERS.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="font-bold text-lg text-gray-900 mb-3">
                "{item.concern}"
              </div>
              <div className="text-gray-700">{item.response}</div>
            </div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {FAQ_CATEGORIES.map((category, index) => (
            <button
              key={index}
              onClick={() => setExpandedCategory(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                expandedCategory === index
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg scale-105`
                  : "bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400"
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.category}</span>
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {FAQ_CATEGORIES[expandedCategory].questions.map(
            (faq, questionIndex) => {
              const questionId = `${expandedCategory}-${questionIndex}`;
              const isExpanded = expandedQuestion === questionId;

              return (
                <div
                  key={questionIndex}
                  className="mb-4 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() =>
                      toggleQuestion(expandedCategory, questionIndex)
                    }
                    className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-lg sm:text-xl text-gray-900 flex-1">
                      {faq.question}
                    </span>
                    <span
                      className={`text-3xl text-blue-600 transition-transform duration-300 flex-shrink-0 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded
                        ? "max-h-[800px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 sm:px-8 pb-6 text-gray-700 leading-relaxed border-t border-gray-200 pt-6">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-block bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />

            <div className="relative">
              <div className="text-5xl mb-6">💬</div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Schedule a free consultation and get personalized answers to all
                your concerns about building in Baja.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <span>📅</span>
                  <span>Schedule Free Consultation</span>
                </button>

                <button className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all duration-300">
                  <span>📥</span>
                  <span>Download Planning Guide</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  <span>No obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  <span>30-minute call</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  <span>English-speaking team</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "📖",
              title: "Planning Guide",
              description: "42-page comprehensive guide",
              link: "#lead-magnet",
            },
            {
              icon: "🏡",
              title: "View Portfolio",
              description: "See our completed projects",
              link: "#portfolio",
            },
            {
              icon: "💬",
              title: "Client Stories",
              description: "Read testimonials",
              link: "#testimonials",
            },
            {
              icon: "📱",
              title: "Contact Us",
              description: "Call or email anytime",
              link: "#contact",
            },
          ].map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {resource.icon}
              </div>
              <div className="font-bold text-lg text-gray-900 mb-2">
                {resource.title}
              </div>
              <div className="text-sm text-gray-600">
                {resource.description}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

// libertyconstructionbaja.com

// liberty Construction.

// 40 years. building.
