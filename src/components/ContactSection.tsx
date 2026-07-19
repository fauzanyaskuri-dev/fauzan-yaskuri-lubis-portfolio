import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MapPin, Github, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950/70 border-t border-zinc-900 relative">
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
            <Mail className="w-3.5 h-3.5" />
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-zinc-400 text-sm">
            Have a project in mind, a collaboration proposal, or just want to chat? Send me a message below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-zinc-100">Contact Information</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                I am actively open to product management, system analyst, and full-stack engineering opportunities.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 p-4 bg-zinc-950/70 rounded-2xl border border-zinc-800">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-zinc-400 uppercase font-mono">Direct Email</p>
                    <a href="mailto:nazanisfauzan@gmail.com" className="text-sm font-semibold text-zinc-100 hover:text-emerald-400 transition-colors">
                      nazanisfauzan@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-zinc-950/70 rounded-2xl border border-zinc-800">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-zinc-400 uppercase font-mono">Location</p>
                    <p className="text-sm font-semibold text-zinc-100">Jakarta, Indonesia (Available Remote)</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <p className="text-xs font-semibold text-zinc-300 mb-3">Connect on Socials</p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 transition-all flex items-center gap-2 text-xs"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 transition-all flex items-center gap-2 text-xs"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 shadow-xl">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100">Message Sent Successfully!</h3>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                    Thank you for reaching out. I'll get back to your inquiry within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-zinc-300">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-zinc-300">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-300">Message</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell me about your project, timeline, or inquiry..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold text-sm shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
