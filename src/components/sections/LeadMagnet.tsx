"use client";
import React, { useState } from "react";

const GUIDE_BENEFITS = [
  {
    icon: "💰",
    title: "Cost Breakdown vs California",
    description:
      "See exactly how much you can save compared to Southern California coastal properties",
  },
  {
    icon: "⚖️",
    title: "Legal Ownership Explained",
    description:
      "Clear guidance on fideicomiso, property rights, and secure foreign ownership",
  },
  {
    icon: "🏗️",
    title: "Design & Style Options",
    description:
      "Explore California Contemporary and Mediterranean villa styles with examples",
  },
  {
    icon: "⏱️",
    title: "Timeline Expectations",
    description:
      "Month-by-month breakdown of the 10-14 month construction process",
  },
  {
    icon: "⚠️",
    title: "Common Mistakes to Avoid",
    description: "Learn from others' experiences and sidestep costly errors",
  },
  {
    icon: "📋",
    title: "Complete Checklist",
    description:
      "Step-by-step planning guide from initial concept to move-in day",
  },
];

export default function LeadMagnetSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [answers, setAnswers] = useState<{
    timeline?: string;
    budget?: string;
    style?: string;
    lotOwnership?: string;
    decisionMaker?: string;
  }>({});

  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const calculateLeadScore = () => {
    let score = 0;

    // Lot Ownership (30 points)
    if (answers.lotOwnership === "yes") {
      score += 30;
    }

    // Timeline (25 points)
    if (answers.timeline === "0-6" || answers.timeline === "3-6") {
      score += 25;
    }

    // Budget (20 points)
    if (answers.budget) {
      score += 20;
    }

    // Decision Maker (15 points)
    if (answers.decisionMaker === "yes") {
      score += 15;
    }

    // Phone (10 points)
    if (formData.phone) {
      const cleaned = formData.phone.replace(/\D/g, "");
      if (cleaned.length >= 10 && cleaned.length <= 15) {
        score += 10;
      }
    }

    // Email (10 points) - always included if form submitted
    if (formData.email) {
      score += 10;
    }

    if (score > 100) score = 100;

    return score;
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      // removed ... ( || !answers.timeline for required )
      setErrorMessage("Please fill in all required fields");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      if (honeypot) {
        console.log("Bot detected via honeypot");
        setIsSubmitted(true);
        setStatus("success");
        return;
      }

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        answers: {
          timeline: answers.timeline,
          budget: answers.budget || null,
          style: answers.style || null,
          lotOwnership: answers.lotOwnership || null,
          decisionMaker: answers.decisionMaker || null,
          readiness_score: calculateLeadScore(),
        },
        honeypot,
      };

      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Submission failed");
      }

      setStatus("success");
      setIsSubmitted(true);

      // Reset form
      setFormData({ name: "", email: "", phone: "" });
      setAnswers({});
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
    }
  };

  if (isSubmitted) {
    return (
      <section
        id="lead-magnet"
        className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm mb-8 animate-bounce">
              <span className="text-5xl">✓</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Check Your Email! 📧
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Your Ultimate Guide to Building in Baja is on its way to{" "}
              <span className="font-bold text-white">{formData.email}</span>
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">What's Next?</h3>
              <ul className="text-left space-y-3 text-blue-100">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">1️⃣</span>
                  <span>Check your inbox (and spam folder) for your guide</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">2️⃣</span>
                  <span>
                    Review the cost breakdowns and timeline expectations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">3️⃣</span>
                  <span>
                    When you're ready, schedule a free consultation with our
                    team
                  </span>
                </li>
              </ul>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors"
              >
                ← Back to Form
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="lead-magnet"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48 animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Benefits */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold mb-6">
              <span className="text-lg">📥</span>
              <span>Free Download</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Download the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Ultimate Guide
              </span>{" "}
              to Building a Custom Home in Baja
            </h2>

            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Everything U.S. & Foreign buyers need to know before starting
              their beachfront home project.
            </p>

            <div className="space-y-4 mb-10">
              {GUIDE_BENEFITS.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-sm text-blue-100">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <span className="text-xl">✓</span>
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">✓</span>
                <span>Instant download</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">✓</span>
                <span>Built for North American and Foreign buyers</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border-2 border-blue-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white text-3xl mb-4 shadow-lg">
                  📖
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Get Your Free Guide
                </h3>
                <p className="text-gray-600">
                  Enter your details below for instant access
                </p>
              </div>

              {errorMessage && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3">
                  <span className="text-red-500">⚠️</span>
                  <p className="text-red-600 text-sm">{errorMessage}</p>
                </div>
              )}

              <div className="space-y-5">
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ position: "absolute", left: "-9999px" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Smith"
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 disabled:opacity-50"
                  />
                </div>

                {/* Lot Ownership - NEW */}
                <div>
                  <label
                    htmlFor="lotOwnership"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Do you own your lot?
                    {/* <span className="text-red-500">*</span> */}
                    <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <select
                    id="lotOwnership"
                    name="lotOwnership"
                    value={answers.lotOwnership || ""}
                    onChange={(e) =>
                      setAnswers({ ...answers, lotOwnership: e.target.value })
                    }
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 disabled:opacity-50"
                  >
                    <option value="">Select...</option>
                    <option value="yes">Yes, I own my lot</option>
                    <option value="no">No, still looking</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Project Timeline
                    {/* <span className="text-red-500">*</span> */}
                    <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={answers.timeline || ""}
                    onChange={(e) =>
                      setAnswers({ ...answers, timeline: e.target.value })
                    }
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 disabled:opacity-50"
                  >
                    <option value="">Select your timeline</option>
                    <option value="0-6">Ready to start (0-6 months)</option>
                    <option value="6-12">Planning ahead (6-12 months)</option>
                    <option value="12+">Future project (12+ months)</option>
                    <option value="research">Just researching</option>
                  </select>
                </div>

                {/* Decision Maker - NEW
                <div>
                  <label
                    htmlFor="decisionMaker"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Are you the primary decision maker?{" "}
                    <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <select
                    id="decisionMaker"
                    name="decisionMaker"
                    value={answers.decisionMaker || ""}
                    onChange={(e) =>
                      setAnswers({ ...answers, decisionMaker: e.target.value })
                    }
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 disabled:opacity-50"
                  >
                    <option value="">Select...</option>
                    <option value="yes">Yes, it's my decision</option>
                    <option value="joint">Joint decision with partner/family</option>
                    <option value="no">No, consulting for someone else</option>
                  </select>
                </div> */}

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Budget Range{" "}
                    <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={answers.budget || ""}
                    onChange={(e) =>
                      setAnswers({ ...answers, budget: e.target.value })
                    }
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 disabled:opacity-50"
                  >
                    <option value="">Select budget range</option>
                    <option value="200-400K">$200K - $400k</option>
                    <option value="500-700k">$500K - $700K</option>
                    <option value="700k-1m">$700K - $1M</option>
                    <option value="1m-1.5m">$1M - $1.5M</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                {/* Style */}
                <div>
                  <label
                    htmlFor="style"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Preferred Style{" "}
                    <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <select
                    id="style"
                    name="style"
                    value={answers.style || ""}
                    onChange={(e) =>
                      setAnswers({ ...answers, style: e.target.value })
                    }
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 disabled:opacity-50"
                  >
                    <option value="">Select style preference</option>
                    <option value="california">California Contemporary</option>
                    <option value="mediterranean">Mediterranean Villa</option>
                    <option value="modern">Modern Minimalist</option>
                    <option value="undecided">Not sure yet</option>
                  </select>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number{" "}
                    <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+1 (555) 123-4567"
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 disabled:opacity-50"
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Sending Your Guide...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <span>📥</span>
                      <span>Get the Free Guide</span>
                    </span>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  🔒 No spam. Built specifically for U.S. & Canadian buyers.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t-2 border-gray-100 text-center">
                <p className="text-gray-600 mb-4">Prefer to talk first?</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  <span>📅</span>
                  <span>Schedule a Free Consultation</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="hidden lg:block absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border-2 border-blue-200">
              <div className="flex items-center gap-3">
                <div className="text-3xl">⭐</div>
                <div>
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    500+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Downloads
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border-2 border-blue-200">
              <div className="flex items-center gap-3">
                <div className="text-3xl">📖</div>
                <div>
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Building in Baja
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Complete Guide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
