import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileDown } from "lucide-react";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24 px-4" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
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
            className="inline-flex items-center gap-3 gradient-bg px-10 py-4 rounded-xl font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow"
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
