import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    company: 'TechForward Inc.',
    role: 'CTO',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'ByteSynergy Labs transformed our legacy systems into a modern, scalable platform. Their expertise in AI integration helped us reduce operational costs by 40% while improving customer satisfaction.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    company: 'InnovateCorp',
    role: 'CEO',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The team at ByteSynergy Labs delivered our mobile application ahead of schedule and under budget. Their attention to detail and technical prowess is unmatched in the industry.',
    rating: 5,
  },
  {
    name: 'Emily Thompson',
    company: 'DataDriven Solutions',
    role: 'VP of Technology',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Working with ByteSynergy Labs has been a game-changer for our organization. Their innovative approach to software development and commitment to excellence exceeded all our expectations.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-[#dfed25] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped organizations like yours achieve their technology goals 
            and drive meaningful business outcomes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-[#dfed25] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#dfed25]/20 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-[#dfed25]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#dfed25] text-[#dfed25]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-8 leading-relaxed italic text-lg">
                "{testimonial.quote}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gray-600 group-hover:border-[#dfed25] transition-colors duration-300"
                />
                <div>
                  <h4 className="font-bold text-white group-hover:text-[#dfed25] transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#dfed25] font-semibold">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;