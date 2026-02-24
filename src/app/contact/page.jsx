"use client";

import { useMemo, useState } from "react";

const CONTACTS = [
  {
    id: 1,
    name: "Arjun Singh",
    dob: "1998-04-12",
    type: "Job",
    field: "Software Engineer",
    city: "Jaipur",
    state: "Rajasthan",
    email: "arjun.singh@demo.com",
    phone: "+91 98XXXXXX12",
    batch: "2016",
  },
  {
    id: 2,
    name: "Vikram Rathore",
    dob: "1997-11-03",
    type: "Job",
    field: "Banking (Operations)",
    city: "Jodhpur",
    state: "Rajasthan",
    email: "vikram.rathore@demo.com",
    phone: "+91 97XXXXXX03",
    batch: "2015",
  },
  {
    id: 3,
    name: "Manish Rajput",
    dob: "2000-06-18",
    type: "Study",
    field: "MBA (Finance)",
    city: "Udaipur",
    state: "Rajasthan",
    email: "manish.rajput@demo.com",
    phone: "+91 88XXXXXX18",
    batch: "2019",
  },
  {
    id: 4,
    name: "Prateek Shekhawat",
    dob: "1999-01-27",
    type: "Job",
    field: "Civil Engineer",
    city: "Kota",
    state: "Rajasthan",
    email: "prateek.s@demo.com",
    phone: "+91 90XXXXXX27",
    batch: "2017",
  },
  {
    id: 5,
    name: "Rahul Chauhan",
    dob: "2001-09-09",
    type: "Study",
    field: "B.Tech (CSE)",
    city: "Ajmer",
    state: "Rajasthan",
    email: "rahul.chauhan@demo.com",
    phone: "+91 86XXXXXX09",
    batch: "2020",
  },
  {
    id: 6,
    name: "Deepak Sisodia",
    dob: "1996-02-15",
    type: "Job",
    field: "Government Service",
    city: "Bikaner",
    state: "Rajasthan",
    email: "deepak.sisodia@demo.com",
    phone: "+91 99XXXXXX15",
    batch: "2014",
  },
  {
    id: 7,
    name: "Kunal Solanki",
    dob: "1998-12-22",
    type: "Job",
    field: "Design (UI/UX)",
    city: "Indore",
    state: "Madhya Pradesh",
    email: "kunal.solanki@demo.com",
    phone: "+91 87XXXXXX22",
    batch: "2016",
  },
  {
    id: 8,
    name: "Saurabh Parihar",
    dob: "2002-05-04",
    type: "Study",
    field: "CA (Intermediate)",
    city: "Mumbai",
    state: "Maharashtra",
    email: "saurabh.parihar@demo.com",
    phone: "+91 84XXXXXX04",
    batch: "2021",
  },
  {
    id: 9,
    name: "Nikhil Bhati",
    dob: "1997-08-30",
    type: "Job",
    field: "Sales & Marketing",
    city: "Delhi",
    state: "Delhi",
    email: "nikhil.bhati@demo.com",
    phone: "+91 91XXXXXX30",
    batch: "2015",
  },
  {
    id: 10,
    name: "Rohit Chundawat",
    dob: "1999-03-10",
    type: "Job",
    field: "Data Analyst",
    city: "Pune",
    state: "Maharashtra",
    email: "rohit.chundawat@demo.com",
    phone: "+91 89XXXXXX10",
    batch: "2017",
  },
  {
    id: 11,
    name: "Aman Kachhwaha",
    dob: "2000-10-01",
    type: "Study",
    field: "M.Tech (AI/ML)",
    city: "Bengaluru",
    state: "Karnataka",
    email: "aman.kachhwaha@demo.com",
    phone: "+91 85XXXXXX01",
    batch: "2019",
  },
  {
    id: 12,
    name: "Yashvardhan Singh",
    dob: "1996-07-19",
    type: "Job",
    field: "Entrepreneur",
    city: "Ahmedabad",
    state: "Gujarat",
    email: "yashvardhan.s@demo.com",
    phone: "+91 92XXXXXX19",
    batch: "2014",
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

function formatDob(iso) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

export default function ContactPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CONTACTS;
    return CONTACTS.filter((c) => {
      const hay = `${c.name} ${c.field} ${c.city} ${c.state} ${c.type} ${c.batch}`
        .toLowerCase()
        .trim();
      return hay.includes(q);
    });
  }, [query]);

  return (
    <>
      <section className="relative min-h-screen w-full text-yellow-50 pt-24 pb-16">
        {/* Background similar to home/gallery */}
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full bg-gradient-to-b from-black via-red-950 to-black" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-black/60 to-transparent -z-10" />
        <div className="absolute top-10 left-6 w-16 h-16 border-t-4 border-l-4 border-yellow-500 opacity-70" />
        <div className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-yellow-500 opacity-70" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Header */}
          <div className="text-center mb-10 animate-fade-in-down">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-900/40 border border-yellow-500/40 text-xs tracking-[0.25em] uppercase text-yellow-200/90 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_18px_rgba(250,204,21,0.8)]" />
              Shree Rajput Hostel • Contacts
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r p-2 from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                छात्रावासी संपर्क सूची
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-yellow-100/90 max-w-2xl mx-auto leading-relaxed">
              A curated list of Rajput Hostel brothers across batches, cities and
              professions. Use search to quickly find alumni you want to connect
              with.
            </p>

            <div className="flex justify-center mt-6">
              <div className="h-[2px] w-28 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            </div>
          </div>

          {/* Search bar + stats */}
          <div className="mb-8 animate-fade-in-up">
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              <div className="text-left">
                <p className="text-xs uppercase tracking-[0.22em] text-yellow-200/80">
                  Alumni Directory
                </p>
                <p className="text-sm text-yellow-100/80 mt-1">
                  Showing <span className="font-semibold">{filtered.length}</span>{" "}
                  of {CONTACTS.length} sample records
                </p>
              </div>

              <div className="flex-1 max-w-xl">
                <div className="relative">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by name, city, field, batch…"
                    className="w-full rounded-full bg-black/40 border border-yellow-500/40 px-4 py-2.5 text-sm text-yellow-50 placeholder:text-yellow-200/60 focus:outline-none focus:ring-2 focus:ring-yellow-400/80 focus:border-yellow-300 shadow-[0_0_0_1px_rgba(0,0,0,0.4)]"
                  />
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[11px] uppercase tracking-[0.25em] text-yellow-200/70">
                    Search
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Table container */}
          <div className="bg-black/40 border border-yellow-500/30 rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.85)] backdrop-blur-md animate-fade-in-up">
            <div className="overflow-x-auto max-h-[60vh]">
              <table className="min-w-full text-sm">
                <thead className="bg-red-950/70 sticky top-0 z-10">
                  <tr className="text-left text-xs uppercase tracking-[0.22em] text-yellow-200/90">
                    <th className="px-4 py-3">User</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">DOB</th>
                    <th className="px-4 py-3">Job / Study</th>
                    <th className="px-4 py-3">Field</th>
                    <th className="px-4 py-3">City</th>
                    <th className="px-4 py-3">Batch</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((c, idx) => (
                    <tr
                      key={c.id}
                      className={`transition-all duration-150 ${
                        idx % 2 === 0 ? "bg-black/40" : "bg-black/25"
                      } hover:bg-red-900/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.6)]`}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-yellow-500/60 bg-red-900/60 text-xs font-bold text-yellow-100">
                            {getInitials(c.name) || "RC"}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 font-semibold text-yellow-50">
                        {c.name}
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-yellow-100/90">
                        {formatDob(c.dob)}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold ${
                            c.type === "Job"
                              ? "bg-emerald-500/20 text-emerald-200 border border-emerald-400/40"
                              : "bg-sky-500/20 text-sky-200 border border-sky-400/40"
                          }`}
                        >
                          {c.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-yellow-100/90">{c.field}</td>
                      <td className="px-4 py-3 text-yellow-100/90">
                        <div>
                          <span>{c.city}</span>
                          <span className="block text-[11px] text-yellow-200/70">
                            {c.state}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 font-semibold text-yellow-50">
                        {c.batch}
                      </td>
                      <td className="px-4 py-3 text-yellow-100/85">{c.email}</td>
                      <td className="px-4 py-3 text-yellow-100/85">{c.phone}</td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td
                        colSpan={9}
                        className="px-4 py-8 text-center text-sm text-yellow-200/70"
                      >
                        No contacts found for this search. Try a different name,
                        batch, city or field.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 px-4 sm:px-6 py-3 border-t border-yellow-500/30 text-[11px] text-yellow-200/80">
              <span>
                Tip: Search using Hindi or English keywords like city, batch or
                profession.
              </span>
              <span>© Rajput Chatrwas Alumni</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse animations */}
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

