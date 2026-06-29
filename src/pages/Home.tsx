import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Mail, MapPin, Download } from "lucide-react";
import { SITE, PROJECTS } from "@/data/content";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20">
        {/* ambient glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/[0.06] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/[0.05] rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full backdrop-blur-md bg-ink-700/60 border-2 border-primary-400/50 shadow-2xl text-primary-400 animate-pulse-glow">
                {SITE.greeting}
              </span>
            </motion.div>

            {/* Name + typing title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text"
              >
                I'm {SITE.shortName}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground"
              >
                <TypeAnimation
                  preRenderFirstString
                  sequence={SITE.titles.flatMap((t) => [t, 1200])}
                  speed={50}
                  repeat={Infinity}
                />
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              {SITE.tagline}
            </motion.p>

            {/* Contact info row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Mail className="size-4" />
                <span>{SITE.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4" />
                <span>{SITE.location}</span>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="px-8 py-3.5 text-base font-medium w-full sm:w-52 rounded-lg bg-primary-500 text-on-primary hover:bg-primary-400 transition-colors border border-primary-300/30 text-center"
              >
                Get In Touch
              </Link>
              <a
                href={SITE.resumeFile}
                download="Hazel_Resume.pdf"
                className="px-8 py-3.5 text-base font-medium w-full sm:w-52 rounded-lg bg-ink-800 border border-primary-500/30 text-parchment-100 hover:border-primary-400 transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                Download Resume <Download size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 px-6 bg-ink-800/40 overflow-x-hidden">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold text-parchment-100 mb-4">
              Projects & Achievements
            </h2>
            <p className="text-muted-foreground">Milestones from my academic years and current work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-primary-400 hover:text-primary-300 transition-colors"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
