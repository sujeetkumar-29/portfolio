import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message submitted:', formData);
    // TODO: Integrate with EmailJS, Formspree, or backend API
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="bg-gray-50 text-gray-800 py-20 px-4 sm:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Feel free to reach out for opportunities, collaborations, or just to
          say hello! I'm always open to meaningful conversations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700">sujeetkr503@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700">Durg, Chhattisgarh, India</span>
            </div>
          </div>

          {/* Right - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-200 p-6 rounded-lg shadow-md space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
