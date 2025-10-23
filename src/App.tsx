import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import CadastroUsuarioPage from "./pages/CadastroUsuarioPage";
import ClientPage from "./pages/ClientPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(true);

  const handleRegistrationSuccess = () => {
    setShowLoginPage(true);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleNavigateToRegister = () => {
    setShowLoginPage(false);
  };

  if (isAuthenticated) {
    return <ClientPage />;
  }

  return (
    <div style={{ padding: "20px" }}>
      {showLoginPage ? (
        <LoginPage
          onLoginSuccess={handleLoginSuccess}
          onNavigateToRegister={handleNavigateToRegister}
        />
      ) : (
        <CadastroUsuarioPage
          onRegistrationSuccess={handleRegistrationSuccess}
        />
      )}
    </div>
  );
}

export default App;