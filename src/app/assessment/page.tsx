"use client";
import React, { useState } from "react";
import {
  ChevronRight,
  CheckCircle,
  Home,
  DollarSign,
  Calendar,
  Phone,
  Mail,
  User,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { z } from "zod";

// Zod schema for validation
const LeadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true; // optional
        const cleaned = val.replace(/\D/g, "");
        return cleaned.length >= 10 && cleaned.length <= 15;
      },
      { message: "Invalid phone number" }
    ),
});

export default function BajaHomeAssessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<{
    lotOwnership?: string;
    timeline?: string;
    budget?: string;
    homeSize?: string;
    style?: string;
    features?: string;
    concerns?: string;
    decisionMaker?: string;
    email?: string;
    phone?: string;
    readiness_score?: number;
    [key: string]: any;
  }>({});

  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "lotOwnership",
      question: "Do you already own land in Baja California?",
      type: "choice",
      icon: Home,
      options: [
        { value: "yes", label: "Yes, I own land", emoji: "✅" },
        { value: "looking", label: "No, but I'm looking", emoji: "🔍" },
        { value: "need-help", label: "No, need help finding", emoji: "🤝" },
      ],
    },
    {
      id: "timeline",
      question: "When would you like to start building?",
      type: "choice",
      icon: Calendar,
      options: [
        { value: "immediately", label: "Within 3 months", emoji: "🚀" },
        { value: "soon", label: "3-6 months", emoji: "📅" },
        { value: "planning", label: "6-12 months", emoji: "📋" },
        { value: "exploring", label: "Just exploring", emoji: "🌅" },
      ],
    },
    {
      id: "email",
      question: "Great! Let's save your progress...",
      type: "email-capture",
      subtitle: "Get instant cost estimates + save your assessment",
      icon: Mail,
    },
    {
      id: "budget",
      question: "What's your estimated budget range?",
      type: "choice",
      icon: DollarSign,
      options: [
        { value: "300-450", label: "$300K - $450K", emoji: "🏠" },
        { value: "450-650", label: "$450K - $650K", emoji: "🏡" },
        { value: "650-900", label: "$650K - $900K", emoji: "🏘️" },
        { value: "900+", label: "$900K+", emoji: "✨" },
      ],
    },
    {
      id: "homeSize",
      question: "How many bedrooms are you planning?",
      type: "choice",
      icon: Home,
      options: [
        { value: "2", label: "2 Bedrooms", emoji: "🛏️" },
        { value: "3", label: "3 Bedrooms", emoji: "🛏️🛏️" },
        { value: "4", label: "4 Bedrooms", emoji: "🏠" },
        { value: "5+", label: "5+ Bedrooms", emoji: "🏰" },
      ],
    },
    {
      id: "style",
      question: "Which architectural style appeals to you most?",
      type: "choice",
      icon: Home,
      options: [
        { value: "california", label: "California Contemporary", emoji: "🌴" },
        { value: "mediterranean", label: "Mediterranean Villa", emoji: "🏛️" },
        { value: "modern", label: "Modern Minimalist", emoji: "⬜" },
        { value: "traditional", label: "Traditional Mexican", emoji: "🎨" },
      ],
    },
    {
      id: "features",
      question: "Which features are most important to you?",
      type: "choice",
      icon: CheckCircle,
      options: [
        { value: "ocean-view", label: "Ocean Views", emoji: "🌊" },
        { value: "pool", label: "Pool & Outdoor Living", emoji: "🏊" },
        { value: "sustainable", label: "Sustainable/Solar", emoji: "☀️" },
        { value: "luxury", label: "High-End Finishes", emoji: "💎" },
      ],
    },
    {
      id: "phone",
      question: "Want to discuss your project with our team?",
      type: "phone-capture",
      subtitle: "Optional: Get a personalized consultation call",
      icon: Phone,
    },
    {
      id: "concerns",
      question: "What's your biggest concern about building in Baja?",
      type: "choice",
      icon: CheckCircle,
      options: [
        { value: "legal", label: "Legal process & permits", emoji: "⚖️" },
        { value: "quality", label: "Build quality & contractors", emoji: "🔨" },
        { value: "timeline", label: "Timeline & delays", emoji: "⏱️" },
        {
          value: "communication",
          label: "Communication & oversight",
          emoji: "💬",
        },
      ],
    },
    {
      id: "decisionMaker",
      question: "Are you the primary decision-maker for this project?",
      type: "choice",
      icon: User,
      options: [
        { value: "yes", label: "Yes, it's my decision", emoji: "✅" },
        { value: "joint", label: "Joint decision with partner", emoji: "👥" },
        { value: "family", label: "Family decision", emoji: "👨‍👩‍👧‍👦" },
      ],
    },
  ];

  const calculateResults = (answersToScore = answers) => {
    let readinessScore = 0;
    let recommendation = "";
    let nextSteps: string[] = [];

    if (answersToScore.lotOwnership === "yes") readinessScore += 30;
    if (
      answersToScore.timeline === "immediately" ||
      answersToScore.timeline === "soon"
    )
      readinessScore += 25;
    if (answersToScore.budget) readinessScore += 20;
    if (answersToScore.decisionMaker === "yes") readinessScore += 15;
    if (answersToScore.phone) {
      const cleaned = answersToScore.phone.replace(/\D/g, "");
      if (cleaned.length >= 10 && cleaned.length <= 15) readinessScore += 10;
    }

    if (readinessScore >= 75) {
      recommendation = "You're Ready to Start Building!";
      nextSteps = [
        "Schedule a site consultation",
        "Review our available 2025 build slots",
        "Get detailed cost breakdown",
        "Meet with our legal team",
      ];
    } else if (readinessScore >= 50) {
      recommendation = "You're Well-Positioned to Begin Planning";
      nextSteps = [
        "Download our Planning Guide",
        "Review land acquisition options",
        "Schedule an introductory call",
        "View our portfolio & testimonials",
      ];
    } else {
      recommendation = "Let's Start Your Research Journey";
      nextSteps = [
        "Download our free Baja Build Guide",
        "Join our monthly webinar",
        "Explore our cost calculator",
        "Review FAQs & legal process",
      ];
    }

    return { readinessScore, recommendation, nextSteps };
  };

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) setTimeout(() => setStep(step + 1), 200);
    else handleFinalSubmit(newAnswers);
  };

  const handleEmailSubmit = () => {
    try {
      const validated = LeadSchema.parse(formData);
      setErrorMessage("");
      handleAnswer("email", validated.email);
    } catch (error: any) {
      if (error instanceof z.ZodError) setErrorMessage(error.issues[0].message);
      else setErrorMessage(error.message);
    }
  };

  const handlePhoneSubmit = () => {
    try {
      const validated = LeadSchema.parse(formData);
      setErrorMessage("");
      handleAnswer("phone", validated.phone || "");
    } catch (error: any) {
      if (error instanceof z.ZodError) setErrorMessage(error.issues[0].message);
      else setErrorMessage(error.message);
    }
  };

  const handleFinalSubmit = async (finalAnswers = answers) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      if (honeypot) {
        console.log("Bot detected via honeypot");
        setShowResults(true);
        setStatus("success");
        return;
      }

      const results = calculateResults(finalAnswers);

      // Build payload for backend (UNCHANGED)
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        answers: {
          ...finalAnswers,
          timeline: finalAnswers.timeline || null,
          budget: finalAnswers.budget || null,
          style: finalAnswers.style || null,
          decisionMaker: finalAnswers.decisionMaker || null,
          readiness_score: results.readinessScore,
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
      if (!response.ok) throw new Error(result.error || "Submission failed");

      setStatus("success");
      setShowResults(true);
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
    }
  };

  const ProgressBar = () => (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
      <div
        className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-500"
        style={{ width: `${((step + 1) / questions.length) * 100}%` }}
      />
    </div>
  );

  if (showResults) {
    const results = calculateResults();

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-4 sm:p-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-amber-500/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                {results.recommendation}
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Based on your assessment, here's your personalized roadmap:
              </p>
              <div className="inline-block">
                <div className="text-6xl font-bold text-white mb-2">
                  {results.readinessScore}%
                </div>
                <div className="text-sm text-gray-400">Readiness Score</div>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Your Next Steps:
              </h3>
              {results.nextSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <span className="text-lg text-gray-200">{step}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl p-6 border border-amber-400/30 mb-8">
              <h4 className="text-xl font-bold text-white mb-3">
                🎉 Special Offer for Assessment Takers
              </h4>
              <p className="text-gray-200 mb-4">
                Schedule a call within 48 hours and receive:
              </p>
              <ul className="space-y-2 text-gray-200">
                <li>✅ Free lot evaluation (worth $500)</li>
                <li>✅ Detailed cost breakdown for your project</li>
                <li>✅ Priority booking for 2025 build slots</li>
              </ul>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+18587587768"
                className="block w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg py-5 px-8 rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all text-center"
              >
                📞 Call Now: (858) 758-7768
              </a>
              <button
                onClick={() => (window.location.href = "#schedule")}
                className="block w-full bg-white/10 text-white font-bold text-lg py-5 px-8 rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                📅 Schedule Your Free Consultation
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="block w-full bg-white/10 text-white font-bold text-lg py-5 px-8 rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                ⮐ Back to Main Page
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400">
                We'll send your detailed report to{" "}
                <span className="text-amber-400">{formData.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[step];
  const QuestionIcon = currentQuestion.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Your Custom Home Assessment
          </h1>
          <p className="text-gray-400">
            10 quick questions · Instant results · No obligation
          </p>
        </div>

        <ProgressBar />

        {errorMessage && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-red-300 text-sm">{errorMessage}</p>
          </div>
        )}

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-amber-500/20 shadow-2xl animate-fadeIn">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <QuestionIcon className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">
                Question {step + 1} of {questions.length}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {currentQuestion.question}
              </h2>
              {currentQuestion.subtitle && (
                <p className="text-gray-400 mt-2">{currentQuestion.subtitle}</p>
              )}
            </div>
          </div>

          {/* Choice question */}
          {currentQuestion.type === "choice" && (
            <div className="space-y-3">
              {currentQuestion.options?.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(currentQuestion.id, option.value)}
                  disabled={status === "loading"}
                  className="w-full group relative overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/50 rounded-xl p-5 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{option.emoji}</span>
                    <span className="text-lg font-medium text-white group-hover:text-amber-400 transition-colors">
                      {option.label}
                    </span>
                  </div>
                  {status === "loading" && step === questions.length - 1 ? (
                    <Loader2 className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-amber-400 animate-spin" />
                  ) : (
                    <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-600 group-hover:text-amber-400 transition-all group-hover:translate-x-1" />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Email capture */}
          {currentQuestion.type === "email-capture" && (
            <div className="space-y-6">
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
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  disabled={status === "loading"}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  disabled={status === "loading"}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>
              <button
                onClick={handleEmailSubmit}
                disabled={
                  !formData.email || !formData.name || status === "loading"
                }
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg py-5 px-8 rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Continue →"
                )}
              </button>
            </div>
          )}

          {/* Phone capture */}
          {currentQuestion.type === "phone-capture" && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  disabled={status === "loading"}
                  placeholder="+1 (555) 123-4567"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>
              <button
                onClick={handlePhoneSubmit}
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg py-5 px-8 rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Continue →"
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
