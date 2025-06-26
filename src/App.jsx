import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './Navbar';
import HomePage from './HomePage';
import MyWork from './MyWork';
import AboutPage from './AboutPage';
import MySkills from './MySkills';
import ContactMe from './ContactMe';

function App() {
  const containerRef = useRef(null);
  const isScrolling = useRef(false);

   // Add this scroll function
   const scrollToSection = (sectionIndex) => {
    if (containerRef.current) {
      const sectionWidth = window.innerWidth;
      containerRef.current.scrollTo({
        left: sectionWidth * sectionIndex,
        behavior: 'smooth'
      });
    }
  };
  
  // Framer Motion scroll hooks
  const { scrollXProgress } = useScroll({
    container: containerRef,
    axis: 'x'
  });

  // Convert vertical scroll to horizontal
  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
      if (isScrolling.current) return;
      
      e.preventDefault();
      isScrolling.current = true;
      
      const scrollAmount = e.deltaY * 2;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  // Divide scroll range into 5 equal parts now (0-0.2, 0.2-0.4, 0.4-0.6, 0.6-0.8, 0.8-1)
  const homeScale = useTransform(scrollXProgress, [0, 0.2], [1, 0.9]);
  const homeRotate = useTransform(scrollXProgress, [0, 0.2], [0, -5]);
  const homeOpacity = useTransform(scrollXProgress, [0, 0.2], [1, 0.7]);
  
  const aboutScale = useTransform(scrollXProgress, [0.2, 0.4], [0.9, 1]);
  const aboutRotate = useTransform(scrollXProgress, [0.2, 0.4], [5, 0]);
  const aboutOpacity = useTransform(scrollXProgress, [0.2, 0.25], [0, 1]);
  
  const workScale = useTransform(scrollXProgress, [0.4, 0.6], [0.9, 1]);
  const workRotate = useTransform(scrollXProgress, [0.4, 0.6], [5, 0]);
  const workOpacity = useTransform(scrollXProgress, [0.4, 0.45], [0, 1]);
  
  const skillsScale = useTransform(scrollXProgress, [0.6, 0.8], [0.9, 1]);
  const skillsRotate = useTransform(scrollXProgress, [0.6, 0.8], [0, 0]);
  const skillsOpacity = useTransform(scrollXProgress, [0.6, 0.65], [0, 1]);

  const contactScale = useTransform(scrollXProgress, [0.8, 1], [0.9, 1]);
  const contactRotate = useTransform(scrollXProgress, [0.8, 1], [5, 0]);
  const contactOpacity = useTransform(scrollXProgress, [0.8, 0.85], [0, 1]);

  // Gallery wall effect with additional color for contact section
  const galleryPerspective = useTransform(scrollXProgress, [0, 1], ['perspective(1000px)', 'perspective(1000px)']);
  const galleryBg = useTransform(
    scrollXProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ['#f0f4ff', '#f8f0ff', '#fff0f4', '#f0fff4', '#f4f0ff', '#fff8f0']
  );

  return (
    <>
      <Navbar scrollXProgress={scrollXProgress} />
      
      {/* Gallery background */}
      <motion.div 
        className="fixed inset-0 -z-10"
        style={{ backgroundColor: galleryBg }}
      />
      
      {/* Horizontal Scroll Container */}
      <motion.div
        ref={containerRef}
        className="flex w-screen h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ 
          perspective: galleryPerspective,
          touchAction: 'pan-x'
        }}
      >
        <HomePage 
          scale={homeScale} 
          rotate={homeRotate} 
          opacity={homeOpacity}
          zIndex={useTransform(scrollXProgress, [0, 0.2], [10, 0])}
          scrollToSection={scrollToSection}  // Pass the function as prop

        />
        <AboutPage 
          scale={aboutScale} 
          rotate={aboutRotate} 
          opacity={aboutOpacity}
          zIndex={useTransform(scrollXProgress, [0.2, 0.4], [0, 10])}
        />
        <MyWork 
          scale={workScale} 
          rotate={workRotate} 
          opacity={workOpacity}
          zIndex={useTransform(scrollXProgress, [0.4, 0.6], [0, 10])}
        />
        <MySkills 
          scale={skillsScale} 
          rotate={skillsRotate} 
          opacity={skillsOpacity}
          zIndex={useTransform(scrollXProgress, [0.6, 0.8], [0, 10])}
        />
        <ContactMe 
          scale={contactScale} 
          rotate={contactRotate} 
          opacity={contactOpacity}
          zIndex={useTransform(scrollXProgress, [0.8, 1], [0, 10])}
        />
      </motion.div>

      {/* Custom CSS */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        html, body { 
          overflow: hidden;
          position: fixed;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
}

export default App;