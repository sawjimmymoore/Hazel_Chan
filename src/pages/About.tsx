import { motion } from "framer-motion";
import { SITE } from "@/data/content";

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-parchment-100 mb-6">About Me</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{SITE.aboutIntro}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="size-72 rounded-full overflow-hidden border-4 border-primary-500/20 shadow-2xl">
                <img
                  src={SITE.profileImage}
                  alt={SITE.fullName}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-500/30 rounded-full animate-pulse [animation-delay:1000ms]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-parchment-100">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{SITE.aboutPart1}</p>
              <p>{SITE.aboutPart2}</p>
              <p>{SITE.aboutPart4}</p>
              <p>{SITE.aboutPart3}</p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-primary-500/30 px-5 py-2.5 text-[13px] font-medium text-parchment-200 hover:border-primary-400 hover:text-primary-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={SITE.resumeFile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-primary-500/30 px-5 py-2.5 text-[13px] font-medium text-parchment-200 hover:border-primary-400 hover:text-primary-300 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
