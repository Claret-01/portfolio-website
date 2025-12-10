import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the data and show alert
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo. In production, connect to a backend service)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Get In Touch</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Interested in working together or have questions? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white shadow-md rounded-lg">
                    <FiMail className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:claretkanyima@gmail.com" className="text-secondary hover:text-primary">
                      claretkanyima@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white shadow-md rounded-lg">
                    <FiPhone className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+2347031495334" className="text-secondary hover:text-primary">
                      +234 703 149 5334
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white shadow-md rounded-lg">
                    <FiMapPin className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-secondary">Lagos State, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold mb-3">Currently Available For</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-secondary">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Web Developer Internship
                  </li>
                  <li className="flex items-center text-secondary">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Frontend Development Projects
                  </li>
                  <li className="flex items-center text-secondary">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Freelance Opportunities
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-dark mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-dark mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-dark mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <FiSend className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;