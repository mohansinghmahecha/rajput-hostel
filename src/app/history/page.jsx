"use client";

import { useState } from "react";

const TIMELINE = [
  {
    year: "1985",
    title: "Foundation Stone Laid",
    titleHi: "नींव रखी गई",
    description:
      "Shree Rajput Hostel was founded by the elders of the Rajput community with a vision to provide a safe, disciplined, and value-driven residence for students coming from villages and towns across Rajasthan.",
    icon: "🏛️",
    side: "left",
  },
  {
    year: "1990",
    title: "First Block Completed",
    titleHi: "प्रथम भवन निर्माण",
    description:
      "The first residential block was completed, housing 40 students. The hostel quickly became a home away from home, built on the foundations of brotherhood, culture, and mutual respect.",
    icon: "🧱",
    side: "right",
  },
  {
    year: "1998",
    title: "Expansion & New Wing",
    titleHi: "विस्तार एवं नया भवन",
    description:
      "A new wing was added to accommodate the growing number of students. A central dining hall and study room were built, fostering a community spirit among all residents.",
    icon: "📐",
    side: "left",
  },
  {
    year: "2005",
    title: "Cultural Heritage Room",
    titleHi: "सांस्कृतिक विरासत कक्ष",
    description:
      "A dedicated heritage room was established, displaying the rich Rajput history, art, weapons, and valor. Annual Rajput festivals, poetry nights, and folk events became a tradition.",
    icon: "🎨",
    side: "right",
  },
  {
    year: "2010",
    title: "25 Years of Legacy",
    titleHi: "रजत जयंती",
    description:
      "The Silver Jubilee was celebrated with great pride. Over 500 alumni gathered from across India to honor the hostel's 25 years of producing responsible citizens, officers, and scholars.",
    icon: "🏆",
    side: "left",
  },
  {
    year: "2015",
    title: "Digital & Modern Facilities",
    titleHi: "आधुनिक सुविधाएं",
    description:
      "The hostel was modernised with high-speed internet, a computer lab, and an indoor sports complex. Academic mentorship programmes and career guidance workshops were launched.",
    icon: "💻",
    side: "right",
  },
  {
    year: "2020",
    title: "Alumni Network Launched",
    titleHi: "पूर्व छात्र संगठन",
    description:
      "A formal alumni association was established to connect former residents. The network today spans IAS officers, engineers, doctors, entrepreneurs, and artists across the country.",
    icon: "🤝",
    side: "left",
  },
  {
    year: "2024",
    title: "New Era — Digital Platform",
    titleHi: "नया युग — डिजिटल मंच",
    description:
      "Launch of the official Rajput Hostel digital platform — connecting current students, alumni, and the broader community. A new chapter in preserving and celebrating our heritage.",
    icon: "🌐",
    side: "right",
  },
];

const STATS = [
  { value: "39+", label: "Years of Service", labelHi: "सेवा के वर्ष" },
  { value: "1200+", label: "Alumni Worldwide", labelHi: "पूर्व छात्र" },
  { value: "50+", label: "IAS / RAS Officers", labelHi: "अधिकारी" },
  { value: "8", label: "Residential Blocks", labelHi: "आवासीय भवन" },
];

const FOUNDERS = [
  {
    name: "Thakur Pratap Singh",
    role: "Founder, 1985",
    desc: "Visionary leader who laid the cornerstone of the hostel with a dream of Rajput unity and education.",
  },
  {
    name: "Rao Balwant Singh",
    role: "Co-Founder & First Warden",
    desc: "Shaped the early discipline and cultural identity that defines the hostel to this day.",
  },
  {
    name: "Maharaj Vikram Rathore",
    role: "Patron, 1985–2010",
    desc: "Provided unwavering financial and moral support for two and a half decades of growth.",
  },
];

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

export default function HistoryPage() {
  const [activeYear, setActiveYear] = useState(null);

  return (
    <>
      <main className="relative min-h-screen w-full text-yellow-50 overflow-x-hidden">
        {/* ── Global Background ── */}
        <div className="fixed inset-0 -z-20 bg-gradient-to-b from-black via-red-950 to-black" />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(180,20,20,0.18)_0%,transparent_60%)]" />

        {/* ── Corner Ornaments ── */}
        <div className="pointer-events-none fixed top-20 left-4 w-14 h-14 border-t-4 border-l-4 border-yellow-500 opacity-50" />
        <div className="pointer-events-none fixed bottom-8 right-4 w-14 h-14 border-b-4 border-r-4 border-yellow-500 opacity-50" />

        {/* ═══════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════ */}
        <section className="relative pt-28 pb-20 px-4 flex flex-col items-center text-center overflow-hidden">
          {/* Radial glow */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(220,38,38,0.35),transparent)]" />

          {/* Decorative top line */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400" />
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-900/40 border border-yellow-500/40 text-xs tracking-[0.25em] uppercase text-yellow-200/90">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.9)] animate-pulse" />
              Shree Rajput Hostel • Est. 1985
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight mb-4 animate-fade-in-down">
            <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(250,204,21,0.35)]">
              हमारा इतिहास
            </span>
          </h1>

          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-yellow-100/80 mb-6 animate-fade-in-down">
            Our Heritage & History
          </h2>

          <p className="max-w-2xl text-sm sm:text-base text-yellow-100/75 leading-relaxed animate-fade-in-up">
            For nearly four decades, Shree Rajput Hostel has been more than a
            residence — it is a living tradition of brotherhood, valor, and
            excellence. Rooted in the proud Rajput spirit, our story is one of
            community, sacrifice, and the relentless pursuit of knowledge.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
          </div>

          {/* Floating swords decoration */}
          <div className="pointer-events-none absolute left-4 top-1/3 opacity-10 text-7xl select-none rotate-45">
            ⚔️
          </div>
          <div className="pointer-events-none absolute right-4 top-1/3 opacity-10 text-7xl select-none -rotate-45">
            ⚔️
          </div>
        </section>

        {/* ═══════════════════════════════════════
            STATS BAR
        ═══════════════════════════════════════ */}
        <section className="relative py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="relative group flex flex-col items-center justify-center p-5 rounded-2xl bg-black/40 border border-yellow-500/25 backdrop-blur-sm hover:border-yellow-400/60 hover:bg-red-950/40 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-b from-yellow-300 to-orange-400 bg-clip-text text-transparent leading-none">
                    {s.value}
                  </span>
                  <span className="mt-1 text-xs font-semibold text-yellow-200/80 tracking-wide text-center">
                    {s.label}
                  </span>
                  <span className="text-[11px] text-yellow-100/50 mt-0.5 text-center">
                    {s.labelHi}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            TIMELINE SECTION
        ═══════════════════════════════════════ */}
        <section className="relative py-14 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section heading */}
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.28em] text-yellow-200/70 mb-2">
                Journey Through Time
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold">
                <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
                  कालक्रम — Milestones
                </span>
              </h2>
              <div className="mt-4 flex justify-center">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Center vertical line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-400/20 via-yellow-400/50 to-yellow-400/20 hidden md:block" />

              <div className="space-y-10">
                {TIMELINE.map((event, idx) => {
                  const isLeft = event.side === "left";
                  const isActive = activeYear === event.year;
                  return (
                    <div
                      key={event.year}
                      className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 animate-fade-in-up`}
                      style={{ animationDelay: `${idx * 80}ms` }}
                    >
                      {/* Left content (desktop) */}
                      <div
                        className={`md:w-[calc(50%-2.5rem)] ${
                          isLeft
                            ? "md:pr-8 md:text-right"
                            : "md:pr-8 md:text-right opacity-0 pointer-events-none hidden md:block"
                        }`}
                      >
                        {isLeft && (
                          <TimelineCard
                            event={event}
                            isActive={isActive}
                            onClick={() =>
                              setActiveYear(isActive ? null : event.year)
                            }
                            align="right"
                          />
                        )}
                      </div>

                      {/* Center dot */}
                      <div className="hidden md:flex flex-shrink-0 w-20 items-center justify-center relative z-10">
                        <button
                          onClick={() =>
                            setActiveYear(isActive ? null : event.year)
                          }
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-xl border-2 transition-all duration-300 shadow-lg ${isActive ? "border-yellow-300 bg-red-900 shadow-[0_0_20px_rgba(250,204,21,0.5)] scale-110" : "border-yellow-500/50 bg-black/60 hover:border-yellow-400 hover:scale-105"}`}
                        >
                          {event.icon}
                        </button>
                      </div>

                      {/* Right content (desktop) */}
                      <div
                        className={`md:w-[calc(50%-2.5rem)] ${
                          !isLeft
                            ? "md:pl-8"
                            : "md:pl-8 opacity-0 pointer-events-none hidden md:block"
                        }`}
                      >
                        {!isLeft && (
                          <TimelineCard
                            event={event}
                            isActive={isActive}
                            onClick={() =>
                              setActiveYear(isActive ? null : event.year)
                            }
                            align="left"
                          />
                        )}
                      </div>

                      {/* Mobile: always show as a single card */}
                      <div className="md:hidden w-full">
                        <TimelineCard
                          event={event}
                          isActive={isActive}
                          onClick={() =>
                            setActiveYear(isActive ? null : event.year)
                          }
                          align="left"
                          mobile
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FOUNDERS SECTION
        ═══════════════════════════════════════ */}
        <section className="relative py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.28em] text-yellow-200/70 mb-2">
                The Visionaries
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold">
                <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
                  संस्थापक — Our Founders
                </span>
              </h2>
              <div className="mt-4 flex justify-center">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {FOUNDERS.map((f, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-black/40 border border-yellow-500/25 backdrop-blur-sm hover:border-yellow-400/60 hover:bg-red-950/40 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  {/* Hover shimmer */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Avatar */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="relative w-16 h-16 rounded-full border-2 border-yellow-500/60 bg-red-900/60 flex items-center justify-center text-lg font-bold text-yellow-100 shadow-lg">
                      {getInitials(f.name)}
                    </div>
                  </div>

                  <h3 className="font-bold text-yellow-100 text-base mb-1">
                    {f.name}
                  </h3>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-yellow-400/80 mb-3 block">
                    {f.role}
                  </span>
                  <p className="text-xs text-yellow-100/70 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            VALUES BANNER
        ═══════════════════════════════════════ */}
        <section className="relative py-16 px-4 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-950/80 via-red-900/60 to-red-950/80" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.25),transparent_70%)]" />

          {/* Decorative border lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-yellow-200/70 mb-3">
              Our Core Values
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                वीरता • ज्ञान • एकता • सेवा
              </span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  hi: "वीरता",
                  en: "Valor",
                  desc: "Courage in every challenge",
                  icon: "⚔️",
                },
                {
                  hi: "ज्ञान",
                  en: "Knowledge",
                  desc: "Lifelong pursuit of learning",
                  icon: "📖",
                },
                {
                  hi: "एकता",
                  en: "Unity",
                  desc: "Brotherhood above all",
                  icon: "🤝",
                },
                {
                  hi: "सेवा",
                  en: "Service",
                  desc: "Giving back to community",
                  icon: "🏡",
                },
              ].map((v, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-black/30 border border-yellow-500/20 hover:border-yellow-400/50 hover:bg-black/50 transition-all duration-300"
                >
                  <span className="text-3xl">{v.icon}</span>
                  <span className="text-base font-bold text-yellow-300">
                    {v.hi}
                  </span>
                  <span className="text-xs font-semibold text-yellow-100/80 uppercase tracking-wider">
                    {v.en}
                  </span>
                  <span className="text-[11px] text-yellow-100/55 text-center">
                    {v.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            QUOTE / CLOSING SECTION
        ═══════════════════════════════════════ */}
        <section className="relative py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-yellow-400/40 text-8xl font-serif leading-none mb-4">
              "
            </div>
            <p className="text-lg sm:text-2xl font-semibold text-yellow-100/90 leading-relaxed italic mb-4">
              राजपूत छात्रावास केवल एक आवास नहीं, यह एक परिवार है — जहाँ हर
              छात्र शक्ति और संस्कार लेकर जाता है।
            </p>
            <p className="text-sm text-yellow-200/60 tracking-wide">
              — Rajput Hostel Founding Charter, 1985
            </p>
            <div className="mt-8 flex justify-center">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            </div>
            <p className="mt-6 text-xs text-yellow-200/50 tracking-[0.2em] uppercase">
              Shree Rajput Hostel • Est. 1985 • Continuing the Legacy
            </p>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(22px);
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
          animation: fade-in-up 0.9s ease-out both;
        }
      `}</style>
    </>
  );
}

/* ── Reusable timeline card ── */
function TimelineCard({ event, isActive, onClick, align, mobile }) {
  return (
    <button
      onClick={onClick}
      className={`w-full group relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.5)] backdrop-blur-sm ${align === "right" ? "text-right" : "text-left"} ${isActive ? "bg-red-950/70 border-yellow-400/70 shadow-[0_0_28px_rgba(250,204,21,0.2)]" : "bg-black/40 border-yellow-500/25 hover:border-yellow-400/50 hover:bg-red-950/40"}`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Mobile icon */}
      {mobile && (
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">{event.icon}</span>
          <span className="text-xs uppercase tracking-[0.2em] text-yellow-400/80 font-semibold">
            {event.year}
          </span>
        </div>
      )}

      {/* Year badge (desktop) */}
      {!mobile && (
        <span
          className={`inline-block text-xs uppercase tracking-[0.2em] text-yellow-400/80 font-semibold mb-1`}
        >
          {event.year}
        </span>
      )}

      <h3 className="font-bold text-yellow-100 text-sm sm:text-base mb-0.5">
        {event.title}
      </h3>
      <p className="text-[11px] text-yellow-300/70 mb-2 font-medium">
        {event.titleHi}
      </p>
      <p className="text-xs text-yellow-100/65 leading-relaxed">
        {event.description}
      </p>

      {/* Active indicator */}
      {isActive && (
        <div
          className={`absolute -bottom-px ${
            align === "right" ? "right-0" : "left-0"
          } w-1/3 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-400`}
        />
      )}
    </button>
  );
}
