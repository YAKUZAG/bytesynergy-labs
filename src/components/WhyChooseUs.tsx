import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Award, Lightbulb, HeadphonesIcon } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Customer-First Approach',
    description: 'We prioritize your business objectives and ensure our solutions align perfectly with your strategic goals and long-term vision.',
  },
  {
    icon: Award,
    title: 'Proven Expertise',
    description: 'Our team brings decades of combined experience across diverse industries and cutting-edge technologies.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Scalability',
    description: 'Future-ready solutions built with scalable architectures that grow with your business and adapt to changing needs.',
  },
  {
    icon: HeadphonesIcon,
    title: 'End-to-End Support',
    description: 'Comprehensive support from initial consultation through deployment, maintenance, and ongoing optimization.',
  },
];

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why Choose Us?
          </h2>
          <div className="w-24 h-1 bg-[#dfed25] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Partner with ByteSynergy Labs and experience the difference that true expertise, 
            innovation, and dedication can make for your technology initiatives.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                className="group text-center p-8 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 hover:border-[#dfed25] transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  y: -12,
                  boxShadow: '0 25px 50px -12px rgba(223, 237, 37, 0.25)'
                }}
              >
                {/* 3D Tilt Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#dfed25]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                <div className="mb-6 flex justify-center">
                  <motion.div 
                    className="w-20 h-20 bg-[#dfed25]/10 rounded-full flex items-center justify-center group-hover:bg-[#dfed25]/20 transition-all duration-300 group-hover:scale-110 glow-effect"
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-10 h-10 text-[#dfed25]" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#dfed25] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;