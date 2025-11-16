import Layout from "@/components/Layout";

export default function AboutPage() {
  const team = [
    {
      name: "Alpesh Vaghela",
      role: "CEO & Founder",
      image: "/api/placeholder/150/150",
      description: "Visionary leader with 10+ years in Graphic Designing.",
    },
    // {
    //   name: 'Michael Chen',
    //   role: 'Lead Developer',
    //   image: '/api/placeholder/150/150',
    //   description: 'Full-stack expert specializing in modern web technologies.',
    // },
    // {
    //   name: "Emily Rodriguez",
    //   role: "Creative Director",
    //   image: "/api/placeholder/150/150",
    //   description: "Award-winning designer with a passion for user experience.",
    // },
    // {
    //   name: "David Kim",
    //   role: "Marketing Strategist",
    //   image: "/api/placeholder/150/150",
    //   description: "Digital marketing expert driving growth for clients.",
    // },
  ];

  const values = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Excellence",
      description:
        "We strive for excellence in every project, delivering the highest quality solutions.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Collaboration",
      description:
        "We believe in the power of collaboration and building strong partnerships.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Innovation",
      description:
        "We embrace innovation and stay ahead of industry trends and technologies.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Passion",
      description:
        "We are passionate about creating digital solutions that make a difference.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Our Agency
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              We are a passionate team of digital experts dedicated to
              transforming businesses through innovative web solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-400 mb-6 text-lg">
                Founded in 2019, DigitalAgency began with a simple mission: to
                help businesses thrive in the digital age. What started as a
                small team of passionate developers and designers has grown into
                a full-service digital agency.
              </p>
              <p className="text-gray-400 mb-6 text-lg">
                We&apos;ve worked with startups, established companies, and
                everything in between. Our approach combines technical expertise
                with creative vision, ensuring that every project we undertake
                delivers real results for our clients.
              </p>
              <p className="text-gray-400 text-lg">
                Today, we continue to push the boundaries of what&apos;s
                possible in web development, design, and digital marketing,
                always staying ahead of industry trends and technologies.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    500+
                  </div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    50+
                  </div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    5+
                  </div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-400">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              These core values guide everything we do and shape our
              relationships with clients and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Founder
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The talented individuals who make our vision a reality and deliver
              exceptional results for our clients.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
          <div className="grid grid-cols-1 place-items-center">
            {team.map((member, index) => (
              <div
                key={index}
                className="card text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-400">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">
                  {member.name}
                </h3>
                <p className="text-blue-400 mb-3 font-medium">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
