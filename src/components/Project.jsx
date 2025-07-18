import { useState, useEffect } from "react";
import { Camera, Heart, Star, Users, Film, Sparkles } from "lucide-react";

export default function WeddingGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = [
    { label: "All", value: "all", icon: Camera, color: "from-purple-500 to-pink-500" },
    { label: "Ceremony", value: "ceremony", icon: Heart, color: "from-rose-500 to-red-500" },
    { label: "Reception", value: "reception", icon: Star, color: "from-amber-500 to-orange-500" },
    { label: "Portraits", value: "portraits", icon: Users, color: "from-blue-500 to-cyan-500" },
    { label: "Cinematic", value: "cinematic", icon: Film, color: "from-emerald-500 to-teal-500" },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "portraits",
      imageUrl: "https://res.cloudinary.com/dutlotmmd/image/upload/v1752859782/anvp9czpluj2ejhedvuj.jpg",
      featured: true
    },
    {
      id: 2,
      category: "ceremony",
      imageUrl: "https://res.cloudinary.com/dutlotmmd/image/upload/v1752859791/fhzpgj5uamjhiu0yaifh.jpg",
      featured: false
    },
    {
      id: 3,
      category: "cinematic",
      imageUrl: "https://res.cloudinary.com/dutlotmmd/image/upload/v1752859800/x8aeyzh4g9cpcft1fusg.jpg",
      featured: true
    },
    {
      id: 4,
      category: "cinematic",
      imageUrl: "https://res.cloudinary.com/dutlotmmd/image/upload/v1752859808/d4rrrxmfnl98b0ysoij6.jpg",
      featured: false
    },
    {
      id: 5,
      category: "portraits",
      imageUrl: "https://res.cloudinary.com/dutlotmmd/image/upload/v1752859817/qepse0zx2hm5ya0by97y.jpg",
      featured: false
    },
    {
      id: 6,
      category: "ceremony",
      imageUrl: "https://res.cloudinary.com/dutlotmmd/image/upload/v1752859828/lkjsokq8mhazqufzoney.jpg",
      featured: true
    },
    {
      id: 7,
      category: "ceremony",
      imageUrl: "https://res.cloudinary.com/dutlotmmd/image/upload/v1752859844/evgq6bj0fzn4shsiauoh.jpg",
      featured: true
    },
    {
      id: 8,
      category: "portraits",
      imageUrl: "https://res.cloudinary.com/dutlotmmd/image/upload/v1752859856/i75rw7gwfcfmpsx1ikcm.jpg",
      featured: false
    },
    {
      id: 9,
      category: "ceremony",
      imageUrl: "https://res.cloudinary.com/dutlotmmd/image/upload/v1752859871/tcclmbi4dockg9mczljz.jpg",
      featured: true
    },
    {
      id: 10,
      category: "ceremony",
      imageUrl: "https://res.cloudinary.com/dutlotmmd/image/upload/v1752859886/azkbwuej8w6z9iepq0mn.jpg",
      featured: false
    },
    {
      id: 11,
      category: "portraits",
      imageUrl: "https://res.cloudinary.com/dutlotmmd/image/upload/v1752859893/iusjpierzmxvua229984.jpg",
      featured: false
    },
    {
      id: 12,
      category: "portraits",
      imageUrl: "https://res.cloudinary.com/dutlotmmd/image/upload/v1752859900/tzrchejkrkcvhwpfvral.jpg",
      featured: true
    },
    {
      id: 13,
      category: "portraits",
      imageUrl: "https://res.cloudinary.com/dutlotmmd/image/upload/v1752859907/d76kbkycykre9t4xjmjv.jpg",
      featured: true
    },
    {
      id: 14,
      category: "ceremony",
      imageUrl: "https://res.cloudinary.com/dutlotmmd/image/upload/v1752859930/c5dapcrr5saaotue5guy.jpg",
      featured: false
    },
    {
      id: 15,
      category: "portraits",
      imageUrl: "https://res.cloudinary.com/dutlotmmd/image/upload/v1752859941/o05xtl5clrdeqbswjqzd.jpg",
      featured: false
    },
    {
      id: 16,
      category: "cinematic",
      imageUrl: "https://res.cloudinary.com/dutlotmmd/image/upload/v1752859953/gty5rwudggvvxh1af9c2.jpg",
      featured: true
    },
   
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredItems]);

  const openLightbox = (item) => {
    setSelectedImage(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-rose-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-rose-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Sparkles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <Sparkles className="w-3 h-3 text-white/20" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/20 to-purple-500/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/10">
            <Camera className="w-5 h-5" />
            <span>Photo Gallery</span>
            <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="block">Captured</span>
            <span className="block text-transparent bg-gradient-to-r from-rose-400 via-purple-400 to-cyan-400 bg-clip-text animate-gradient">
              Memories
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Every photograph preserves a moment in time, capturing the essence of love, joy, and celebration that makes your special day unforgettable.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`group relative flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                  activeFilter === filter.value
                    ? "text-white shadow-2xl shadow-rose-500/25"
                    : "text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10"
                }`}
              >
                {activeFilter === filter.value && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${filter.color} opacity-90`}></div>
                )}
                <IconComponent className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{filter.label}</span>
                {activeFilter === filter.value && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse relative z-10"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Photo Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 max-w-7xl mx-auto mb-20">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-${item.id}`}
              data-animate="true"
              className={`group relative cursor-pointer transition-all duration-700 transform hover:scale-105 break-inside-avoid ${
                isVisible[`gallery-${item.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => openLightbox(item)}
              style={{
                animationDelay: `${index * 100}ms`,
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Photo Container */}
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl hover:shadow-rose-500/25 transition-all duration-500">
                
                {/* Featured Indicator */}
                {item.featured && (
                  <div className="absolute top-4 right-4 z-20 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse shadow-lg"></div>
                )}

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt="Wedding Photography"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                      aspectRatio: 'auto'
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Zoom Effect */}
                 
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-rose-400/50 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

       
      </div>

     

     
    </section>
  );
}