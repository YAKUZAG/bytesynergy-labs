import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including fintech, healthcare, e-commerce, manufacturing, education, and startups. Our solutions are tailored to meet the specific regulatory and operational requirements of each sector.',
  },
  {
    question: 'How do we start a project with ByteSynergy Labs?',
    answer: 'Starting is simple: reach out through our contact form or schedule a consultation call. We\'ll discuss your requirements, provide a detailed proposal, and outline a clear project roadmap with milestones and timelines.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer: 'Yes, we provide comprehensive post-launch support including monitoring, updates, security patches, feature enhancements, and technical assistance. We offer flexible support packages to match your needs and budget.',
  },
  {
    question: 'What technologies and frameworks do you specialize in?',
    answer: 'We specialize in modern web technologies (React, Node.js, Python), cloud platforms (AWS, Azure, GCP), mobile development (React Native, Flutter), AI/ML frameworks (TensorFlow, PyTorch), and enterprise solutions (microservices, DevOps).',
  },
  {
    question: 'What is your typical project timeline and pricing structure?',
    answer: 'Project timelines vary from 4-6 weeks for simple applications to 6-12 months for complex enterprise solutions. We offer transparent pricing with fixed-cost projects, hourly consulting, and retainer-based agreements depending on your preferences.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-[#dfed25] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            Get answers to common questions about our services, processes, and partnerships.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 hover:border-[#dfed25]/50 rounded-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between group hover:bg-gray-750 transition-colors duration-300 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-[#dfed25] transition-colors duration-300 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-[#dfed25]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400 group-hover:text-[#dfed25] transition-colors duration-300" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-[#dfed25]/30">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Still have questions?
          </h3>
          <p className="text-gray-300 mb-6">
            Our team is here to help. Get in touch for a personalized consultation.
          </p>
          <button className="bg-[#dfed25] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#c9d91f] transition-all duration-300 transform hover:scale-105">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;