import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Camera, Award, Users } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/15 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-2xl text-white">Katha Creations</h3>
                <p className="text-sm text-rose-300 font-medium">Wedding Films</p>
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed text-sm">
              Crafting cinematic love stories that last forever. We capture the magic, emotion, and beauty of your special day with artistic excellence.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-rose-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Instagram className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Facebook className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Youtube className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-rose-400"></div>
            </h4>
            <ul className="space-y-3">
              {['about', 'services', 'portfolio', 'testimonials', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-slate-300 hover:text-rose-300 transition-colors duration-200 capitalize text-sm hover:translate-x-1 transform transition-transform"
                  >
                    {section === 'about' ? 'About Us' : section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg relative">
              Our Services
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-rose-400"></div>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Camera className="w-3 h-3 text-rose-400" />
                <span className="text-slate-300 text-sm">Wedding Cinematography</span>
              </li>
              <li className="flex items-center space-x-2">
                <Heart className="w-3 h-3 text-rose-400" />
                <span className="text-slate-300 text-sm">Engagement Films</span>
              </li>
              <li className="flex items-center space-x-2">
                <Users className="w-3 h-3 text-rose-400" />
                <span className="text-slate-300 text-sm">Rehearsal Coverage</span>
              </li>
              <li className="flex items-center space-x-2">
                <Award className="w-3 h-3 text-rose-400" />
                <span className="text-slate-300 text-sm">Drone Footage</span>
              </li>
              <li className="flex items-center space-x-2">
                <Camera className="w-3 h-3 text-rose-400" />
                <span className="text-slate-300 text-sm">Custom Packages</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg relative">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-rose-400"></div>
            </h4>
            <div className="space-y-4">
              
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-slate-300 hover:text-rose-300 transition-colors text-sm">
                  +91 82088 45449
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <a href="mailto:hello@eternalmoments.com" className="text-slate-300 hover:text-rose-300 transition-colors text-sm">
                  contact.kathacreations@gmail.com
                </a>
              </div>
            </div>

        
          </div>
        </div>

       

       {/* Bottom Section */}
<div className="flex flex-col md:flex-row justify-between items-center pt-8">
  <p className="text-slate-400 text-sm mb-4 md:mb-0">
    © {currentYear} Katha Creations Wedding Films. All rights reserved. Made with{" "}
    <a 
      href="https://musitech.in" 
      className="text-pink-400 hover:underline transition-colors" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Musitech
    </a>
  </p>
  <div className="flex space-x-6">
    <a href="#" className="text-slate-400 hover:text-rose-300 transition-colors text-sm">
      Privacy Policy
    </a>
    <a href="#" className="text-slate-400 hover:text-rose-300 transition-colors text-sm">
      Terms of Service
    </a>
    <a href="#" className="text-slate-400 hover:text-rose-300 transition-colors text-sm">
      Cookie Policy
    </a>
  </div>
</div>

      </div>
    </footer>
  );
}