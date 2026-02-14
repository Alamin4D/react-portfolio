import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    type: 'work',
    title: 'MERN Stack Developer (Internship)',
    company: 'PeopleNTech',
    location: 'Dhaka, Bangladesh',
    period: '2025',
    description: 'Developed and maintained multiple web applications, collaborated with cross-functional teams, and improved application performance by 40%.',
    skills: ['React', 'Express.js', 'Node.js', 'MongoDB', 'REST APIs'],
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'Programming Hero',
    location: 'Dhaka, Bangladesh',
    period: 'January 2024 - June 2024',
    description: 'Built responsive user interfaces, implemented modern design systems, and worked closely with UX designers to deliver pixel-perfect implementations.',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Next.js'],
  },
];

const education = [
  {
    type: 'education',
    title: 'Diploma in Computer Science',
    company: 'Mir Shamsul Islam Polytechnic Institute',
    location: 'Dhaka, Bangladesh',
    period: '2021 - 2025',
    description: 'Completed a Diploma in Computer Science with a strong focus on software development, web technologies, and database systems. Gained practical experience through academic projects and active participation in the programming club.',
    skills: ['Data Structures', 'Algorithms', 'Web Development', 'Database Systems'],
  },
];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const allItems = [...experiences, ...education];

  return (
    <section id="experience" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[200px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-4">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A timeline of my professional journey and educational background.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {allItems.map((item, index) => (
              <motion.div
                key={item.title + item.period}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse-glow"></div>
                </div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 glass rounded-2xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-300 group"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${
                        item.type === 'work' 
                          ? 'bg-indigo-500/20 text-indigo-400' 
                          : 'bg-purple-500/20 text-purple-400'
                      }`}>
                        {item.type === 'work' ? <FaBriefcase size={20} /> : <FaGraduationCap size={20} />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-indigo-400 font-medium">{item.company}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-gray-500" />
                        {item.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-gray-500" />
                        {item.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
          >
            <span>Download Full Resume</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}