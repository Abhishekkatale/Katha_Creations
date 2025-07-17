import React, { useState, useEffect } from 'react';
import { ArrowRight, Camera, Heart, Award, Users, Play, Pause } from 'lucide-react';

export default function About() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://res.cloudinary.com/dutlotmmd/image/upload/v1752748677/bmd9icdi1bnysizoj2m9.jpg",
    "https://res.cloudinary.com/dutlotmmd/image/upload/v1752748691/q6a3inivtzoyenj7zltg.jpg",
    "https://res.cloudinary.com/dutlotmmd/image/upload/v1752748704/vc9slip5ndmidigflyo1.jpg",
    "https://res.cloudinary.com/dutlotmmd/image/upload/v1752748717/axf1v6oaom6sdscallqt.jpg"
  ];

  const stats = [
    { number: "150+", label: "Weddings Filmed", icon: Camera, color: "from-rose-500 to-pink-600" },
    { number: "10", label: "Years Experience", icon: Award, color: "from-blue-500 to-purple-600" },
    { number: "100%", label: "Client Satisfaction", icon: Heart, color: "from-green-500 to-teal-600" },
    { number: "20+", label: "Team Members", icon: Users, color: "from-yellow-500 to-orange-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-rose-100 to-pink-100 rounded-full opacity-30 -translate-x-1/2 translate-y-1/2"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-rose-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Section with Enhanced Features */}
          <div className="relative group">
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={images[currentImageIndex]}
                alt="Wedding cinematographer at work"
                className="w-full h-[500px] object-cover transition-all duration-1000 transform group-hover:scale-105"
              />
              
              {/* Overlay with Play Button */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                  >
                    {isVideoPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white shadow-lg w-8' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>

            {/* Decorative Frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 via-purple-200 to-rose-200 rounded-3xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-6">
                <Camera className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-blue-700">About Our Studio</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Our Story &
                </span>
                <br />
                <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                  Passion
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                At  <span className="font-semibold text-rose-600">Katha Creations</span>,  our mission is to tell real stories through our cameras. For over 10 years, we’ve been capturing not just photos, but feelings, the laughter, the happy tears, and all the special little moments that make your big day truly yours. Every couple has a story, and we make sure it’s told beautifully, honestly, and from the heart.
              </p>
            
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300`}>
                        {stat.number}
                      </div>
                      <div className="text-slate-600 font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <span>Learn More About Our Process</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Process Overview */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-12">Our Creative Process</h3>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your vision and style preferences" },
              { step: "02", title: "Planning", desc: "Creating a detailed timeline and shot list" },
              { step: "03", title: "Filming", desc: "Capturing your special day with cinematic artistry" },
              { step: "04", title: "Delivery", desc: "Professional editing and final film delivery" }
            ].map((process, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-${index % 2 === 0 ? 'rose' : 'blue'}-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${index % 2 === 0 ? 'from-rose-500 to-pink-600' : 'from-blue-500 to-purple-600'} bg-clip-text text-transparent mb-4`}>
                      {process.step}
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-3">{process.title}</h4>
                    <p className="text-slate-600">{process.desc}</p>
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}