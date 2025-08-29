import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const technologies = [
  { name: 'React', category: 'Frontend', buzzword: 'Interactive' },
  { name: 'Node.js', category: 'Backend', buzzword: 'Scalable' },
  { name: 'Python', category: 'AI/ML', buzzword: 'Intelligent' },
  { name: 'TensorFlow', category: 'AI/ML', buzzword: 'AI-Powered' },
  { name: 'AWS', category: 'Cloud', buzzword: 'Reliable' },
  { name: 'Docker', category: 'DevOps', buzzword: 'Containerized' },
  { name: 'PostgreSQL', category: 'Database', buzzword: 'Robust' },
  { name: 'TypeScript', category: 'Language', buzzword: 'Type-Safe' },
  { name: 'GraphQL', category: 'API', buzzword: 'Efficient' },
  { name: 'Kubernetes', category: 'Orchestration', buzzword: 'Orchestrated' },
  { name: 'MongoDB', category: 'Database', buzzword: 'Flexible' },
  { name: 'Redis', category: 'Cache', buzzword: 'Lightning-Fast' },
];

const TechStack = () => {
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
            Our Tech Stack
          </h2>
          <div className="w-24 h-1 bg-[#dfed25] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks that power our innovative solutions.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-[#dfed25] transition-all duration-300 text-center overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 20px 40px -12px rgba(223, 237, 37, 0.3)'
              }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#dfed25]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Glowing Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-xl bg-[#dfed25]/10 blur-xl" />
              </div>

              <div className="relative z-10">
                {/* Tech Logo Placeholder */}
                <div className="w-16 h-16 bg-[#dfed25]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#dfed25]/20 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl font-bold text-[#dfed25]">
                    {tech.name.charAt(0)}
                  </span>
                </div>

                {/* Tech Name */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#dfed25] transition-colors duration-300">
                  {tech.name}
                </h3>

                {/* Category */}
                <p className="text-sm text-gray-400 mb-3">{tech.category}</p>

                {/* Buzzword */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block px-3 py-1 bg-[#dfed25]/20 text-[#dfed25] text-xs font-semibold rounded-full border border-[#dfed25]/30">
                    {tech.buzzword}
                  </span>
                </div>
              </div>

              {/* Pulse Animation */}
              <div className="absolute inset-0 rounded-xl border-2 border-[#dfed25] opacity-0 group-hover:opacity-30 animate-ping" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-gray-300 mb-6">
            Ready to leverage these technologies for your project?
          </p>
          <button className="bg-[#dfed25] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#c9d91f] transition-all duration-300 transform hover:scale-105 glow-effect">
            Discuss Your Tech Stack
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;