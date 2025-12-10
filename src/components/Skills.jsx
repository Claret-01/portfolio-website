import React from 'react';
import { FiCode, FiLayout, FiCpu, FiTool } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FiCode />,
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <FiLayout />,
      title: "UI/UX",
      skills: ["Responsive Design", "Flexbox/Grid", "UI/UX Principles", "Chrome DevTools"]
    },
    {
      icon: <FiCpu />,
      title: "Tools",
      skills: ["Git & GitHub", "VS Code", "npm/yarn", "API Consumption", "Basic Solidity"]
    },
    {
      icon: <FiTool />,
      title: "Soft Skills",
      skills: ["Problem-solving", "Fast Learning", "Debugging", "Documentation Reading"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl text-primary mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-secondary">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;