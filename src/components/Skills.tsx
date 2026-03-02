import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Python", level: 90 },
  { name: "Machine Learning", level: 85 },
  { name: "Deep Learning", level: 80 },
  { name: "SQL", level: 75 },
  { name: "TensorFlow / PyTorch", level: 80 },
  { name: "Data Analysis", level: 85 },
  { name: "Time Series Forecasting", level: 75 },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
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
              className="glass rounded-xl p-6 group hover:scale-[1.03] transition-transform duration-300 cursor-default"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-heading font-semibold">{skill.name}</h3>
                <span className="text-sm text-primary font-medium">{skill.level}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full gradient-bg"
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
