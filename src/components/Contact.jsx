import React, { useState } from "react";
import { Mail, Phone, MapPin, Heart, Send, Calendar, Camera, Star, Clock, Award } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    weddingDate: "",
    venue: "",
    package: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [focusedField, setFocusedField] = useState("");

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Available 9 AM - 8 PM",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@eternalmoments.com",
      description: "Response within 24 hours",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Visit Studio",
      content: "123 Wedding Lane, Love City",
      description: "By appointment only",
      color: "from-green-500 to-teal-500"
    }
  ];

  const features = [
    { icon: Clock, text: "24 Hour Response Time" },
    { icon: Award, text: "Award Winning Team" },
    { icon: Camera, text: "Premium Equipment" },
    { icon: Star, text: "5 Star Reviews" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setToastMessage("Thank you for your inquiry! We'll respond within 24 hours.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        weddingDate: "",
        venue: "",
        package: "",
        message: ""
      });
    } catch (err) {
      setToastMessage("Failed to send your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
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

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full mb-6">
            <Heart className="w-8 h-8 text-white animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Create Your{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Love Story
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to begin planning your wedding film? Get in touch and let's discuss how we can
            capture your special day with cinematic perfection.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="group relative">
                        <div className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                          <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                            <p className="text-slate-200 mb-1">{info.content}</p>
                            <p className="text-sm text-slate-400">{info.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="font-semibold text-white mb-4">Why Choose Us?</h4>
                <div className="space-y-3">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3 group">
                        <IconComponent className="w-5 h-5 text-rose-400 group-hover:text-rose-300 transition-colors duration-300" />
                        <span className="text-slate-300 group-hover:text-white transition-colors duration-300">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("firstName")}
                        onBlur={() => setFocusedField("")}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-4 text-white placeholder-slate-400 focus:border-rose-400 focus:bg-white/20 transition-all duration-300 focus:outline-none"
                        required
                      />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === "firstName" ? "opacity-100" : ""}`}></div>
                    </div>
                    <div className="relative group">
                      <input
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("lastName")}
                        onBlur={() => setFocusedField("")}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-4 text-white placeholder-slate-400 focus:border-rose-400 focus:bg-white/20 transition-all duration-300 focus:outline-none"
                        required
                      />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === "lastName" ? "opacity-100" : ""}`}></div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField("")}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-4 text-white placeholder-slate-400 focus:border-rose-400 focus:bg-white/20 transition-all duration-300 focus:outline-none"
                        required
                      />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === "email" ? "opacity-100" : ""}`}></div>
                    </div>
                    <div className="relative group">
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField("")}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-4 text-white placeholder-slate-400 focus:border-rose-400 focus:bg-white/20 transition-all duration-300 focus:outline-none"
                        required
                      />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 to-teal-500/20 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === "phone" ? "opacity-100" : ""}`}></div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input
                        name="weddingDate"
                        type="date"
                        value={formData.weddingDate}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("weddingDate")}
                        onBlur={() => setFocusedField("")}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-4 text-white placeholder-slate-400 focus:border-rose-400 focus:bg-white/20 transition-all duration-300 focus:outline-none"
                        required
                      />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === "weddingDate" ? "opacity-100" : ""}`}></div>
                      <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                    <div className="relative group">
                      <input
                        name="venue"
                        placeholder="Wedding Venue"
                        value={formData.venue}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("venue")}
                        onBlur={() => setFocusedField("")}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-4 text-white placeholder-slate-400 focus:border-rose-400 focus:bg-white/20 transition-all duration-300 focus:outline-none"
                        required
                      />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === "venue" ? "opacity-100" : ""}`}></div>
                    </div>
                  </div>

                  <div className="relative group">
                    <select
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("package")}
                      onBlur={() => setFocusedField("")}
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-4 text-white focus:border-rose-400 focus:bg-white/20 transition-all duration-300 focus:outline-none appearance-none"
                      required
                    >
                      <option value="" className="bg-slate-800">Select a Package</option>
                      <option value="essential" className="bg-slate-800">Essential - $2,500</option>
                      <option value="premium" className="bg-slate-800">Premium - $4,200</option>
                      <option value="luxury" className="bg-slate-800">Luxury - $6,500</option>
                      <option value="custom" className="bg-slate-800">Custom Package</option>
                    </select>
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === "package" ? "opacity-100" : ""}`}></div>
                  </div>

                  <div className="relative group">
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Tell us about your wedding vision..."
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField("")}
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-4 text-white placeholder-slate-400 focus:border-rose-400 focus:bg-white/20 transition-all duration-300 focus:outline-none resize-none"
                      required
                    ></textarea>
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === "message" ? "opacity-100" : ""}`}></div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>{isSubmitting ? "Sending..." : "Send Inquiry"}</span>
                      {!isSubmitting && (
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      )}
                      {isSubmitting && (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      )}
                    </span>
                  </button>
                </div>

                {toastMessage && (
                  <div className={`mt-6 p-4 rounded-2xl text-center font-semibold ${
                    toastMessage.includes("Thank you") 
                      ? "bg-green-500/20 text-green-300 border border-green-500/30" 
                      : "bg-red-500/20 text-red-300 border border-red-500/30"
                  }`}>
                    {toastMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}