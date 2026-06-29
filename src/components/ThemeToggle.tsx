import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Sparkles, Check } from "lucide-react";
import { useTheme, type Theme } from "@/contexts/ThemeContext";

const OPTIONS: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: "original", label: "Original", icon: Sparkles },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "light", label: "Light", icon: Sun },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const ActiveIcon = OPTIONS.find((o) => o.value === theme)?.icon ?? Sparkles;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change theme"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-header-border/25 text-header-text hover:border-header-border/50 transition-colors"
      >
        <ActiveIcon size={16} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-3 w-44 rounded-xl border border-header-border/20 bg-header-bg text-header-text shadow-xl shadow-black/40 p-1.5 overflow-hidden z-50"
          >
            {OPTIONS.map((opt) => {
              const Icon = opt.icon;
              const active = opt.value === theme;
              return (
                <button
                  key={opt.value}
                  onClick={() => {
                    setTheme(opt.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] transition-colors ${
                    active
                      ? "bg-header-text/15 text-header-text"
                      : "text-header-text/70 hover:bg-header-text/10 hover:text-header-text"
                  }`}
                >
                  <Icon size={14} />
                  <span className="flex-1 text-left">{opt.label}</span>
                  {active && <Check size={13} />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
