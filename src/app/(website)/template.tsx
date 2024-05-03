"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      console.log("SCROLL TOP");
      setTimeout(
        () =>
          window.scrollTo({
            top: -140,
            left: 0,
            behavior: "smooth",
          }),
        100
      );
    } else {
      setTimeout(() => scrollToDiv(hash), 1500);
    }
  }, [pathName]);

  return (
    <AnimatePresence
      mode="wait"
      // onExitComplete={() => {
      //   console.log("On exit complete");
      //   setTimeout(() => {
      //     window.scroll({ top: -1, left: 0, behavior: "smooth" });
      //   }, 500);
      // }}
    >
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

const scrollToDiv = (hash: string) => {
  const target = document.getElementById(hash.slice(1)) as HTMLElement;

  if (hash && target) {
    const offset = target.offsetTop;
    window.scrollTo({
      top: offset - 100,
      behavior: "smooth",
    });
  }
};
