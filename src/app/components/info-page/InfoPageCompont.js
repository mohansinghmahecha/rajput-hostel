import React from "react";
import { University, Award } from "lucide-react";
import Image from "next/image";

const InfoPageComponent = () => {
  return (
    <main className="p-6 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-5 rounded-full">
            <Image
              src="/rajput.jpg"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 font-serif">
            श्री राजपूत छात्रावास जयपुर
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-yellow-500"></div>
            <p className="text-lg text-gray-700">
              स्टेशन रोड़ सिन्धी कैंप जयपुर
            </p>
            <div className="h-px w-16 bg-yellow-500"></div>
          </div>
        </section>

        {/* Description Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-900/10 p-6 rounded-xl border-l-4 border-yellow-500 text-gray-800">
            श्री राजपूत छात्रावास जयपुर को राजस्थान के सबसे प्रसिद्ध व पुराने
            शैक्षणिक संस्थानों में गिना जाता है और यह छात्रावास पुरे राजस्थान को
            जोड़ता है क्योंकि यहां हर जिले से छात्र शिक्षा और संस्कार प्राप्त करने
            आते हैं।
          </div>
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden bg-[url('https://transparenttextures.com/patterns/old-wall.png')] bg-cover">
              <div className="bg-black/50 text-yellow-50 p-6 h-full">
                यह छात्रावास आजादी से पूर्व राजतंत्र के समय का बना हुआ है जो आज भी
                उसी रुप में मौजूद है। यह प्रत्येक सदस्य के जीवन का अभिन्न अंग है।
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-[url('https://transparenttextures.com/patterns/rice-paper-3.png')] bg-cover">
              <div className="bg-black/50 text-yellow-50 p-6 h-full">
                दशकों पुराने इतिहास से लेकर आज तक यहां से निकले छात्र विभिन्न
                क्षेत्रों में उत्कृष्ट सेवाएं दे रहे हैं और आत्मविश्वास से कार्य
                कर रहे हैं।
              </div>
            </div>
          </div>
        </section>

        {/* Alumni Highlight */}
        <section className="relative overflow-hidden rounded-2xl border border-yellow-500/20 p-8 bg-gradient-to-r from-yellow-100 to-red-50">
          <div className="absolute -right-10 -top-10 h-32 w-32 bg-yellow-400 rounded-full opacity-20"></div>
          <div className="absolute -left-5 -bottom-5 h-20 w-20 bg-red-500 rounded-full opacity-20"></div>

          <div className="relative z-10 text-center space-y-4">
            <h2 className="text-3xl font-bold text-yellow-700 flex items-center justify-center gap-3">
              <Award className="h-8 w-8" /> हमारे गौरवशाली पूर्व छात्र
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              श्री राजपूत छात्रावास जयपुर के पूर्व छात्रों की प्रोफाइल यहां
              कार्यक्षेत्र के अनुसार उपलब्ध है। इनकी सफलता हमारे संस्थान की
              पहचान है।
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-red-900 font-bold py-3 px-8 rounded-lg text-lg transition-all shadow-lg shadow-yellow-500/30">
              प्रोफाइल देखें
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default InfoPageComponent;
