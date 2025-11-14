export const WorkExperience = () => {
  const experiences = [
    {
      role: 'Software Developer Engineer I',
      company: 'ClayHR',
      period: 'Oct 2024 - Present',
      icon: '💻',
      responsibilities: [
        'Built and enhanced production-grade modules used by 100+ active clients, including Bookmark System and Team Dashboard, improving workflow efficiency and manager productivity by ~20%.',
        'Developed secure and scalable backend APIs in Spring MVC and optimized MySQL queries, reducing response time across high-traffic endpoints by up to 40%.',
        'Implemented role-based access control for Future Joiners using custom annotations and interceptors, ensuring zero unauthorized access across restricted APIs.',
        'Redesigned and modernized 10+ legacy UI pages in Angular, improving user experience and client satisfaction by ~25%.',
        'Collaborated with designers, QA, and product stakeholders to ship features end-to-end—from database design to UI rollout.',
        'Built first production version of Custom Menu and Opportunities module, now used by 200+ enterprise clients for personalization and module adoption tracking.',
        'Participated in peer code reviews, sprint planning, and technical discussions to maintain code quality and ensure scalable architecture decisions.'
      ],
      position: 'left'
    },
    {
      role: 'Software Developer Engineer',
      company: 'Creative Line India',
      period: 'March 2024 - August 2024',
      icon: '🚗',
      responsibilities: [
        'Developed and deployed Spring Boot microservices integrated with Spring Cloud and API Gateway, improving routing efficiency and system scalability.',
        'Secured REST APIs using Spring Security and JWT authentication, ensuring safe access control across distributed services.',
        'Containerized backend services with Docker and deployed them on Kubernetes clusters, enabling smooth auto-scaling and high availability.',
        'Designed and optimized MySQL database schemas to reduce query latency and improve API response performance.',
        'Collaborated with DevOps teams to automate CI/CD pipelines, reducing deployment time and eliminating manual release dependencies.',
        'Worked closely with product and engineering teams to translate business requirements into efficient, modular backend services.'
      ],
      position: 'right'
    },
    {
      role: 'Full-Stack Web Development (Java + Spring Boot & React)',
      company: 'AccioJob',
      period: 'June 2023 - March 2024',
      icon: '🚗',
      responsibilities: [
        'Solved 1000+ Data Structures & Algorithms problems, gaining strong problem-solving and system design fundamentals.',
        'Completed hands-on training in Java, Spring Boot, SQL, REST APIs, OOP, and scalable backend architecture.',
        'Built multiple real-world projects including authentication systems, microservices applications, and full-stack apps with React and Spring Boot.',
        'Ranked among top performers in weekly contests and coding challenges on the AccioJob platform.',
        'Worked with industry-grade tools including Git, MySQL, Postman, Docker, and cloud deployment workflows.'
      ],
      position: 'left'
    },
    {
      role: 'Frontend Developer Intern',
      company: 'EXTech Digital',
      period: 'Jan 2023 - June 2023',
      icon: '🚗',
      responsibilities: [
        'Developed responsive, mobile-friendly websites using HTML, CSS, JavaScript, and Bootstrap, improving UI consistency and user engagement.',
        'Collaborated with senior developers to convert Figma and PSD designs into fully functional web pages with pixel-perfect accuracy.',
        'Optimized website layouts and components for cross-browser compatibility and faster load performance.',
        'Debugged UI issues and enhanced front-end components based on client feedback and testing reports.',
        'Assisted in integrating basic form validation, user interactions, and reusable UI components using vanilla JavaScript.',
        'Worked in an agile environment, participating in weekly stand-ups and version-controlled code delivery using Git.'
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
