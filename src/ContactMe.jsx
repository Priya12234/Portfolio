import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = ({ scale, rotate, opacity, zIndex }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS credentials
    const SERVICE_ID = 'service_4yf7d6o';
    const TEMPLATE_ID = 'template_516qatk';
    const USER_ID = 'YVpuFAITg2CFjc8GL';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        toast.error('Failed to send message. Please try again.');
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      style={{
        scale,
        rotate,
        opacity,
        zIndex,
        height: '100vh',
        width: '100vw',
        display: 'inline-flex',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
        scrollSnapAlign: 'start',
        backgroundColor: 'white'
      }}
      className="items-center justify-center p-4 md:p-8"
    >
        <ToastContainer
  position="top-right"
  autoClose={3000}
  style={{ marginTop: '70px' }} // Adjust based on your navbar height
/>



      <div id="contact" className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-2xl md:p-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-3xl font-bold text-center text-transparent md:text-5xl md:mb-8 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text"
        >
          Get in Touch
        </motion.h1>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-6"
          >
            <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">Let's Connect</h2>
            <p className="text-sm text-gray-600 md:text-base">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-amber-600 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-700 md:text-base">priyachauhan101418@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-amber-600 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm text-gray-700 md:text-base">+91 72838 76095</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-amber-600 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-700 md:text-base">Rajkot, Gujarat</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full p-2 mt-1 text-sm text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500 md:text-base"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full p-2 mt-1 text-sm text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500 md:text-base"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="block w-full p-2 mt-1 text-sm text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500 md:text-base"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 md:py-3 md:px-6 hover:from-amber-600 hover:to-amber-700 md:text-base"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
