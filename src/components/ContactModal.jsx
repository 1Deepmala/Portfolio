import { motion } from 'framer-motion';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-[#12142a] border border-cyan-500/30 rounded-2xl p-6 max-w-md w-full relative shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-white">Let's Connect</h2>
        <p className="text-gray-400 text-sm mt-1">Send a message to discuss your next project.</p>

        <form onSubmit={(e) => { e.preventDefault(); alert("Message Sent!"); onClose(); }} className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-mono text-gray-400 block mb-1">YOUR NAME</label>
            <input
              type="text"
              required
              placeholder="John Doe"
              className="w-full bg-[#0a0c1a] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 text-sm"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-gray-400 block mb-1">YOUR EMAIL</label>
            <input
              type="email"
              required
              placeholder="john@example.com"
              className="w-full bg-[#0a0c1a] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 text-sm"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-gray-400 block mb-1">MESSAGE</label>
            <textarea
              rows="4"
              required
              placeholder="Tell me about your project..."
              className="w-full bg-[#0a0c1a] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 text-sm resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold rounded-lg transition-all cursor-pointer mt-2"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}