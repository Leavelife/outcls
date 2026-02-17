import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="section flex-col text-center">
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-semibold"
      >
        OUTCLS
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.4 }}
        className="mt-6 max-w-md text-sm tracking-widest"
      >
        A DIGITAL FASHION EXPERIENCE
      </motion.p>
    </section>
  )
}
