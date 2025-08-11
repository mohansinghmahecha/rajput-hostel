"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!videoLoaded) setShowFallback(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [videoLoaded]);

  return (
    <div className="min-h-screen ">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full border border-2">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            onCanPlay={() => setVideoLoaded(true)}
            onError={() => setShowFallback(true)}
          >
            <source src="/video/hvideo.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-black/60 to-transparent z-10"></div>

        {/* Decorative Borders */}
        <div className="absolute top-26 left-6 w-16 h-16 border-t-4 border-l-4 border-yellow-500 opacity-70 z-20"></div>
        <div className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-yellow-500 opacity-70 z-20"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center items-center text-center px-4 h-full">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-down">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r p-2 from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  एक विरासत, एक परिवार
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-yellow-100">
                Shree Rajput Hostel
              </h2>
            </div>

            <div className="animate-fade-in-up mt-8">
              <p className="text-lg md:text-xl text-yellow-100/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                Where tradition meets ambition in a bond of lifelong brotherhood.
                Established in 1952, we nurture leaders with Rajput values of honor,
                courage, and excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
              <Link
                href="/login"
                className="flex px-2 items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/40 transition-all"
              >
                LOGIN FOR ALUMNI              
                
                </Link>
              <Link
                href="/gallery"
                className="px-8 py-3 border-2 border-yellow-300 text-yellow-200 font-bold rounded-lg hover:bg-yellow-300/10 transition-all"
              >
                View Gallery
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-16 max-w-2xl mx-auto animate-fade-in-up">
            {[
              { value: "70+", label: "Years Legacy" },
              { value: "2000+", label: "Alumni" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-red-900/30 p-4 rounded-lg border border-yellow-500/20"
              >
                <div className="text-2xl font-bold text-yellow-300">
                  {stat.value}
                </div>
                <div className="text-yellow-100">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 animate-bounce">
            <svg
              className="w-8 h-8 text-yellow-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}
