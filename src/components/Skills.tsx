import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Python", level: 90, color: "from-primary to-secondary" },
  { name: "Machine Learning", level: 85, color: "from-secondary to-accent" },
  { name: "Deep Learning", level: 80, color: "from-accent to-primary" },
  { name: "SQL", level: 75, color: "from-primary via-secondary to-accent" },
  { name: "TensorFlow / PyTorch", level: 80, color: "from-secondary to-primary" },
  { name: "Data Analysis", level: 85, color: "from-accent to-secondary" },
  { name: "Time Series Forecasting", level: 75, color: "from-primary to-accent" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-accent/10 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/10 blur-[80px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Technologies and tools I work with to build intelligent systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm group hover:shadow-lg hover:scale-[1.03] transition-all duration-300 cursor-default"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-heading font-semibold">{skill.name}</h3>
                <span className="text-sm text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
