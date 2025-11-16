import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact" },
      { href: "/careers", label: "Careers" },
    ],
    legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/cookies", label: "Cookie Policy" },
      { href: "/gdpr", label: "GDPR Compliance" },
    ],
    services: [
      { href: "/services/", label: "Web Development" },
      { href: "/services/web-design", label: "Web Design" },
      { href: "/services/digital-marketing", label: "Digital Marketing" },
      { href: "/services/seo", label: "SEO Services" },
    ],
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/mindful-designer-9855a8337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
      icon: "linkedin",
    },
    {
      href: "https://www.instagram.com/mind.ful_designer?igsh=YWZ0eTBpa2tpeGQ=",
      label: "Instagram",
      icon: "instagram",
    },
    { href: "https://wa.me/919924222509", label: "WhatsApp", icon: "whatsapp" },
  ];

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "linkedin":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z" />
          </svg>
        );
      case "whatsapp":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
            <path d="M16.001 3.2c-7.067 0-12.8 5.733-12.8 12.8 0 2.267.6 4.467 1.733 6.4l-1.867 6.4 6.533-1.6c1.867 1.067 3.867 1.6 6.067 1.6 7.067 0 12.8-5.733 12.8-12.8S23.068 3.2 16.001 3.2zm0 23.467c-1.867 0-3.6-.533-5.067-1.467l-.4-.267-3.867.933.933-3.733-.267-.4c-1.067-1.6-1.6-3.467-1.6-5.333 0-5.6 4.667-10.133 10.267-10.133s10.267 4.533 10.267 10.133-4.667 10.267-10.267 10.267zm5.467-7.467c-.267-.133-1.6-.8-1.867-.933-.267-.133-.533-.133-.8.133-.267.267-.933 1.067-1.2 1.333-.133.133-.267.133-.533 0-.8-.4-1.6-.8-2.267-1.467a9.165 9.165 0 01-1.6-2.133c-.133-.267 0-.4.133-.533.133-.133.267-.267.4-.4.133-.133.133-.267.267-.4.133-.133.133-.267.267-.4.133-.133.133-.267.133-.4s-.133-.267-.133-.4c-.133-.133-.8-1.867-1.067-2.533-.267-.667-.533-.667-.8-.667-.267 0-.4 0-.667.133-.133.133-.533.267-.8.667-.267.4-1.067 1.067-1.067 2.667s1.067 3.2 1.2 3.467c.133.133 2.133 3.333 5.067 4.533.707.267 1.253.533 1.707.667.72.227 1.373.193 1.893.12.58-.08 1.6-.667 1.827-1.307.227-.64.227-1.187.16-1.307-.08-.133-.227-.2-.493-.333z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                {/* ✅ Logo only */}
                <Image
                  src="/MindfulDesigner.png"
                  alt="Mindful Designer Logo"
                  width={160}
                  height={160}
                  className="h-20 w-auto object-contain"
                  priority
                  quality={100}
                />
              </div>

              <p className="text-gray-400 mb-6 max-w-md">
                We help real estate developers turn spaces into stories. Mindful
                design - through identity, brochures, and branding - that helps
                your project sell faster and look unforgettable.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} MindfulDesigner. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
