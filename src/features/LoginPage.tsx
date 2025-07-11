import React, { useState } from "react";
import { AuthResponse, LoginCredentials } from "./Users/type";
import { login } from "./Users/api";
import Header from "./Users/Components/Header";
import LoginForm from "./Users/Components/LoginForm";
import Footer from "./Users/Components/footer";
import { Navigate, useNavigate } from "react-router-dom"; 


const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<AuthResponse | null>(null);
const navigate=useNavigate();
  const handleLogin = async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);
    try {
      const response = await login(credentials);
      setUser(response);
      localStorage.setItem("token", response.token); // optional
      navigate("/dashboard");
      alert(`Welcome, ${response.user.name}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main style={styles.main}>
        {user ? (
          <h3>Logged in as {user.user.name}</h3>
        ) : (
          <LoginForm onLogin={handleLogin} loading={loading} error={error} />
        )}
      </main>
      <Footer />
    </>
  );
};

const styles = {
  main: {
    minHeight: "calc(100vh - 136px)", // header + footer height approx
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9ecef",
    padding: "2rem",
  },
};

export default LoginPage;
