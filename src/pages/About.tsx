import { motion } from "framer-motion";
import { Target, TrendingUp } from "lucide-react";
import { SITE, SKILL_CATEGORIES, TOOLS } from "@/data/content";
import { Marquee } from "@/components/Marquee";

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 overflow-x-hidden">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-parchment-100 mb-6">About</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{SITE.aboutIntro}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16 items-center mb-24">
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
            <h3 className="text-2xl font-semibold text-parchment-100">My Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{SITE.aboutPart1}</p>
              <p>{SITE.aboutPart2}</p>
              <p>{SITE.aboutPart4}</p>
              <p>{SITE.aboutPart3}</p>
            </div>
          </motion.div>
        </div>

        {/* Skills & Expertise */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold text-parchment-100">Skills & Expertise</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {SKILL_CATEGORIES.map((category, categoryIndex) => {
              const Icon = categoryIndex === 0 ? Target : TrendingUp;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  className="bg-ink-800/50 backdrop-blur-sm rounded-xl p-8 border border-primary-500/20"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary-500/10 rounded-lg">
                      <Icon className="size-6 text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-parchment-100">{category.title}</h3>
                  </div>
                  <ul className="grid grid-cols-1 gap-3">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-semibold text-parchment-100">Tools & Technologies</h3>
          </motion.div>

          <Marquee pauseOnHover direction="right">
            {TOOLS.map((tool) => (
              <div key={tool.name} className="w-52">
                <div className="bg-ink-800/30 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-500/30 hover:border-primary-500/50 cursor-pointer transition-colors">
                  <div className="p-3 bg-primary-500/15 rounded-lg flex justify-center items-center mb-3 mx-auto w-fit">
                    <img src={tool.path} alt={tool.name} className="size-10" />
                  </div>
                  <span className="text-sm font-medium text-parchment-100">{tool.name}</span>
                </div>
              </div>
            ))}
          </Marquee>
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
