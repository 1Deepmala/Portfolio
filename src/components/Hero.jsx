import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Layout, 
  Globe, 
  Layers, 
  Compass, 
  Boxes,
  Search,
  Target,
  PenTool,
  Sliders,
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Github
} from 'lucide-react';

// Path to your portrait image (make sure it's saved in src/assets/deepmala.png)
import myPhoto from './assets/deepmala.png';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#07050d] text-purple-100 font-sans relative overflow-x-hidden selection:bg-purple-600 selection:text-white">
      
      {/* Background Deep Purple Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-purple-900/20 via-violet-900/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[400px] right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* TOP NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#07050d]/80 backdrop-blur-xl border-b border-purple-900/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-300 font-extrabold text-sm tracking-wider group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
              DH
            </div>
            <span className="font-semibold text-white tracking-widest text-sm uppercase group-hover:text-purple-300 transition-colors">
              DEEPMALA HALDER
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-purple-200/70 tracking-wider uppercase">
            {['Work', 'Services', 'About', 'Process', 'Testimonials'].map((item, i) => (
              <a 
                key={i} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Call To Action Button */}
          <a 
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-purple-800 to-indigo-900 hover:from-purple-700 hover:to-indigo-800 border border-purple-500/40 text-white font-medium text-xs px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all transform hover:-translate-y-0.5"
          >
            Let's Work Together
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 sm:pt-40 pb-20 px-6 sm:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Hero Left Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="lg:col-span-7 space-y-6"
        >
          <motion.div variants={fadeInUp} className="inline-block">
            <span className="text-purple-400 text-xs tracking-[0.25em] font-semibold uppercase bg-purple-950/60 border border-purple-800/40 px-4 py-1.5 rounded-full">
              Hello, I'm
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Deepmala <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-indigo-300 drop-shadow-[0_0_25px_rgba(168,85,247,0.3)]">
              Halder
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-purple-300/80 text-sm sm:text-base font-medium tracking-wide">
            Senior UI/UX Designer & Digital Strategist
          </motion.p>

          <motion.p variants={fadeInUp} className="text-purple-200/60 text-sm max-w-lg leading-relaxed">
            I craft premium digital experiences that are intuitive, beautiful, and built to convert complex ideas into seamless user flows.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#work" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs px-7 py-3.5 rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-[#0d091a] border border-purple-500/30 hover:border-purple-400 text-purple-200 font-semibold text-xs px-7 py-3.5 rounded-xl transition-all hover:bg-purple-950/40 transform hover:-translate-y-0.5"
            >
              Let's Collaborate <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Trusted Brands Banner */}
          <motion.div variants={fadeInUp} className="pt-10 border-t border-purple-900/30">
            <p className="text-[11px] text-purple-400/60 uppercase tracking-widest font-semibold mb-4">
              Trusted by forward-thinking brands
            </p>
            <div className="flex flex-wrap items-center gap-8 text-purple-400/40 font-bold text-sm tracking-wider">
              <span className="hover:text-purple-300 transition-colors cursor-pointer">SLACK</span>
              <span className="hover:text-purple-300 transition-colors cursor-pointer">WEBFLOW</span>
              <span className="hover:text-purple-300 transition-colors cursor-pointer">NOTION</span>
              <span className="hover:text-purple-300 transition-colors cursor-pointer">LOOM</span>
              <span className="hover:text-purple-300 transition-colors cursor-pointer">UPWORK</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Right: Portrait with Violet Backlight Aura */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Ambient Purple Ring Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.08, 1],
              opacity: [0.4, 0.65, 0.4]
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full bg-gradient-to-tr from-purple-800 via-indigo-600 to-violet-900 blur-[80px] pointer-events-none"
          />

          {/* Glowing Circular Accent Ring behind head */}
          <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-purple-500/20 shadow-[0_0_50px_rgba(168,85,247,0.2)] pointer-events-none" />

          {/* Signature Overlay */}
          <div className="absolute bottom-6 right-2 sm:-right-4 z-20 pointer-events-none">
            <span className="font-serif italic text-3xl sm:text-4xl text-purple-300/60 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              Deepmala Halder
            </span>
          </div>

          {/* Image Container with Bottom Mask Blend */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative z-10"
          >
            <img 
              src={myPhoto} 
              alt="Deepmala Halder" 
              className="w-[300px] sm:w-[380px] h-auto object-cover filter drop-shadow-[0_20px_35px_rgba(147,51,234,0.35)]"
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)'
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* SELECTED WORK SECTION */}
      <section id="work" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-purple-900/20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <span className="text-purple-400 text-xs tracking-widest uppercase font-semibold">Selected Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Crafted with purpose. <br />
              <span className="text-purple-400">Designed to perform.</span>
            </h2>
          </div>
          <a href="#" className="text-xs font-semibold text-purple-300 hover:text-purple-200 flex items-center gap-2 group">
            Explore how I help brands stand out <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Project Astral",
              tag: "SaaS Platform",
              desc: "A data analytics platform for modern teams to visualize insights.",
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "Lumia Resort",
              tag: "Luxury Hospitality",
              desc: "A luxury resort website that captures trust, emotion and elegance.",
              image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "NovaPay",
              tag: "Fintech App",
              desc: "A next-gen fintech app simplifying global payments and transfers.",
              image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
            }
          ].map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group bg-[#0d091a]/80 border border-purple-900/30 hover:border-purple-500/50 rounded-2xl p-4 transition-all hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute top-3 left-3 bg-[#07050d]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-purple-300 font-semibold border border-purple-500/20">
                  {project.tag}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-purple-200/60 leading-relaxed mb-4">
                {project.desc}
              </p>
              <a href="#" className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 group-hover:text-purple-200">
                View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AWARDS & RECOGNITION STATS */}
      <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#0e0921] via-[#120a2e] to-[#0e0921] border border-purple-900/40 rounded-2xl p-8 sm:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-xs text-purple-400/80 uppercase font-semibold mb-1">Awwwards</p>
            <p className="text-2xl sm:text-3xl font-bold text-white">Honorable Mention</p>
            <p className="text-[11px] text-purple-300/50 mt-1">2023</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-300">10+</p>
            <p className="text-xs text-purple-300/70 mt-1">Design Awards Worldwide</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-300">3x</p>
            <p className="text-xs text-purple-300/70 mt-1">Site of the Day Honoree</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-300">Top 1%</p>
            <p className="text-xs text-purple-300/70 mt-1">Top UI/UX Designers On Upwork</p>
          </div>
        </div>
      </section>

      {/* WHAT I DO / SERVICES SECTION */}
      <section id="services" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-purple-900/20">
        <div className="mb-16">
          <span className="text-purple-400 text-xs tracking-widest uppercase font-semibold">What I Do</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 max-w-md">
            End-to-end design solutions that drive results.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {[
            { icon: Layout, title: "UI/UX Design", desc: "Intuitive interfaces delivering exceptional user experiences." },
            { icon: Globe, title: "Web Design", desc: "Modern, responsive websites elevating your brand value." },
            { icon: Boxes, title: "Product Design", desc: "Scalable digital product experiences from concept to market." },
            { icon: Compass, title: "Design Strategy", desc: "User-centric research align with your high business goals." },
            { icon: Sliders, title: "Prototyping", desc: "Interactive animated prototypes to test and refine early ideas." },
            { icon: Layers, title: "Design Systems", desc: "Consistent component libraries for scalable development." },
          ].map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-[#0b0817] border border-purple-900/30 hover:border-purple-500/40 p-6 rounded-2xl flex flex-col justify-between transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{service.title}</h3>
                <p className="text-xs text-purple-200/50 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-purple-900/20">
        <div className="mb-16">
          <span className="text-purple-400 text-xs tracking-widest uppercase font-semibold">Kind Words</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            What clients say about working with me.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "Deepmala is a rare blend of creativity and strategic thinking. The designs delivered elevated our product far beyond expectations.",
              author: "Sarah Johnson",
              role: "Head of Product, Loom",
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
            },
            {
              quote: "Professional, reliable, and incredibly detail-oriented. She consistently delivers high-quality design work right on schedule.",
              author: "David Lee",
              role: "Co-founder, NovaPay",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
            },
            {
              quote: "Working with Deepmala was a game-changer. She truly understands users and translates complex needs into beautiful design.",
              author: "Emma Carter",
              role: "Marketing Director, Lumia",
              avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
            }
          ].map((item, index) => (
            <div key={index} className="bg-[#0b0817] border border-purple-900/30 p-6 rounded-2xl flex flex-col justify-between">
              <p className="text-xs text-purple-200/80 leading-relaxed italic mb-6">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img src={item.avatar} alt={item.author} className="w-10 h-10 rounded-full object-cover border border-purple-500/30" />
                <div>
                  <h4 className="text-xs font-bold text-white">{item.author}</h4>
                  <p className="text-[10px] text-purple-400/60">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-purple-900/20">
        <div className="mb-16">
          <span className="text-purple-400 text-xs tracking-widest uppercase font-semibold">My Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            A clear, collaborative path to exceptional design.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 relative">
          {[
            { num: "01", name: "Discover", desc: "Understanding your goals, target audience, and project challenges.", icon: Search },
            { num: "02", name: "Define", desc: "Research, analysis, and aligning on the right creative direction.", icon: Target },
            { num: "03", name: "Design", desc: "Crafting intuitive, engaging wireframes and high-fidelity UIs.", icon: PenTool },
            { num: "04", name: "Refine", desc: "Iterating based on feedback and user testing to ensure perfection.", icon: Sliders },
            { num: "05", name: "Deliver", desc: "Handing off polished design assets ready for development.", icon: Send },
          ].map((step, index) => (
            <div key={index} className="bg-[#0b0817] border border-purple-900/30 p-6 rounded-2xl flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                <step.icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-purple-400 font-bold uppercase tracking-widest mb-1">{step.num}. {step.name}</span>
              <p className="text-[11px] text-purple-200/50 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / CTA FOOTER CARD */}
      <section id="contact" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-r from-[#120a2e] via-[#180c3c] to-[#0e0921] border border-purple-500/30 rounded-3xl p-8 sm:p-16 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Glowing Planet/Sphere Visual */}
          <div className="absolute right-[-80px] bottom-[-80px] w-80 h-80 rounded-full bg-gradient-to-tr from-purple-800 to-indigo-600 blur-[80px] opacity-40 pointer-events-none" />

          <div className="lg:col-span-7 space-y-4">
            <span className="text-purple-400 text-xs tracking-widest uppercase font-semibold">
              Let's Create Something Great
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Have a project in mind?
            </h2>
            <p className="text-purple-200/60 text-sm max-w-md">
              I'm always excited to work on meaningful projects with great people. Let's talk!
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4 relative z-10">
            <div className="flex items-center gap-3 text-xs text-purple-200/80">
              <Mail className="w-4 h-4 text-purple-400" />
              <span>hello@deepmalahalder.com</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-purple-200/80">
              <Phone className="w-4 h-4 text-purple-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-purple-200/80">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>San Francisco, CA</span>
            </div>

            <button className="w-full mt-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer">
              Start a Project <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 sm:px-12 max-w-7xl mx-auto border-t border-purple-900/20 text-xs text-purple-400/60 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-purple-950 border border-purple-500/30 flex items-center justify-center text-purple-300 font-extrabold text-xs">
            DH
          </div>
          <span className="font-semibold text-white tracking-widest uppercase">DEEPMALA HALDER</span>
        </div>

        <p>© 2026 Deepmala Halder. All rights reserved.</p>

        <div className="flex items-center gap-5 text-purple-400 hover:text-purple-200 transition-colors">
          <a href="#" className="hover:text-purple-300"><Linkedin className="w-4 h-4" /></a>
          <a href="#" className="hover:text-purple-300"><Twitter className="w-4 h-4" /></a>
          <a href="#" className="hover:text-purple-300"><Instagram className="w-4 h-4" /></a>
          <a href="#" className="hover:text-purple-300"><Github className="w-4 h-4" /></a>
        </div>
      </footer>

    </div>
  );
}