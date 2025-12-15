// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export function AnimateSlide({ open, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 0, opacity: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
