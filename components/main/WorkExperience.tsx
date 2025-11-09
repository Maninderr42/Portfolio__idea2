export const WorkExperience = () => {
  const experiences = [
    {
      role: 'React.js Developer',
      company: 'Starbucks',
      period: 'March 2020 - April 2021',
      icon: '☕',
      responsibilities: [
        'Developing and maintaining web applications using React.js and other related technologies.',
        'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
        'Implementing responsive design and ensuring cross-browser compatibility.',
        'Participating in code reviews and providing constructive feedback to other developers.'
      ],
      position: 'left'
    },
    {
      role: 'React Native Developer',
      company: 'Tesla',
      period: 'Jan 2021 - Feb 2022',
      icon: '🚗',
      responsibilities: [
        'Developing and maintaining web applications using React.js and other related technologies.',
        'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
        'Implementing responsive design and ensuring cross-browser compatibility.',
        'Participating in code reviews and providing constructive feedback to other developers.'
      ],
      position: 'right'
    }
  ];

  return (
    <section
      id="work-experience"
      className="px-6 sm:px-12 lg:px-20 py-20 max-w-7xl mx-auto"
    >
      <p className="text-gray-400 tracking-[0.3em] mb-6 uppercase">
        What I Have Done So Far
      </p>
      <h2
        className="text-white mb-20"
        style={{ fontSize: '4rem', fontWeight: '900', lineHeight: '1.1' }}
      >
        Work Experience.
      </h2>

      <div className="relative">
        {/* Center timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-700 hidden lg:block"></div>

        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div
                className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                  exp.position === 'left' ? '' : ''
                }`}
              >
                {/* Card Section */}
                <div
                  className={`${
                    exp.position === 'left'
                      ? 'lg:col-start-1 lg:pr-8'
                      : 'lg:col-start-2 lg:pl-8'
                  }`}
                >
                  <div className="bg-[#1a1a3e] rounded-2xl p-8 border border-purple-900/30 mb-8 lg:mb-0">
                    <h3
                      className="text-white mb-2"
                      style={{ fontSize: '1.5rem', fontWeight: '800' }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="text-gray-400 mb-6"
                      style={{ fontSize: '1rem', fontWeight: '600' }}
                    >
                      {exp.company}
                    </p>
                    <ul className="space-y-4">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-purple-400 mr-3 mt-1">•</span>
                          <span
                            className="text-gray-300"
                            style={{ fontSize: '0.95rem', lineHeight: '1.6' }}
                          >
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Icon + Opposite Period */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border-4 border-[#0a0a1a] shadow-lg z-10">
                      <span style={{ fontSize: '2rem' }}>{exp.icon}</span>
                    </div>

                    {/* Period on opposite side */}
                    <p
                      className={`absolute top-1/2 transform -translate-y-1/2 ${
                        exp.position === 'left'
                          ? 'left-[130%] text-left'
                          : 'right-[130%] text-right'
                      } text-gray-400 whitespace-nowrap`}
                      style={{ fontSize: '0.875rem' }}
                    >
                      {exp.period}
                    </p>
                  </div>
                </div>

                {/* Mobile layout: Icon + Period above card */}
                <div className="lg:hidden mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <span style={{ fontSize: '1.5rem' }}>{exp.icon}</span>
                  </div>
                  <p
                    className="text-gray-400"
                    style={{ fontSize: '0.875rem' }}
                  >
                    {exp.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
