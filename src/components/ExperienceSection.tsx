import React from 'react';
import { experiences, educationList } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-950 relative">
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
            <Briefcase className="w-3.5 h-3.5" />
            CAREER & MILESTONES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Work Experience & Education
          </h2>
          <p className="text-zinc-400 text-sm">
            My professional journey across software engineering roles and my academic foundation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 shadow-xl space-y-4 hover:border-emerald-500/50 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-zinc-100 text-base">{exp.role}</h4>
                      <p className="text-xs text-emerald-400 font-semibold mt-0.5">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-950 text-zinc-300 border border-zinc-800 self-start">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 flex items-center gap-1.5 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    {exp.location}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-zinc-800">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="text-xs text-zinc-300 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-zinc-950 text-emerald-300 border border-zinc-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Achievements */}
          <motion.div 
            id="education" 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100">Education & Honors</h3>
            </div>

            <div className="space-y-6">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 shadow-xl space-y-4 hover:border-sky-500/50 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-zinc-100 text-base">{edu.degree}</h4>
                      <p className="text-xs text-sky-400 font-semibold mt-0.5">{edu.institution}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 self-start">
                      {edu.gpa}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 flex items-center gap-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    {edu.period} • {edu.location}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-zinc-800">
                    {edu.highlights.map((high, idx) => (
                      <li key={idx} className="text-xs text-zinc-300 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{high}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
