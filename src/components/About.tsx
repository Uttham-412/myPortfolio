import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Brain } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    {
      icon: Brain,
      title: "Passion",
      color: "from-primary to-secondary",
      description:
        "Deeply fascinated by the intersection of mathematics and computing. I love building ML models that extract meaningful patterns from complex data and drive intelligent decisions.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      color: "from-secondary to-accent",
      description:
        "Pursuing B.Tech in Computer Science & Engineering with specialization in AI & ML. Maintaining strong academics while actively contributing to research projects and hackathons.",
    },
    {
      icon: Target,
      title: "Goals",
      color: "from-accent to-primary",
      description:
        "Aiming to become a leading AI researcher and engineer. My focus areas include Deep Learning architectures, NLP, and building scalable data pipelines for production AI systems.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A quick glimpse into who I am and what drives me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="card-shine bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
