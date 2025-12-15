// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export function Grow({ isOpen, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
