import { useState } from "react";
import { ArrowRight, Play, Heart, Camera, Star } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredItem, setHoveredItem] = useState(null);

  const filters = [
    { label: "All", value: "all", icon: Camera },
    { label: "Ceremony", value: "ceremony", icon: Heart },
    { label: "Reception", value: "reception", icon: Star },
    { label: "Portraits", value: "portraits", icon: Camera },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Emma & James",
      category: "ceremony",
      imageUrl: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      description: "Garden Ceremony",
      location: "Tuscany, Italy",
      year: "2024",
      featured: true
    },
    {
      id: 2,
      title: "Emma & James",
      category: "reception",
      imageUrl: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      description: "First Dance",
      location: "Napa Valley",
      year: "2024",
      featured: false
    },
    {
      id: 3,
      title: "Lisa & David",
      category: "portraits",
      imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      description: "Couple's Portrait",
      location: "Santorini",
      year: "2024",
      featured: true
    },
    {
      id: 4,
      title: "Anna & Robert",
      category: "ceremony",
      imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      description: "Cathedral Wedding",
      location: "Paris, France",
      year: "2023",
      featured: false
    },
    {
      id: 5,
      title: "Grace & Thomas",
      category: "reception",
      imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      description: "Reception Party",
      location: "Lake Como",
      year: "2024",
      featured: false
    },
    {
      id: 6,
      title: "Sophia & Mark",
      category: "portraits",
      imageUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      description: "Bridal Portrait",
      location: "Bali, Indonesia",
      year: "2024",
      featured: true
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="project" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50 py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Camera className="w-4 h-4" />
            Our Portfolio
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Love Stories
            <span className="block text-transparent bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text">
              Captured Forever
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Each wedding is a unique masterpiece. Discover our collection of cinematic love stories, 
            captured with artistic vision and heartfelt passion across the most beautiful destinations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.value
                    ? "bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-lg shadow-rose-500/25"
                    : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-rose-300"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {filter.label}
                {activeFilter === filter.value && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative cursor-pointer transition-all duration-700 hover:scale-105 ${
                item.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                )}

                {/* Image */}
                <div className="relative overflow-hidden h-80">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium capitalize">
                      <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                      {item.category}
                    </span>
                    <span className="text-slate-400 text-sm">{item.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-rose-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-3">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-sm flex items-center gap-1">
                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                      {item.location}
                    </span>
                    
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-3 h-3 text-amber-400 fill-current" 
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-rose-200 rounded-3xl transition-colors duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          {[
            { number: "150+", label: "Weddings Captured", icon: Heart },
            { number: "50+", label: "Destinations", icon: Camera },
            { number: "100%", label: "Client Satisfaction", icon: Star },
            { number: "10+", label: "Years Experience", icon: Star }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <IconComponent className="w-8 h-8 text-rose-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-slate-800 mb-1">{stat.number}</div>
                  <div className="text-slate-600 text-sm">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        
      </div>
    </section>
  );
}