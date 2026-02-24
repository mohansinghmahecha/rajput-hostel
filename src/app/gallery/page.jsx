"use client";

import React, { useState } from "react";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Hostel Main Entrance",
    description:
      "The iconic entrance of Rajput Chatrwas welcoming generations of students.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Tz64uHn4i_uyB2cvTIi_aumYDKUtOxqU4A&s",
  },
  {
    id: 2,
    title: "Evening Courtyard",
    description: "Students relaxing and connecting in the central courtyard.",
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
  },
  {
    id: 3,
    title: "Common Room",
    description: "The hub for late-night chats, celebrations and memories.",
    image:
      "https://images.pexels.com/photos/37347/office-freelancer-computer-business-37347.jpeg",
  },
  {
    id: 4,
    title: "Study Hall",
    description: "Quiet dedicated study space for serious preparation.",
    image:
      "https://images.pexels.com/photos/7106/people-woman-coffee-meeting.jpg",
  },
  {
    id: 5,
    title: "Cultural Night",
    description:
      "Annual cultural event celebrating traditions and achievements.",
    image:
      "https://images.pexels.com/photos/2102568/pexels-photo-2102568.jpeg",
  },
  {
    id: 6,
    title: "Festival Celebrations",
    description: "Hostel courtyard decorated beautifully during festive season.",
    image:
      "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg",
  },
  {
    id: 7,
    title: "Mess Area",
    description: "Where shared meals and unforgettable conversations happen.",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
  },
  {
    id: 8,
    title: "Room Corridor",
    description: "The corridor that has seen countless hostel stories.",
    image:
      "https://images.pexels.com/photos/37347/office-freelancer-computer-business-37347.jpeg",
  },
  {
    id: 9,
    title: "Alumni Meet",
    description: "Alumni gathering back at their second home.",
    image: "https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg",
  },
  {
    id: 10,
    title: "Hostel Exterior View",
    description: "A wide view of the hostel building during golden hour.",
    image:
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
  },
  {
    id: 11,
    title: "Library Corner",
    description: "A peaceful reading corner inside the hostel premises.",
    image:
      "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg",
  },
  {
    id: 12,
    title: "Sports Ground",
    description: "Evening cricket and football games with hostel mates.",
    image: "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg",
  },
];

export default function GalleryPage() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <>
      <section className="relative min-h-screen w-full text-yellow-50 pt-24 pb-16">
        {/* Background (uses similar feel as home hero, but static) */}
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full bg-gradient-to-b from-black via-red-950 to-black" />
        </div>

        {/* Gradient overlay & decorative borders like home */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-black/60 to-transparent -z-10" />
        <div className="absolute top-10 left-6 w-16 h-16 border-t-4 border-l-4 border-yellow-500 opacity-70" />
        <div className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-yellow-500 opacity-70" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-down">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-900/40 border border-yellow-500/40 text-xs tracking-[0.25em] uppercase text-yellow-200/90 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_18px_rgba(250,204,21,0.8)]" />
              Shree Rajput Hostel • Gallery
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r p-2 from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                छात्रावास स्मृतियाँ
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-yellow-100/90 max-w-2xl mx-auto leading-relaxed">
              Where every corridor, courtyard and temple corner carries the
              stories of Rajput brotherhood, discipline and tradition.
            </p>

            <div className="flex justify-center mt-6">
              <div className="h-[2px] w-28 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            </div>
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:gap-7 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up">
            {GALLERY_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveItem(item)}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-red-900/70 via-red-950/80 to-black/90 border border-yellow-500/20 shadow-[0_18px_45px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/80"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top left badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-yellow-400/40 text-[11px] uppercase tracking-[0.18em] text-yellow-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                    {item.id.toString().padStart(2, "0")} • Memory
                  </div>

                  {/* Title over image */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h2 className="text-base sm:text-lg font-semibold text-yellow-50 drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
                      {item.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex flex-col gap-3">
                  <p className="text-xs sm:text-sm text-yellow-100/85 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-yellow-300/80">
                    <span className="flex items-center gap-1">
                      <span className="inline-block w-1 h-1 rounded-full bg-yellow-400" />
                      Rajput Brotherhood
                    </span>
                    <span className="uppercase tracking-[0.22em] text-yellow-200/70">
                      View larger
                    </span>
                  </div>
                </div>

                {/* Glow border on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-[-1px] rounded-2xl border border-yellow-400/40 blur-[1px]" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <button
            type="button"
            className="absolute inset-0 w-full h-full cursor-zoom-out"
            onClick={() => setActiveItem(null)}
          />
          <div className="relative max-w-4xl w-full mx-auto rounded-3xl overflow-hidden border border-yellow-500/40 bg-gradient-to-b from-red-950 via-black to-black shadow-[0_30px_80px_rgba(0,0,0,0.9)]">
            <div className="relative h-72 sm:h-96 md:h-[420px]">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="relative z-10 rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-yellow-100 border border-yellow-400/60 hover:bg-black/80 transition"
                >
                  Close
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-xl sm:text-2xl font-bold text-yellow-50">
                  {activeItem.title}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-yellow-100/90 max-w-2xl">
                  {activeItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reuse home page animations on this page */}
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
        .animate-fade-in-down {
          animation: fade-in-down 0.9s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.9s ease-out forwards;
        }
      `}</style>
    </>
  );
}

