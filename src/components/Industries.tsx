import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Heart, ShoppingCart, GraduationCap, Rocket, Factory } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'FinTech',
    description: 'Secure payment systems, blockchain solutions, and financial analytics platforms.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'HIPAA-compliant systems, telemedicine platforms, and medical data analytics.',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Scalable online platforms, inventory management, and customer analytics.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Learning management systems, virtual classrooms, and educational analytics.',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Rocket,
    title: 'Startups',
    description: 'MVP development, rapid prototyping, and scalable architecture design.',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'IoT integration, supply chain optimization, and predictive maintenance.',
    color: 'from-gray-500 to-slate-500',
  },
];

const Industries = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Industries We Serve
          </h2>
          <div className="w-24 h-1 bg-[#dfed25] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering specialized technology solutions across diverse sectors with deep industry expertise.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-[#dfed25] transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  boxShadow: '0 25px 50px -12px rgba(223, 237, 37, 0.25)',
                  scale: 1.02
                }}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-xl border-2 border-[#dfed25] animate-pulse" />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-[#dfed25]/10 rounded-xl flex items-center justify-center group-hover:bg-[#dfed25]/20 transition-all duration-300 group-hover:scale-110 glow-effect">
                      <Icon className="w-8 h-8 text-[#dfed25]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#dfed25] transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {industry.description}
                  </p>

                  {/* Hover Effect Indicator */}
                  <div className="mt-6 pt-4 border-t border-gray-700 group-hover:border-[#dfed25]/50 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                    <span className="text-[#dfed25] font-semibold text-sm uppercase tracking-wide">
                      Explore Solutions →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;