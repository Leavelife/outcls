import PageTransition from "../components/pageTransition";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";

const images = [
  { src: img1, title: "URBAN CORE" },
  { src: img2, title: "NIGHT SIGNAL" },
  { src: img3, title: "STREET ARMOR" },
  { src: img4, title: "VOID MODE" },
  { src: img5, title: "CONCRETE FLOW" },
  { src: img6, title: "OUTCAST" },
];

export default function Landing() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * -5;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const resetTilt = (e) => {
    e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

  

  return (
    <PageTransition>
      <div style={styles.wrapper} ref={ref}>
        
        {/* HERO TEXT */}
        <motion.h1
          style={{ ...styles.hero, y: yParallax }}
            className="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          
        </motion.h1>
        <motion.p
            style={styles.tagline}
            className="tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            >
            OUT OF CLASS - OUT OF LINE
        </motion.p>

        <div style={styles.marquee} className="marquee">
            <motion.div
                style={styles.marqueeInner}
                className="marquee-inner"
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear", repeatType: "loop" }}
            >
                <span>OUTCLS — STREET LUXURY — LIMITED DROP — </span>
                <span>OUTCLS — STREET LUXURY — LIMITED DROP — </span>
                <span>OUTCLS — STREET LUXURY — LIMITED DROP — </span>
            </motion.div>
        </div>

        <motion.div
            style={styles.featured}
            className="featured"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            >
            <img src={img1} alt="featured" style={styles.featuredImg} />

            <div style={styles.featuredOverlay}>
                <h2 style={styles.featuredTitle}>LOUIS VULTTON</h2>
                <p style={styles.featuredDesc}>LIMITED DROP — 002 XL</p>
            </div>
        </motion.div>

        <h3 style={styles.sectionTitle} className="section-title">ALL PIECES</h3>


        <div style={styles.container} className="products-container grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((item, i) => (
            <motion.div
              key={i}
              style={styles.card}
              className="product-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover="hover"
              onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={(e) => resetTilt(e)}

            >
              {/* IMAGE */}
              <motion.img
                src={item.src}
                alt="streetwear"
                style={styles.image}
                variants={{
                  hover: {
                    scale: 1.05,
                    filter: "brightness(0.7)",
                  },
                }}
              />

              {/* GLITCH OVERLAY TEXT */}
              <motion.div style={styles.overlay}>
                <motion.h2
                  style={styles.title}
                  className="product-title"
                  variants={{
                    hover: {
                      x: [0, -2, 2, -2, 0],
                      textShadow:
                        "2px 0 red, -2px 0 cyan, 0 0 8px rgba(255,255,255,0.3)",
                    },
                  }}
                >
                  {item.title}
                </motion.h2>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

const styles = {
  wrapper: {
    background: "#000",
    paddingTop: "160px",
    minHeight: "200vh",
    color: "#fff",
  },

  hero: {
    fontFamily: "Bebas Neue",
    fontSize: "120px",
    textAlign: "center",
    letterSpacing: "10px",
    paddingTop: "40px",
    marginBottom: "40px",
  },

  container: {
    display: "grid",
    gap: "20px",
    padding: "40px",
  },

  card: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "transform 0.2s ease",
    transformStyle: "preserve-3d",
    },
  image: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    transition: "0.4s",
  },

  overlay: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
  },

  title: {
    fontFamily: "Bebas Neue",
    fontSize: "32px",
    letterSpacing: "4px",
  },
  tagline: {
    fontFamily: "Inter",
    textAlign: "center",
    letterSpacing: "4px",
    color: "#aaa",
    marginBottom: "80px",
  },
  marquee: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    borderTop: "1px solid #222",
    borderBottom: "1px solid #222",
    marginBottom: "120px",
  },
  marqueeInner: { 
    display: "flex",
    fontFamily: "Bebas Neue",
    fontSize: "40px",
    letterSpacing: "6px",
    padding: "20px 0",
    whiteSpace: "nowrap",
  },
  featured: {
    position: "relative",
    margin: "0 40px 120px 40px",
    height: "80vh",
    marginBottom: "140px",
  },
  featuredImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "16px",
    filter: "brightness(0.75)",
  },

  featuredOverlay: {
    position: "absolute",
    bottom: "40px",
    left: "40px",
  },

  featuredTitle: {
    fontFamily: "Bebas Neue",
    fontSize: "64px",
    letterSpacing: "6px",
  },

  featuredDesc: {
    fontFamily: "Inter",
    letterSpacing: "3px",
    color: "#ccc",
  },
  sectionTitle: {
    fontFamily: "Bebas Neue",
    fontSize: "32px",
    letterSpacing: "4px",
    marginBottom: "40px",
    marginLeft: "40px",
  },
};
