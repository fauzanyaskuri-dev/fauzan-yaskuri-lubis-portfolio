import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Plus, Trash2, BookOpen, FileText, Camera, Calendar, 
  Cpu, Wifi, HelpCircle, Check, Play, Edit3, Save, AlertCircle, FilePlus
} from 'lucide-react';

import labImg from '../assets/images/al_izhar_lab_1784574578134.jpg';
import cablesImg from '../assets/images/al_izhar_cables_1784574600122.jpg';
import phoenixImg from '../assets/images/al_izhar_phoenix_1784574620393.jpg';
import teamImg from '../assets/images/al_izhar_team_1784574637529.jpg';

interface InternshipDocumentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface InternshipLog {
  id: string;
  date: string;
  title: string;
  category: 'Hardware' | 'Network' | 'Software' | 'Event Support' | 'Administration';
  description: string;
  notes?: string;
  status: 'Completed' | 'In Progress' | 'Review Required';
}

const DEFAULT_LOGS: InternshipLog[] = [
  {
    id: 'default-1',
    date: '2023-01-15',
    title: 'Initial Network Infrastructure & AP Assessment',
    category: 'Network',
    description: 'Conducted physical inspection and signals mapping across 15 classroom wireless access points. Diagnosed bandwidth bottlenecks on the second-floor classrooms, recommending structural re-positioning to eliminate dead zones.',
    notes: 'Access points were redeployed and peak-time signals improved by 35% on subsequent tests.',
    status: 'Completed'
  },
  {
    id: 'default-2',
    date: '2023-02-08',
    title: 'ChromeOS Domain Enrollment & Configuration',
    category: 'Hardware',
    description: 'Enrolled and configured 45 new ASUS Chromebook units into the school\'s Google Workspace for Education tenant. Created organizational units (OUs), policy rules, and enforced browser safety extensions.',
    notes: 'All devices successfully synchronized with standard student domain guidelines.',
    status: 'Completed'
  },
  {
    id: 'default-3',
    date: '2023-03-12',
    title: 'Audio-Visual System Tuning for Seminar Hall',
    category: 'Event Support',
    description: 'Assembled, tested, and fine-tuned wireless microphone mixers, digital overhead projectors, and localized sound delay modules for the senior leadership summit in the main auditorium.',
    notes: 'Coordinated real-time volume management and solved immediate feedback loop noises within 2 minutes.',
    status: 'Completed'
  },
  {
    id: 'default-4',
    date: '2023-04-05',
    title: 'Active Directory Directory Clean-up & Security Adjustments',
    category: 'Software',
    description: 'Worked alongside senior system administrators to identify and deactivate obsolete student accounts from the local directory server. Standardized access permissions based on updated enrollment lists.',
    notes: 'Freed up server indexing overhead and reduced baseline user lookup query latencies.',
    status: 'Completed'
  }
];

export const InternshipDocumentationModal: React.FC<InternshipDocumentationModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'logs' | 'gallery'>('overview');
  const [logs, setLogs] = useState<InternshipLog[]>([]);
  
  // Form State
  const [isAdding, setIsAdding] = useState(false);
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<InternshipLog['category']>('Hardware');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<InternshipLog['status']>('Completed');
  const [error, setError] = useState('');

  // Load and save logs to LocalStorage
  useEffect(() => {
    const stored = localStorage.getItem('al_izhar_internship_logs');
    if (stored) {
      try {
        setLogs(JSON.parse(stored));
      } catch (e) {
        setLogs(DEFAULT_LOGS);
      }
    } else {
      setLogs(DEFAULT_LOGS);
      localStorage.setItem('al_izhar_internship_logs', JSON.stringify(DEFAULT_LOGS));
    }
  }, []);

  const saveLogs = (updatedLogs: InternshipLog[]) => {
    setLogs(updatedLogs);
    localStorage.setItem('al_izhar_internship_logs', JSON.stringify(updatedLogs));
  };

  const handleAddLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !title || !description) {
      setError('Please fill in Date, Title, and Description fields.');
      return;
    }

    const newLog: InternshipLog = {
      id: `custom-${Date.now()}`,
      date,
      title,
      category,
      description,
      notes: notes.trim() || undefined,
      status
    };

    const updated = [newLog, ...logs];
    saveLogs(updated);

    // Reset Form
    setDate('');
    setTitle('');
    setCategory('Hardware');
    setDescription('');
    setNotes('');
    setStatus('Completed');
    setIsAdding(false);
    setError('');
  };

  const handleDeleteLog = (id: string) => {
    const updated = logs.filter(l => l.id !== id);
    saveLogs(updated);
  };

  // Reset to default data if user wishes
  const handleResetToDefault = () => {
    if (window.confirm('Reset logs to original system documentation? Any custom entries will be replaced.')) {
      saveLogs(DEFAULT_LOGS);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop overlay */}
        <motion.div 
          className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div 
          className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl relative z-10"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Header */}
          <div className="p-6 border-b border-zinc-800 bg-zinc-900/50 backdrop-blur flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  AL-IZHAR PONDOK LABU
                </span>
                <span className="text-xs text-zinc-500 font-mono">Jan 2023 - Apr 2023</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-400" />
                Internship Documentation Console
              </h3>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-all border border-zinc-800 hover:border-zinc-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="px-6 py-2 bg-zinc-950/40 border-b border-zinc-800/80 flex flex-wrap gap-2">
            <button
              onClick={() => { setActiveTab('overview'); setIsAdding(false); }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'overview'
                  ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/10'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              Overview & Competency
            </button>
            <button
              onClick={() => setActiveTab('logs')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'logs'
                  ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/10'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Activity Logs ({logs.length})
            </button>
            <button
              onClick={() => { setActiveTab('gallery'); setIsAdding(false); }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'gallery'
                  ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/10'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              Photos & Media
            </button>
          </div>

          {/* Body Content (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Intro Card */}
                <div className="bg-zinc-950 border border-zinc-800/50 rounded-2xl p-6 flex flex-col md:flex-row items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-zinc-100">Professional Summary</h4>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      During my 4-month academic internship at SMA Al-Izhar Pondok Labu, Jakarta, I served as a core IT Support agent, bridging critical operational interfaces between modern school management platforms, network hardware topologies, and more than 100+ daily student and educator endpoints. 
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800">Operational Integrity</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800">User Diagnosis</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800">Google Workspace Admin</span>
                    </div>
                  </div>
                </div>

                {/* Competency Areas */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Key Areas of Impact</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Area 1 */}
                    <div className="bg-zinc-950 border border-zinc-850 p-5 rounded-2xl space-y-3">
                      <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Wifi className="w-4 h-4" />
                      </div>
                      <h5 className="text-sm font-bold text-zinc-200">Network & Connectivity</h5>
                      <p className="text-[11px] text-zinc-400 leading-relaxed">
                        Responsible for diagnosing local area network configurations, resolving client-side DNS lookup latencies, and ensuring zero signal decay across high-density classroom AP matrices.
                      </p>
                    </div>

                    {/* Area 2 */}
                    <div className="bg-zinc-950 border border-zinc-850 p-5 rounded-2xl space-y-3">
                      <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <h5 className="text-sm font-bold text-zinc-200">Hardware Integration</h5>
                      <p className="text-[11px] text-zinc-400 leading-relaxed">
                        Provisioned hardware, diagnosed component malfunctions (RAM failure, bios flash resets), and enrolled corporate and student Chromebook batches to target domain policies.
                      </p>
                    </div>

                    {/* Area 3 */}
                    <div className="bg-zinc-950 border border-zinc-850 p-5 rounded-2xl space-y-3">
                      <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <h5 className="text-sm font-bold text-zinc-200">Operational Helpdesk</h5>
                      <p className="text-[11px] text-zinc-400 leading-relaxed">
                        Provided dedicated direct face-to-face support services to teachers, students, and administration staff. Established positive user-relations, solving technical issues systematically.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Achievements Timeline List */}
                <div className="bg-zinc-950/50 border border-zinc-800 p-6 rounded-2xl space-y-4">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Key Accomplishments</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-[10px] font-bold">1</div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        <strong className="text-zinc-100">100% daily system uptime:</strong> Monitored school laboratory computers and secondary student gateways to maintain flawless learning-session consistency.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-[10px] font-bold">2</div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        <strong className="text-zinc-100">45+ Chromebooks configured:</strong> Successfully bulk-provisioned and applied network filters to student study assets within a 48-hour cycle limit.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-[10px] font-bold">3</div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        <strong className="text-zinc-100">Reduced local latency issues:</strong> Re-patched loose ethernet terminal switches and adjusted local classroom setups to solve signal drops.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: JOURNAL & LOGS */}
            {activeTab === 'logs' && (
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Controls and Stats */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-zinc-950 p-4 rounded-2xl border border-zinc-800/60">
                  <div className="space-y-0.5">
                    <p className="text-xs font-mono text-zinc-400">Internship Activity Logs</p>
                    <p className="text-[11px] text-zinc-500">Track and log daily hardware setups, diagnostics, and tasks completed.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleResetToDefault}
                      className="px-3 py-1.5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-[11px] text-zinc-400 hover:text-zinc-200 transition-all font-mono"
                    >
                      Reset Defaults
                    </button>
                    <button
                      onClick={() => setIsAdding(!isAdding)}
                      className="px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-[11px] flex items-center gap-1.5 transition-all"
                    >
                      {isAdding ? <X className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      {isAdding ? 'Cancel Entry' : 'Add Activity Log'}
                    </button>
                  </div>
                </div>

                {/* Add Entry Form */}
                <AnimatePresence>
                  {isAdding && (
                    <motion.form 
                      onSubmit={handleAddLog}
                      className="p-5 rounded-2xl bg-zinc-950 border border-emerald-500/30 space-y-4 shadow-lg shadow-emerald-500/5"
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                    >
                      <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                        <FilePlus className="w-4 h-4" />
                        Log New Documentation Entry
                      </h4>

                      {error && (
                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{error}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono text-zinc-400 uppercase block">Date *</label>
                          <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-emerald-500 font-mono"
                            required
                          />
                        </div>
                        <div className="space-y-1 sm:col-span-2">
                          <label className="text-[10px] font-mono text-zinc-400 uppercase block">Task Title / Action *</label>
                          <input
                            type="text"
                            placeholder="e.g., Audio-Visual Mixer Diagnostics"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-emerald-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono text-zinc-400 uppercase block">Category</label>
                          <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value as InternshipLog['category'])}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-emerald-500"
                          >
                            <option value="Hardware">Hardware & Equipment</option>
                            <option value="Network">Network & IT Systems</option>
                            <option value="Software">Software & Google Workspace</option>
                            <option value="Event Support">Audio-Visual & Event Support</option>
                            <option value="Administration">Administration & Support Desk</option>
                          </select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono text-zinc-400 uppercase block">Execution Status</label>
                          <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value as InternshipLog['status'])}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-emerald-500"
                          >
                            <option value="Completed">Completed</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Review Required">Review Required</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-zinc-400 uppercase block">Detailed Description *</label>
                        <textarea
                          placeholder="Provide deep details of your diagnostics, technical tools utilized, and user feedback."
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          rows={3}
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-zinc-100 focus:outline-none focus:border-emerald-500 leading-relaxed"
                          required
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-zinc-400 uppercase block">Notes & Operational Outcome (Optional)</label>
                        <input
                          type="text"
                          placeholder="e.g., Operational uptime remained 100% after reboot cycles."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      <div className="flex justify-end gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => { setIsAdding(false); setError(''); }}
                          className="px-3.5 py-1.5 rounded-xl border border-zinc-800 text-[11px] text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                        >
                          Discard
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-[11px] flex items-center gap-1.5 transition-all shadow-md shadow-emerald-500/10"
                        >
                          <Save className="w-3.5 h-3.5" />
                          Save Log Entry
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>

                {/* Log list */}
                <div className="space-y-4">
                  {logs.length === 0 ? (
                    <div className="text-center py-10 bg-zinc-950 rounded-2xl border border-zinc-850">
                      <p className="text-xs text-zinc-400">No documentation logs listed. Tap "Add Activity Log" above to record one.</p>
                    </div>
                  ) : (
                    logs.map((log) => {
                      // Status colors
                      const statusStyles = {
                        'Completed': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
                        'In Progress': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
                        'Review Required': 'bg-sky-500/10 text-sky-400 border-sky-500/20'
                      };

                      // Category styles
                      const categoryStyles = {
                        'Hardware': 'bg-amber-500/10 text-amber-300 border-amber-500/10',
                        'Network': 'bg-indigo-500/10 text-indigo-300 border-indigo-500/10',
                        'Software': 'bg-sky-500/10 text-sky-300 border-sky-500/10',
                        'Event Support': 'bg-purple-500/10 text-purple-300 border-purple-500/10',
                        'Administration': 'bg-zinc-800 text-zinc-300 border-zinc-700/50'
                      };

                      return (
                        <div 
                          key={log.id} 
                          className="p-5 rounded-2xl bg-zinc-950 border border-zinc-850 hover:border-zinc-800 transition-all space-y-3 group"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded text-[9px] font-mono font-semibold bg-zinc-900 text-zinc-400 border border-zinc-800">
                                {log.date}
                              </span>
                              <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold border ${categoryStyles[log.category] || categoryStyles.Hardware}`}>
                                {log.category}
                              </span>
                              <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold border ${statusStyles[log.status] || statusStyles.Completed}`}>
                                {log.status}
                              </span>
                            </div>

                            <button
                              onClick={() => handleDeleteLog(log.id)}
                              className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10 opacity-0 group-hover:opacity-100 transition-all self-end sm:self-auto"
                              title="Delete entry"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="space-y-1">
                            <h5 className="text-xs font-bold text-zinc-100 flex items-center gap-1.5">
                              <Play className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                              {log.title}
                            </h5>
                            <p className="text-[11px] text-zinc-300 leading-relaxed pl-4">
                              {log.description}
                            </p>
                          </div>

                          {log.notes && (
                            <div className="mt-2 pl-4 py-1.5 border-l border-zinc-800 text-[10px] text-zinc-400 font-mono italic">
                              <span className="text-emerald-400 font-bold not-italic mr-1">Outcome:</span>
                              {log.notes}
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </motion.div>
            )}

            {/* TAB 3: GALLERY */}
            {activeTab === 'gallery' && (
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Intro */}
                <div className="space-y-1 text-center max-w-xl mx-auto py-3">
                  <p className="text-xs text-zinc-400 font-mono">Internship Scene Attachments</p>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">
                    Interactive diagnostic and topology records demonstrating equipment setup and live school support scenarios.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Item 1 */}
                  <div className="bg-zinc-950 border border-zinc-850 rounded-2xl overflow-hidden group">
                    <div className="aspect-video bg-zinc-900 border-b border-zinc-850 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent z-10" />
                      <img 
                        src={cablesImg} 
                        alt="Networking & Cable Infrastructure" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute bottom-2 left-3 text-[10px] font-mono text-emerald-400 font-bold bg-zinc-950/80 px-2 py-0.5 rounded border border-emerald-500/20 z-20">ALIZHAR-CAMPUS-WLAN</span>
                    </div>
                    <div className="p-4 space-y-1.5">
                      <h5 className="text-xs font-bold text-zinc-200">Networking & Cable Infrastructure</h5>
                      <p className="text-[10px] text-zinc-400 leading-relaxed">
                        Preparation and systematic coiling of high-spec RJ45 Cat6 Ethernet LAN cabling for classroom expansion loops and main switcher node integrations.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-zinc-950 border border-zinc-850 rounded-2xl overflow-hidden group">
                    <div className="aspect-video bg-zinc-900 border-b border-zinc-850 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent z-10" />
                      <img 
                        src={labImg} 
                        alt="Chromebook Deployment & Lab Setup" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute bottom-2 left-3 text-[10px] font-mono text-emerald-400 font-bold bg-zinc-950/80 px-2 py-0.5 rounded border border-emerald-500/20 z-20">CHROMEOS_ENTERPRISE</span>
                    </div>
                    <div className="p-4 space-y-1.5">
                      <h5 className="text-xs font-bold text-zinc-200">Chromebook Deployment & Lab Setup</h5>
                      <p className="text-[10px] text-zinc-400 leading-relaxed">
                        Full classroom deployment of Chromebook study units. Synchronized student system terminals with Google Workspace enterprise active directory schemas.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-zinc-950 border border-zinc-850 rounded-2xl overflow-hidden group">
                    <div className="aspect-video bg-zinc-900 border-b border-zinc-850 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent z-10" />
                      <img 
                        src={phoenixImg} 
                        alt="Custom Firmware Flashing" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute bottom-2 left-3 text-[10px] font-mono text-emerald-400 font-bold bg-zinc-950/80 px-2 py-0.5 rounded border border-emerald-500/20 z-20">SYSTEM_IMAGE_DEPLOYMENT</span>
                    </div>
                    <div className="p-4 space-y-1.5">
                      <h5 className="text-xs font-bold text-zinc-200">Custom Firmware Flashing</h5>
                      <p className="text-[10px] text-zinc-400 leading-relaxed">
                        Initiating deployment, hardware testing, and active partition flashing of secure client system images with custom bios interfaces on target workstations.
                      </p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="bg-zinc-950 border border-zinc-850 rounded-2xl overflow-hidden group">
                    <div className="aspect-video bg-zinc-900 border-b border-zinc-850 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent z-10" />
                      <img 
                        src={teamImg} 
                        alt="Al-izhar IT Support Internship Team" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute bottom-2 left-3 text-[10px] font-mono text-emerald-400 font-bold bg-zinc-950/80 px-2 py-0.5 rounded border border-emerald-500/20 z-20">AL_IZHAR_INTERNSHIP_TEAM</span>
                    </div>
                    <div className="p-4 space-y-1.5">
                      <h5 className="text-xs font-bold text-zinc-200">Al-izhar IT Support Internship Team</h5>
                      <p className="text-[10px] text-zinc-400 leading-relaxed">
                        Collaborating closely alongside senior IT support administrators and fellow interns inside the school server room for hardware configuration diagnostics.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </div>

          {/* Footer controls */}
          <div className="p-4 border-t border-zinc-800 bg-zinc-950/60 flex items-center justify-between">
            <p className="text-[10px] text-zinc-500 font-mono">
              AL-IZHAR IT CONSOLE • LOGS ARE SAVED LOCALLY
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-zinc-300 hover:text-zinc-100 text-xs font-semibold transition-all border border-zinc-700"
            >
              Close Console
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
