"use client";

import Link from "next/link";
import Container from "../ui/Container";
import { projects } from "@/src/lib/portfolio";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function PortfolioCarousel() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(false);

  const filters = ["All", "California Contemporary", "Mediterranean"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.style === activeFilter);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      skipSnaps: false,
      duration: 25,
    },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Pause autoplay on hover
  useEffect(() => {
    if (!emblaApi) return;
    const autoplayPlugin = emblaApi?.plugins()?.autoplay;
    if (!autoplayPlugin) return;

    if (hoveredProject) {
      autoplayPlugin.stop();
    } else {
      autoplayPlugin.reset();
    }
  }, [hoveredProject, emblaApi]);

  // Reset carousel when filter changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0);
      setSelectedIndex(0);
    }
  }, [activeFilter, emblaApi]);

  return (
    <section id="portfolio" className=" bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold mb-4">
            <span className="text-lg">🏡</span>
            <span>Featured Projects</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Dream Home,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Brought to Life
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Explore our portfolio of custom California-style and Mediterranean
            homes built for discerning buyers like you.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 sm:mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/30 scale-105"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-amber-400 hover:text-amber-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.slug}
                  className="flex-[0_0_100%] min-w-0"
                  onMouseEnter={() => setHoveredProject(true)}
                  onMouseLeave={() => setHoveredProject(false)}
                >
                  <div className="mx-2 sm:mx-4">
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                      {/* Image Container */}
                      <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          priority={index === 0}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60" />

                        {/* Style Badge */}
                        <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg">
                          <span className="text-sm font-bold text-gray-900">
                            {project.style}
                          </span>
                        </div>

                        {/* Quick Stats Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            {project.features.map((feature, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-white text-sm sm:text-base"
                              >
                                <span className="text-amber-400 text-lg">
                                  ✓
                                </span>
                                <span className="font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 sm:p-8 lg:p-10">
                        {/* Location */}
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                          <span>📍</span>
                          <span className="font-medium">
                            {project.location}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                          {project.title}
                        </h3>

                        {/* Summary */}
                        <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
                          {project.summary}
                        </p>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200">
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                              Size
                            </div>
                            <div className="text-xl font-bold text-gray-900">
                              {project.size}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                              Investment
                            </div>
                            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                              {project.budget}
                            </div>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full py-4 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-base sm:text-lg">
                          View Full Project →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 backdrop-blur-sm shadow-xl flex items-center justify-center text-gray-900 hover:bg-amber-500 hover:text-white transition-all duration-300 hover:scale-110 group"
            aria-label="Previous project"
          >
            <svg
              className="w-6 h-6 transition-transform group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 backdrop-blur-sm shadow-xl flex items-center justify-center text-gray-900 hover:bg-amber-500 hover:text-white transition-all duration-300 hover:scale-110 group"
            aria-label="Next project"
          >
            <svg
              className="w-6 h-6 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`relative h-2.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-12 bg-gradient-to-r from-amber-500 to-orange-600"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to project ${index + 1}`}
              >
                {index === selectedIndex && (
                  <div className="absolute inset-0 bg-white/40 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          {/* Enhanced CTA */}
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />

            <div className="relative max-w-3xl mx-auto">
              <div className="text-5xl mb-6">🏖️</div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Ready to Build Your Beachfront Dream Home?
              </h3>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
                Schedule a free, no-obligation consultation and get clear
                answers to all your questions before you commit to anything.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-blue-600 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>📅</span>
                  <span>Schedule Free Consultation</span>
                </a>

                <a
                  href="#testimonials"
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  <span>🏡</span>
                  <span>Client Stories </span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  <span>No obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  <span>Free guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  <span>English-speaking team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
