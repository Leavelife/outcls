import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle responsive breakpoint
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // posisi Y dari tengah layar → ke atas
  const logoY = useTransform(scrollY, [0, 200], ["40vh", "0px"]);

  // scale logo besar → kecil
  const logoScale = useTransform(scrollY, [0, 200], [2.8, 1]);

  // opacity menu muncul setelah logo sampai atas
  const menuOpacity = useTransform(scrollY, [150, 220], [0, 1]);

  // background navbar muncul setelah scroll
  const bgOpacity = useTransform(scrollY, [150, 220], [0, 0.85]);

  return (
    <>
      {/* NAVBAR BACKGROUND */}
      <motion.div
        style={{
          ...styles.navbarBg,
          opacity: bgOpacity,
        }}
      />

      {/* LOGO */}
      <motion.div
        style={{
          ...styles.logo,
          y: logoY,
          scale: logoScale,
        }}
      >
        OUTCLS
      </motion.div>

      {/* DESKTOP MENU */}
      {!isMobile && (
        <motion.nav
          style={{
            ...styles.menu,
            opacity: menuOpacity,
          }}
        >
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/contact">CONTACT</a>
        </motion.nav>
      )}

      {/* MOBILE BURGER BUTTON */}
      {isMobile && (
        <motion.button
          style={{
            ...styles.burgerButton,
            opacity: menuOpacity,
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            style={styles.burgerLine}
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            style={styles.burgerLine}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            style={styles.burgerLine}
          />
        </motion.button>
      )}

      {/* MOBILE MENU */}
      {isMobile && (
        <motion.nav
          style={styles.mobileMenu}
          initial={{ opacity: 0, x: 300 }}
          animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
          transition={{ duration: 0.3 }}
          pointerEvents={menuOpen ? "auto" : "none"}
        >
          <a href="/" onClick={handleLinkClick}>
            HOME
          </a>
          <a href="/about" onClick={handleLinkClick}>
            ABOUT
          </a>
          <a href="/contact" onClick={handleLinkClick}>
            CONTACT
          </a>
        </motion.nav>
      )}
    </>
  );
}

const styles = {
  navbarBg: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "70px",
    background: "rgba(0,0,0,0.85)",
    backdropFilter: "blur(10px)",
    zIndex: 998,
  },

  logo: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    fontFamily: "Anton",
    fontSize: "48px",
    letterSpacing: "8px",
    color: "#fff",
    zIndex: 999,
    pointerEvents: "none",
  },

  menu: {
    position: "fixed",
    top: "24px",
    right: "40px",
    display: "flex",
    gap: "40px",
    fontFamily: "Inter",
    letterSpacing: "2px",
    fontSize: "14px",
    color: "#fff",
    zIndex: 999,
  },

  burgerButton: {
    position: "fixed",
    top: "22px",
    right: "20px",
    width: "28px",
    height: "28px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 0,
    zIndex: 999,
  },

  burgerLine: {
    width: "24px",
    height: "2px",
    background: "#fff",
    display: "block",
    transition: "all 0.3s ease",
  },

  mobileMenu: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    height: "100vh",
    background: "rgba(0,0,0,0.95)",
    backdropFilter: "blur(10px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "60px",
    fontFamily: "Inter",
    letterSpacing: "2px",
    fontSize: "20px",
    color: "#fff",
    zIndex: 997,
  },
};
