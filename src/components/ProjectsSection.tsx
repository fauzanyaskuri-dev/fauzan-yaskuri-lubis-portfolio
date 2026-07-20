import React, { useState } from 'react';
import { portfolioProjects } from '../data/portfolioData';
import { PortfolioProject } from '../types';
import { FolderKanban, ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = ['All', ...Array.from(new Set(portfolioProjects.map(p => p.category)))];

  const filteredProjects = portfolioProjects.filter(p => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 bg-zinc-950/70 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono">
              <FolderKanban className="w-3.5 h-3.5" />
              PORTFOLIO SHOWCASE
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
              Featured Projects & Systems
            </h2>
            <p className="text-zinc-400 text-sm">
              Explore my production-ready applications, AI integrations, and distributed cloud architectures.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-zinc-950 p-1.5 rounded-2xl border border-zinc-800 animate-fade-in">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-zinc-100 text-zinc-900 shadow'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="bg-zinc-900/90 border border-zinc-800 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all group flex flex-col shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              layout
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold bg-zinc-950/80 backdrop-blur-md text-emerald-300 border border-zinc-800">
                  {project.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-zinc-100 text-lg group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium">{project.tagline}</p>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">{project.description}</p>
                </div>

                <div className="space-y-4 pt-4 border-t border-zinc-800">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-lg text-[10px] font-mono bg-zinc-950 text-zinc-300 border border-zinc-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium border border-zinc-700 transition-colors flex items-center gap-1.5"
                    >
                      <span>View Details</span>
                    </button>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-zinc-950 text-zinc-400 hover:text-zinc-100 border border-zinc-800 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-zinc-950 text-zinc-400 hover:text-emerald-400 border border-zinc-800 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            >
              <div className="h-56 rounded-2xl overflow-hidden relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900/90 backdrop-blur-md text-emerald-300 border border-zinc-800">
                  {selectedProject.category}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-zinc-100">{selectedProject.title}</h3>
                <p className="text-sm text-emerald-400 font-medium">{selectedProject.tagline}</p>
                <p className="text-sm text-zinc-300 leading-relaxed">{selectedProject.description}</p>
              </div>

              {selectedProject.liveUrl && selectedProject.liveUrl !== 'https://github.com' && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Live System Active</p>
                    <p className="text-xs text-zinc-300">This project has an interactive live preview hosted on Cloud Run.</p>
                  </div>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 text-xs font-bold transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 flex items-center gap-1.5 shrink-0"
                  >
                    <span>Launch App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <div className="space-y-2">
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl text-xs font-mono bg-zinc-950 text-emerald-300 border border-zinc-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-800">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold transition-colors"
                >
                  Close
                </button>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-zinc-100 text-zinc-900 text-xs font-semibold shadow-lg flex items-center gap-2 hover:bg-zinc-200"
                >
                  <span>Launch Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
