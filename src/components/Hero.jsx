import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        {/* Animated text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium mb-2">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-4">
            Claret Obele
          </h1>
          <h2 className="text-2xl md:text-3xl text-secondary mb-6">
            Frontend Developer & Web Developer
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto mb-8">
            Building clean, responsive interfaces with React, TypeScript, and modern web technologies.
            Currently seeking internship opportunities to grow my skills.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center space-x-6 mb-8"
        >
          <a
            href="https://github.com/claret-01"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white shadow-md rounded-full hover:shadow-lg transition-shadow"
          >
            <FiGithub className="text-xl text-dark" />
          </a>
          <a
            href="mailto:claretkanyima@gmail.com"
             target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white shadow-md rounded-full hover:shadow-lg transition-shadow"
          >
            <FiMail className="text-xl text-dark" />
          </a>
          <a
            href="https://linkedin.com/in/claret-obele-597241323"
             target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white shadow-md rounded-full hover:shadow-lg transition-shadow"
          >
            <FiLinkedin className="text-xl text-dark" />
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-16"
        >
          <a href="#about" className="inline-block">
            <FiArrowDown className="text-2xl text-secondary" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
