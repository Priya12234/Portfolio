import { motion } from 'framer-motion';
import image3 from '/src/assets/3.jpg';
import resume from '/src/assets/Documents/Resume.pdf'; 


export default function AboutPage({ aboutY }) {
  return (
    <motion.section
      id="about"
      className="flex items-center justify-center min-w-full px-2 py-2 bg-white snap-start"
      style={{ y: aboutY, minHeight: 'calc(100vh - 64px)' }}
    >
      <div className="w-full max-w-6xl mx-auto">
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
            About Me
          </motion.h2>
          <div className="w-12 h-1 mx-auto transition-all duration-300 md:w-20 bg-amber-500 divider-line"></div>
        </motion.div>

        {/* Content grid */}
        <div className="grid items-start grid-cols-1 gap-3 md:grid-cols-3 md:gap-6 lg:gap-8">
          {/* Profile image */}
          <motion.div
            className="relative order-1 group md:order-none profile-image-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute transition duration-300 transform rounded-lg -inset-1 sm:-inset-2 bg-gradient-to-br from-amber-100 to-orange-100 rotate-1 group-hover:rotate-2"></div>
            <div className="relative overflow-hidden border-4 border-white rounded-lg shadow-lg aspect-square">
              <img
                src={image3}
                alt="Profile"
                className="object-cover w-full h-full transition duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-1 text-center bg-white/90 md:p-2 image-caption">
                <p className="text-xs font-medium text-gray-800 md:text-sm">React Developer, 2025</p>
                <p className="text-xs text-gray-600 md:text-sm">React · JavaScript · Tailwind</p>
              </div>
            </div>
          </motion.div>

          {/* Biography text */}
          <motion.div
            className="order-2 space-y-2 md:col-span-2 md:space-y-3 lg:space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.p className="text-sm leading-relaxed text-gray-700 md:text-base bio-text">
              With a deep focus on <span className="font-semibold text-amber-600">UI/UX,</span> I approach frontend development as a blend of logic and creativity. Using react I craft user-first experiences that feel intuitive and look beautiful.
            </motion.p>

            <motion.p className="text-sm leading-relaxed text-gray-700 md:text-base bio-text">
              My work lives where design meets <span className="font-medium text-gray-900">development—bringing ideas to life</span> through <span className="font-medium text-gray-900"> smooth interactions, and interfaces </span>, that truly connect with users.
            </motion.p>

           
            {/* Skills section */}
            <motion.div className="pt-4 md:pt-5 skills-container">
              <h3 className="mb-1 text-xs font-medium tracking-wider text-gray-500 uppercase md:text-sm md:mb-2">PRIMARY MEDIUMS</h3>
              <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
                {['React', 'JavaScript', 'PHP', 'CSS', 'UI - UX'].map((skill) => (
                  <motion.div
                    key={skill}
                    className="px-2 py-1 text-xs text-center text-gray-800 bg-gray-100 border border-gray-200 rounded-full md:text-sm md:px-3 md:py-2 skill-pill"
                    whileHover={{
                      backgroundColor: '#fef3c7',
                      color: '#92400e',
                      y: -2
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
             {/* Resume download button */}
            <motion.div
              className="pt-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
                href={resume}
                download
                className="inline-block px-4 py-2 text-sm font-medium text-white transition bg-amber-500 rounded-full shadow-md hover:bg-amber-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                Download Resume
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 767px) {
          .divider-line {
            margin: 0.5rem auto !important;
          }
          .bio-text {
            line-height: 1.5 !important;
          }
          .skill-pill {
            padding: 0.25rem 0.5rem !important;
            font-size: 0.7rem !important;
          }
        }

        @media (max-height: 700px) and (max-width: 767px) {
          .min-h-screen {
            min-height: 700px;
          }
          .profile-image-container .aspect-square {
            height: 180px !important;
            width: 180px !important;
          }
          .image-caption p {
            font-size: 0.65rem !important;
            padding: 0.25rem !important;
          }
          h2 {
            font-size: 1.75rem !important;
            margin: 1.5rem 0 0.75rem !important;
          }
          .divider-line {
            width: 3rem !important;
            height: 0.1rem !important;
          }
          .bio-text {
            font-size: 0.85rem !important;
          }
          .skills-container h3 {
            font-size: 0.7rem !important;
            margin-bottom: 0.5rem !important;
          }
        }

        @media (max-height: 600px) and (max-width: 767px) {
          .min-h-screen {
            min-height: 600px;
          }
          .profile-image-container .aspect-square {
            height: 150px !important;
            width: 150px !important;
          }
          h2 {
            font-size: 1.5rem !important;
            margin: 1rem 0 0.5rem !important;
          }
          .divider-line {
            width: 2.5rem !important;
          }
          .bio-text {
            font-size: 0.8rem !important;
          }
        }

        @media (max-height: 500px) and (max-width: 767px) {
          .profile-image-container .aspect-square {
            height: 120px !important;
            width: 120px !important;
          }
          h2 {
            font-size: 1.3rem !important;
            margin: 0.75rem 0 0.5rem !important;
          }
          .bio-text {
            font-size: 0.75rem !important;
            line-height: 1.4 !important;
          }
          .skills-container {
            padding-top: 0.5rem !important;
          }
        }
      `}</style>
    </motion.section>
  );
}
