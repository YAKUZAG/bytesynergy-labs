import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Github, Mail } from 'lucide-react';

const team = [
  {
    name: 'Dulaj Thiwanka',
    role: 'Co-Founder & Lead Developer',
    bio: 'Expert in full-stack development, cloud solutions, and driving technical innovation for ByteSynergy Labs.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Full-Stack', 'Cloud', 'Innovation'],
  },
  {
    name: 'Kaveesha Silva',
    role: 'Co-Founder & UI/UX Designer',
    bio: 'Passionate about crafting beautiful, user-centric digital experiences and product design.',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['UI/UX', 'Product Design', 'Branding'],
  },
  {
    name: 'Thisitha Manram',
    role: 'Software Engineer',
    bio: 'Specializes in backend systems, API development, and scalable software architectures.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Backend', 'APIs', 'Architecture'],
  },
  {
    name: 'Denura Mudalige',
    role: 'AI & Data Engineer',
    bio: 'Focused on machine learning, data engineering, and building intelligent solutions for clients.',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Machine Learning', 'Data Engineering', 'Python'],
  },
];

const Team = () => {
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
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-[#dfed25] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience in cutting-edge
            technologies and innovative problem-solving approaches.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="group bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-[#dfed25] transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#dfed25]/30 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                y: -12,
                rotateY: 10,
                rotateX: 5,
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* 3D Tilt Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#dfed25]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Avatar */}
                <div className="mb-6 flex justify-center">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1, rotateY: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-gray-600 group-hover:border-[#dfed25] transition-colors duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#dfed25]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 rounded-full border-2 border-[#dfed25] opacity-0 group-hover:opacity-50 animate-ping" />
                  </motion.div>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#dfed25] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-[#dfed25] font-semibold mb-4">{member.role}</p>

                {/* Bio */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-[#dfed25]/10 text-[#dfed25] text-xs font-semibold rounded-full border border-[#dfed25]/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 text-gray-400 hover:text-[#dfed25] transition-colors duration-300">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-[#dfed25] transition-colors duration-300">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-[#dfed25] transition-colors duration-300">
                    <Mail className="w-5 h-5" />
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

export default Team;