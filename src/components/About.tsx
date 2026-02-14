import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer, FaRocket, FaLightbulb, FaUsers, FaClock } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={28} />,
    title: 'Web Development',
    description: 'Building scalable, high-performance web applications with modern frameworks and best practices.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile apps with React Native that feel truly native.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <FaLaptopCode size={28} />,
    title: 'Frontend Excellence',
    description: 'Crafting pixel-perfect, responsive UIs with React, Next.js, and modern CSS frameworks.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: <FaServer size={28} />,
    title: 'Backend Solutions',
    description: 'Developing robust APIs and server-side applications with Node.js, Express, and databases.',
    color: 'from-green-500 to-emerald-500',
  },
];

const values = [
  { icon: <FaRocket />, title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' },
  { icon: <FaLightbulb />, title: 'Innovation', desc: 'Always exploring cutting-edge solutions' },
  { icon: <FaUsers />, title: 'Collaboration', desc: 'Working closely with clients for best results' },
  { icon: <FaClock />, title: '24/7 Support', desc: 'Reliable support whenever you need it' },
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Passionate About Creating{' '}
            <span className="gradient-text">Digital Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I transform ideas into powerful, user-centric digital solutions that make a real impact.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - About Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 glass rounded-3xl p-8 border border-indigo-500/10">
              {/* Code Editor Style Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-gray-500 text-sm font-mono">about.tsx</span>
              </div>

              {/* Content */}
              <div className="font-mono text-sm leading-relaxed">
                <p className="text-purple-400">{"const"} <span className="text-cyan-400">developer</span> = {"{"}</p>
                <p className="ml-4 text-gray-400">name: <span className="text-green-400">"Alamin"</span>,</p>
                <p className="ml-4 text-gray-400">role: <span className="text-green-400">"MERN Stack Developer"</span>,</p>
                <p className="ml-4 text-gray-400">location: <span className="text-green-400">"Dhaka, Bangladesh"</span>,</p>
                <p className="ml-4 text-gray-400">experience: <span className="text-orange-400">2</span><span className="text-gray-500">+ years</span>,</p>
                <p className="ml-4 text-gray-400">passions: [</p>
                <p className="ml-8 text-green-400">"Clean Code",</p>
                <p className="ml-8 text-green-400">"User Experience",</p>
                <p className="ml-8 text-green-400">"Innovation"</p>
                <p className="ml-4 text-gray-400">],</p>
                <p className="ml-4 text-gray-400">available: <span className="text-cyan-400">true</span></p>
                <p className="text-purple-400">{"}"}</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: '2+', label: 'Years Experience', color: 'text-indigo-400' },
                  { value: '50+', label: 'Projects Done', color: 'text-purple-400' },
                  { value: '30+', label: 'Happy Clients', color: 'text-pink-400' },
                  { value: '99%', label: 'Satisfaction', color: 'text-cyan-400' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700/50"
                  >
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-gray-400 text-xs">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl -z-10"></div>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Turning Vision into{' '}
              <span className="text-indigo-400">Reality</span>
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m a passionate MERN Stack Developer from Bangladesh with over 2 years of experience 
                in building exceptional digital experiences. My journey in tech started with curiosity 
                and has evolved into a deep expertise in modern web technologies.
              </p>
              <p>
                I specialize in React, Node.js, and cloud technologies, with a strong focus on 
                creating scalable, performant applications. I believe in writing clean, maintainable 
                code and staying up-to-date with the latest industry trends.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me contributing to open source, learning new 
                technologies, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">{value.title}</h4>
                    <p className="text-gray-500 text-xs">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
              >
                Let&apos;s Work Together
                <FaRocket className="text-sm" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-12"
          >
            Services I Offer
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 glass rounded-2xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}