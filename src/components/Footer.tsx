import React from 'react';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="bg-zinc-950 border-t border-zinc-900 py-12 text-zinc-400 text-sm"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 font-bold shadow-sm">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-zinc-100">Fauzan Yaskuri Lubis</span>
            <p className="text-xs text-zinc-500 font-mono">Product & Systems Analyst</p>
          </div>
        </div>

        <p className="text-xs text-zinc-500 flex items-center gap-1 font-mono">
          Crafted with React, TypeScript & Tailwind CSS © {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:nazanisfauzan@gmail.com"
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};
