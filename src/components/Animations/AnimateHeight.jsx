
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

export function AnimateHeight({open, children}){

    return(
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                >
                {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}