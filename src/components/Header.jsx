import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function WeddingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    console.log("Scrolling to:", sectionId);
    element.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  } else {
    console.warn("Element not found:", sectionId);
  }
};


 const navItems = [
  { label: "Home", id: "home" },
  { label: "Our Story", id: "about" },
  { label: "Gallery", id: "project" },
  { label: "Services", id: "service" },
  { label: "Reviews", id: "testimonial" },
];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-rose-100" 
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <img src={require("../assets/logo.jpg")} alt="Katha Creations Logo" className="w-12 h-12 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 object-cover" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full opacity-80"></div>
              </div>
              <div>
                <h1 className={`font-serif font-bold text-2xl transition-colors duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}>
                  Katha Creations
                </h1>
                <p className={`text-sm font-light transition-colors duration-300 ${
                  isScrolled ? "text-gray-600" : "text-white/90"
                }`}>
                  Wedding Cinematography
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? "text-gray-700 hover:text-rose-500" 
                      : "text-white hover:text-rose-200"
                  } group`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Contact Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeo1Yfp6w_eoSWDMMW5Vok449TZHnGT7Nlm4nMX7iAR7eNK-w/viewform?usp=sharing&ouid=102320821943705209942", "_blank")}
                className={`hidden md:flex items-center space-x-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  isScrolled
                    ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg hover:shadow-xl"
                    : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30"
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Contact Us</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
                  isScrolled 
                    ? "text-gray-700 hover:bg-gray-100" 
                    : "text-white hover:bg-white/20"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-rose-100">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-700 hover:text-rose-500 font-medium py-3 px-4 rounded-lg hover:bg-rose-50 transition-all duration-300 transform hover:translate-x-2"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeo1Yfp6w_eoSWDMMW5Vok449TZHnGT7Nlm4nMX7iAR7eNK-w/viewform?usp=sharing&ouid=102320821943705209942", "_blank")}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 mt-4"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}