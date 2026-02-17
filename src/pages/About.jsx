import PageTransition from "../components/pageTransition";
import { motion } from "framer-motion";

import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";

export default function About() {
  return (
    <PageTransition>
      <div style={styles.wrapper}>
        
        {/* HERO */}
        <motion.h1
          style={styles.hero}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          
        </motion.h1>

        <div style={styles.container}>
          
          {/* IMAGE LEFT */}
          <motion.img
            src={img7}
            alt="about"
            style={styles.image}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />

          {/* TEXT RIGHT */}
          <motion.div
            style={styles.textBox}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={styles.title}>STREET LUXURY</h2>
            <p style={styles.text}>
              OUTCLS adalah representasi dari individu yang berjalan di luar sistem.
              Setiap piece dirancang untuk membawa identitas, bukan sekadar pakaian.
              Minimal. Gelap. Berani.
            </p>
          </motion.div>
        </div>

        {/* SECOND SECTION */}
        <div style={styles.containerReverse}>
          <motion.div
            style={styles.textBox}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={styles.title}>IDENTITY OVER TREND</h2>
            <p style={styles.text}>
              Kami tidak mengikuti tren. Kami membangun karakter.
              Setiap drop terbatas. Setiap desain memiliki makna.
            </p>
          </motion.div>

          <motion.img
            src={img8}
            alt="about"
            style={styles.image}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </PageTransition>
  );
}

const styles = {
  wrapper: {
    background: "#000",
    paddingTop: "160px",
    color: "#fff",
    minHeight: "100vh",
    padding: "100px 40px",
  },

  hero: {
    fontFamily: "Bebas Neue",
    fontSize: "100px",
    textAlign: "center",
    letterSpacing: "8px",
    marginBottom: "80px",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
    marginBottom: "120px",
  },

  containerReverse: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "500px",
    objectFit: "cover",
    borderRadius: "12px",
  },

  textBox: {
    maxWidth: "500px",
  },

  title: {
    fontFamily: "Bebas Neue",
    fontSize: "48px",
    letterSpacing: "4px",
    marginBottom: "20px",
  },

  text: {
    fontFamily: "Inter",
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#ccc",
  },
};
