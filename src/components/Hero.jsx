import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Play, Heart, Camera } from "lucide-react";

export default function WeddingHero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-rose-900/30 via-transparent to-pink-900/30" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Heart className="w-8 h-8 text-white animate-pulse" />
      </div>
      <div className="absolute top-32 right-20 opacity-20">
        <Camera className="w-6 h-6 text-white animate-bounce" style={{ animationDelay: "1s" }} />
      </div>
      <div className="absolute bottom-32 left-20 opacity-20">
        <Heart className="w-6 h-6 text-white animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          {/* Subtitle */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              ✨ Premium Wedding Cinematography
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Capturing Love's
            <br />
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent">
              Katha Creations
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed font-light">
            We create cinematic masterpieces that tell your unique love story with 
            <span className="text-rose-300 font-medium"> elegance, artistry, and timeless beauty</span>
          </p>

          {/* Stats */}
          <div className="flex justify-center space-x-8 mb-10 text-sm md:text-base">
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-300">500+</div>
              <div className="opacity-80">Weddings Filmed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-300">5★</div>
              <div className="opacity-80">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-300">8+</div>
              <div className="opacity-80">Years Experience</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="group bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Our Films</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection("contact")}
              className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Start Your Story</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex justify-center items-center space-x-6 opacity-70">
            <span className="text-sm">Featured in:</span>
            <div className="flex space-x-4 text-xs">
              <span className="px-3 py-1 bg-white/10 rounded-full">Wedding Wire</span>
              <span className="px-3 py-1 bg-white/10 rounded-full">The Knot</span>
              <span className="px-3 py-1 bg-white/10 rounded-full">Brides Magazine</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-white/70 text-sm mb-2">Discover More</div>
        <ChevronDown className="w-6 h-6 text-white/70 animate-bounce mx-auto cursor-pointer hover:text-white transition-colors" 
                     onClick={() => scrollToSection("about")} />
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-rose-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-400/10 to-rose-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
    </section>
  );
}