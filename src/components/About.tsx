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
        "Passionate about Artificial Intelligence, machine learning systems, and secure application development. I enjoy building real-world projects such as authentication systems, collaborative applications, and full-stack platforms that solve practical problems.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      color: "from-secondary to-accent",
      description:
        "Pursuing Bachelor of Engineering in Artificial Intelligence & Machine Learning at Canara Engineering College (2023-2027). Currently in 3rd year, building strong foundations in AI/ML and software development.",
    },
    {
      icon: Target,
      title: "Goals",
      color: "from-accent to-primary",
      description:
        "Aiming to become a highly skilled AI Engineer who designs intelligent, scalable, and secure systems that create meaningful impact. Continuously improving technical knowledge, problem-solving skills, and hands-on development experience.",
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
