import { motion } from 'framer-motion';

export default function Navbar({ onOpenContact }) {
  return (
    <nav className="flex justify-between items-center py-6 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="text-xl font-bold tracking-wider text-white">
        [Your Name]
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpenContact}
        className="relative group px-6 py-2 rounded-full border border-cyan-400/50 bg-cyan-950/30 text-cyan-300 font-medium overflow-hidden shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all cursor-pointer"
      >
        Contact
      </motion.button>
    </nav>
  );
}