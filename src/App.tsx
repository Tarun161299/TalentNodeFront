import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./features/LoginPage";
import Dashboard from "./features/dashboard/dashboard";


const App: React.FC = () => {
  // Simple auth check example (token exists in localStorage)
  debugger
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
             <LoginPage />
          }
        />
        <Route
          path="/dashboard"
          element={
      <Dashboard /> 
          }
        />
        {/* Add a catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
