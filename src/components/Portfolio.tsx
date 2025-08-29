import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Advanced machine learning platform for predictive business analytics',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AI & Machine Learning',
  },
  {
    title: 'Enterprise Resource Management',
    description: 'Comprehensive ERP solution for multi-location manufacturing',
    image: 'https://images.pexels.com/photos/7439134/pexels-photo-7439134.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Enterprise Software',
  },
  {
    title: 'Mobile Banking Application',
    description: 'Secure fintech mobile app with biometric authentication',
    image: 'https://images.pexels.com/photos/4968631/pexels-photo-4968631.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mobile Development',
  },
  {
    title: 'E-Commerce Optimization',
    description: 'Performance optimization resulting in 300% speed improvement',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Performance',
  },
  {
    title: 'Healthcare Management System',
    description: 'HIPAA-compliant patient management and telemedicine platform',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Healthcare Tech',
  },
  {
    title: 'Real-Time IoT Dashboard',
    description: 'Industrial IoT monitoring with real-time data visualization',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'IoT Solutions',
  },
];

const Portfolio = () => {
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
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-[#dfed25] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our successful projects that demonstrate our expertise in delivering 
            innovative technology solutions across various industries.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-[#dfed25] transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#dfed25]/30 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -12,
                rotateY: 5,
                rotateX: 5,
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* 3D Tilt Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#dfed25]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-[#dfed25] text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#dfed25] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  <button className="flex items-center text-[#dfed25] hover:text-white transition-colors duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="text-sm font-semibold">View Project</span>
                  </button>
                  <button className="flex items-center text-gray-400 hover:text-[#dfed25] transition-colors duration-300">
                    <Github className="w-4 h-4 mr-2" />
                    <span className="text-sm">Code</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;