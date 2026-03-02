import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileDown } from "lucide-react";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24 px-4 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/8 blur-[100px] rounded-full" />
      </div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Download my resume to learn more about my experience, education, and technical skills.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 gradient-bg px-10 py-4 rounded-xl font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-lg"
          >
            <FileDown className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
