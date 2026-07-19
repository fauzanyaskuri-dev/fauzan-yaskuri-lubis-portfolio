import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code2, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-950 relative">
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
            <Cpu className="w-3.5 h-3.5" />
            TECHNICAL PROFICIENCY
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Skills & Technology Stack
          </h2>
          <p className="text-zinc-400 text-sm">
            A comprehensive overview of the programming languages, frameworks, and developer tools I use daily.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 shadow-xl flex flex-col justify-between space-y-6 hover:border-emerald-500/50 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-emerald-400 font-bold shadow-sm">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-100 text-base">{category.name}</h3>
                    <p className="text-xs text-zinc-400 font-mono">Advanced proficiency</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-zinc-200">{skill.name}</span>
                        <span className="font-mono text-emerald-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden border border-zinc-800/80">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-1000 group-hover:brightness-125"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
