import { motion } from 'framer-motion';

const tools = [
  { name: 'React', color: 'text-cyan-400' },
  { name: 'Node.js', color: 'text-green-400' },
  { name: 'Vite', color: 'text-yellow-400' },
  { name: 'Animations API', color: 'text-pink-400' },
  { name: 'Three.js', color: 'text-blue-400' },
];

export default function Toolkit() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="hidden lg:flex flex-col items-center fixed right-8 top-32 bg-[#12142a]/90 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl w-44 text-center z-10"
    >
      <h3 className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-6">
        MY TOOLKIT
      </h3>

      <div className="space-y-6">
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-1 cursor-pointer group"
          >
            <div className={`text-2xl font-bold ${tool.color} group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]`}>
              ❖
            </div>
            <span className="text-xs font-medium text-gray-300">{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.aside>
  );
}