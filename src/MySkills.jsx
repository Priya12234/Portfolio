import { motion } from "framer-motion";
import { useState } from "react";

export default function MySkills({ scale, rotate, opacity, zIndex }) {
  const [flippedCard, setFlippedCard] = useState(null);

  const skillCards = [
    {
      category: "Design",
      icon: "🎨",
      front: ["UI/UX", "Figma", "Prototyping", "Wireframing"],
      back: "User-centered design approach with 2+ projects",
      gradient: "from-purple-300 to-fuchsia-400",
    },
    {
      category: "Technical",
      icon: "💻",
      front: ["React", "Node.js", "Figma", "Git"],
      back: "1+ years building interactive web applications",
      gradient: "from-amber-300 to-orange-400",
    },
    {
      category: "Languages",
      icon: "📜",
      front: ["JavaScript", "Java", "Python", "HTML/CSS"],
      back: "Full-stack development across multiple tech stacks",
      gradient: "from-blue-300 to-cyan-400",
    },
    {
      category: "Soft Skills",
      icon: "🤝",
      front: ["Team Lead", "Communication", "Public Speaking", "Collaboration"],
      back: "Collaborated in college projects, events & presentations with strong communication",
      gradient: "from-green-300 to-emerald-400",
    },
  ];

  return (
    <motion.section
      id="skills"
      className="relative flex items-center justify-center min-w-full px-4 py-16 bg-white snap-start"
      style={{
        scale,
        rotate,
        opacity,
        zIndex,
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <div className="relative w-full max-w-6xl px-4 mx-auto text-center sm:px-6">
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
              letterSpacing: ["0px", "1px", "0px"],
              transition: { duration: 0.3 },
            }}
          >
            My Skills
          </motion.h2>
          <div className="w-12 h-1 mx-auto transition-all duration-300 md:w-20 bg-amber-500 divider-line"></div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-4 mt-12 sm:gap-5 md:grid-cols-4 md:gap-6 lg:gap-8">
          {skillCards.map((card, index) => (
            <motion.div
              key={index}
              className="relative w-full mx-auto cursor-pointer group aspect-[3/4]"
              onClick={() =>
                setFlippedCard(flippedCard === index ? null : index)
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div
                className={`absolute inset-0 rounded-xl transition-all duration-500 transform rotate-1 group-hover:rotate-2 bg-gradient-to-br ${
                  card.gradient
                } ${
                  flippedCard === index
                    ? "opacity-100 scale-105"
                    : "opacity-90 scale-100"
                }`}
              ></div>

              <div className="relative h-full overflow-hidden">
                {/* Card Back */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center p-4 overflow-hidden border-4 border-white shadow-lg sm:p-6 bg-white/95 rounded-xl backdrop-blur-sm"
                  style={{ backfaceVisibility: "hidden" }}
                  animate={{
                    rotateY: flippedCard === index ? 0 : 180,
                    zIndex: flippedCard === index ? 1 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-full max-h-full overflow-y-auto text-center">
                    <span className="block mb-3 text-3xl sm:text-4xl">
                      {card.icon}
                    </span>
                    <p className="px-2 text-xs text-gray-700 sm:text-sm">
                      {card.back}
                    </p>
                  </div>
                  <div className="absolute bottom-2 sm:bottom-4 text-[10px] sm:text-xs text-gray-400">
                    {window.innerWidth > 768
                      ? "Click to flip back"
                      : "Tap to flip back"}
                  </div>
                </motion.div>

                {/* Card Front */}
                <motion.div
                  className="absolute inset-0 flex flex-col p-4 overflow-hidden border-4 border-white shadow-lg sm:p-6 bg-white/95 rounded-xl backdrop-blur-sm"
                  style={{ backfaceVisibility: "hidden" }}
                  animate={{
                    rotateY: flippedCard === index ? 180 : 0,
                    zIndex: flippedCard === index ? 0 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl">{card.icon}</span>
                    <span className="px-2 py-0.5 text-[10px] sm:text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
                      {index + 1}/{skillCards.length}
                    </span>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-800 sm:text-xl">
                    {card.category}
                  </h3>
                  <ul className="flex-1 space-y-1 overflow-y-auto text-left">
                    {card.front.map((skill, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center"
                        whileHover={{ x: 4 }}
                      >
                        <span className="w-1.5 h-1.5 mr-2 rounded-full bg-amber-500"></span>
                        <span className="text-xs text-gray-700 sm:text-sm">
                          {skill}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="pt-2 mt-auto text-[10px] sm:text-xs text-gray-400">
                    {window.innerWidth > 768
                      ? "Click to learn more"
                      : "Tap to learn more"}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 767px) {
          .divider-line {
            margin: 0.5rem auto !important;
          }
        }

        @media (max-height: 700px) and (max-width: 767px) {
          h2 {
            font-size: 1.75rem !important;
            margin: 1.5rem 0 0.75rem !important;
          }
          .divider-line {
            width: 3rem !important;
            height: 0.1rem !important;
          }
        }

        @media (max-height: 600px) and (max-width: 767px) {
          h2 {
            font-size: 1.5rem !important;
            margin: 1rem 0 0.5rem !important;
          }
          .divider-line {
            width: 2.5rem !important;
          }
        }

        @media (max-width: 400px) {
          .text-sm {
            font-size: 0.75rem !important;
          }
          .text-xs {
            font-size: 0.65rem !important;
          }
        }
      `}</style>
    </motion.section>
  );
}
