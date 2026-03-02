import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Predictive Maintenance System",
    description:
      "Deep Learning model for industrial equipment failure prediction. Uses LSTM networks to analyze sensor data and predict potential failures before they occur, reducing downtime by 35%.",
    tech: ["Python", "TensorFlow", "LSTM", "Pandas", "Docker"],
    github: "#",
    accent: "from-primary to-secondary",
  },
  {
    title: "Workspace Demand Forecasting",
    description:
      "Time-series forecasting system for predicting workspace demand patterns. Built with Prophet and custom ARIMA models to optimize resource allocation across multiple locations.",
    tech: ["Python", "Prophet", "ARIMA", "Streamlit", "PostgreSQL"],
    github: "#",
    accent: "from-secondary to-accent",
  },
  {
    title: "Sentiment Analysis Engine",
    description:
      "NLP pipeline for real-time sentiment analysis on social media data. Fine-tuned BERT model achieving 92% accuracy on domain-specific text classification tasks.",
    tech: ["PyTorch", "BERT", "FastAPI", "Redis", "AWS"],
    github: "#",
    accent: "from-accent to-primary",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Showcase of my work in AI, ML, and Data Science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="card-shine bg-card rounded-2xl flex flex-col border border-border shadow-sm group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-1.5 bg-gradient-to-r ${project.accent}`} />
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-lg font-heading font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors font-medium"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
