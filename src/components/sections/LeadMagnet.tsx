"use client";
import React, { useState } from "react";

import Container from "../ui/Container";

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
    timeline: "",
    budget: "",
    style: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitAttempts, setSubmitAttempts] = useState(0);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  // Security: Sanitize input to prevent XSS
  const sanitizeInput = (input: string | unknown): string => {
    if (typeof input !== "string") return "";
    return input
      .replace(/[<>]/g, "") // Remove < and > to prevent HTML injection
      .replace(/javascript:/gi, "") // Remove javascript: protocol
      .replace(/on\w+\s*=/gi, "") // Remove event handlers like onclick=
      .trim()
      .slice(0, 500); // Limit length to prevent buffer overflow attempts
  };

  // Security: Validate email format
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) && email.length <= 254; // RFC 5321
  };

  // Security: Validate phone format (international)
  const isValidPhone = (phone: string): boolean => {
    if (!phone) return true; // Optional field
    const phoneRegex =
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone) && phone.length <= 20;
  };

  // Security: Validate name (letters, spaces, hyphens, apostrophes only)
  const isValidName = (name: string): boolean => {
    const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,100}$/;
    return nameRegex.test(name);
  };

  // Security: Rate limiting - prevent spam submissions
  const isRateLimited = () => {
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTime;

    // Block if more than 3 attempts in last 60 seconds
    if (submitAttempts >= 3 && timeSinceLastSubmit < 60000) {
      return true;
    }

    // Reset counter after 60 seconds
    if (timeSinceLastSubmit > 60000) {
      setSubmitAttempts(0);
    }

    return false;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const sanitized = sanitizeInput(value);

    setFormData({
      ...formData,
      [name]: sanitized,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate name
    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (!isValidName(formData.name)) {
      newErrors.name = "Please enter a valid name (letters only)";
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate timeline
    if (!formData.timeline) {
      newErrors.timeline = "Please select a project timeline";
    }

    // Validate phone if provided
    if (formData.phone && !isValidPhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateLeadScore = () => {
    let score = 0;

    // ✅ Timeline weighting
    switch (formData.timeline) {
      case "0-6":
        score += 40; // ready to start soon
        break;
      case "6-12":
        score += 25; // planning ahead
        break;
      case "12+":
        score += 10; // future project
        break;
      case "research":
        score += 5; // just researching
        break;
      default:
        score += 0; // missing
    }

    // ✅ Budget weighting
    switch (formData.budget) {
      case "200-400K":
      case "500-700k":
      case "700k-1m":
      case "1m-1.5m":
        score += 20;
        break;
      case "flexible":
        score += 10;
        break;
      default:
        score += 0;
    }

    // ✅ Style preference weighting
    const style = formData.style || "undecided";
    if (
      style === "california" ||
      style === "mediterranean" ||
      style === "modern"
    ) {
      score += 15;
    }

    // ✅ Optional: phone provided adds slight commitment signal
    if (formData.phone) score += 5;

    // ✅ Cap max score at 100
    if (score > 100) score = 100;

    return score;
  };

  const handleSubmit = async () => {
    if (isRateLimited()) {
      alert(
        "Too many submission attempts. Please wait a minute and try again."
      );
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitAttempts((prev) => prev + 1);
    setLastSubmitTime(Date.now());

    try {
      // Submit new lead - send fields as top-level properties
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: sanitizeInput(formData.name),
          email: sanitizeInput(formData.email),
          phone: sanitizeInput(formData.phone) || null,
          timeline: sanitizeInput(formData.timeline),
          budget: sanitizeInput(formData.budget) || null,
          style: sanitizeInput(formData.style) || null,
          source: "lead_magnet",
          readiness_score: calculateLeadScore(),
        }),
      });

      const result = await response.json();

      if (!result.success) {
        if (result.status === "duplicate") {
          alert(
            "You already submitted this lead. Check your email for the guide!"
          );
          setIsSubmitted(true);
          //reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            timeline: "",
            budget: "",
            style: "",
          });
          setErrors({});
        } else {
          throw new Error(result.error || "Failed to submit");
        }
      } else {
        setIsSubmitted(true);

        //reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          timeline: "",
          budget: "",
          style: "",
        });
        setErrors({});
      }
    } catch (err) {
      console.error("Lead submission error:", err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
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

        <Container className="relative z-10">
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
        </Container>
      </section>
    );
  }

  return (
    <section
      id="lead-magnet"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden"
    >
      {/* Decorative Background Elements */}
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

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Benefits */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold mb-6">
              <span className="text-lg">📥</span>
              <span>Free Download</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Download the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Ultimate Guide
              </span>{" "}
              to Building a Custom Home in Baja
            </h2>

            {/* Subtext */}
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Everything U.S. & Foreing buyers need to know before starting
              their beachfront home project.
            </p>

            {/* Benefits Grid */}
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

            {/* Trust Indicators */}
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
            {/* Form Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border-2 border-blue-200">
              {/* Form Header */}
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

              {/* Form Fields */}
              <div className="space-y-5">
                {/* Name - Required */}
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
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email - Required */}
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
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Project Timeline - Required */}
                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Project Timeline <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
                  >
                    <option value="">Select your timeline</option>
                    <option value="0-6">Ready to start (0-6 months)</option>
                    <option value="6-12">Planning ahead (6-12 months)</option>
                    <option value="12+">Future project (12+ months)</option>
                    <option value="research">Just researching</option>
                  </select>
                  {errors.timeline && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.timeline}
                    </p>
                  )}
                </div>

                {/* Budget Range - Optional */}
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
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
                  >
                    <option value="">Select budget range</option>
                    <option value="200-400K">$200K - $400k</option>
                    <option value="500-700k">$500K - $700K</option>
                    <option value="700k-1m">$700K - $1M</option>
                    <option value="1m-1.5m">$1M - $1.5M</option>

                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                {/* Preferred Style - Optional */}
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
                    value={formData.style}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
                  >
                    <option value="">Select style preference</option>
                    <option value="california">California Contemporary</option>
                    <option value="mediterranean">Mediterranean Villa</option>
                    <option value="modern">Modern Minimalist</option>
                    <option value="undecided">Not sure yet</option>
                  </select>
                </div>

                {/* Phone - Optional */}
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
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
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

                {/* Microcopy */}
                <p className="text-center text-sm text-gray-500 mt-4">
                  🔒 No spam. Built specifically for U.S. & Canadian buyers.
                </p>
              </div>

              {/* Additional CTA */}
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
      </Container>
    </section>
  );
}
