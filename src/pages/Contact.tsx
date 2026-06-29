import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { SITE, SOCIAL_MEDIA } from "@/data/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-parchment-100 mb-5">Contact Me</h1>
          <p className="text-[15.5px] text-muted-foreground leading-relaxed">
            I'm always open to new opportunities and challenges. Whether you have a question, a
            project, or just want to say hi, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 text-[15px] text-parchment-100 hover:text-primary-400 transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/10">
                <Mail size={16} />
              </span>
              {SITE.email}
            </a>
            <a
              href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-3 text-[15px] text-parchment-100 hover:text-primary-400 transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/10">
                <Phone size={16} />
              </span>
              {SITE.phone}
            </a>
            {SOCIAL_MEDIA.map((s) => (
              <a
                key={s.label}
                href={s.value}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[15px] text-parchment-100 hover:text-primary-400 transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/10">
                  <img src={s.path} alt="" className="size-4" />
                </span>
                {s.label}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {sent ? (
              <div className="rounded-2xl bg-ink-800 p-10 text-center border border-primary-500/20">
                <p className="text-[22px] font-semibold text-parchment-100 mb-2">Opening your email app…</p>
                <p className="text-[14px] text-muted-foreground">
                  If nothing opened, email directly at{" "}
                  <a href={`mailto:${SITE.email}`} className="underline text-primary-400">
                    {SITE.email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[13px] font-medium text-parchment-200 mb-2">Name</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-primary-500/20 bg-ink-800/50 px-4 py-3 text-[14px] text-parchment-100 focus:border-primary-400 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-parchment-200 mb-2">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-primary-500/20 bg-ink-800/50 px-4 py-3 text-[14px] text-parchment-100 focus:border-primary-400 outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-parchment-200 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-primary-500/20 bg-ink-800/50 px-4 py-3 text-[14px] text-parchment-100 focus:border-primary-400 outline-none transition-colors resize-none"
                    placeholder="Tell me a bit about what you have in mind…"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-[14px] font-semibold text-on-primary hover:bg-primary-400 transition-colors duration-200"
                >
                  Send message <Send size={14} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
