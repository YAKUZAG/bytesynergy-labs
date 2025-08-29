import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#dfed25]/30 relative overflow-hidden">
      {/* Animated Circuit Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 400">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M${i * 70},0 L${i * 70},400 M0,${i * 30} L1000,${i * 30}`}
              stroke="#dfed25"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Zap className="w-8 h-8 text-[#dfed25] mr-3" />
              <span className="text-2xl font-bold text-white">ByteSynergy Labs</span>
            </motion.div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Innovating the future of technology through cutting-edge AI, software engineering, 
              and digital transformation solutions that drive real business value.
            </p>
            <div className="space-y-3">
              <motion.div 
                className="flex items-center text-gray-300 hover:text-[#dfed25] transition-colors duration-300 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-[#dfed25] mr-3" />
                <span>contact@bytesynergylabs.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-gray-300 hover:text-[#dfed25] transition-colors duration-300 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-[#dfed25] mr-3" />
                <span>+1 (555) 123-4567</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-gray-300 hover:text-[#dfed25] transition-colors duration-300 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 text-[#dfed25] mr-3" />
                <span>San Francisco, CA</span>
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#dfed25] transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-[#dfed25] transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-[#dfed25] transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#dfed25] transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-300 hover:text-[#dfed25] transition-colors duration-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#dfed25] transition-colors duration-300">
                  Custom Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#dfed25] transition-colors duration-300">
                  IT Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#dfed25] transition-colors duration-300">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#dfed25] transition-colors duration-300">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#dfed25] transition-colors duration-300">
                  Performance Optimization
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 ByteSynergy Labs. All rights reserved.
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="p-3 text-gray-400 hover:text-[#dfed25] transition-all duration-300 transform hover:scale-110 bg-gray-800 rounded-full border border-gray-700 hover:border-[#dfed25] glow-effect"
                whileHover={{ 
                  scale: 1.2,
                  boxShadow: '0 0 20px rgba(223, 237, 37, 0.5)'
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="p-3 text-gray-400 hover:text-[#dfed25] transition-all duration-300 transform hover:scale-110 bg-gray-800 rounded-full border border-gray-700 hover:border-[#dfed25] glow-effect"
                whileHover={{ 
                  scale: 1.2,
                  boxShadow: '0 0 20px rgba(223, 237, 37, 0.5)'
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="p-3 text-gray-400 hover:text-[#dfed25] transition-all duration-300 transform hover:scale-110 bg-gray-800 rounded-full border border-gray-700 hover:border-[#dfed25] glow-effect"
                whileHover={{ 
                  scale: 1.2,
                  boxShadow: '0 0 20px rgba(223, 237, 37, 0.5)'
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;