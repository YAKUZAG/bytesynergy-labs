import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#dfed25]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#dfed25]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
          }}
        />
      </div>

      {/* Glowing Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 400">
          <motion.path
            d="M0,200 Q250,100 500,200 T1000,200"
            stroke="#dfed25"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.path
            d="M0,250 Q250,150 500,250 T1000,250"
            stroke="#dfed25"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing Quote */}
          <div className="mb-12">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8 text-glow"
              animate={{
                textShadow: [
                  '0 0 20px rgba(223, 237, 37, 0.5)',
                  '0 0 40px rgba(223, 237, 37, 0.8)',
                  '0 0 20px rgba(223, 237, 37, 0.5)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <span className="bg-gradient-to-r from-[#dfed25] via-white to-[#dfed25] bg-clip-text text-transparent">
                "Let's build the future, together."
              </span>
            </motion.h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Our experts are standing by to discuss your vision.
            </p>
          </div>

          {/* CTA Button */}
          <motion.button
            className="group bg-gradient-to-r from-[#dfed25] to-[#c9d91f] text-black px-12 py-6 rounded-full font-bold text-xl hover:from-[#c9d91f] hover:to-[#dfed25] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#dfed25]/50 glow-effect"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 50px rgba(223, 237, 37, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center">
              <Calendar className="mr-3 w-6 h-6" />
              Schedule a Free Consultation
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </motion.button>

          {/* Additional Info */}
          <motion.div 
            className="mt-8 text-gray-400"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-sm">
              ✨ No commitment required • 30-minute strategy session • Expert insights included
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;