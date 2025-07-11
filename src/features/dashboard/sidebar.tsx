import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiUser, FiSettings, FiLogOut } from "react-icons/fi";

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  return (
    <nav style={styles.sidebar}>
      <div style={styles.logo}>MyApp</div>
      <ul style={styles.ul}>
        <li>
          <NavLink to="/dashboard" style={linkStyle} end>
              <div style={{ display: 'flex', alignItems: 'center' }}>
              <FiHome style={styles.icon} />
              Dashboard
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/profile" style={linkStyle}>
           <div style={{ display: 'flex', alignItems: 'center' }}>
              <FiUser style={styles.icon} />
              Profile
           </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/settings" style={linkStyle}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
              <FiSettings style={styles.icon} />
              Settings
           </div>
          </NavLink>
        </li>
      </ul>
      <button onClick={onLogout} style={styles.logoutButton}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FiLogOut style={{ marginRight: 8 }} />
          Logout
        </div>
      </button>
    </nav>
  );
};

// Note: Inline styles can't use ":hover" directly.
// Move hover effects to CSS class if needed.
const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  display: "flex",
  alignItems: "center",
  padding: "12px 20px",
  marginBottom: 10,
  color: isActive ? "#fff" : "#bbb",
  backgroundColor: isActive ? "#007bff" : "transparent",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: 500,
  fontSize: 16,
  transition: "background-color 0.3s, color 0.3s",
  cursor: "pointer",
  //userSelect: "none",
  // ":hover" is not valid in inline style — move to CSS if needed
});

const styles = {
  sidebar: {
    width: 250,
    height: "100vh",
    backgroundColor: "#1e272e",
    padding: "2rem 1rem",
    boxSizing: "border-box" as const,
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
    color: "#bbb",
    boxShadow: "2px 0 8px rgba(0,0,0,0.15)",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold" as const,
    color: "#fff",
    marginBottom: 30,
    textAlign: "center" as const,
    letterSpacing: 2,
  },
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    flexGrow: 1,
  },
  icon: {
    marginRight: 12,
    fontSize: 20,
  },
  logoutButton: {
    backgroundColor: "#ff4757",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: 8,
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s",
  },
};

export default Sidebar;
