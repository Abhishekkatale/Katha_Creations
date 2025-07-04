import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      names: "Jessica & Ryan",
      content: "katha Creations captured our wedding day so beautifully. Every time we watch our film, we're transported back to that magical day. The attention to detail and artistic vision exceeded all our expectations.",
      rating: 5,
      date: "September 2023",
      imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
    {
      id: 2,
      names: "Maria & Carlos",
      content: "Professional, creative, and incredibly talented. The team made us feel so comfortable throughout the entire process. Our wedding film is a masterpiece that we'll cherish forever.",
      rating: 5,
      date: "August 2023",
      imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
    {
      id: 3,
      names: "Amanda & Steven",
      content: "From the initial consultation to the final delivery, everything was seamless. The quality of work and professionalism is unmatched. Highly recommend for any couple wanting cinematic perfection.",
      rating: 5,
      date: "October 2023",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
    {
      id: 4,
      names: "Sarah & Michael",
      content: "Beyond our wildest dreams! The way they captured every emotion, every laugh, every tear - it's pure magic. Our families still get emotional watching our wedding film.",
      rating: 5,
      date: "November 2023",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
    {
      id: 5,
      names: "Emma & David",
      content: "Choosing Katha Creations was the best decision we made for our wedding. The cinematic quality and storytelling approach made our special day feel like a Hollywood romance.",
      rating: 5,
      date: "December 2023",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
    {
      id: 6,
      names: "Lisa & James",
      content: "Absolutely phenomenal work! They captured moments we didn't even know happened. The final film was so beautiful it brought everyone to tears. Worth every penny and more.",
      rating: 5,
      date: "January 2024",
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616c25ca5b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="testimonial" className="py-20 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-rose-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-rose-300 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1000"></div>

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

        {/* Testimonials Carousel */}
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  index === 1 ? 'scale-105 z-10' : 'scale-100'
                }`}
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
                          style={{ animationDelay: `${i * 100}ms` }}
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

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20">
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-rose-600 transition-colors duration-300" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-rose-500 to-pink-600 w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-rose-600 transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              500+
            </div>
            <div className="text-slate-600">Happy Couples</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              5★
            </div>
            <div className="text-slate-600">Average Rating</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              3
            </div>
            <div className="text-slate-600">Years Experience</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-slate-600">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}