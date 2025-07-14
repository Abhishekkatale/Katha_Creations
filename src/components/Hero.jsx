import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Play, Heart, Camera } from "lucide-react";

export default function WeddingHero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const backgroundImages = [
    "https://res.cloudinary.com/dutlotmmd/image/upload/v1752475946/iqcup3hjqpinaoi02x4g.jpg",
    "https://res.cloudinary.com/dutlotmmd/image/upload/v1752475974/zd0zsm4daabvgmqsd7qe.jpg",
    "https://res.cloudinary.com/dutlotmmd/image/upload/v1752476019/oylwumu3kp6j0ycrp5zx.jpg",
    "https://res.cloudinary.com/dutlotmmd/image/upload/v1752476055/ag4uobvbbfnkgpodfjlw.jpg",
    "https://res.cloudinary.com/dutlotmmd/image/upload/v1752476089/g1xme11pl4jx5xfy4ppy.jpg",
    "https://res.cloudinary.com/dutlotmmd/image/upload/v1752476125/rqu6j6alorptek2d24wm.jpg",
    "https://res.cloudinary.com/dutlotmmd/image/upload/v1752476263/mnr4fdw1hira13xb65ap.jpg"
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
        

          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Katha Creations
            <br />
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent">
            </span>
          </h1>

        
         
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
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