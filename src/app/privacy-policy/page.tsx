"use client";
import Link from "next/link";

export default function PrivacyPolicy() {
  const lastUpdated = "December 21, 2024";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold mb-4">
            <span>🔒</span>
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
            Privacy Policy
          </h1>

          <p className="text-lg text-gray-600">Last Updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Baja Construction ("we," "our," or "us") respects your privacy and
              is committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website, contact us, or use our
              services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our website or services, you agree to the collection and
              use of information in accordance with this policy.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              Personal Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Fill out contact forms or request consultations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Download resources (planning guides, PDFs)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Subscribe to our newsletter or email communications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Call or text our phone number</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Schedule consultations or request quotes</span>
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              This information may include:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Name and contact information (email, phone number, mailing
                  address)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Project details and preferences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Budget and timeline information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Property location preferences</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              Automatically Collected Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit our website, we may automatically collect certain
              information, including:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>IP address and device information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Browser type and version</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Pages visited and time spent on pages</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Referring website and search terms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Cookies and similar tracking technologies</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How We Use Your Information
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  <strong>To provide services:</strong> Respond to inquiries,
                  schedule consultations, provide quotes, and deliver requested
                  services
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  <strong>To communicate:</strong> Send you information about
                  your project, updates, and respond to your questions via
                  email, phone, or text
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  <strong>Marketing communications:</strong> Send newsletters,
                  promotional materials, and information about our services (you
                  can opt-out at any time)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  <strong>To improve our services:</strong> Analyze usage
                  patterns and optimize our website and customer experience
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  <strong>Legal compliance:</strong> Comply with legal
                  obligations and protect our rights
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Email and Phone Communications
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Email Marketing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              By providing your email address, you consent to receive marketing
              emails from us, including:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Newsletters and updates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>New project showcases and portfolio updates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Special offers and promotions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Educational content about building in Baja California
                </span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>You can unsubscribe at any time</strong> by clicking the
              "unsubscribe" link at the bottom of any marketing email or by
              contacting us directly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Phone and Text Communications
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              By providing your phone number, you consent to receive:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Phone calls regarding your inquiries and projects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Text messages (SMS) for appointment confirmations and updates
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Follow-up communications about your consultation or project
                </span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You may opt-out of text messages by replying "STOP" to any text
              message. Standard message and data rates may apply.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Information Sharing and Disclosure
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  <strong>Service providers:</strong> With trusted third-party
                  vendors who assist us in operating our website, conducting
                  business, or servicing you (e.g., email service providers,
                  analytics tools)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  <strong>Legal requirements:</strong> When required by law or
                  to protect our rights, property, or safety
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  <strong>Business transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  <strong>With your consent:</strong> When you explicitly
                  authorize us to share your information
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cookies and Tracking Technologies
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your
              browsing experience. Cookies are small data files stored on your
              device that help us:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Remember your preferences and settings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Understand how you use our website</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Improve our website performance and content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Deliver relevant advertising</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You can control cookies through your browser settings. However,
              disabling cookies may affect website functionality.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Security
            </h2>

            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security
              measures to protect your personal information from unauthorized
              access, disclosure, alteration, or destruction. However, no method
              of transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your Privacy Rights
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  <strong>Access:</strong> Request a copy of the personal
                  information we hold about you
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  <strong>Correction:</strong> Request correction of inaccurate
                  or incomplete information
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  <strong>Opt-out:</strong> Unsubscribe from marketing
                  communications
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  <strong>Data portability:</strong> Receive your data in a
                  structured, machine-readable format
                </span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:privacy@bajaconstruction.com"
                className="text-amber-600 hover:text-amber-700 font-semibold"
              >
                privacy@bajaconstruction.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+18587587768"
                className="text-amber-600 hover:text-amber-700 font-semibold"
              >
                (858) 758-7768
              </a>
              .
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Children's Privacy
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you believe we have collected information from a child, please
              contact us immediately.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              International Data Transfers
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and maintained on servers
              located outside of your country of residence. By using our
              services, you consent to the transfer of your information to
              Mexico and the United States, where data protection laws may
              differ from those in your jurisdiction.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to This Privacy Policy
            </h2>

            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last Updated" date. You are advised to
              review this Privacy Policy periodically for any changes.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
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
                    href="mailto:privacy@bajaconstruction.com"
                    className="font-semibold text-amber-600 hover:text-amber-700"
                  >
                    privacy@bajaconstruction.com
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
