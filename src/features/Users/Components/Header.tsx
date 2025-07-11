import React from "react";

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={{ margin: 0 }}>Talent Node</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#282c34",
    padding: "1rem",
    color: "white",
    textAlign: "center" as const,
  },
};

export default Header;
