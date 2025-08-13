"use client";
import React, { useState, useEffect } from "react";
import {
  Camera,
  MapPin,
  Building,
  Heart,
  Home,
  TreePine,
  Users,
  Star,
  ArrowLeft,
  ArrowRight,
  X,
  ZoomIn
} from "lucide-react";
import Image from "next/image";

const HostelGalleryComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: "हॉस्टल का मुख्य द्वार",
      description: "छात्रावास का मुख्य द्वार जो स्वागत का प्रतीक है। यहीं से छात्रों का नया जीवन शुरू होता है।",
      image: "https://lh6.googleusercontent.com/Sy5NSDvPLkMdkn8jyrshFAYlMcoKxGkU8CgGR14QGcqESlf3CokDQNLLZ1JXxRX59oxbBFBbOHXa2RsFcXtW37qK3coh80XguZWjaKg95_I-Pb_IovlKRQCWGoui4Kyt4ll96MieSKew3OoSoYIx3oAXyA1mgKlMcv6QXK7ytcTbBk4vpHbORg=w1280",
      category: "entrance",
      icon: Home
    },
    {
      id: 2,
      title: "श्री महादेव मंदिर",
      description: "राजपूत छात्रावास के अंतर्गत स्थित पवित्र मंदिर है जहाँ पर छात्र अपनी आध्यात्मिक शिक्षा पाते हैं।",
      image: "https://lh6.googleusercontent.com/iGT1SAyzn-yGpGAmwFGYE6jW77wKL2TF9sCN361Y4mDBdAMccfqqILP6mSqFVIkrrG8fdiMX5XxAMptNc0p2sHhimNbc91X7Pnv4LVRDii3pHnLT0cdVhyo9jN3_1OOlZYA15uqYuBnA7G0lTxwqfD_4rpCTICFd0u_j4ahRu5DU-xhZBWMCAw=w1280",
      category: "religious",
      icon: Heart
    },
    {
      id: 3,
      title: "कुलदेवी माँ दुर्गा मंदिर व प्रार्थना भवन",
      description: "राजपूत छात्रावास का मुख्य पूजा स्थल जहाँ छात्र प्रतिदिन माता से आशीर्वाद लेते हैं।",
      image: "https://lh3.googleusercontent.com/1lE8xt4cxqcAUitV4SqyZ2ocLvRSi2n6iRjMRksMbwxRDTFycEf6FRcCgX8dyXaVqq0L92YahK8KSquIPszpK9rx9kQuSp2FaY7SwmaqvdSs99Y7T7IkdUV6Ey3mKaB2g6ZzpfEqYy3gQ3FW72ilha10XC69w78gVeBQEXE6BumDtaKbUAmwNw=w1280",
      category: "religious",
      icon: Star
    },
    {
      id: 4,
      title: "छात्रावास का सुंदर दृश्य",
      description: "हरियाली से भरा छात्रावास परिसर जो प्राकृतिक वातावरण प्रदान करता है।",
      image: "https://lh3.googleusercontent.com/ciEZI2ZAN1wo2coDVZ3vNCC7Yo5b9C2iQR5eOieSVZKQEOZZxCX-LdNVEtUF_pQeHwouW2lTM2S-92Vyn_sPohQpIec9mKm1MDQMo5MQj0YwiACR9fxN4K6KIRH8dkRnAEa05y3asiY5eFcXQB0sslmHeiE0zNJ_yUloJUt2OHtq6Bo3k5sgRQ=w1280",
      category: "campus",
      icon: TreePine
    },
    {
      id: 5,
      title: "राजपूत हॉस्टल एल्यूमिनाई एसोसिएशन",
      description: "पूर्व छात्रावासी संघ का कार्यालय जहाँ पुराने छात्रों का स्नेह-सम्मान मिलता है।",
      image: "/video/top.mp4",
      isvideo: true,
      category: "association",
      icon: Users
    }
  ];

  const categories = [
    { key: 'all', label: 'सभी', icon: Camera },
    { key: 'entrance', label: 'प्रवेश द्वार', icon: Home },
    { key: 'religious', label: 'धार्मिक स्थल', icon: Heart },
    { key: 'campus', label: 'परिसर', icon: TreePine },
    { key: 'association', label: 'संघ', icon: Users }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openModal = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    }

    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
          <div className="inline-flex items-center justify-center bg-gradient-to-br from-yellow-400/20 to-orange-400/20 p-4 rounded-full border border-yellow-400/30 backdrop-blur-sm mb-8">
            <Camera className="h-12 w-12 text-yellow-600" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent font-serif mb-6">
            छात्रावास दर्शन
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full mb-6"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            श्री राजपूत छात्रावास जयपुर की सुंदर तस्वीरों के माध्यम से हमारी विरासत और परंपरा को देखें
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`group flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 border backdrop-blur-sm ${activeCategory === category.key
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-transparent shadow-lg transform scale-105'
                : 'bg-white/60 text-gray-700 border-yellow-200 hover:bg-yellow-50 hover:border-yellow-400'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <category.icon className={`h-5 w-5 transition-transform group-hover:scale-110 ${activeCategory === category.key ? 'text-white' : 'text-yellow-600'
                }`} />
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => openModal(item)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64">

                {item.isvideo ? (<video
                  src={item.image}
                  autoPlay
                  loop
                  muted
                  onLoadedMetadata={(e) => {
                    e.target.playbackRate = 1.5;
                  }}
                  className="w-full h-auto"
                ></video>
                ) : (<Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                   unoptimized // ✅ bypass server fetch
  priority    // ✅ preload
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />)
                }


                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <item.icon className="h-8 w-8" />
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <ZoomIn className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    <item.icon className="h-4 w-4 inline mr-1" />
                    {categories.find(cat => cat.key === item.category)?.label}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-yellow-700 mb-3 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* Read More Indicator */}
                <div className="mt-4 flex items-center text-yellow-600 group-hover:text-orange-600 transition-colors">
                  <span className="text-sm font-medium">विस्तार से देखें</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div className="relative max-w-5xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors z-10"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors bg-black/30 backdrop-blur-sm rounded-full p-3 z-10"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors bg-black/30 backdrop-blur-sm rounded-full p-3 z-10"
              >
                <ArrowRight className="h-6 w-6" />
              </button>

              {/* Modal Content */}
              <div
                className="bg-white rounded-3xl overflow-hidden shadow-2xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full max-h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-3">
                      <selectedImage.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-yellow-700">{selectedImage.title}</h2>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {selectedImage.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-yellow-600">
                      <MapPin className="h-5 w-5" />
                      <span className="font-medium">श्री राजपूत छात्रावास जयपुर</span>
                    </div>

                    <div className="text-sm text-gray-500">
                      {filteredItems.findIndex(item => item.id === selectedImage.id) + 1} / {filteredItems.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-yellow-300 mb-4">हमारे साथ जुड़ें</h2>
              <p className="text-xl text-yellow-100 mb-6 max-w-2xl mx-auto">
                राजस्थान की इस महान परंपरा का हिस्सा बनें और अपना भविष्य संवारें
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                प्रवेश के लिए संपर्क करें
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelGalleryComponent;