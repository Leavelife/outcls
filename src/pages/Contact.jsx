import PageTransition from "../components/pageTransition";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {

    const crew = [
        { role: "HIPSTER", name: "VOID" },
        { role: "HIPSTER", name: "PLANGTON" },
        { role: "HACKER", name: "FIGURES" },
        { role: "HACKER", name: "MONARCH" },
    ];
    const [focus, setFocus] = useState(null);
  
    return (
    <PageTransition>
      <div style={styles.wrapper}>
        
        <div style={styles.teamSection}>
            
            {/* CEO */}
            <motion.div
                style={styles.ceoCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
            >
                <div style={styles.cardContent}>
                <p style={styles.role}>CEO</p>
                <h2 style={styles.ceoName}>ZYU</h2>
                </div>
            </motion.div>

            {/* CREW GRID */}
            <div style={styles.crewGrid}>
                {crew.map((member, i) => (
                <motion.div
                    key={i}
                    style={styles.card}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover="hover"
                    viewport={{ once: true }}
                >
                    <motion.div
                    style={styles.cardContent}
                    variants={{
                        hover: { y: -10 },
                    }}
                    >
                    <p style={styles.role}>{member.role}</p>
                    <h3 style={styles.name}>{member.name}</h3>
                    </motion.div>

                    {/* hover glow */}
                    <motion.div
                    style={styles.glow}
                    variants={{
                        hover: { opacity: 0.25 },
                    }}
                    />
                </motion.div>
                ))}
            </div>
        </div>  
        <div style={styles.formSection}>
            <h2 style={styles.sectionTitle}>GET IN TOUCH</h2>

        <motion.form
            style={styles.form}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div style={styles.inputWrapper}>
                <input type="text" placeholder="NAME" style={styles.input} onFocus={() => setFocus("name")} onBlur={() => setFocus(null)}/>
                <div style={styles.inputLine}></div>

                <motion.div
                    style={styles.inputActiveLine}
                    animate={{ width: focus === "name" ? "100%" : "0%" }}
                />
            </div>
            <div style={styles.inputWrapper}>
                <input type="email" placeholder="EMAIL" style={styles.input} onFocus={() => setFocus("email")} onBlur={() => setFocus(null)}/>
                <div style={styles.inputLine}></div>

                <motion.div
                    style={styles.inputActiveLine}
                    animate={{ width: focus === "email" ? "100%" : "0%" }}
                />
            </div>
            <div style={styles.inputWrapper}>
                <textarea placeholder="MESSAGE" style={styles.input} onFocus={() => setFocus("message")} onBlur={() => setFocus(null)}></textarea>
                <div style={styles.inputLine}></div>

                <motion.div
                    style={styles.inputActiveLine}
                    animate={{ width: focus === "message" ? "100%" : "0%" }}
                />
            </div>
            <motion.button
                type="submit"
                style={styles.button}
                whileHover={{ scale: 1.05, letterSpacing: "4px" }}
                whileTap={{ scale: 0.95 }}
            >
                SEND MESSAGE
            </motion.button>
            </motion.form>
        </div>

        <footer style={styles.footer}>
            <p className="mx-5">© 2026 OUTCLS</p>
            <div style={styles.footerLinks}>
                <span>INSTAGRAM</span>
                <span>ARCHIVE</span>
                <span>LOOKBOOK</span>
            </div>
        </footer>

      </div>
    </PageTransition>
  );
}

const styles = {
    wrapper: {
        background: "#000",
        paddingTop: "300px",
        color: "#fff",
        minHeight: "100vh",
        padding: "100px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    hero: {
        fontFamily: "Bebas Neue",
        fontSize: "80px",
        letterSpacing: "6px",
        marginBottom: "60px",
    },
    formSection: {
        width: "100%",
        maxWidth: "550px",
        margin: "0 auto 140px auto",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    sectionTitle: {
        fontFamily: "Bebas Neue",
        fontSize: "40px",
        letterSpacing: "6px",
        marginBottom: "60px",
        color: "#fff",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "450px",
        gap: "40px",
        justifyContent: "center",
    },

    input: {
        background: "transparent",
        border: "none",
        borderBottom: "2px solid #444",
        color: "#fff",
        padding: "12px 0 8px 0",
        outline: "none",
        fontFamily: "Inter",
        fontSize: "14px",
        letterSpacing: "1px",
        transition: "all 0.3s ease",
        width: "100%",
    },
    inputWrapper: {
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },

    inputLine: {
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "2px",
        width: "100%",
        background: "#333",
    },

    inputActiveLine: {
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "2px",
        width: "0%",
        background: "#fff",
        transition: "width 0.3s ease",
    },
    textarea: {
        background: "transparent",
        border: "none",
        borderBottom: "2px solid #444",
        color: "#fff",
        padding: "12px 0 8px 0",
        outline: "none",
        fontFamily: "Inter",
        fontSize: "14px",
        letterSpacing: "1px",
        minHeight: "100px",
        resize: "none",
        transition: "all 0.3s ease",
    },

    button: {
        marginTop: "30px",
        padding: "16px 32px",
        background: "#fff",
        color: "#000",
        border: "none",
        fontFamily: "Bebas Neue",
        fontSize: "14px",
        letterSpacing: "3px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontWeight: "600",
    },
    teamSection: {
        paddingTop: "100px",
        width: "100%",
        marginBottom: "120px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    ceoCard: {
        height: "260px",
        width: "100%",
        maxWidth: "400px",
        background: "#111",
        border: "1px solid #222",
        display: "flex",
        alignItems: "flex-end",
        padding: "30px",
        marginBottom: "60px",
        position: "relative",
        overflow: "hidden",
    },

    ceoName: {
        fontFamily: "Bebas Neue",
        fontSize: "48px",
        letterSpacing: "6px",
    },
    crewGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "20px",
        maxWidth: "900px",
        width: "100%",
    },

    card: {
        height: "180px",
        background: "#111",
        border: "1px solid #222",
        display: "flex",
        alignItems: "flex-end",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
    },
    cardContent: {
        position: "relative",
        zIndex: 2,
    },

    glow: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at center, #fff, transparent)",
        opacity: 0,
        zIndex: 1,
    },

    cardOverlay: {
        zIndex: 2,
    },

    role: {
        fontFamily: "Inter",
        fontSize: "12px",
        letterSpacing: "2px",
        color: "#888",
    },

    name: {
        fontFamily: "Bebas Neue",
        fontSize: "28px",
        letterSpacing: "4px",
    },
    footer: {
        borderTop: "1px solid #222",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "Inter",
        fontSize: "12px",
        letterSpacing: "2px",
        color: "#666",
    },

    footerLinks: {
        display: "flex",
        gap: "30px",
    },

};
