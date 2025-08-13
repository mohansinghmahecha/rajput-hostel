"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "HISTORY", path: "/history" },
    { label: "GALLERY", path: "/gallery" },
    { label: "CONTACT", path: "/contact" },
    { label: "LOGIN FOR ALUMNI", path: "/login" },
  ];

  return (
    <div>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrolled 
            ? "bg-gradient-to-r from-red-900/98 via-red-800/98 to-red-700/98 backdrop-blur-xl shadow-2xl py-2" 
            : "bg-gradient-to-r from-red-900/90 via-red-800/90 to-red-700/90 backdrop-blur-lg shadow-xl py-4"
        }`}
        style={{
          boxShadow: scrolled 
            ? "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)" 
            : "0 4px 20px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.05)"
        }}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-400/30 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-orange-400/40 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-yellow-300/25 rounded-full animate-ping delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="flex items-center justify-between">
            
            {/* Enhanced Logo Section */}
            <Link href="/" className="flex items-center space-x-4 group z-10">
              <div className="relative">
                {/* Multi-layer Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 opacity-60 blur-lg group-hover:opacity-80 group-hover:blur-xl transition-all duration-500 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-orange-300 opacity-40 blur-md group-hover:opacity-60 transition-all duration-500"></div>
                
                <div className="relative">
                  <Image
                    src="/rajput.jpg"
                    alt="Rajput Chatrwas"
                    width={scrolled ? 50 : 65}
                    height={scrolled ? 50 : 65}
                    className={`rounded-full border-2 border-yellow-400/70 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl ${scrolled ? 'shadow-lg' : 'shadow-2xl'}`}
                  />
                  {/* Rotating Golden Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-yellow-400/50 animate-spin-slow opacity-60"></div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <h1 className={`font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-orange-200 bg-clip-text text-transparent transition-all duration-500 leading-tight ${scrolled ? 'text-lg' : 'text-2xl'}`}>
                  श्री राजपूत छात्रावास
                </h1>
                <p className={`text-yellow-100/90 font-medium transition-all duration-500 ${scrolled ? 'text-xs' : 'text-sm'} tracking-wide`}>
                  Shree Rajput Hostel
                </p>
              </div>
            </Link>

            {/* Clean Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-0">
                {navItems.map((item, index) => (
                  <li key={item.label} className="relative">
                    <Link
                      href={item.path}
                      className="relative px-5 py-3 text-white font-semibold text-sm tracking-wider group transition-all duration-300 hover:text-yellow-200"
                      onMouseEnter={() => setActiveLink(item.path)}
                    >
                      <span className="relative z-10">{item.label}</span>
                      
                      {/* Subtle Hover Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                      
                      {/* Golden Underline */}
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-4/5 transition-all duration-300 rounded-full"></div>
                      
                      {/* Separator Line */}
                      {index < navItems.length - 1 && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-4 bg-white/20"></div>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:text-yellow-300 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Elegant Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"></div>
      </header>

      {/* Premium Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop with Blur */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Mobile Menu Panel */}
          <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-br from-red-900/95 via-red-800/95 to-red-700/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-500">
            
            {/* Header with Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <Image
                  src="/rajput.jpg"
                  alt="Rajput Chatrwas"
                  width={45}
                  height={45}
                  className="rounded-full border-2 border-yellow-400/50"
                />
                <div>
                  <h3 className="text-yellow-300 font-bold text-lg">राजपूत छात्रावास</h3>
                  <p className="text-yellow-100/70 text-xs">Rajput Hostel</p>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="p-6 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-white font-semibold rounded-xl hover:bg-white/10 hover:text-yellow-300 transition-all duration-300 transform hover:translate-x-2 group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: mobileMenuOpen ? 'slideInRight 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <span>{item.label}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Footer Text */}
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <p className="text-yellow-200/60 text-xs leading-relaxed">
                Generated for the Student Union<br/>
                Rajput Hostel Family
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}