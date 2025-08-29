import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Blocks, Wifi, Cloud, Cpu, Zap } from 'lucide-react';

const innovations = [
  {
    icon: Brain,
    title: 'AI Research Lab',
    description: 'Advanced machine learning models, neural networks, and cognitive computing solutions for next-generation applications.',
    status: 'Active Research',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Blocks,
    title: 'Blockchain Solutions',
    description: 'Decentralized applications, smart contracts, and distributed ledger technologies for secure, transparent systems.',
    status: 'Production Ready',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Wifi,
    title: 'IoT Integration',
    description: 'Connected device ecosystems, edge computing, and real-time data processing for industrial and consumer applications.',
    status: 'Pilot Programs',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Architecture',
    description: 'Serverless computing, microservices, and auto-scaling infrastructure designed for maximum efficiency and reliability.',
    status: 'Industry Leading',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Cpu,
    title: 'Quantum Computing',
    description: 'Exploring quantum algorithms and hybrid classical-quantum systems for solving complex computational challenges.',
    status: 'R&D Phase',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Edge AI Processing',
    description: 'Real-time AI inference at the edge, reducing latency and enabling intelligent decision-making in distributed systems.',
    status: 'Beta Testing',
    color: 'from-indigo-500 to-purple-500',
  },
];

const Innovations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden" ref={ref}>
      {/* Animated Circuit Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M${Math.random() * 1000},${Math.random() * 1000} Q${Math.random() * 1000},${Math.random() * 1000} ${Math.random() * 1000},${Math.random() * 1000}`}
              stroke="#dfed25"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2
              }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Future-Ready Innovations
          </h2>
          <div className="w-24 h-1 bg-[#dfed25] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering tomorrow's technology today. Our R&D initiatives push the boundaries of what's possible.
          </p>
        </motion.div>

        {/* Innovations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => {
            const Icon = innovation.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-[#dfed25] transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 25px 50px -12px rgba(223, 237, 37, 0.25)'
                }}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${innovation.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Pulsing Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-[#dfed25] opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />

                <div className="relative z-10">
                  {/* Status Badge */}
                  <div className="absolute top-0 right-0 -mt-4 -mr-4">
                    <span className="inline-block px-3 py-1 bg-[#dfed25] text-black text-xs font-bold rounded-full">
                      {innovation.status}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-[#dfed25]/10 rounded-xl flex items-center justify-center group-hover:bg-[#dfed25]/20 transition-all duration-300 group-hover:scale-110 glow-effect">
                      <Icon className="w-10 h-10 text-[#dfed25]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#dfed25] transition-colors duration-300">
                    {innovation.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {innovation.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="mt-6 pt-4 border-t border-gray-700 group-hover:border-[#dfed25]/50 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                    <span className="text-[#dfed25] font-semibold text-sm uppercase tracking-wide">
                      Learn More →
                    </span>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-[#dfed25] rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Innovations;