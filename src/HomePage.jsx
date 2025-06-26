import { motion } from 'framer-motion';
import image3 from '/src/assets/3.jpg';
export default function HomePage({ scale, rotate, opacity, zIndex , scrollToSection}) {
  return (
    <motion.section 
      id="home"
      className="flex flex-col items-center justify-center h-screen min-w-full px-4 text-center snap-start"
      style={{
        scale,
        rotate,
        opacity,
        zIndex,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Gallery Frame Effect */}
      <motion.div
        className="relative w-full max-w-6xl p-8 bg-white border-8 border-white shadow-2xl md:p-12 rounded-xl"
        style={{
          transformStyle: 'preserve-3d',
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")',
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Matte Effect Inside Frame */}
        <div className="absolute border-2 border-white pointer-events-none inset-2"></div>
        
        {/* Content Container */}
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
            {/* Text Content */}
            <motion.div 
              className="order-2 text-center md:order-1 md:text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.h1 
                className="mb-6 text-5xl font-bold text-gray-800 md:text-6xl"
                whileHover={{ scale: 1.02 }}
              >
                Priya Chauhan
              </motion.h1>
              <motion.p 
                className="mb-8 text-xl text-gray-600 md:text-2xl"
                whileHover={{ scale: 1.01 }}
              >
                Frontend Developer & UI Designer
              </motion.p>
              <motion.div
                className="flex justify-center gap-4 md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.button 
                  className="px-6 py-2 text-white bg-blue-600 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(2)} // MyWork is the 3rd component (index 2)
                >
                    View Work
                </motion.button>
                <motion.button 
                  className="px-6 py-2 text-blue-600 border-2 border-blue-600 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(4)} // ContactMe is the 5th component (index 4)
                >
                  Contact
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Photo */}
            <motion.div 
              className="relative order-1 w-48 h-48 overflow-hidden border-4 border-white rounded-full shadow-lg md:order-2 md:w-64 md:h-64"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: 0.2
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              {/* Replace with your actual photo */}
              <img 
                src={image3} 
                alt="Priya Chauhan"
                className="object-cover w-full h-full"
              />
              <motion.div 
                className="absolute inset-0 bg-blue-500 opacity-0 mix-blend-multiply hover:opacity-20"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute flex flex-col items-center bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
       
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </motion.div>
      </motion.div>
    </motion.section>

    
  );
}


