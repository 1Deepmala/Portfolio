import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    category: "PROJECT 1",
    title: "E-COMMERCE FLOW",
    type: "ecommerce",
    description: "A high-performance checkout and shopping cart experience built with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "Redux", "Node.js"]
  },
  {
    id: 2,
    category: "PROJECT 2",
    title: "3D WORLD GENERATOR",
    type: "city",
    description: "An interactive 3D procedural landscape generator running smoothly in the browser using Three.js.",
    tags: ["React", "Three.js", "WebGL", "Framer Motion"]
  },
  {
    id: 3,
    category: "PROJECT 3",
    title: "INTERACTIVE DATA DASHBOARD",
    type: "dashboard",
    description: "Real-time visual analytics platform with customizable widget layouts and dark mode themes.",
    tags: ["React", "Recharts", "Tailwind CSS", "Vite"]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="px-4 md:px-12 max-w-7xl mx-auto my-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -8 }}
            onClick={() => setSelectedProject(project)}
            className="bg-[#12142a]/80 border border-white/10 hover:border-cyan-500/50 rounded-2xl p-4 flex flex-col justify-between shadow-xl backdrop-blur-md cursor-pointer transition-colors group"
          >
            {/* Card Graphic */}
            <div className="h-48 w-full bg-[#0a0c1a] rounded-xl flex items-center justify-center relative overflow-hidden border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />

              {project.type === 'ecommerce' && (
                <div className="p-4 border border-cyan-500/30 rounded-lg bg-cyan-950/20 text-cyan-400 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 border-2 border-cyan-400 rounded-lg flex items-center justify-center text-xl font-bold">🛒</div>
                  <span className="text-xs bg-cyan-500/20 px-2 py-0.5 rounded text-cyan-300">SUCCESS</span>
                </div>
              )}

              {project.type === 'city' && (
                <div className="flex items-end gap-2 h-24">
                  <div className="w-6 h-16 bg-purple-500/30 border border-purple-400 rounded-t" />
                  <div className="w-8 h-20 bg-cyan-500/30 border border-cyan-400 rounded-t animate-pulse" />
                  <div className="w-6 h-12 bg-pink-500/30 border border-pink-400 rounded-t" />
                </div>
              )}

              {project.type === 'dashboard' && (
                <div className="flex gap-2 items-end h-20">
                  <div className="w-4 h-12 bg-cyan-400 rounded" />
                  <div className="w-4 h-20 bg-purple-400 rounded" />
                  <div className="w-4 h-8 bg-blue-400 rounded" />
                  <div className="w-4 h-16 bg-pink-400 rounded" />
                </div>
              )}
            </div>

            {/* Title & Category */}
            <div className="mt-4 text-left">
              <p className="text-xs text-gray-400 font-mono tracking-wider">{project.category}</p>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mt-1">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#12142a] border border-cyan-500/30 rounded-2xl p-6 max-w-lg w-full relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold cursor-pointer"
              >
                ✕
              </button>

              <p className="text-xs text-cyan-400 font-mono tracking-wider">{selectedProject.category}</p>
              <h2 className="text-2xl font-bold text-white mt-1">{selectedProject.title}</h2>
              <p className="text-gray-300 mt-4 text-sm leading-relaxed">{selectedProject.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-8">
                <a
                  href="#demo"
                  className="flex-1 text-center py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="#code"
                  className="flex-1 text-center py-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/10 transition-colors"
                >
                  GitHub Code
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}