import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/layout/Navbar";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <CustomCursor />
      <AnimatedRoutes />

      {/* noise overlay */}
      <div style={styles.noise}></div>
    </Router>
  );
}

const styles = {
  noise: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 9998,
    opacity: 0.05,
    backgroundImage: `
      repeating-radial-gradient(circle at 0 0, rgba(255,255,255,0.03) 0 1px, transparent 1px 2px),
      repeating-radial-gradient(circle at 100% 100%, rgba(255,255,255,0.02) 0 1px, transparent 1px 2px)
    `,
  },
};
