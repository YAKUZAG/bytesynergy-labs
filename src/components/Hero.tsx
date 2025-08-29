import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const phrases = ['AI.', 'Software.', 'Transformation.', 'The Future.'];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const typeText = () => {
      const phrase = phrases[currentPhrase];
      let i = 0;
      const timer = setInterval(() => {
        if (i <= phrase.length) {
          setTypedText(phrase.slice(0, i));
          i++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          }, 3000);
        }
      }, 150);
    };

    typeText();
  }, [currentPhrase]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1000 1000">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 500}
              cy={Math.random() * 500}
              r="2"
              fill="#dfed25"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.7, 1, 0.7, 0],
                scale: [1, 1.8, 2, 1.8, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 4
              }}
            />
          ))}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 1000}
              y1={Math.random() * 1000}
              x2={Math.random() * 1000}
              y2={Math.random() * 1000}
              stroke="#dfed25"
              strokeWidth="1"
              opacity="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 3
              }}
            />
          ))}
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#dfed25] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              opacity: [0.2, 0.8, 1, 0.8, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* 3D Rotating Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <Zap className="w-16 h-16 text-[#dfed25] mr-3 drop-shadow-[0_0_20px_rgba(223,237,37,0.8)]" />
            <div className="absolute inset-0 w-16 h-16 border-2 border-[#dfed25] rounded-full animate-ping opacity-30"></div>
          </div>
          <h1 className="text-4xl font-bold tracking-wide text-glow">ByteSynergy Labs</h1>
        </div>

        {/* Main Headline */}
        <motion.h2
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-[#dfed25] bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Innovating the Future of Technology
        </motion.h2>

        {/* Animated Typing Effect */}
        <motion.div
          className="text-3xl md:text-4xl font-bold mb-8 text-[#dfed25] h-16 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-glow">{typedText}</span>
          <span className="animate-pulse ml-1">|</span>
        </motion.div>

        {/* Subheading */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          ByteSynergy Labs delivers cutting-edge solutions in AI, Software Engineering,
          and Digital Transformation for forward-thinking organizations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.button
            className="group bg-[#dfed25] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#c9d91f] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#dfed25]/50 glow-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
          <motion.button
            className="px-8 py-4 rounded-full border-2 border-[#dfed25] text-[#dfed25] font-semibold text-lg hover:bg-[#dfed25] hover:text-black transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Services
          </motion.button>
        </motion.div>

        {/* Scroll Indicator (moved below CTA buttons) */}
        <div className="flex justify-center mt-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <div className="w-6 h-10 border-2 border-[#dfed25] rounded-full flex justify-center glow-effect">
              <motion.div
                className="w-1 h-3 bg-[#dfed25] rounded-full mt-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;