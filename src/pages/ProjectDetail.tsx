import { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { PROJECTS, type Project } from "@/data/content";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground hover:text-primary-400 transition-colors mb-10"
          >
            <ArrowLeft size={14} /> All projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-3xl mb-10"
        >
          <p className="eyebrow mb-4">
            {project.category === "competition" ? "Competition Project" : "Educational Project"} · {project.dates}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-parchment-100 leading-tight mb-5">
            {project.title}
          </h1>
          <p className="text-[16px] text-muted-foreground leading-relaxed">{project.summary}</p>
        </motion.div>

        <ProjectCover project={project} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14 border-b border-primary-500/10 pb-10">
          <Meta label="Organisation" value={project.org} />
          <Meta label="Role" value={project.role} />
          <Meta label="Timeline" value={project.dates} />
          <Meta label="Location" value={project.location ?? "—"} />
        </div>

        {project.stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {project.stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-bold text-primary-400">{s.value}</p>
                <p className="text-[13px] text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="max-w-2xl mb-20">
          {project.body.map((para, i) => (
            <p key={i} className="text-[15.5px] text-parchment-200 leading-relaxed mb-5">
              {para}
            </p>
          ))}

          <div className="flex flex-wrap gap-2 mt-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary-500/25 px-3 py-1.5 text-[12px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.links && project.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[14px] font-medium text-primary-400 hover:text-primary-300 transition-colors"
                >
                  {link.label} <ExternalLink size={14} />
                </a>
              ))}
            </div>
          )}
        </div>

        {project.journey && (
          <div className="mb-10">
            <p className="eyebrow mb-4">Program structure</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-parchment-100 mb-10">
              How it's structured
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.journey.map((stage, i) => (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-ink-800/50 rounded-xl p-6 border border-primary-500/20"
                >
                  <p className="text-base font-semibold text-parchment-100 mb-2">{stage.label}</p>
                  <p className="text-[13.5px] text-muted-foreground leading-relaxed">{stage.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-24 pt-10 border-t border-primary-500/10 flex items-center justify-between flex-wrap gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-muted-foreground hover:text-primary-400 transition-colors"
          >
            <ArrowLeft size={15} /> Back to all projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-3 text-[13px] font-semibold text-on-primary hover:bg-primary-400 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow mb-2">{label}</p>
      <p className="text-[14px] text-parchment-100 font-medium">{value}</p>
    </div>
  );
}

function ProjectCover({ project }: { project: Project }) {
  // Build the list of images to show: gallery images take priority,
  // falling back to the single cover image if no gallery is set.
  const images =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : project.cover.kind === "image" && project.cover.src
      ? [{ src: project.cover.src, caption: undefined }]
      : [];

  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const hasMultiple = images.length > 1;

  const goNext = () => setIndex((i) => (i + 1) % images.length);
  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  // Close on Escape, navigate with arrow keys while lightbox is open
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight" && hasMultiple) goNext();
      if (e.key === "ArrowLeft" && hasMultiple) goPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, hasMultiple]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative aspect-[16/8] rounded-2xl overflow-hidden mb-14 border border-primary-500/20"
        style={{
          background:
            images.length === 0 && project.cover.kind === "gradient"
              ? `linear-gradient(135deg, ${project.cover.gradientFrom}, ${project.cover.gradientTo})`
              : "#0c0a13",
        }}
      >
        {images.length > 0 && (
          <>
            <button
              onClick={() => setLightboxOpen(true)}
              aria-label="Expand image"
              className="absolute inset-0 w-full h-full cursor-zoom-in group"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={images[index].src}
                  src={images[index].src}
                  alt={images[index].caption ?? project.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/30 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 rounded-full bg-ink-900/80 px-4 py-2 text-[12.5px] text-parchment-100">
                  <Maximize2 size={14} /> Click to expand
                </div>
              </div>
            </button>

            {images[index].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-900/90 to-transparent px-6 pt-10 pb-5 pointer-events-none">
                <p className="text-[13px] text-parchment-100">{images[index].caption}</p>
              </div>
            )}

            {hasMultiple && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center h-9 w-9 rounded-full bg-ink-900/60 text-parchment-100 hover:bg-ink-900/85 transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center h-9 w-9 rounded-full bg-ink-900/60 text-parchment-100 hover:bg-ink-900/85 transition-colors"
                >
                  <ChevronRight size={18} />
                </button>

                <div className="absolute top-4 right-4 flex gap-1.5">
                  {images.map((img, i) => (
                    <button
                      key={img.src}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIndex(i);
                      }}
                      aria-label={`Go to image ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === index ? "w-6 bg-primary-400" : "w-1.5 bg-parchment-100/40"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </motion.div>

      <AnimatePresence>
        {lightboxOpen && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-50 bg-ink-900/95 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              aria-label="Close"
              className="absolute top-5 right-5 flex items-center justify-center h-10 w-10 rounded-full bg-ink-800/80 text-parchment-100 hover:bg-ink-800 transition-colors"
            >
              <X size={20} />
            </button>

            <motion.img
              key={images[index].src}
              src={images[index].src}
              alt={images[index].caption ?? project.title}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-[92vw] object-contain rounded-lg"
            />

            {images[index].caption && (
              <p
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[13px] text-parchment-200 bg-ink-900/70 px-4 py-2 rounded-full max-w-[90vw] text-center"
              >
                {images[index].caption}
              </p>
            )}

            {hasMultiple && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  aria-label="Previous image"
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex items-center justify-center h-11 w-11 rounded-full bg-ink-800/70 text-parchment-100 hover:bg-ink-800 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  aria-label="Next image"
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex items-center justify-center h-11 w-11 rounded-full bg-ink-800/70 text-parchment-100 hover:bg-ink-800 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
