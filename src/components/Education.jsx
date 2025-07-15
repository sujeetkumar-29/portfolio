import React from 'react';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Shri Shankaracharya Technical Campus, Bhilai',
    duration: '2021 - 2025',
    details: 'Studying core subjects like DSA, DBMS, OS, CN, and Web Development with a focus on practical applications and projects.',
  },
  {
    degree: 'Higher Secondary (12th)',
    institution: 'Govt. Multipurpose Higher Secondary School, Durg',
    duration: '2019 - 2021',
    details: 'Completed with focus on Physics, Chemistry, and Mathematics under the Chhattisgarh Board.',
  },
  {
    degree: 'Secondary (10th)',
    institution: 'Govt. Multipurpose Higher Secondary School, Durg',
    duration: '2018 - 2019',
    details: 'Completed with distinction under the Chhattisgarh Board of Secondary Education (CGBSE).',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-8 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center flex items-center justify-center gap-3">
          <GraduationCap className="w-8 h-8" />
          Education
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          My academic background has provided a strong foundation in computer science and problem-solving,
          shaping my interest in building practical software solutions.
        </p>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 rounded-md shadow-sm"
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-700 text-sm font-medium">{edu.institution}</p>
              <p className="text-sm text-gray-500 mb-2">{edu.duration}</p>
              <p className="text-gray-600 text-sm">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
