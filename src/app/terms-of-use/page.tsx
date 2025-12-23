"use client";
import Link from "next/link";

export default function TermsOfService() {
  const lastUpdated = "December 21, 2024";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold mb-4">
            <span>📋</span>
            <span>Legal</span>
          </div>
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>

          <p className="text-lg text-gray-600">Last Updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Baja Construction. These Terms of Service ("Terms")
              govern your use of our website, services, and any related
              communications. By accessing our website or using our services,
              you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree to these Terms, please do not use our website
              or services.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Services Overview
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Baja Construction provides custom home building and construction
              services in Baja California, Mexico, including:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Design and construction of California Contemporary and
                  Mediterranean homes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Project management and consultation services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Legal guidance and permit acquisition assistance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Renovation and remodeling services</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Use of Website
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Permitted Use
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may use our website for lawful purposes only. You agree not
              to:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Violate any applicable laws or regulations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Transmit any harmful or malicious code</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Attempt to gain unauthorized access to our systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Scrape, copy, or republish our content without permission
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Impersonate any person or entity</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Account Registration
            </h3>
            <p className="text-gray-700 leading-relaxed">
              If you create an account with us, you are responsible for
              maintaining the confidentiality of your account credentials and
              for all activities that occur under your account. You agree to
              notify us immediately of any unauthorized use.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Consultation and Communication
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Contact and Inquiries
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you submit contact forms, request consultations, or provide
              your contact information, you consent to:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Receive phone calls from our team regarding your inquiry and
                  project
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Receive text messages (SMS) for appointment confirmations and
                  updates
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Receive emails about your project, our services, and
                  promotional materials
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Be added to our mailing list for newsletters and updates
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Opt-Out Rights
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may opt-out of marketing communications at any time by:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Clicking "unsubscribe" in any marketing email</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Replying "STOP" to any text message</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Contacting us directly at{" "}
                  <a
                    href="tel:+18587587768"
                    className="text-amber-600 hover:text-amber-700 font-semibold"
                  >
                    (858) 758-7768
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Consultations and Estimates
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Free Consultations
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We offer complimentary virtual consultations to discuss project
              feasibility, budgets, and timelines. These consultations are
              informational only and do not constitute a binding agreement or
              guarantee of services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Estimates and Quotes
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Any estimates or quotes provided are:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Based on information provided by you and current market
                  conditions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Subject to change based on final project specifications and
                  site conditions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Valid for a specified period (typically 30-60 days)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Not binding until a formal contract is executed</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Service Agreements
            </h3>
            <p className="text-gray-700 leading-relaxed">
              All construction and design services are subject to a separate
              written service agreement. These Terms do not create any
              contractual obligation for us to provide construction services.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Intellectual Property
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Content
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              All content on our website, including text, images, logos,
              designs, photographs, and videos, is owned by Baja Construction or
              our licensors and is protected by copyright, trademark, and other
              intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Your Content
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              By submitting content to us (such as project ideas, photos, or
              feedback), you grant us a non-exclusive, worldwide, royalty-free
              license to use, reproduce, and display such content for business
              purposes, including:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Portfolio and marketing materials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Website and social media content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Promotional and advertising materials</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Disclaimers and Limitations of Liability
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Website Disclaimer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our website and its content are provided "as is" without
              warranties of any kind, either express or implied. We do not
              guarantee that our website will be error-free, uninterrupted, or
              free from viruses or other harmful components.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Information Accuracy
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              While we strive to provide accurate information about our
              services, pricing, and timelines, we make no guarantees about the
              completeness, accuracy, or reliability of any information on our
              website. Project costs, timelines, and specifications are subject
              to change.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Limitation of Liability
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, Baja Construction shall
              not be liable for:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Any indirect, incidental, special, or consequential damages
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Loss of profits, data, or business opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Damages resulting from use of or inability to use our website
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Third-party content or links to external websites</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Governing Law and Jurisdiction
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with
              the laws of Mexico and the State of California, without regard to
              conflict of law principles.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Any disputes arising from these Terms or your use of our services
              shall be subject to the exclusive jurisdiction of the courts in
              Baja California, Mexico, or San Diego County, California, USA.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Indemnification
            </h2>

            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Baja
              Construction, its officers, directors, employees, and agents from
              any claims, liabilities, damages, losses, or expenses arising from
              your use of our website, violation of these Terms, or infringement
              of any third-party rights.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Third-Party Links
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites or services.
              We are not responsible for the content, privacy policies, or
              practices of any third-party sites. Your use of third-party
              websites is at your own risk.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Modifications to Terms
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. Changes
              will be effective immediately upon posting to our website. Your
              continued use of our website or services after changes are posted
              constitutes acceptance of the modified Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We encourage you to review these Terms periodically to stay
              informed of any updates.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Severability
            </h2>

            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be invalid, illegal,
              or unenforceable, the remaining provisions shall continue in full
              force and effect.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Entire Agreement
            </h2>

            <p className="text-gray-700 leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the
              entire agreement between you and Baja Construction regarding your
              use of our website and services, superseding any prior agreements
              or understandings.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about these Terms of Service, please
              contact us:
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <a
                    href="mailto:legal@bajaconstruction.com"
                    className="font-semibold text-amber-600 hover:text-amber-700"
                  >
                    legal@bajaconstruction.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-amber-600"
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
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <a
                    href="tel:+18587587768"
                    className="font-semibold text-amber-600 hover:text-amber-700"
                  >
                    (858) 758-7768
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-700">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Address</div>
                  <div className="font-semibold">
                    Baja Construction
                    <br />
                    Rosarito Beach
                    <br />
                    Baja California, México
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
