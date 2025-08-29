import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Star, Zap } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Project-Based',
    description: 'Perfect for specific projects with defined scope and timeline',
    features: [
      'Fixed-cost pricing',
      'Dedicated project manager',
      'Quality assurance included',
      'Post-launch support (30 days)',
      'Source code ownership',
    ],
    highlight: false,
    cta: 'Get Quote',
  },
  {
    name: 'Dedicated Teams',
    description: 'Full-time dedicated development teams for ongoing projects',
    features: [
      'Dedicated development team',
      'Flexible team scaling',
      'Agile development process',
      'Weekly progress reports',
      'Direct team communication',
      'Ongoing support & maintenance',
    ],
    highlight: true,
    cta: 'Start Building',
  },
  {
    name: 'Consulting',
    description: 'Strategic guidance and technical expertise for your initiatives',
    features: [
      'Technology strategy consulting',
      'Architecture reviews',
      'Performance optimization',
      'Security assessments',
      'Training & knowledge transfer',
    ],
    highlight: false,
    cta: 'Book Session',
  },
];

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Engagement Models
          </h2>
          <div className="w-24 h-1 bg-[#dfed25] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible partnership models designed to fit your project needs and business objectives.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`group relative bg-gray-800 p-8 rounded-xl border transition-all duration-500 transform hover:-translate-y-3 overflow-hidden ${plan.highlight
                ? 'border-[#dfed25] shadow-2xl shadow-[#dfed25]/20 scale-105'
                : 'border-gray-700 hover:border-[#dfed25]'
                }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                boxShadow: plan.highlight
                  ? '0 30px 60px -12px rgba(223, 237, 37, 0.4)'
                  : '0 25px 50px -12px rgba(223, 237, 37, 0.25)'
              }}
            >
              {/* Highlight Badge
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-[#dfed25] text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )} */}

              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#dfed25]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glowing Effect */}
              {plan.highlight && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-[#dfed25]/10 blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              )}

              <div className="relative z-10">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#dfed25] transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-[#dfed25] mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${plan.highlight
                    ? 'bg-[#dfed25] text-black hover:bg-[#c9d91f] glow-effect'
                    : 'border-2 border-[#dfed25] text-[#dfed25] hover:bg-[#dfed25] hover:text-black'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.cta}
                </motion.button>
              </div>

              {/* Pulse Animation for Highlighted Plan */}
              {plan.highlight && (
                <div className="absolute inset-0 rounded-xl border-2 border-[#dfed25] opacity-30 animate-ping" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;