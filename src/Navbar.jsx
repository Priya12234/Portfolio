import { motion, useTransform } from 'framer-motion';

export default function Navbar({ scrollXProgress }) {
  return (
    <div data-theme="dark" className="fixed top-0 left-0 right-0 z-50">
      <div className="shadow-sm navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-lg dropdown-content bg-base-100 rounded-box z-1 w-52">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#mywork">My Work</a></li>
              <li><a href="#skills">My Skills</a></li>
              <li><a href="#contact">Contact Me</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <motion.a
            className="text-2xl btn btn-ghost"
          >
            Priya Chauhan
          </motion.a>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-40 h-1 bg-blue-200"
        style={{ scaleX: scrollXProgress, originX: 0 }}
      />
    </div>
  );
}