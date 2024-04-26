"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  useEffect(() => {
    setTimeout(() => scrollToDiv(), 1500);
  }, [pathName]);

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div
        key={pathName}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

const scrollToDiv = () => {
  const hash = window.location.hash;
  if (!hash) return;

  const target = document.getElementById(hash.slice(1)) as HTMLElement;

  if (hash && target) {
    const offset = target.offsetTop;
    window.scrollTo({
      top: offset - 100,
      behavior: "smooth",
    });
  }
};
