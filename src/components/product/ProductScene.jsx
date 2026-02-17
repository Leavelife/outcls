import { motion } from "framer-motion"

export default function ProductScene({ product }) {
  return (
    <section className="h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-72 mx-auto mb-6"
          whileHover={{ scale: 1.05 }}
        />
        <h2 className="text-2xl tracking-widest">{product.name}</h2>
        <p className="opacity-60">{product.price}</p>
      </motion.div>
    </section>
  )
}
