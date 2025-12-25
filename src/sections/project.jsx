import React from 'react';
import {
  ExternalLink,
  Github,
  ShoppingCart,
  Map
} from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Supun Shoe Mart',
      description:
        'An online shoe store system with separate roles for administrators and customers. The system supports product management, shopping cart functionality, order tracking, and online payments.',
      icon: ShoppingCart,
      color: 'blue',
      tags: ['React', 'Node.js', 'My SQL', 'Express'],
      features: [
        'Role based authentication',
        'Product and inventory management',
        'Shopping cart and order history',
        'Secure payment handling',
        'Admin dashboard',
      ],
    },
    {
      title: 'All in One Tourist Support System (TOURNEXUS)',
      description:
        'A comprehensive web based tourism platform designed for Sri Lanka. The system integrates hotel bookings, tour guide services, vehicle rentals, and AI powered trip planning into a single platform.',
      icon: Map,
      color: 'purple',
      tags: [
        'React',
        'Node.js',
        'MongoDB',
        'Express'
      ],
      features: [
        'Integrated booking for hotels, guides, and vehicles',
        'Interactive map for destination discovery',
        'Real time chat between tourists and service providers',
        'Secure authentication and online payments',
        'Admin dashboard for verification and quality control',
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        border: 'border-blue-400/20',
        bg: 'bg-blue-400/5',
        text: 'text-blue-400',
        gradient: 'from-blue-400 to-cyan-400',
      },
      purple: {
        border: 'border-purple-400/20',
        bg: 'bg-purple-400/5',
        text: 'text-purple-400',
        gradient: 'from-purple-400 to-blue-400',
      },
    };
    return colors[color];
  };

  return (
    <div name="projects" className="min-h-screen px-6 py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white relative overflow-hidden">
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .glass-effect {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(148, 163, 184, 0.1);
        }
      `}</style>

      {/* Background effects - 65% black presence */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s'}} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - 25% light gray text, 10% blue gradient accent */}
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-300">
            My <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Selected academic and personal projects demonstrating practical development experience
          </p>
        </header>

        {/* Projects - 65% black cards, 25% gray text, 10% blue accents */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = getColorClasses(project.color);

            return (
              <article
                key={index}
                className="glass-effect rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Icon - 10% blue gradient */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <Icon size={36} className="text-slate-900" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className={`text-2xl font-semibold mb-3 ${colors.text}`}>
                      {project.title}
                    </h2>

                    <p className="text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech stack - 10% blue accents */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-sm rounded-full border ${colors.border} ${colors.bg} ${colors.text} hover:border-blue-400/40 transition-all`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features - 25% gray text */}
                    <ul className="grid sm:grid-cols-2 gap-2 text-slate-400">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex gap-2">
                          <span className={colors.text}>•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Actions - 10% blue gradient buttons */}
                    <div className="flex gap-4 mt-6">
                      <button
                        className={`flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r ${colors.gradient} hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-slate-900 font-medium`}
                      >
                        <ExternalLink size={18} />
                        Project Details
                      </button>

                      <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-slate-900/60 border border-slate-700/50 hover:bg-slate-800/80 hover:border-blue-400/30 transition-all duration-300 text-slate-300">
                        <Github size={18} />
                        Repository
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer CTA - 25% gray text, 10% blue button */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-6">
            Additional projects and enhancements are currently in progress.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-slate-900 font-medium"
          >
            <Github size={20} />
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}