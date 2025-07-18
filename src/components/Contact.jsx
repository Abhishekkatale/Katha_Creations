import React from "react";
import { Mail, Phone, Heart } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 82088 45449",
    description: "Available 9 AM - 8 PM",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "contact.kathacreations@gmail.com",
    description: "Response within 24 hours",
    color: "from-purple-500 to-pink-500",
  },
];

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500/20 to-rose-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Floating Hearts */}
      <div className="absolute top-20 left-20 text-pink-400/20 animate-bounce">
        <Heart className="w-6 h-6" />
      </div>
      <div className="absolute top-40 right-32 text-rose-400/20 animate-pulse">
        <Heart className="w-4 h-4" />
      </div>
      <div className="absolute bottom-32 left-40 text-purple-400/20 animate-ping">
        <Heart className="w-5 h-5" />
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let's Create Your{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Love Story
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to begin planning your wedding film? Get in touch and let's discuss how we can capture your special day with cinematic perfection.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:scale-[1.02] transition-transform duration-300 shadow-lg"
            >
              <div
                className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${info.color}`}
              >
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg">{info.title}</h4>
                <p className="text-slate-200">{info.content}</p>
                <p className="text-sm text-slate-400">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
