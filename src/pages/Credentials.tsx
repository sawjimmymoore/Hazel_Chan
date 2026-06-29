import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, ExternalLink, FileText, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { EDUCATION, GENERAL_STUDY, CERTIFICATES, REFERENCES, SITE, type EducationItem } from "@/data/content";

function isPdf(path: string) {
  return path.toLowerCase().endsWith(".pdf");
}

function EducationCard({ edu, index }: { edu: EducationItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-ink-800/50 backdrop-blur-sm rounded-xl p-8 border border-primary-500/20"
    >
      <h4 className="text-2xl font-semibold text-parchment-100 mb-2">{edu.degree}</h4>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground mb-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="size-4" />
          <span className="font-medium">{edu.school}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="size-4" />
          <span>{edu.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="size-4" />
          <span>{edu.period}</span>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-6">{edu.description}</p>
      {edu.highlight && <p className="text-primary-400 font-medium leading-relaxed mb-6">{edu.highlight}</p>}

      {edu.achievements && (
        <div>
          <h5 className="text-lg font-semibold text-parchment-100 mb-4">Key Achievements</h5>
          <ul className="grid md:grid-cols-2 gap-3">
            {edu.achievements.map((a, j) => (
              <li key={j} className="flex items-start gap-3 text-muted-foreground">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {edu.image && (
        <div className="mt-5">
          <a
            href={edu.image}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
          >
            <span>View Certificate</span>
            <ExternalLink className="size-4" />
          </a>
        </div>
      )}
    </motion.div>
  );
}

function CertCarousel() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(CERTIFICATES.length / perPage);

  const visible = CERTIFICATES.slice(page * perPage, page * perPage + perPage);

  return (
    <div className="relative w-full">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((cert, index) => (
          <motion.a
            key={cert.title + cert.issuer}
            href={cert.image}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-ink-800/50 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 group flex flex-col"
          >
            <div className="flex-1 min-w-0 mb-3">
              <h4 className="text-base font-semibold text-parchment-100 mb-1 group-hover:text-primary-400 transition-colors line-clamp-2">
                {cert.title}
              </h4>
              <div className="text-xs text-muted-foreground mb-2">
                {cert.issuer} • {cert.year}
              </div>
            </div>
            {cert.description && (
              <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-3">{cert.description}</p>
            )}
            <div className="flex items-center justify-between mt-auto">
              <span className="inline-flex items-center gap-2 text-xs text-primary-400 group-hover:text-primary-300 transition-colors">
                {isPdf(cert.image) ? <FileText size={13} /> : null}
                <span>View Certificate</span>
                <ExternalLink className="size-3.5" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {pages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setPage((p) => (p - 1 + pages) % pages)}
            className="size-9 flex items-center justify-center rounded-full border border-primary-500/30 text-parchment-200 hover:border-primary-400 hover:text-primary-300 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  i === page ? "bg-primary-500 w-6" : "bg-primary-500/20 w-2"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage((p) => (p + 1) % pages)}
            className="size-9 flex items-center justify-center rounded-full border border-primary-500/30 text-parchment-200 hover:border-primary-400 hover:text-primary-300 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

export default function Credentials() {
  return (
    <div className="pt-32 pb-24 px-6 overflow-x-hidden">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-parchment-100 mb-4">
            Education & Certifications
          </h1>
        </motion.div>

        <div className="flex justify-center mb-16">
          <a
            href={SITE.resumeFile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-[13px] font-semibold text-on-primary hover:bg-primary-400 transition-colors"
          >
            <Download size={14} /> Download full résumé
          </a>
        </div>

        {/* Academic Background */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-parchment-100 mb-12 text-center"
          >
            Academic Background
          </motion.h3>
          <div className="space-y-8">
            {EDUCATION.map((edu, i) => (
              <EducationCard key={edu.school} edu={edu} index={i} />
            ))}
          </div>
        </div>

        {/* General Studies */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-parchment-100 mb-12 text-center"
          >
            General Studies
          </motion.h3>
          <div className="space-y-8">
            {GENERAL_STUDY.map((edu, i) => (
              <EducationCard key={edu.school} edu={edu} index={i} />
            ))}
          </div>
        </div>

        {/* Certifications carousel */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-parchment-100 mb-12 text-center"
          >
            Certifications
          </motion.h3>
          <CertCarousel />
        </div>

        {/* References */}
        <div>
          <h2 className="text-3xl font-semibold text-parchment-100 mb-10 text-center">References</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {REFERENCES.map((ref, i) => (
              <motion.div
                key={ref.email}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl border border-primary-500/20 bg-ink-800/40 p-5"
              >
                <p className="font-semibold text-parchment-100 mb-1">{ref.name}</p>
                <p className="text-[13px] text-muted-foreground mb-0.5">{ref.title}</p>
                <p className="text-[13px] text-muted-foreground/70 mb-3">{ref.org}</p>
                <a
                  href={`mailto:${ref.email}`}
                  className="text-[12.5px] text-primary-400 hover:text-primary-300 transition-colors"
                >
                  {ref.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
