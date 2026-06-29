import { motion } from "framer-motion";
import { Building, Calendar, MapPin, Target, TrendingUp } from "lucide-react";
import {
  CURRENT_ROLE,
  PROFESSIONAL_EXPERIENCE,
  TEACHING_EXPERIENCE,
  SKILL_CATEGORIES,
  TOOLS,
  type ExperienceItem,
} from "@/data/content";
import { Marquee } from "@/components/Marquee";

function ExperienceCard({ exp, index }: { exp: ExperienceItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="relative"
    >
      <div className="absolute left-6 top-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-bg hidden md:block" />
      <div className="md:ml-20 bg-ink-800/50 backdrop-blur-sm rounded-xl p-8 border border-primary-500/20">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-parchment-100 mb-2">{exp.role}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <Building className="size-4" />
              <span className="font-medium">{exp.org}</span>
            </div>
            {exp.location && (
              <div className="flex items-center gap-2">
                <MapPin className="size-4" />
                <span>{exp.location}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              <span>{exp.dates}</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-parchment-100 mb-4">Key Achievements</h4>
          <ul className="grid md:grid-cols-2 gap-3">
            {exp.bullets.map((b, j) => (
              <li key={j} className="flex items-start gap-3 text-muted-foreground">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="relative mt-10">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-500/20 hidden md:block" />
      <div className="space-y-12">
        {items.map((exp, i) => (
          <ExperienceCard key={exp.org + exp.role} exp={exp} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="pt-32 pb-24 px-6 overflow-x-hidden">
      <div className="container-page">
        {/* Current role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-parchment-100 mb-4">
            Working Experiences
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-gradient-to-br from-primary-700/30 to-ink-800 p-8 md:p-10 mb-20 border border-primary-500/30"
        >
          <p className="eyebrow mb-3">Current</p>
          <h3 className="text-2xl font-semibold text-parchment-100 mb-1">{CURRENT_ROLE.role}</h3>
          <p className="text-[14px] text-muted-foreground mb-6">
            {CURRENT_ROLE.org} · {CURRENT_ROLE.dates} · {CURRENT_ROLE.location}
          </p>
          <ul className="grid md:grid-cols-2 gap-3 max-w-2xl">
            {CURRENT_ROLE.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] text-parchment-200">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-400 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        <Timeline items={PROFESSIONAL_EXPERIENCE} />

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold text-parchment-100">
              Teaching & Mentoring Experience
            </h2>
          </motion.div>
          <Timeline items={TEACHING_EXPERIENCE} />
        </div>

        {/* Skills */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold text-parchment-100">Skills & Expertise</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
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

          {/* Tools marquee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-semibold text-parchment-100 mb-4">Tools & Technologies</h3>
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
      </div>
    </div>
  );
}
