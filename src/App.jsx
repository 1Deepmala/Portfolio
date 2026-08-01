/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Layout, 
  Globe, 
  Layers, 
  Boxes, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  CheckCircle2,
  Code2,
  Terminal,
  Cpu,
  Database,
  FileCode2,
  Binary,
  Atom,
  Braces,
  GitBranch,
  Server,
  Wrench,
  Bot,
  Palette,
  FileText,
  Languages,
  Briefcase,
  ExternalLink,
  Image as ImageIcon,
  GraduationCap,
  Award,
  BookOpen,
  X,
  Maximize2
} from 'lucide-react';
import myPhoto from './assets/deepmala.png';
import bottomImg from './assets/buttom.png';
import cryptoImg from './assets/Crypto.png';
import traficImg from './assets/trafic.png';

// Import Freelance Work Sample Images
import bugImg from './assets/bug.png';
import drImg from './assets/dr.png';
import eventImg from './assets/event.png';
import foodImg from './assets/food.png';
import gdgImg from './assets/gdg.png';
import genImg from './assets/gen.png';
import hotelImg from './assets/hotel.png';
import reactImg from './assets/react.png';

// Import Custom Tech Icon Images for Hero Photo Section
import reIcon from './assets/re.png';
import javaIcon from './assets/java.png';
import jsIcon from './assets/js.png';
import aiIcon from './assets/ai.png';
import codeIcon from './assets/code.png';
import vsIcon from './assets/vs.png';

// --- INJECT EXACT STENCIL GOOGLE FONTS ---
const injectStencilFont = () => {
  if (!document.getElementById('stencil-font-link')) {
    const link = document.createElement('link');
    link.id = 'stencil-font-link';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Saira+Stencil+One&family=Unbounded:wght@800;900&display=swap';
    document.head.appendChild(link);
  }
};

// --- SLOW ANIMATED LETTER-BY-LETTER TITLE COMPONENT ---
const AnimatedLetterTitle = ({ text, className = "", delayOffset = 0, letterDelay = 0.25 }) => {
  const letters = Array.from(text.toUpperCase());

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: letterDelay, delayChildren: delayOffset }
    }
  };

  const letterVariants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 22, stiffness: 60 }
    },
    hidden: {
      opacity: 0,
      y: 25,
      filter: "blur(8px)"
    }
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`inline-flex flex-wrap ${className}`}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block tracking-wider"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// --- SLOWER ANIMATED WORD-BY-WORD SUMMARY COMPONENT ---
const AnimatedWordSummary = ({ text, className = "" }) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 1.0 }
    }
  };

  const wordVariants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: "easeOut" }
    },
    hidden: {
      opacity: 0,
      y: 12,
      filter: "blur(5px)"
    }
  };

  return (
    <motion.p
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-1.5"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

// --- BACKGROUND FLOATING TECH LOGOS COMPONENT ---
const FloatingTechBackground = () => {
  const techIcons = [
    { Icon: Atom, top: "12%", left: "8%", size: "w-8 h-8", duration: 8, delay: 0 },
    { Icon: Code2, top: "25%", left: "85%", size: "w-10 h-10", duration: 10, delay: 1 },
    { Icon: Terminal, top: "45%", left: "5%", size: "w-7 h-7", duration: 9, delay: 2 },
    { Icon: FileCode2, top: "60%", left: "90%", size: "w-9 h-9", duration: 11, delay: 0.5 },
    { Icon: Braces, top: "75%", left: "12%", size: "w-8 h-8", duration: 7, delay: 1.5 },
    { Icon: GitBranch, top: "85%", left: "80%", size: "w-8 h-8", duration: 12, delay: 2.5 },
    { Icon: Cpu, top: "18%", left: "45%", size: "w-6 h-6", duration: 9, delay: 3 },
    { Icon: Database, top: "68%", left: "48%", size: "w-7 h-7", duration: 10, delay: 1.2 },
    { Icon: Binary, top: "35%", left: "92%", size: "w-8 h-8", duration: 8.5, delay: 0.8 },
    { Icon: Server, top: "92%", left: "30%", size: "w-7 h-7", duration: 11.5, delay: 2 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      {techIcons.map((item, index) => (
        <motion.div
          key={index}
          style={{ top: item.top, left: item.left }}
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 10, -10, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            repeat: Infinity,
            duration: item.duration,
            delay: item.delay,
            ease: "easeInOut"
          }}
          className={`absolute text-purple-400/80 ${item.size} filter drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]`}
        >
          <item.Icon className="w-full h-full" />
        </motion.div>
      ))}
    </div>
  );
};

// --- HERO PHOTO SECTION WITH MOBILE TOUCH-SAFE HOVER ---
const HeroPhotoWithInteractiveLogos = () => {
  const [isHovered, setIsHovered] = useState(false);

  const customIcons = [
    { img: reIcon, name: "React", angle: -175, radius: 120, hoverRadius: 155, delay: 0 },
    { img: jsIcon, name: "JavaScript", angle: -140, radius: 125, hoverRadius: 160, delay: 0.08 },
    { img: javaIcon, name: "Java", angle: -105, radius: 130, hoverRadius: 165, delay: 0.16 },
    { img: aiIcon, name: "AI", angle: -70, radius: 125, hoverRadius: 160, delay: 0.24 },
    { img: codeIcon, name: "Code", angle: -35, radius: 120, hoverRadius: 155, delay: 0.32 },
    { img: vsIcon, name: "VS Code", angle: 0, radius: 115, hoverRadius: 150, delay: 0.4 }
  ];

  return (
    <div 
      onMouseEnter={() => {
        // Only trigger hover state on desktop devices with hover support
        if (window.matchMedia('(hover: hover)').matches) {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex justify-center items-center group cursor-pointer w-full select-none"
    >
      {/* Dynamic Purple Backglow Aura */}
      <motion.div 
        animate={{ 
          scale: isHovered ? [1.05, 1.12, 1.05] : [1, 1.04, 1], 
          opacity: isHovered ? 0.85 : 0.4 
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute w-[200px] sm:w-[280px] md:w-[360px] h-[240px] sm:h-[330px] md:h-[420px] rounded-full bg-gradient-to-t from-purple-600 via-indigo-600 to-violet-900 blur-[45px] sm:blur-[65px] pointer-events-none transition-all duration-500"
      />

      {/* HALF-CIRCLE ARCH TECH LOGOS */}
      <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
        {customIcons.map((item, idx) => {
          const rad = (item.angle * Math.PI) / 180;
          const currentRadius = isHovered ? item.hoverRadius : item.radius;
          const x = Math.cos(rad) * currentRadius;
          const y = Math.sin(rad) * currentRadius;

          return (
            <motion.div
              key={idx}
              initial={{ x, y, opacity: 0.2, scale: 0.7 }}
              animate={{
                x,
                y,
                opacity: isHovered ? 1 : 0.2,
                scale: isHovered ? 1.1 : 0.7,
                rotate: isHovered ? [0, 6, -6, 0] : 0
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
                delay: item.delay
              }}
              className="absolute flex flex-col items-center justify-center select-none"
            >
              <motion.span 
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? -14 : 0 }}
                transition={{ duration: 0.2, delay: item.delay }}
                className="text-[8px] sm:text-[9px] font-mono font-bold text-purple-200 bg-purple-950/90 border border-purple-500/40 px-1 py-0.5 rounded-md shadow-[0_0_8px_rgba(168,85,247,0.5)] mb-0.5 whitespace-nowrap pointer-events-none"
              >
                {item.name}
              </motion.span>

              <div className="w-5 h-5 sm:w-9 sm:h-9 md:w-11 md:h-11 flex items-center justify-center">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(192,132,252,0.8)] transition-all duration-300"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <TiltCard className="relative z-10 flex flex-col items-center w-full">
        <div className="relative overflow-hidden rounded-b-3xl max-w-[180px] sm:max-w-[270px] md:max-w-[350px]">
          <img 
            src={myPhoto}
            alt="Deepmala Halder" 
            className="w-full h-auto object-cover filter brightness-105 contrast-105 transition-all duration-500 pointer-events-none"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>

        <div 
          style={{ transform: "translateZ(20px)" }} 
          className="absolute -bottom-1 right-0 z-20 pointer-events-none"
        >
          <span className="font-serif italic text-lg sm:text-2xl md:text-3xl text-purple-200 drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]">
            Deepmala Halder
          </span>
        </div>
      </TiltCard>
    </div>
  );
};

// --- STYLED 3D TILT CARD COMPONENT ---
const TiltCard = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative transition-all duration-200 ease-out ${className}`}
    >
      {children}
    </motion.div>
  );
};

// --- INTERACTIVE 3D ANIMATED IMAGE GRAPHIC ---
const Animated3DGraphic = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["18deg", "-18deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-18deg", "18deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg flex items-center justify-center [perspective:1200px]"
    >
      <motion.div 
        animate={{ scale: [0.95, 1.1, 0.95], opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-violet-900 blur-[80px] pointer-events-none"
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="relative z-10 w-full flex justify-center items-center cursor-pointer"
      >
        <img 
          src={bottomImg} 
          alt="App Development Showcase" 
          className="w-full h-auto max-h-[380px] object-contain filter drop-shadow-[0_20px_40px_rgba(168,85,247,0.45)] transition-transform duration-300"
          style={{ transform: "translateZ(50px)" }}
        />
      </motion.div>
    </div>
  );
};

// --- MAIN PORTFOLIO COMPONENT ---
export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    injectStencilFont();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const projectList = [
    {
      title: "Crypto Wallet",
      subtitle: "Mobile Cryptocurrency Wallet",
      tag: "React Native / Web3",
      desc: "Built a mobile crypto wallet with real-time data sync, secure auth, dynamic neon-themed interface, and Ethers.js integration to execute ETH transactions.",
      tech: "React Native, Expo, Firebase, Ethers.js, JavaScript, Ganache",
      link: "https://github.com/1Deepmala/CryptoWallet",
      img: cryptoImg
    },
    {
      title: "Agentic Honeypot",
      subtitle: "AI Scam Detection & Engagement System",
      tag: "AI & Security",
      desc: "Built an AI-powered FastAPI system that detects financial scam messages and autonomously engages scammers to extract bank, UPI, and IFSC intelligence.",
      tech: "Python, FastAPI, Regex, REST APIs, Uvicorn",
      link: "https://github.com/1Deepmala/agentic-honeypot",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "SUTRA",
      subtitle: "Gamified NGO Assistant (Collaborator)",
      tag: "React.js / Web App",
      desc: "Gamified React application helping NGOs automate program design via Logical Framework Approach (LFA) with Firestore state management and a cyberpunk-themed UI.",
      tech: "React.js, Firebase, Tailwind CSS, Vite",
      link: "https://github.com/1Deepmala/Sutra",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Traffic Sign Recognition System",
      subtitle: "Machine Learning Desktop App (Collaborator)",
      tag: "Machine Learning & OpenCV",
      desc: "Desktop ML application recognizing 43 types of traffic signs using a custom CNN model trained with Keras/OpenCV, integrated into a Tkinter GUI.",
      tech: "Python, Keras, OpenCV, Tkinter",
      link: "https://github.com/alex-hembrom/Traffic-Sign-Recognition",
      img: traficImg
    }
  ];

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code2,
      skills: ["Java", "JavaScript", "C", "HTML", "CSS", "Python (Basic)"]
    },
    {
      category: "Frameworks & Tech",
      icon: Cpu,
      skills: ["React JS", "React Native", "Tailwind CSS", "Node.js"]
    },
    {
      category: "Databases",
      icon: Database,
      skills: ["Firebase", "MySQL"]
    },
    {
      category: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Vite", "Antigravity", "Kiro", "Postman"]
    },
    {
      category: "AI & Productivity Tools",
      icon: Bot,
      skills: ["Claude", "GitHub Copilot", "ChatGPT", "Gemini", "DeepSeek"]
    },
    {
      category: "Design & Research",
      icon: Palette,
      skills: ["UX Researcher", "UX/UI Design", "Graphic Design", "Figma Prototyping", "Canva", "Adobe Express", "Photoshop", "Illustrator"]
    },
    {
      category: "Office & Suites",
      icon: FileText,
      skills: ["MS Word", "Excel", "PowerPoint", "Google Docs"]
    },
    {
      category: "Languages Spoken",
      icon: Languages,
      skills: ["English", "Hindi", "Bengali"]
    }
  ];

  const freelanceWorkImages = [
    { id: 1, title: "Bug Tracker Design", img: bugImg },
    { id: 2, title: "Doctor Appointment UI", img: drImg },
    { id: 3, title: "Event Management Banner", img: eventImg },
    { id: 4, title: "Food Delivery App", img: foodImg },
    { id: 5, title: "GDG Event Graphics", img: gdgImg },
    { id: 6, title: "Generative AI Concept", img: genImg },
    { id: 7, title: "Hotel Booking Concept", img: hotelImg },
    { id: 8, title: "React Component Showcase", img: reactImg }
  ];

  const educationList = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      score: "CGPA 8.85",
      institution: "Government College of Engineering and Leather Technology, Kolkata, West Bengal",
      duration: "June 2021 – May 2025",
      isHighlight: true
    },
    {
      degree: "Class XII (Science)",
      score: "71.2%",
      institution: "Ramakrishna Vivekananda Mission Vidyapith, West Bengal Council of Higher Secondary Education, Barrackpore, West Bengal",
      duration: "Secondary Education",
      isHighlight: false
    },
    {
      degree: "Class X",
      score: "64.86%",
      institution: "West Bengal Board of Secondary Education",
      duration: "Secondary Education",
      isHighlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#07050d] text-purple-100 font-sans relative overflow-x-hidden selection:bg-purple-600 selection:text-white">
      
      <FloatingTechBackground />

      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-purple-900/20 via-violet-900/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed top-[400px] right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#07050d]/80 backdrop-blur-xl border-b border-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-12 h-16 sm:h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-300 font-extrabold text-xs sm:text-sm tracking-wider group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all">
              DH
            </div>
            <span className="font-semibold text-white tracking-widest text-xs sm:text-sm uppercase group-hover:text-purple-300 transition-colors">
              Deepmala Halder
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-purple-200/70 tracking-wider uppercase">
            {['Projects', 'Skills', 'Experience', 'Education'].map((item, i) => (
              <a 
                key={i} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}
          </nav>

          <a 
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-purple-800 to-indigo-900 hover:from-purple-700 hover:to-indigo-800 border border-purple-500/40 text-white font-medium text-xs px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all transform hover:-translate-y-0.5"
          >
            Let's Work Together
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-24 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-12 max-w-7xl mx-auto">
        <div className="flex flex-row items-center justify-between gap-3 sm:gap-8">
          
          {/* Left Side: Summary & Actions */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex-1 min-w-[55%] z-10 space-y-2 sm:space-y-3"
          >
            <motion.div variants={fadeInUp} className="inline-block">
              <span className="text-purple-400 text-[10px] sm:text-xs tracking-[0.2em] font-semibold uppercase bg-purple-950/60 border border-purple-800/40 px-2.5 sm:px-4 py-1 rounded-full">
                HELLO, I'M
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h1 
              variants={fadeInUp} 
              className="text-2xl sm:text-5xl md:text-6xl font-normal select-none font-['Saira_Stencil_One',sans-serif] leading-tight mb-0"
            >
              <div className="text-white filter drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                <AnimatedLetterTitle text="Deepmala" delayOffset={0.3} letterDelay={0.15} />
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-400 to-indigo-300 filter drop-shadow-[0_0_25px_rgba(192,132,252,0.75)] -mt-1">
                <AnimatedLetterTitle text="Halder" delayOffset={1.5} letterDelay={0.15} />
              </div>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-purple-300/80 text-[11px] sm:text-sm md:text-base font-semibold tracking-wide uppercase pt-0.5">
              Software Engineer | Frontend & UI/UX Developer
            </motion.p>

            {/* WORD-BY-WORD ANIMATED HERO SUMMARY */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
              className="relative pl-3 border-l-2 border-purple-500/50 hover:border-purple-400 transition-colors group mt-1"
            >
              <AnimatedWordSummary
                text="Computer Science graduate (CGPA 8.85) specializing in modern frontend engineering, interactive web applications, and intuitive UI/UX design. Experienced in developing scalable cross-platform systems with React, React Native, and AI integrations. Passionate about transforming complex problem statements into clean, high-performance digital products."
                className="text-purple-200/80 text-[10px] sm:text-xs md:text-sm max-w-xl leading-relaxed font-normal group-hover:text-purple-100 transition-colors"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2 sm:gap-4 pt-2">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-[10px] sm:text-xs px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all transform hover:-translate-y-0.5"
              >
                View My Projects <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-1.5 bg-[#0d091a] border border-purple-500/30 hover:border-purple-400 text-purple-200 font-semibold text-[10px] sm:text-xs px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all hover:bg-purple-950/40 transform hover:-translate-y-0.5"
              >
                Let's Collaborate <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </motion.div>

            {/* Trusted Brands */}
            <motion.div variants={fadeInUp} className="pt-3 sm:pt-4 border-t border-purple-900/30 hidden sm:block">
              <p className="text-[9px] sm:text-[10px] tracking-widest uppercase text-purple-400/60 mb-2 font-semibold">Featured In</p>
              <div className="flex flex-wrap gap-4 items-center opacity-60 grayscale hover:grayscale-0 transition-all text-[10px] sm:text-xs font-bold text-purple-300">
                <span>fullstack</span>
                <span>webdesign</span>
                <span>UI</span>
                <span>UX</span>
                <span>frontend</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Hero Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="shrink-0 w-[40%] sm:w-[42%] max-w-[360px] flex justify-center items-center"
          >
            <HeroPhotoWithInteractiveLogos />
          </motion.div>

        </div>
      </section>

      {/* MY PROJECTS SECTION */}
      <section id="projects" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-purple-400 text-xs tracking-[0.25em] font-semibold uppercase">MY PROJECTS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Crafted with purpose.<br/>Built with code & intelligence.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <TiltCard key={index} className="bg-[#0e091d]/80 border border-purple-900/30 rounded-2xl p-5 hover:border-purple-500/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="relative h-56 rounded-xl overflow-hidden mb-5">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-[#07050d]/80 backdrop-blur-md border border-purple-500/30 text-[10px] font-semibold text-purple-300 px-3 py-1 rounded-full">
                    {project.tag}
                  </span>
                </div>
                <div style={{ transform: "translateZ(20px)" }}>
                  <h3 className="text-xl font-bold text-white mb-0.5">{project.title}</h3>
                  <p className="text-xs font-medium text-purple-300 mb-2">{project.subtitle}</p>
                  <p className="text-purple-200/60 text-xs mb-4 leading-relaxed">{project.desc}</p>
                  <p className="text-[11px] text-purple-400/80 font-mono mb-4">
                    <span className="font-semibold text-purple-300">Tech:</span> {project.tech}
                  </p>
                </div>
              </div>
              <div style={{ transform: "translateZ(20px)" }}>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 group-hover:text-purple-200 transition-colors"
                >
                  View Project <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* SKILLS & TECH MATRIX SECTION - 3 COLUMNS ALIGNED */}
      <section id="skills" className="py-16 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-purple-400 text-xs tracking-[0.25em] font-semibold uppercase bg-purple-950/60 border border-purple-800/40 px-4 py-1.5 rounded-full inline-block mb-3">
            TECHNICAL ARSENAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Skills & Competencies</h2>
          <p className="text-xs sm:text-sm text-purple-200/60 mt-2">
            A comprehensive overview of technologies, frameworks, tools, and design skill sets I leverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {skillCategories.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-b from-[#110a26] to-[#0a0618] border border-purple-900/40 hover:border-purple-500/50 rounded-2xl p-6 flex flex-col justify-between shadow-[0_0_20px_rgba(147,51,234,0.05)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent group-hover:via-purple-400 transition-all" />

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:border-purple-400 transition-all">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-white tracking-wide">{item.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-[11px] font-medium text-purple-200/80 bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/30 hover:border-purple-500/50 px-2.5 py-1 rounded-md transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-purple-400 text-xs tracking-[0.25em] font-semibold uppercase bg-purple-950/60 border border-purple-800/40 px-4 py-1.5 rounded-full inline-block mb-2">
            CAREER PATH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Work Experience & Leadership</h2>
        </div>

        <div className="space-y-12">
          <div className="bg-[#0b0718] border border-purple-900/40 rounded-2xl p-6 sm:p-8 hover:border-purple-500/40 transition-all relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-purple-900/30 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  Freelance Graphic Designer
                </h3>
                <a href="#" className="text-xs text-purple-400 hover:text-purple-200 inline-flex items-center gap-1 mt-1 font-medium transition-colors">
                  Portfolio <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <span className="text-xs font-semibold text-purple-300 bg-purple-950/80 border border-purple-500/30 px-3 py-1 rounded-full w-fit">
                2 Years Experience
              </span>
            </div>

            <ul className="list-disc list-inside text-xs sm:text-sm text-purple-200/70 space-y-2 mb-8 leading-relaxed">
              <li>Delivered creative design solutions for clients across a range of projects, maintaining high visual quality and client satisfaction.</li>
            </ul>

            <div className="mt-6 pt-6 border-t border-purple-900/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-purple-400" />
                  <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                    Freelance Work Samples & Visuals
                  </h4>
                </div>
                <span className="text-[10px] text-purple-400/70 italic">Click image to expand</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {freelanceWorkImages.map((work) => (
                  <motion.div
                    key={work.id}
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedImage(work)}
                    className="relative group h-36 rounded-xl overflow-hidden border border-purple-900/40 hover:border-purple-400/80 cursor-pointer shadow-md bg-purple-950/20"
                    tabIndex={0}
                    role="button"
                    aria-label={`View ${work.title}`}
                  >
                    <img 
                      src={work.img} 
                      alt={work.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                      <span className="text-[10px] font-semibold text-purple-200 line-clamp-2">
                        {work.title}
                      </span>
                      <Maximize2 className="w-4 h-4 text-purple-300 shrink-0 ml-1" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#0b0718] border border-purple-900/40 rounded-2xl p-6 sm:p-8 hover:border-purple-500/40 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-purple-900/30 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  Graphics Lead, GDG Core Team
                </h3>
              </div>
              <span className="text-xs font-semibold text-purple-300 bg-purple-950/80 border border-purple-500/30 px-3 py-1 rounded-full w-fit">
                Core Team Member
              </span>
            </div>

            <ul className="list-disc list-inside text-xs sm:text-sm text-purple-200/70 space-y-2 leading-relaxed">
              <li>Created visual designs and supported event websites as part of the Google Developer Group core team.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL FOR FULL-SIZE IMAGE PREVIEW */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] bg-[#0c081a] border border-purple-500/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.3)] flex flex-col cursor-default"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/40 bg-[#07050d]">
                <h3 className="text-sm sm:text-base font-bold text-purple-200">
                  {selectedImage.title}
                </h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 transition-all"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-3 sm:p-6 overflow-auto flex items-center justify-center max-h-[calc(90vh-60px)]">
                <img
                  src={selectedImage.img}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-lg filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* EDUCATION SECTION */}
      <section id="education" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-purple-400 text-xs tracking-[0.25em] font-semibold uppercase bg-purple-950/60 border border-purple-800/40 px-4 py-1.5 rounded-full inline-block mb-2">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Education & Qualifications</h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`bg-[#0b0718] border ${edu.isHighlight ? 'border-purple-500/50 shadow-[0_0_25px_rgba(168,85,247,0.15)]' : 'border-purple-900/40'} rounded-2xl p-6 sm:p-8 hover:border-purple-400/60 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden`}
            >
              {edu.isHighlight && (
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-purple-500 to-indigo-600" />
              )}

              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      {edu.degree}
                      <span className="text-xs font-mono font-bold text-purple-300 bg-purple-900/50 border border-purple-600/40 px-2.5 py-0.5 rounded-md">
                        {edu.score}
                      </span>
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-purple-200/80 font-medium pl-0 sm:pl-13 leading-relaxed">
                  {edu.institution}
                </p>
              </div>

              {edu.duration && (
                <div className="md:text-right shrink-0">
                  <span className="text-xs font-semibold text-purple-300/80 italic bg-purple-950/60 border border-purple-800/30 px-3 py-1.5 rounded-full inline-block">
                    {edu.duration}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION WITH GOOGLE FORM LINKED BUTTON */}
      <section id="contact" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#0f0a21] via-[#140b2e] to-[#0f0a21] border border-purple-500/30 rounded-3xl p-8 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[0_0_50px_rgba(147,51,234,0.15)] relative overflow-hidden">
          
          <div className="space-y-6 max-w-lg z-10">
            <span className="text-purple-400 text-xs tracking-[0.25em] font-semibold uppercase">LET'S CREATE SOMETHING GREAT</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Have a project in mind?</h2>
            <p className="text-purple-200/60 text-sm">I'm always excited to work on meaningful projects with great people. Let's talk!</p>
            
            <div className="space-y-3 pt-2 text-xs font-medium text-purple-300">
              <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-purple-400" /> halderdeepu114@gmail.com</div>
              <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-purple-400" /> +91 7003934505</div>
              <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-purple-400" /> Kolkata(WB), India</div>
            </div>

            {/* START A PROJECT BUTTON LINKED TO GOOGLE FORM */}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScjTeJ1xOWmRt11e5OL8y3Zw-vrqq8lB34VgK6PB_kqARcGZA/viewform?usp=sharing&ouid=100212699972575262576" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs px-8 py-4 rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all transform hover:-translate-y-0.5 mt-4"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="z-10 w-full lg:w-auto flex justify-center">
            <Animated3DGraphic />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-purple-900/30 py-12 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-purple-300/50">
        <div>
          <span className="font-bold text-white tracking-widest uppercase">DH Deepmala Halder</span>
          <p className="mt-1">© 2026 Deepmala Halder. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://www.linkedin.com/in/deepmala-halder-2b2256267/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile" 
            className="hover:text-purple-300 transition-colors p-2 rounded-lg hover:bg-purple-950/40 border border-transparent hover:border-purple-800/40"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/1Deepmala" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile" 
            className="hover:text-purple-300 transition-colors p-2 rounded-lg hover:bg-purple-950/40 border border-transparent hover:border-purple-800/40"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </footer>

    </div>
  );
}