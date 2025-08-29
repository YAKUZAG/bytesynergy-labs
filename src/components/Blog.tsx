import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of AI in Enterprise Software Development',
    excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and deploy enterprise applications.',
    author: 'Dr. Priya Sharma',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'AI & Machine Learning',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    trending: true,
  },
  {
    title: 'Microservices Architecture: Best Practices for 2025',
    excerpt: 'A comprehensive guide to building scalable, maintainable microservices that can handle enterprise-level traffic.',
    author: 'Marcus Johnson',
    date: 'January 12, 2025',
    readTime: '12 min read',
    category: 'Software Architecture',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
    trending: false,
  },
  {
    title: 'Digital Transformation Strategies That Actually Work',
    excerpt: 'Real-world case studies and proven methodologies for successful digital transformation initiatives.',
    author: 'Alex Rivera',
    date: 'January 10, 2025',
    readTime: '10 min read',
    category: 'Digital Transformation',
    image: 'https://images.pexels.com/photos/7439134/pexels-photo-7439134.jpeg?auto=compress&cs=tinysrgb&w=800',
    trending: true,
  },
];

const Blog = () => {
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
            Insights & Thought Leadership
          </h2>
          <div className="w-24 h-1 bg-[#dfed25] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest insights on technology trends, best practices, and industry innovations.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-[#dfed25] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#dfed25]/20"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              {/* Featured Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#dfed25] text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>

                {/* Trending Badge */}
                {post.trending && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Trending
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#dfed25] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                  <button className="flex items-center text-[#dfed25] hover:text-white transition-colors duration-300 group-hover:translate-x-1">
                    <span className="text-sm font-semibold mr-2">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Posts CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button className="bg-[#dfed25] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#c9d91f] transition-all duration-300 transform hover:scale-105 glow-effect">
            View All Posts
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;