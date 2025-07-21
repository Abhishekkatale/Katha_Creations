import React from 'react';
import { Star, Quote, Heart, Camera } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      names: "Aarti & Rohan",
      content: "The best decision we made for our wedding! Katha Creations beautifully captured every emotion and ritual. The teaser had us in tears!",
      rating: 5,
      date: "Pune | March 2024",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQEwYTvZSj9qQQ/profile-displayphoto-scale_200_200/B4DZfQmx_KGkAY-/0/1751551518941?e=1755734400&v=beta&t=MpxRzPGTU3IwcrUNmaTuyZZHPHC2L8bViKBbWySIkR0",
    },
    {
      id: 2,
      names: "Sneha & Harsh",
      content: "Very professional team. We loved the final video and the drone shots were a great touch. Just wished delivery was a bit quicker.",
      rating: 4,
      date: "Nashik | November 2023",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQGtnyG9qgwj_w/profile-displayphoto-shrink_200_200/B56ZUnOU34GoAY-/0/1740119827077?e=1755734400&v=beta&t=4FIZHyWrTuTenv3NrVtX0etc9td_D_Vjohd3EbgwyYo",
    },
    {
      id: 3,
      names: "Pooja & Kunal",
      content: "From Haldi to Reception, everything was filmed so beautifully. The highlight reel felt straight out of a movie. Highly recommend!",
      rating: 5,
      date: "Mumbai | January 2024",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQHpCMjkK5avGA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705409448001?e=1755734400&v=beta&t=VZ7muWKSWFS_8xYAuLqH-skzk7aaqFa8jvfGZ_JPuv0",
    },
  ];

  return (
    <section id="testimonial" className="py-20 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-rose-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mb-6">
            <Quote className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-6">
            What Our <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">Couples Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            The greatest joy is hearing from couples who treasure their wedding films for years to come
          </p>
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-rose-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 fill-current transform group-hover:scale-110 transition-transform duration-200" 
                      />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-slate-700 mb-8 leading-relaxed text-lg italic relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-rose-200" />
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.names}
                      className="w-14 h-14 rounded-full object-cover mr-4 ring-4 ring-rose-100 group-hover:ring-rose-200 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-400/20 to-pink-500/20 group-hover:from-rose-400/40 group-hover:to-pink-500/40 transition-all duration-300"></div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-lg group-hover:text-rose-700 transition-colors duration-300">
                      {testimonial.names}
                    </div>
                    <div className="text-slate-500 text-sm">{testimonial.date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-8 mb-4">
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
      </div>
    </section>
  );
}
