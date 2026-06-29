import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { PROJECTS, PROJECT_FILTERS, type ProjectCategory } from "@/data/content";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const [params, setParams] = useSearchParams();
  const activeCategory = (params.get("category") as ProjectCategory | null) ?? "all";

  const filtered = useMemo(() => {
    if (activeCategory === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const setCategory = (value: string) => {
    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    setParams(params, { replace: true });
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-parchment-100 leading-tight mb-5">
            Projects & Achievements
          </h1>
          <p className="text-[15.5px] text-muted-foreground leading-relaxed">
            Milestones during my academic years, plus current program design work at Fen-i.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-14 border-b border-primary-500/10 pb-6">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setCategory(f.value)}
              className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200 ${
                activeCategory === f.value
                  ? "bg-primary-500 text-on-primary"
                  : "bg-ink-800/50 text-muted-foreground hover:text-parchment-100 border border-primary-500/20"
              }`}
            >
              {f.label}
              <span className="ml-1.5 opacity-70">
                ({f.value === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f.value).length})
              </span>
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">No projects in this category yet — check back soon.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
