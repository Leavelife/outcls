import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();

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

      {/* MENU */}
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
    fontFamily: "Bebas Neue, cursive",
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
};
