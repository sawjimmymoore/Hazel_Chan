import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/content";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const thumbnail =
    project.cover.kind === "image" && project.cover.src
      ? project.cover.src
      : project.gallery && project.gallery.length > 0
      ? project.gallery[0].src
      : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/projects/${project.slug}`} className="group block h-full">
        <div className="bg-ink-800/50 backdrop-blur-sm rounded-xl h-full p-6 border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300">
          <div
            className="relative aspect-[16/9] rounded-lg overflow-hidden mb-5"
            style={{
              background:
                !thumbnail && project.cover.kind === "gradient"
                  ? `linear-gradient(135deg, ${project.cover.gradientFrom}, ${project.cover.gradientTo})`
                  : "#0c0a13",
            }}
          >
            {thumbnail && (
              <img
                src={thumbnail}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <span className="absolute top-3 left-3 inline-flex items-center font-mono text-[11px] uppercase tracking-widest2 text-white bg-black/55 px-2.5 py-1 rounded-full backdrop-blur-sm">
              {project.category === "competition" ? "Competition" : "Educational"}
            </span>
          </div>

          <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted-foreground mb-2">
            {project.dates}
          </p>
          <h3 className="text-lg font-semibold text-parchment-100 mb-1.5 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-[13.5px] text-muted-foreground leading-relaxed mb-3">{project.summary}</p>
          <span className="inline-flex items-center gap-1.5 text-[13px] text-primary-400 group-hover:text-primary-300 transition-colors">
            View Project <ExternalLink size={13} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
