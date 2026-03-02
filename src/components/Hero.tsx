import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-primary/15 blur-[80px]"
          style={{ animation: "blob 8s ease-in-out infinite" }}
        />
        <div
          className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-secondary/15 blur-[80px]"
          style={{ animation: "blob 10s ease-in-out infinite", animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] bg-accent/15 blur-[80px]"
          style={{ animation: "blob 9s ease-in-out infinite", animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden gradient-border glow">
              <img src={profileImg} alt="Uttham" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 rounded-full gradient-bg-multi opacity-20 blur-2xl -z-10 scale-150" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Welcome to my portfolio
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Uttham</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl text-muted-foreground mb-3 font-medium"
        >
          AI & ML Engineering Student | Aspiring AI Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I am passionate about building intelligent systems that solve real-world problems. I enjoy developing full-stack applications, secure authentication systems, and AI-driven solutions. I continuously explore modern technologies and aim to become a skilled AI Engineer creating impactful and scalable innovations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="gradient-bg px-8 py-3.5 rounded-xl font-medium text-primary-foreground hover:opacity-90 transition-opacity shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#resume"
            className="glass px-8 py-3.5 rounded-xl font-medium text-foreground hover:shadow-md transition-all flex items-center gap-2"
          >
            <FileDown className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
