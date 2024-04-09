"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        style={{ paddingTop: "70px" }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
