"use client";

import React from "react";
import { Sparkles } from "lucide-react";

const Information = () => {
  return (
    // Main container updated with a black to red-950 gradient background
    <section className="relative min-h-screen flex items-center justify-center  bg-gradient-to-b from-black to-red-950 text-white overflow-hidden ">
      
      {/* Background glowing auras using the primary and secondary colors from your palette */}
      <div className="absolute top-[-5rem] right-[-5rem] md:top-[-10rem] md:right-[-10rem] w-72 h-72 md:w-96 md:h-96 bg-yellow-500/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-5rem] left-[-5rem] md:bottom-[-10rem] md:left-[-10rem] w-72 h-72 md:w-96 md:h-96 bg-orange-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Main content card using the neutral gray-900 for the background */}
      <div className="relative z-10 max-w-3xl w-full bg-gray-900/40 backdrop-blur-lg rounded-3xl border border-yellow-500/20 p-8 md:p-12 text-center shadow-2xl shadow-yellow-500/10">
        
        {/* Icon container with a gradient from the new palette */}
        <div className="flex justify-center mb-6">
          <div className="relative p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-yellow-500/30">
            {/* Pulsing glow behind the icon, using an accent color */}
            <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-60 blur-lg animate-ping"></div>
            {/* Icon color changed to a dark background color for contrast */}
            <Sparkles className="relative h-10 w-10 text-red-950" />
          </div>
        </div>

        {/* Heading with a vibrant text gradient using colors from the palette */}
        <h2 className="p-4 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-400  drop-shadow-md">
          सभी भाईयों को जय माताजी की सा
        </h2>

        {/* Content paragraph using the lightest accent color for readability */}
        <p className="text-lg md:text-xl text-yellow-100 leading-relaxed max-w-xl mx-auto">
          यह वेबसाइट हॉस्टल के पुराने और वर्तमान छात्रों द्वारा बनाई गई है,
          ताकि राजकीय या जीवन में कहीं भी काम पड़े तो सामाजिक बंधु मिलकर
          कोई समाधान निकाल पाएं।
        </p>
      </div>
    </section>
  );
};

export default Information;
