import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Talent Node. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#282c34",
    padding: "1rem",
    color: "white",
    textAlign: "center" as const,
    position: "fixed" as const,
    bottom: 0,
    width: "100%",
  },
};

export default Footer;
