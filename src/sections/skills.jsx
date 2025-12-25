import React from 'react';
import { Code, Server, Database, Palette, Brain, Wrench } from 'lucide-react';

function Skills() {
  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-400 to-cyan-400',
      borderColor: 'border-blue-400/20',
      bgColor: 'bg-blue-400/5',
      skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
    },
    backend: {
      title: 'Backend Development',
      icon: Server,
      color: 'from-blue-400 to-purple-400',
      borderColor: 'border-blue-400/20',
      bgColor: 'bg-blue-400/5',
      skills: ['Node.js', 'Express.js', 'Flask', 'PHP', 'Laravel']
    },
    languages: {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-purple-400 to-blue-400',
      borderColor: 'border-blue-400/20',
      bgColor: 'bg-blue-400/5',
      skills: ['Python', 'Java', 'C', 'C++', 'C#', 'JavaScript', 'SQL']
    },
    databases: {
      title: 'Databases',
      icon: Database,
      color: 'from-cyan-400 to-blue-400',
      borderColor: 'border-blue-400/20',
      bgColor: 'bg-blue-400/5',
      skills: ['SQL', 'MongoDB', 'PostgreSQL', 'MySQL']
    },
    aiml: {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-blue-400 to-purple-400',
      borderColor: 'border-blue-400/20',
      bgColor: 'bg-blue-400/5',
      skills: ['Supervised Learning', 'Unsupervised Learning', 'ANN', 'CNN', 'RNN', 'TensorFlow', 'Deep Learning']
    },
    tools: {
      title: 'Tools & Frameworks',
      icon: Wrench,
      color: 'from-purple-400 to-cyan-400',
      borderColor: 'border-blue-400/20',
      bgColor: 'bg-blue-400/5',
      skills: ['Visual Studio', 'Git & GitHub', 'Google Colab', 'Jupyter Notebooks']
    }
  };

  const proficiencyLevels = [
    { name: 'React & JavaScript', level: 85 },
    { name: 'Python', level: 88 },
    { name: 'Node.js & Express', level: 80 },
    { name: 'SQL & Databases', level: 82 },
    { name: 'AI & Machine Learning', level: 75 },
    { name: 'C/C++/Java', level: 78 }
  ];

  return (
    <div name="skills" className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden">
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s'}} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - 25% light gray text */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-300">
            Technical <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-xl text-slate-400">Technologies and tools I work with to build amazing solutions</p>
        </div>

        {/* Skills Categories Grid - 65% black cards, 25% gray text, 10% blue accents */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {Object.values(skillCategories).map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="glass-effect rounded-2xl p-6 hover:bg-slate-800/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <Icon size={24} className="text-slate-900" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-200">{category.title}</h2>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className={`px-3 py-1.5 ${category.bgColor} border ${category.borderColor} rounded-lg text-sm font-medium text-slate-300 hover:scale-105 hover:border-blue-400/40 transition-all cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency Levels - 65% black background, 25% gray text, 10% blue bars */}
        <div className="mb-16">
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-300">
              Skill <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Proficiency</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {proficiencyLevels.map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 font-semibold">{skill.name}</span>
                    <span className="text-blue-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-900/80 rounded-full h-3 overflow-hidden border border-slate-700/50">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-blue-500/30"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills Section - 65% black cards, 25% gray text */}
        <div>
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-300">
              Soft <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { skill: 'Leadership', icon: '👑' },
                { skill: 'Teamwork', icon: '🤝' },
                { skill: 'Communication', icon: '💬' },
                { skill: 'Problem Solving', icon: '🧩' },
                { skill: 'Project Management', icon: '📊' },
                { skill: 'Time Management', icon: '⏰' },
                { skill: 'Adaptability', icon: '🔄' },
                { skill: 'Critical Thinking', icon: '🧠' },
                { skill: 'Creativity', icon: '🎨' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-slate-900/60 rounded-xl p-4 hover:bg-slate-800/80 transition-all border border-slate-700/30 hover:border-blue-400/30"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold text-slate-300">{item.skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;