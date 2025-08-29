import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, DollarSign, Clock, Users, Heart } from 'lucide-react';

const caseStudies = [
  {
    title: 'AI-Powered Cost Optimization',
    client: 'TechCorp Enterprise',
    industry: 'Technology',
    challenge: 'High cloud infrastructure costs and inefficient resource allocation',
    solution: 'Implemented AI-driven auto-scaling and resource optimization system',
    results: [
      { icon: DollarSign, metric: '40%', description: 'Reduction in server costs' },
      { icon: TrendingUp, metric: '60%', description: 'Performance improvement' },
      { icon: Clock, metric: '80%', description: 'Faster deployment times' },
    ],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Digital Transformation Platform',
    client: 'RetailMax Solutions',
    industry: 'E-Commerce',
    challenge: 'Legacy systems limiting scalability and customer experience',
    solution: 'Complete platform modernization with microservices architecture',
    results: [
      { icon: Users, metric: '300%', description: 'Increase in user capacity' },
      { icon: TrendingUp, metric: '150%', description: 'Revenue growth' },
      { icon: Clock, metric: '90%', description: 'Faster page load times' },
    ],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Healthcare Analytics System',
    client: 'MedTech Innovations',
    industry: 'Healthcare',
    challenge: 'Fragmented patient data and inefficient care coordination',
    solution: 'Unified analytics platform with real-time patient monitoring',
    results: [
      { icon: Heart, metric: '50%', description: 'Improved patient outcomes' },
      { icon: Clock, metric: '70%', description: 'Faster diagnosis times' },
      { icon: DollarSign, metric: '35%', description: 'Operational cost savings' },
    ],
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Success Stories
          </h2>
          <div className="w-24 h-1 bg-[#dfed25] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real clients. See how we've transformed businesses through innovative technology solutions.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-[#dfed25] transition-all duration-300 group">
                  <div className="mb-6">
                    <span className="text-[#dfed25] font-semibold text-sm uppercase tracking-wide">
                      {study.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2 mb-4 group-hover:text-[#dfed25] transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 font-semibold">{study.client}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Solution:</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, resultIndex) => {
                      const Icon = result.icon;
                      return (
                        <div key={resultIndex} className="text-center p-4 bg-gray-900 rounded-lg border border-gray-600 group-hover:border-[#dfed25]/50 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-[#dfed25] mx-auto mb-2" />
                          <div className="text-2xl font-bold text-[#dfed25] mb-1">{result.metric}</div>
                          <div className="text-xs text-gray-400">{result.description}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-80 object-cover rounded-xl border border-gray-700 group-hover:border-[#dfed25] transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 border-2 border-[#dfed25] rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;