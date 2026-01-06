// src/app/brochure/[token]/BrochureViewer.tsx
"use client";

interface BrochureViewerProps {
  brochureUrl: string;
}

export default function BrochureViewer({ brochureUrl }: BrochureViewerProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Your Baja Home Building Guide
          </h1>
          <p className="text-amber-100">
            Everything you need to know before you build
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Action Buttons */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-700 transition shadow-md text-lg"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download PDF
            </a>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-600 text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition text-lg"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Print
            </button>
          </div>

          <p className="text-center text-gray-600 mt-4 text-sm">
            💡 Use the controls inside the PDF viewer to zoom, navigate, and
            search
          </p>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">
              📄 Baja Liberty Builders - Complete Home Building Guide
            </h2>
          </div>

          <div
            className="relative"
            style={{ height: "80vh", minHeight: "600px" }}
          >
            <iframe
              src={brochureUrl}
              className="w-full h-full"
              title="Baja Home Building Guide"
              style={{ border: "none" }}
            />
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            💡 Questions After Reading?
          </h3>
          <p className="text-blue-800 mb-4">
            The guide covers everything comprehensively, but if you'd like to
            discuss your specific situation, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://calendly.com/bajaliberty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-50 transition border-2 border-orange-600"
            >
              📅 Schedule a Free Call
            </a>

            <a
              href="tel:+18587587768"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              📞 (858) 758-7768
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
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
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <strong className="text-amber-500 text-xl">
              Baja Liberty Builders
            </strong>
          </div>
          <div className="mb-4 text-sm">
            Building Dreams in Baja California Since 2015
          </div>
          <div className="flex justify-center gap-6 text-sm">
            <a
              href="https://bajalibertybuilders.com"
              className="text-amber-500 hover:text-amber-400"
            >
              Website
            </a>
            <a
              href="tel:+18587587768"
              className="text-amber-500 hover:text-amber-400"
            >
              Phone
            </a>
            <a
              href="mailto:info@bajalibertybuilders.com"
              className="text-amber-500 hover:text-amber-400"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
