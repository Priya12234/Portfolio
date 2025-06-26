import { motion } from 'framer-motion';
import { useState } from 'react';
import image4 from '/src/assets/4.png';
import image5 from '/src/assets/5.png';
import image6 from '/src/assets/6.png';

export default function MyWork({ portfolioX }) {
  const [flippedCard, setFlippedCard] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "The Glamour",
      description: "Salon website built with React and .NET Core",
      image: image4,
      gradient: "from-amber-300 to-orange-300",
      details: "Feature-rich salon web app with appointment, payment & email integrations",
      fullDetails: `• Developed using React for frontend and .NET Core for backend
• Integrated Razorpay payment gateway for service payments
• Implemented appointment booking, feedback form, and contact mailer
• Designed user-friendly UI with service listings, product carousel, and our team section
• Ensured smooth user authentication and role-based access`,
      githubLink: "https://github.com/Priya12234/The_Glamour",
    },
    {
      id: 2,
      title: "LearnHub",
      description: "Online learning platform with courses, payments, and mailer",
      image: image5,
      gradient: "from-blue-300 to-cyan-300",
      details: "PHP-based learning site with secure transactions and user support",
      fullDetails: `• Built using PHP and MySQL for course management and authentication
• Added payment gateway integration for paid courses
• Implemented mailer system for course updates and contact
• User dashboard for enrolled courses, progress tracking, and quizzes
• Admin panel to manage courses, categories, and users`,
      githubLink: "https://github.com/Priya12234/learnhub2",
    },
    {
      id: 3,
      title: "Hostel Management App",
      description: "Mobile app for hostellers to manage daily activities",
      image: image6,
      gradient: "from-purple-300 to-fuchsia-300",
      details: "Flutter app enabling students to file complaints, view menu, and more",
      fullDetails: `• Developed with Flutter and Firebase for real-time interaction
• Students can file complaints, apply for leave, and view food menu
• Role-based login for students and wardens
• Warden panel to approve requests and update menus
• Clean UI with shared preferences for session management`,
      githubLink: "https://github.com/Priya12234/hms",
    },
    {
      id: 4,
      title: "Coming Soon",
      description: "Project under development",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      gradient: "from-green-300 to-emerald-300",
      details: "Stay tuned for the next big thing!",
      fullDetails: `• Project details will be updated soon
• Exciting new features and technologies in the pipeline
• In development phase`,
      githubLink: "",
    }
  ];

  const openModal = (project, e) => {
    e.stopPropagation();
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <motion.section
      id="mywork"
      className="flex items-center justify-center min-w-full px-4 py-16 bg-white snap-start"
      style={{ x: portfolioX, minHeight: 'calc(100vh - 64px)' }}
    >
      <div className="relative w-full max-w-6xl px-4 mx-auto text-center sm:px-6">
        {/* Section header */}
        <motion.div
          className="mb-2 text-center md:mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="px-1 mb-1 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl lg:text-5xl md:mb-2"
            whileHover={{
              letterSpacing: ['0px', '1px', '0px'],
              transition: { duration: 0.3 }
            }}
          >
            Featured Projects
          </motion.h2>
          <div className="w-12 h-1 mx-auto transition-all duration-300 md:w-20 bg-amber-500 divider-line"></div>
          <p className="mt-2 text-xs text-gray-400 md:hidden">Scroll horizontally to explore →</p>
        </motion.div>

        {/* Horizontal scroll wrapper for small screens */}
        <div className="mt-12 overflow-x-auto md:overflow-visible" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="flex gap-4 md:grid md:grid-cols-4 sm:gap-5 md:gap-6 lg:gap-8 min-w-max md:min-w-full">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative w-[260px] sm:w-[280px] md:w-full mx-auto cursor-pointer group aspect-[3/4]"
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 rounded-xl transition-all duration-500 transform rotate-1 group-hover:rotate-2 bg-gradient-to-br ${project.gradient} ${flippedCard === index ? 'opacity-100 scale-105' : 'opacity-90 scale-100'}`}></div>

                {/* Card Container */}
                <div className="relative h-full">
                  {/* Card Back */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center p-6 border-4 border-white shadow-lg bg-white/95 rounded-xl backdrop-blur-sm"
                    style={{ backfaceVisibility: 'hidden' }}
                    animate={{
                      rotateY: flippedCard === index ? 0 : 180,
                      zIndex: flippedCard === index ? 1 : 0
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="px-2 text-center">
                      <p className="mb-6 text-sm text-gray-700 sm:text-lg">{project.details}</p>
                    </div>
                    <div className="absolute flex flex-col items-center gap-2 bottom-4">
                      <button
                        onClick={(e) => openModal(project, e)}
                        className="px-3 py-1 text-xs font-medium text-white transition-all bg-gray-800 rounded-full hover:bg-gray-700 md:text-sm"
                      >
                        Full Details
                      </button>
                      <div className="text-xs text-gray-400">
                        {window.innerWidth > 768 ? 'Click to flip back' : 'Tap to flip back'}
                      </div>
                    </div>
                  </motion.div>

                  {/* Card Front */}
                  <motion.div
                    className="absolute inset-0 flex flex-col p-6 border-4 border-white shadow-lg bg-white/95 rounded-xl backdrop-blur-sm"
                    style={{ backfaceVisibility: 'hidden' }}
                    animate={{
                      rotateY: flippedCard === index ? 180 : 0,
                      zIndex: flippedCard === index ? 0 : 1
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="relative flex-1 mb-4 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full rounded-md"
                      />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-800">{project.title}</h3>
                    <p className="mb-4 text-sm text-gray-600">{project.description}</p>
                    <div className="flex justify-between pt-4 mt-auto">
                      <button
                        onClick={(e) => openModal(project, e)}
                        className="px-3 py-1 text-xs font-medium text-white transition-all bg-gray-800 rounded-full hover:bg-gray-700 md:text-sm"
                      >
                        Details
                      </button>
                      <div className="text-xs text-gray-400">
                        {window.innerWidth > 768 ? 'Click to flip' : 'Tap to flip'}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute p-1 text-gray-500 rounded-full top-4 right-4 hover:bg-gray-100 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="w-full p-6 md:w-2/5">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="object-cover w-full rounded-lg"
                />
              </div>
              <div className="w-full p-6 md:w-3/5">
                <h3 className="mb-4 text-2xl font-bold text-gray-800">{selectedProject.title}</h3>
                <p className="mb-6 text-gray-600 whitespace-pre-line">{selectedProject.fullDetails}</p>

                <div className="flex flex-wrap gap-3">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-sm font-medium text-white transition-all bg-gray-800 rounded-lg hover:bg-gray-700"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}
