import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Smartphone, Zap, Settings, Monitor, Cpu } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored software solutions built with cutting-edge technologies to meet your specific business requirements and scale with your growth.',
  },
  {
    icon: Settings,
    title: 'IT Consulting',
    description: 'Strategic technology guidance and digital transformation consulting to help you navigate complex IT decisions and optimize your infrastructure.',
  },
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Modern, responsive web applications using the latest frameworks and technologies, designed for performance, security, and user experience.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Advanced system optimization and performance tuning to maximize efficiency, reduce costs, and improve user satisfaction.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
  },
  {
    icon: Cpu,
    title: 'Cloud Infrastructure & DevOps',
    description: 'End-to-end cloud solutions, CI/CD automation, and DevOps best practices to accelerate deployment, improve reliability, and scale your business.',
  },
];

const Services = () => {
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
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[#dfed25] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation
            and drive sustainable business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-[#dfed25] transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#dfed25]/30 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{
                  y: -12,
                  boxShadow: '0 25px 50px -12px rgba(223, 237, 37, 0.3)'
                }}
              >
                {/* Glowing Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#dfed25]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-[#dfed25] opacity-0 group-hover:opacity-50"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-[#dfed25]/10 rounded-xl flex items-center justify-center group-hover:bg-[#dfed25]/20 transition-all duration-300 group-hover:scale-110 glow-effect">
                      <Icon className="w-8 h-8 text-[#dfed25]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#dfed25] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-700 group-hover:border-[#dfed25]/50 transition-colors duration-300">
                    <span className="text-[#dfed25] font-semibold text-sm uppercase tracking-wide">
                      Learn More →
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

export default Services;