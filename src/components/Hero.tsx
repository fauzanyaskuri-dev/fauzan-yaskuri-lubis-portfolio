import React from 'react';
import { ArrowRight, Github, Linkedin, Sparkles, Terminal, Code, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import profileImg from '../assets/images/fauzan_profile_1784455209600.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Glow & Subtle Grids */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Intro Text */}
        <motion.div 
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Information Systems Student & Product Manager @ UPNVJ</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-100 tracking-tight leading-[1.1]">
            Bridging Design, <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              Systems & Products
            </span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Hi, I'm <span className="text-zinc-100 font-semibold">Fauzan Yaskuri Lubis</span>. I specialize in end-to-end digital product lifecycles—translating user needs into concrete Product Requirements Documents, wireframing in Figma, and developing modular systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold text-sm shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#projects"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold text-sm border border-zinc-800 transition-all flex items-center justify-center gap-2"
            >
              <Code className="w-4 h-4 text-emerald-400" />
              <span>Explore Projects</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-900 max-w-lg mx-auto lg:mx-0">
            <div>
              <h3 className="text-2xl font-bold text-zinc-100 font-mono">5th</h3>
              <p className="text-xs text-zinc-400 mt-0.5">Semester</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-100 font-mono">3.77</h3>
              <p className="text-xs text-zinc-400 mt-0.5">UPNVJ GPA</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-100 font-mono">3+</h3>
              <p className="text-xs text-zinc-400 mt-0.5">Major Projects</p>
            </div>
          </div>
        </motion.div>

        {/* Right Hero Card / Visual */}
        <motion.div 
          className="lg:col-span-5 flex justify-center"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            {/* Ambient Card Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-sky-500/20 rounded-3xl blur-2xl transform rotate-3" />
            
            <div className="relative bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-6">
              {/* Profile Header */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={profileImg}
                    alt="Fauzan Yaskuri Lubis"
                    className="w-20 h-20 rounded-2xl object-cover ring-2 ring-emerald-500/40 shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 ring-4 ring-zinc-900 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-zinc-100 text-lg">Fauzan Yaskuri Lubis</h3>
                  <p className="text-xs text-emerald-400 font-mono">Product & Systems Analyst</p>
                  <p className="text-[11px] text-zinc-400 mt-1 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-sky-400" />
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="bg-zinc-950 rounded-2xl p-4 border border-zinc-800/80 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between border-b border-zinc-950 pb-2">
                  <span className="text-zinc-500">product_analyst.ts</span>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                </div>
                <p className="text-emerald-400">const <span className="text-zinc-100">analyst</span> = &#123;</p>
                <p className="pl-4 text-zinc-300">name: <span className="text-emerald-300">'Fauzan Yaskuri Lubis'</span>,</p>
                <p className="pl-4 text-zinc-300">major: <span className="text-emerald-300">'Information Systems @ UPNVJ'</span>,</p>
                <p className="pl-4 text-zinc-300">domain: <span className="text-sky-400">['PRD', 'UI/UX', 'Agile', 'Web']</span>,</p>
                <p className="pl-4 text-zinc-300">focus: <span className="text-amber-400">'Strategic execution'</span></p>
                <p className="text-emerald-400">&#125;;</p>
              </div>

              {/* Tech Badges */}
              <div className="space-y-2">
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Core Specializations</p>
                <div className="flex flex-wrap gap-2">
                  {['PRD Writing', 'Figma Prototyping', 'React.js', 'TypeScript', 'Agile/Scrum', 'SQL'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-xl text-[11px] font-medium bg-zinc-950 text-emerald-300 border border-zinc-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
