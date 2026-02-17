import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      exit={{ opacity: 0, filter: "blur(10px)", y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </motion.div>
  );
}
