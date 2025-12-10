import React from 'react';
import { FiBook, FiTarget, FiUser } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-lg border border-gray-100">
              <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                <FiUser className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Background</h3>
              <p className="text-secondary">
                Environmental Health Science student with a passion for technology and web development.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-100">
              <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                <FiTarget className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Current Goal</h3>
              <p className="text-secondary">
                Seeking a Web Developer Internship to gain industry experience and contribute to real projects.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-100">
              <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                <FiBook className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Learning Path</h3>
              <p className="text-secondary">
                Continuously improving through projects, documentation, and online courses.
              </p>
            </div>
          </div>

          <div className="bg-light p-8 rounded-lg">
            <p className="text-lg text-secondary mb-4">
              Motivated and fast-learning Frontend Developer with solid skills in HTML, CSS, Tailwind CSS, JavaScript, TypeScript, and React. Passionate about building clean, responsive interfaces and improving user experience.
            </p>
            <p className="text-lg text-secondary">
              Currently improving my skills through real projects, documentation reading, and continuous learning. Looking for a Web Developer Internship role where I can gain industry experience, contribute to team projects, and grow into a full-stack or blockchain developer in the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;