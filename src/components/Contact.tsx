import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r={Math.random() * 3 + 1}
              fill="#dfed25"
              animate={{
                opacity: [0, 1, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
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
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#dfed25] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can help transform your vision into reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-[#dfed25]/50 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${focusedField === 'name'
                      ? 'border-[#dfed25] glow-effect'
                      : 'border-gray-600 hover:border-gray-500'
                      }`}
                    placeholder="Your Name"
                    required
                  />
                  {focusedField === 'name' && (
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-[#dfed25] pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${focusedField === 'email'
                      ? 'border-[#dfed25] glow-effect'
                      : 'border-gray-600 hover:border-gray-500'
                      }`}
                    placeholder="Your Email"
                    required
                  />
                  {focusedField === 'email' && (
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-[#dfed25] pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>

                {/* Company Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${focusedField === 'company'
                      ? 'border-[#dfed25] glow-effect'
                      : 'border-gray-600 hover:border-gray-500'
                      }`}
                    placeholder="Company Name"
                  />
                  {focusedField === 'company' && (
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-[#dfed25] pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none resize-none ${focusedField === 'message'
                      ? 'border-[#dfed25] glow-effect'
                      : 'border-gray-600 hover:border-gray-500'
                      }`}
                    placeholder="Tell us about your project..."
                    required
                  />
                  {focusedField === 'message' && (
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-[#dfed25] pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-[#dfed25] text-black py-4 rounded-lg font-semibold text-lg hover:bg-[#c9d91f] transition-all duration-300 transform hover:scale-105 glow-effect flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                { icon: Mail, title: 'Email Us', info: 'contact@bytesynergylabs.com', action: 'Send Email' },
                { icon: Phone, title: 'Call Us', info: '+1 (555) 123-4567', action: 'Start Call' },
                { icon: MapPin, title: 'Visit Us', info: 'San Francisco, CA', action: 'Get Directions' },
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={index}
                    className="group bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-[#dfed25] transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 5, boxShadow: '0 10px 30px -5px rgba(223, 237, 37, 0.2)' }}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#dfed25]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#dfed25]/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-[#dfed25]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white group-hover:text-[#dfed25] transition-colors duration-300">
                          {contact.title}
                        </h4>
                        <p className="text-gray-300">{contact.info}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#dfed25] transition-colors duration-300" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Interactive Map Placeholder */}
            <motion.div
              className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-[#dfed25] transition-all duration-300 group"
              whileHover={{ boxShadow: '0 20px 40px -12px rgba(223, 237, 37, 0.2)' }}
            >
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#dfed25] transition-colors duration-300">
                Our Location
              </h4>
              <div className="relative h-48 bg-gray-900 rounded-lg overflow-hidden">
                <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
                  <iframe
                    title="San Francisco Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019019857468!2d-122.4194151846817!3d37.77492977975959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2f8e6e2b%3A0x4a0b8e6e2b8e6e2b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1693320000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;