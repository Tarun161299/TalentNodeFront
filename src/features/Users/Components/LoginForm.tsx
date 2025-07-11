import React, { useState } from "react";
import { LoginCredentials } from "../type";

interface Props {
  onLogin: (data: LoginCredentials) => void;
  loading: boolean;
  error: string | null;
}

const LoginForm: React.FC<Props> = ({ onLogin, loading, error }) => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>Login</h2>
      <input
        style={styles.input}
        type="email"
        name="email"
        placeholder="Email"
        value={credentials.email}
        onChange={handleChange}
        required
      />
      <input
        style={styles.input}
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
        required
      />
      <button type="submit" style={styles.button} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      {error && <p style={styles.error}>{error}</p>}
    </form>
  );
};

const styles = {
  form: {
    backgroundColor: "#f4f4f4",
    padding: "2rem",
    borderRadius: "8px",
    width: "300px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column" as const,
  },
  title: {
    marginBottom: "1rem",
    textAlign: "center" as const,
  },
  input: {
    padding: "0.75rem",
    marginBottom: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    padding: "0.75rem",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "bold" as const,
    cursor: "pointer",
  },
  error: {
    marginTop: "1rem",
    color: "red",
    textAlign: "center" as const,
  },
};

export default LoginForm;
