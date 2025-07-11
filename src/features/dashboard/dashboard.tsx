import React from "react";
import { Outlet, Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
//import Sidebar from "./components/Sidebar";

const DashboardHome: React.FC = () => (
  <div style={styles.pageContent}>
    <h2>Dashboard Home</h2>
    <p>Welcome to your dashboard main page!</p>
  </div>
);

const Profile: React.FC = () => (
  <div style={styles.pageContent}>
    <h2>Profile</h2>
    <p>This is your profile page.</p>
  </div>
);

const Settings: React.FC = () => (
  <div style={styles.pageContent}>
    <h2>Settings</h2>
    <p>Manage your settings here.</p>
  </div>
);

const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <div style={styles.container}>
      <Sidebar onLogout={logout} />
      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9fafb",
  },
  main: {
    flexGrow: 1,
    padding: 24,
    overflowY: "auto" as const,
  },
  pageContent: {
    backgroundColor: "#fff",
    borderRadius: 12,
    boxShadow: "0 2px 8px rgb(0 0 0 / 0.1)",
    padding: 24,
  },
};

export default Dashboard;
