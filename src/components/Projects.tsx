import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile'];

const projects = [
  {
    title: 'Delish (Team Project)',
    description: 'Food Delivery App is a software development project focused on creating a digital platform for ordering and delivering food.',
    image: '/food-delivery.png',
    category: 'Full Stack',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/AlmasWD09/food-delivary-app',
    live: 'https://food-delivary-app-psi.vercel.app/',
    stars: 48,
    forks: 12,
    featured: true,
  },
  {
    title: 'Cloud Kitchen Billing App',
    description: 'A cloud kitchen management system with a user-friendly interface, real-time order tracking, and secure payment integration.',
    image: '/cloud-kitchen.png',
    category: 'Full Stack',
    tags: ['React', 'Firebase', 'Tailwind CSS',],
    github: 'https://github.com/Alamin4D/cloud-kitchen-billing',
    live: 'https://cloud-kitchen-billing.vercel.app/',
    stars: 35,
    forks: 8,
    featured: true,
  },
  {
  title: 'EduanUniversity',
  description: 'This is a fully-featured education management system where students, teachers, and administrative staff can work together seamlessly.',
  image: '/edu-site.png',
  category: 'Full Stack',
  tags: ['React', 'Firebase', 'Tailwind CSS', 'React Router'],
  github: 'https://github.com/Alamin4D/battle-client-website',
  live: 'https://scintillating-rabanadas-b8327e.netlify.app/',
  stars: 62,
  forks: 15,
  featured: true,
},

  {
    title: 'Ceramic',
    description: 'A secure and user-friendly messaging platform with real-time messaging, group messaging, and file sharing capabilities.',
    image: '/ceramic.png',
    category: 'Frontend',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'React Router', 'React Hook Form', 'React Toastify'],
    github: 'https://github.com/Alamin4D/craft-client-website',
    live: 'https://66311bf15dd534008e1f3997--peaceful-zabaione-49c836.netlify.app/',
    stars: 28,
    forks: 6,
    featured: false,
  },
  {
    title: 'Modern Business Landing Page',
    description: 'A sleek and modern business landing page with a user-friendly interface, responsive design, and smooth scrolling.',
    image: '/modern.png',
    category: 'Frontend',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/Alamin4D/modern-react-project',
    live: 'https://modern-react-project-theta.vercel.app/',
    stars: 42,
    forks: 18,
    featured: false,
  },
  // {
  //   title: 'Weather Dashboard',
  //   description: 'Real-time weather application with location-based forecasts, 7-day predictions, interactive maps, and weather alerts.',
  //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
  //   category: 'Frontend',
  //   tags: ['React', 'Weather API', 'Chart.js', 'Geolocation'],
  //   github: 'https://github.com/Alamin4D',
  //   live: '#',
  //   stars: 19,
  //   forks: 4,
  //   featured: false,
  // },
  // {
  //   title: 'REST API Boilerplate',
  //   description: 'A production-ready Node.js REST API boilerplate with authentication, authorization, rate limiting, and comprehensive documentation.',
  //   image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
  //   category: 'Backend',
  //   tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
  //   github: 'https://github.com/Alamin4D',
  //   live: '#',
  //   stars: 55,
  //   forks: 22,
  //   featured: false,
  // },
  // {
  //   title: 'Fitness Tracker App',
  //   description: 'A mobile fitness application for tracking workouts, nutrition, and health metrics with personalized recommendations.',
  //   image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=500&fit=crop',
  //   category: 'Mobile',
  //   tags: ['React Native', 'Firebase', 'HealthKit', 'Charts'],
  //   github: 'https://github.com/Alamin4D',
  //   live: '#',
  //   stars: 31,
  //   forks: 7,
  //   featured: false,
  // },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 bg-[#08080d] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[150px]"></div>
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
            My Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of projects that showcase my skills and passion for building great software.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative glass rounded-2xl overflow-hidden border border-gray-800 hover:border-indigo-500/30 transition-all duration-500"
              >
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-medium rounded-full flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  Featured
                </div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080d] via-[#08080d]/50 to-transparent"></div>
                  
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-indigo-600/80">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 bg-white rounded-full text-gray-900 shadow-lg"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 bg-white rounded-full text-gray-900 shadow-lg"
                    >
                      <FaExternalLinkAlt size={18} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-indigo-500/10 text-indigo-300 rounded-md border border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCodeBranch />
                      {project.forks}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group glass rounded-xl overflow-hidden border border-gray-800 hover:border-indigo-500/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111118] to-transparent"></div>
                  
                  {/* Quick Links */}
                  <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/50 backdrop-blur rounded-lg text-white hover:bg-indigo-600 transition-colors"
                    >
                      <FaGithub size={14} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/50 backdrop-blur rounded-lg text-white hover:bg-indigo-600 transition-colors"
                    >
                      <FaExternalLinkAlt size={12} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <span className="text-xs text-indigo-400 font-medium">{project.category}</span>
                  <h4 className="text-white font-semibold mt-1 mb-2 group-hover:text-indigo-400 transition-colors line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-gray-500 text-xs line-clamp-2 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] bg-gray-800 text-gray-400 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/Alamin4D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-700 hover:border-indigo-500/50 text-white rounded-2xl font-semibold transition-all duration-300 hover:bg-indigo-500/5 group"
          >
            <FaGithub size={20} className="group-hover:rotate-12 transition-transform" />
            <span>View All Projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}