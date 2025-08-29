import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Rocket, Users } from 'lucide-react';

const timeline = [
  {
    year: '2024 Jan',
    title: 'Our Journey Begins',
    description: 'ByteSynergy Labs embarks on its mission to bridge the gap between cutting-edge technology and practical business solutions.',
  },
  {
    year: '2024 Mar',
    title: 'AI Integration',
    description: 'Expanded into AI and machine learning solutions, helping clients automate complex processes and gain competitive advantages.',
  },
  {
    year: '2024 Jul',
    title: 'Global Expansion',
    description: 'Established partnerships worldwide and launched our digital transformation consulting practice.',
  },
  {
    year: '2024 Nov',
    title: 'Innovation Lab',
    description: 'Opened our R&D facility focused on emerging technologies like quantum computing and advanced AI systems.',
  },
  {
    year: '2025',
    title: 'Future Forward',
    description: 'Leading the industry in sustainable tech solutions and next-generation software architectures.',
  },
];

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower organizations with transformative technology solutions that drive innovation, efficiency, and sustainable growth in the digital age.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the global leader in technology innovation, creating a future where intelligent systems enhance human potential and business success.',
  },
  {
    icon: Rocket,
    title: 'Our Values',
    description: 'Innovation, integrity, excellence, and collaboration guide everything we do as we build the technology solutions of tomorrow.',
  },
];

const About = () => {
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
            About ByteSynergy Labs
          </h2>
          <div className="w-24 h-1 bg-[#dfed25] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The story of innovation, growth, and our commitment to shaping the future of technology.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                className="group text-center p-8 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 hover:border-[#dfed25] transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-[#dfed25]/10 rounded-full flex items-center justify-center group-hover:bg-[#dfed25]/20 transition-all duration-300 group-hover:scale-110 glow-effect">
                    <Icon className="w-10 h-10 text-[#dfed25]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#dfed25] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Our Journey</h3>

          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700">
            <motion.div
              className="w-full bg-gradient-to-b from-[#dfed25] to-transparent"
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : {}}
              transition={{ duration: 2, delay: 1 }}
            />
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.5 + index * 0.3 }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-[#dfed25] transition-all duration-300 group">
                    <h4 className="text-2xl font-bold text-[#dfed25] mb-2 group-hover:text-glow transition-all duration-300">
                      {item.year}
                    </h4>
                    <h5 className="text-xl font-semibold text-white mb-3 group-hover:text-[#dfed25] transition-colors duration-300">
                      {item.title}
                    </h5>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10">
                  <motion.div
                    className="w-6 h-6 bg-[#dfed25] rounded-full border-4 border-black glow-effect"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.3 }}
                    whileHover={{ scale: 1.5 }}
                  />
                </div>

                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;