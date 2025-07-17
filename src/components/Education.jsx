import React from 'react';

const educationData = [
  {
    course: 'B.Tech in Computer Science',
    institution: 'Shri Shankaracharya Technical Campus, Bhilai',
    duration: '2022 - Present',
    logo: '/assets/shankaraLogo.png',
    description:
      'Pursuing B.Tech with a focus on full stack web development, data structures, and modern technologies such as React, Node.js, and MongoDB.',
  },
  {
    course: 'Higher Secondary (12th)',
    institution: 'Saraswati Vidya Mandir, Bokaro',
    duration: '2020 - 2022',
    logo: '/assets/svm.png',
    description:
      'Completed with a focus on Physics, Chemistry, and Mathematics. Developed a strong foundation in problem-solving and logical thinking.',
  },
  {
    course: 'Secondary (10th)',
    institution: 'Saraswati Vidya Mandir, Bokaro',
    duration: '2018 - 2020',
    logo: '/assets/svm.png',
    description:
      'Completed basic education with distinction. Developed an early interest in computers and technology.',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">
          Education
        </h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center border-l-4 border-blue-500 gap-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition dark:shadow-gray-700"
            >
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className="w-20 h-20 object-contain rounded bg-white dark:bg-gray-100 p-1"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {edu.course}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {edu.duration}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
