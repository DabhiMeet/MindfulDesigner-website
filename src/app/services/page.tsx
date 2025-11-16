import Layout from "@/components/Layout";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    // ✅ NEW: Graphic Designing
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L22 14M2 20h20"
          />
        </svg>
      ),
      title: "Graphic Designing",
      description:
        "Striking, thoughtful visuals that strengthen your brand and communicate with clarity.",
      features: [
        "Brand identity design",
        "Logo & symbol design",
        "Social media graphics",
        "Print materials",
        "Marketing creatives",
        "Custom illustrations",
      ],
      // price: "Starting from $1,000",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies and best practices.",
      features: [
        "Custom web applications",
        "E-commerce solutions",
        "API development",
        "Database design",
        "Performance optimization",
        "Security implementation",
      ],
      // price: "Starting from $5,000",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
          />
        </svg>
      ),
      title: "Web Design",
      description:
        "Beautiful, responsive designs that engage users and drive conversions.",
      features: [
        "UI/UX design",
        "Responsive layouts",
        "Brand identity",
        "User experience optimization",
        "Prototyping",
        "Design systems",
      ],
      // price: "Starting from $3,000",
    },

    // ✅ NEW: Video Editing
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h7a2 2 0 012 2v8z"
          />
        </svg>
      ),
      title: "Video Editing",
      description:
        "Seamless, captivating edits that bring your story to life with clarity and impact.",
      features: [
        "Cinematic editing",
        "Reels & short-form videos",
        "YouTube video editing",
        "Color correction & grading",
        "Motion graphics",
        "Sound mixing",
      ],
      // price: "Starting from $800",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We start by understanding your business goals, target audience, and project requirements.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "We develop a comprehensive strategy tailored to your specific needs and objectives.",
    },
    {
      step: "03",
      title: "Design",
      description:
        "Our creative team designs stunning visuals and user experiences that engage your audience.",
    },
    {
      step: "04",
      title: "Development",
      description:
        "We build your solution using modern technologies and best practices.",
    },
    {
      step: "05",
      title: "Testing",
      description:
        "Rigorous testing ensures your solution works flawlessly across all devices and browsers.",
    },
    {
      step: "06",
      title: "Launch",
      description:
        "We launch your project and provide ongoing support to ensure continued success.",
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions to help your business grow and
              succeed in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From Graphic Designing to web development, we provide end-to-end
              solutions for your digital needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-gray-300"
                          >
                            <svg
                              className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-blue-400 font-semibold mb-4">
                      {/* {service.price} */}
                    </div>
                    <Link href="/contact" className="btn-primary">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and
              client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="card text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project requirements and create a custom
            solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Start Your Project
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
