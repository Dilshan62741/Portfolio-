// pages/Contact.jsx
import React from 'react';
import { Mail, MapPin, Github, Linkedin, Copy } from 'lucide-react';
import { Element } from 'react-scroll';


export default function Contact() {
  const handleCopy = () => {
    navigator.clipboard.writeText('dilshanvimukthi1111@gmail.com');
  };

  return (
    <Element
      name="contact"
      className="min-h-screen flex items-center justify-center px-6 bg-slate-900 text-white"
    >
      <div className="w-full max-w-4xl rounded-2xl bg-gradient-to-br from-indigo-900/60 to-purple-900/60 border border-white/10 backdrop-blur-xl p-10 shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-3xl font-bold">
              DV
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900" />
          </div>

          <div>
            <h1 className="text-2xl font-semibold">Dilshan Vimukthi</h1>
            <p className="text-indigo-300 text-sm">Software Engineer</p>
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
              <MapPin size={14} />
              <span>Sri Lanka</span>
            </div>
          </div>
        </div>

        <hr className="border-white/10 mb-8" />

        {/* Email */}
        <div className="mb-8">
          <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">
            Email Address
          </p>

          <div className="flex items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
            <div className="flex items-center gap-3 text-gray-200">
              <Mail size={18} className="text-indigo-400" />
              <span>dilshanvimukthi1111@gmail.com</span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition"
            >
              <Copy size={14} />
              Copy
            </button>
          </div>
        </div>

        {/* Social Profiles */}
        <div>
          <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide">
            Social Profiles
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://github.com/Dilshan62741"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                <Github />
              </div>
              <div>
                <p className="font-medium">GitHub</p>
                <p className="text-sm text-gray-400">@dilshanvimukthi</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/dilshan-vimukthi-3564aa251/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                <Linkedin />
              </div>
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm text-gray-400">Dilshan Vimukthi</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
}
