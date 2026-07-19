import React from 'react';
import { User, GraduationCap, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950/70 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <motion.div 
          className="text-center space-y-3 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Bridging Business Strategy, UX, & Technical Execution
          </h2>
          <p className="text-zinc-400 text-sm">
            Get to know my academic background at UPNVJ, professional philosophy, and product management journey.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Bio Card */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-zinc-100">Who I Am</h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                I am an <span className="text-emerald-400 font-semibold">Information Systems</span> student at <span className="text-emerald-400 font-semibold">Universitas Pembangunan Nasional Veteran Jakarta (UPNVJ)</span> with a strong foundation in digital product management, UI/UX prototyping, and software engineering.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                My approach is centered on the end-to-end digital product lifecycle—from conducting behavioral user research and authoring precise Product Requirements Documents (PRD), to designing interactive Figma prototypes and developing type-safe web systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200">Product Management</h4>
                    <p className="text-[11px] text-zinc-400">PRD, User Stories, Agile Scrum</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200">UI/UX Prototyping</h4>
                    <p className="text-[11px] text-zinc-400">Figma, Miro, User Journeys</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-100 text-base">Education</h4>
                  <p className="text-xs text-zinc-400">UPNVJ Information Systems</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-zinc-950/70 rounded-2xl border border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-400 font-mono">2024 - Present</span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">GPA 3.77</span>
                  </div>
                  <h5 className="font-semibold text-zinc-100 text-sm">Diploma Three (D3) Information Systems</h5>
                  <p className="text-xs text-zinc-400">Universitas Pembangunan Nasional Veteran Jakarta</p>
                </div>

                <div className="p-4 bg-zinc-950/70 rounded-2xl border border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-400 font-mono">Coursework</span>
                    <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">Key Skills</span>
                  </div>
                  <h5 className="font-semibold text-zinc-100 text-sm">Systems & Product Lifecycle</h5>
                  <p className="text-xs text-zinc-400">Analisis Bisnis, Perancangan Sistem, Basis Data (SQL), Pemrograman Web, Product Management Lifecycle.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
