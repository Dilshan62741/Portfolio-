// components/Footer.jsx
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-slate-900/50 backdrop-blur-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Dilshan Vimukthi
            </h3>
            <p className="text-slate-400 mb-4">
              Software Engineering Undergraduate passionate about AI, ML, and Web Development.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:dilshanvimukthi1111@gmail.com"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail size={20} className="text-blue-400" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} className="text-blue-400" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-purple-500/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github size={20} className="text-purple-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Skills
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-200">Get In Touch</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="mailto:dilshanvimukthi1111@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  dilshanvimukthi1111@gmail.com
                </a>
              </li>
              <li>+94 75 607 4155</li>
              <li>Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            © {year} Dilshan Vimukthi. Made with
            <Heart size={16} className="text-red-500 fill-red-500" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
