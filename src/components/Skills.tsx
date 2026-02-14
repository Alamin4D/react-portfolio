import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiFirebase, SiRedux, SiVercel } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
      { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
      { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
      { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
      { name: 'Vercel', icon: <SiVercel />, color: '#ffffff' },
      { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    ]
  }
];

const allSkills = skillCategories.flatMap(cat => cat.skills);

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 bg-[#08080d] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[180px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I&apos;ve worked with a wide range of technologies in the web development world.
          </p>
        </motion.div>

        {/* Marquee of Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 overflow-hidden"
        >
          <div className="flex animate-marquee">
            {[...allSkills, ...allSkills].map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-6 py-3 mx-2 bg-gray-800/50 rounded-full border border-gray-700/50 whitespace-nowrap"
              >
                <span className="text-xl" style={{ color: skill.color }}>{skill.icon}</span>
                <span className="text-gray-300 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="group relative"
                  >
                    <div className="p-6 glass rounded-2xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-300 text-center">
                      {/* Icon */}
                      <div 
                        className="text-4xl  mb-3 transition-all duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      
                      {/* Name */}
                      <h4 className="text-white text-left font-medium mb-3">{skill.name}</h4>
                      
                      {/* Progress Bar */}
                      {/* <div className="relative h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                          className="absolute inset-y-0 left-0 rounded-full"
                          style={{ 
                            background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` 
                          }}
                        />
                      </div> */}
                      
                      {/* Level */}
                      {/* <span className="text-xs text-gray-400 mt-2 block">{skill.level}</span> */}
                    </div>

                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                      style={{ background: skill.color }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 glass rounded-2xl border border-gray-800">
            <span className="text-gray-400">Constantly learning and evolving</span>
            <span className="text-2xl"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}