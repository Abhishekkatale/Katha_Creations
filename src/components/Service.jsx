import { useState, useEffect } from "react";
import { Check, Star, Crown, Heart, Camera, Video, Sparkles, Gift, ArrowRight, Users, Clock, MapPin } from "lucide-react";

export default function Services() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const selectPackage = (packageType) => {
    setSelectedPackage(packageType);
    setTimeout(() => scrollToSection("contact"), 300);
  };

  const packages = [
    {
      name: "Essential",
      subtitle: "Perfect Start",
      price: 25000,
      originalPrice: 28000,
      duration: "4-6 Hours Coverage",
      icon: Heart,
      color: "from-pink-400 to-rose-500",
      features: [
        "Ceremony & Reception Highlights",
        "3-5 Minute Highlight Film",
        "Digital Gallery Delivery", 
        "One Professional Videographer",
        "Basic Color Grading",
        "Online Viewing Gallery"
      ],
      addOns: ["Drone Footage (+₹3000)", "Extra Hour (+₹2000)"],
      isPopular: false,
      bestFor: "Intimate ceremonies, budget-conscious couples"
    },
    {
      name: "Premium",
      subtitle: "Most Loved",
      price: 42000,
      originalPrice: 48000,
      duration: "Full Day Coverage",
      icon: Crown,
      color: "from-purple-500 to-indigo-600",
      features: [
        "Complete Wedding Day Coverage",
        "6-8 Minute Cinematic Film",
        "Ceremony & Reception Edit",
        "Two Professional Videographers",
        "Drone Footage (Weather Permitting)",
        "Premium Color Grading",
        "Custom Music Selection",
        "USB Drive + Online Gallery"
      ],
      addOns: ["Rehearsal Coverage (+₹5000)", "Raw Footage (+₹4000)"],
      isPopular: true,
      bestFor: "Complete wedding experience, standard celebrations"
    },
    {
      name: "Luxury",
      subtitle: "Ultimate Experience",
      price: 65000,
      originalPrice: 72000,
      duration: "Multi-Day Experience",
      icon: Sparkles,
      color: "from-amber-400 to-orange-500",
      features: [
        "Rehearsal + Wedding Day Coverage",
        "10-12 Minute Feature Film",
        "Three Professional Videographers",
        "Premium Drone Package",
        "Custom USB + Online Gallery",
        "Same-Day Highlight Reel",
        "Professional Audio Recording",
        "Bonus Engagement Session"
      ],
      addOns: ["Documentary Style (+₹8000)", "Additional Events (+₹6000)"],
      isPopular: false,
      bestFor: "Luxury weddings, destination celebrations"
    },
  ];

  const addOnServices = [
    { name: "Engagement Session", price: 8000, icon: Heart },
    { name: "Drone Cinematography", price: 5000, icon: Camera },
    { name: "Live Streaming", price: 6000, icon: Video },
    { name: "Same Day Edit", price: 12000, icon: Clock }
  ];

  return (
    <section id="service" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-purple-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-rose-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Video className="w-4 h-4" />
            Wedding and Pre Wedding Packages
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Cinematic Stories
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text">
              Tailored for You
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Thoughtfully crafted packages designed to capture every precious moment of your special day. 
            Each package includes professional equipment, expert editing, and unlimited memories.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400 fill-current" />
              <span>5.0 Rating (200+ Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>500+ Happy Couples</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-400" />
              <span>50+ Destinations</span>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={index}
                className={`relative group transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Card */}
                <div className={`relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  pkg.isPopular 
                    ? 'bg-gradient-to-br from-slate-800 to-slate-900 text-white transform scale-105' 
                    : 'bg-white border border-slate-100'
                }`}>
                  
                  {/* Popular Badge */}
                  {pkg.isPopular && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                        <Crown className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${pkg.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

                  <div className="relative p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${pkg.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className={`text-2xl font-bold mb-2 ${pkg.isPopular ? 'text-white' : 'text-slate-800'}`}>
                        {pkg.name}
                      </h3>
                      
                      <p className={`text-sm font-medium ${pkg.isPopular ? 'text-white/70' : 'text-slate-500'}`}>
                        {pkg.subtitle}
                      </p>
                      
                      <div className="mt-4">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <span className={`text-lg line-through ${pkg.isPopular ? 'text-white/50' : 'text-slate-400'}`}>
                            ₹{pkg.originalPrice.toLocaleString('en-IN')}
                          </span>
                          <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                            SAVE ₹{(pkg.originalPrice - pkg.price).toLocaleString('en-IN')}
                          </span>
                        </div>
                        <div className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                          ₹{pkg.price.toLocaleString('en-IN')}
                        </div>
                        <p className={`text-sm mt-1 ${pkg.isPopular ? 'text-white/70' : 'text-slate-500'}`}>
                          {pkg.duration}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className={`flex items-start gap-3 ${pkg.isPopular ? 'text-white' : 'text-slate-700'}`}
                        >
                          <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            pkg.isPopular ? 'text-green-400' : 'text-green-500'
                          }`} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Best For */}
                    <div className={`p-4 rounded-xl mb-6 ${
                      pkg.isPopular ? 'bg-white/10' : 'bg-slate-50'
                    }`}>
                      <p className={`text-xs font-medium mb-1 ${
                        pkg.isPopular ? 'text-white/70' : 'text-slate-500'
                      }`}>
                        PERFECT FOR
                      </p>
                      <p className={`text-sm ${pkg.isPopular ? 'text-white' : 'text-slate-700'}`}>
                        {pkg.bestFor}
                      </p>
                    </div>

                   

                    {/* Button */}
                    <button
                      onClick={() => selectPackage(pkg.name.toLowerCase())}
                      className={`w-full py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                        pkg.isPopular
                          ? 'bg-white text-slate-800 hover:bg-gray-100'
                          : `bg-gradient-to-r ${pkg.color} text-white hover:shadow-lg`
                      } transform hover:scale-105`}
                    >
                      Choose {pkg.name}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

       
      
       
      </div>
    </section>
  );
}