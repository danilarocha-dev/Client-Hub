import React, { useState, useEffect } from "react";
import CampoTexto from "../components/CampoTexto/CampoTexto";
import Botao from "../components/Botao/Botao";
import bcrypt from "bcryptjs";

interface LoginPageProps {
  onLoginSuccess: () => void;
  onNavigateToRegister: () => void;
}

function LoginPage({ onLoginSuccess, onNavigateToRegister }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = () => {
    if (!email || !senha) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    const usuario = usuarios.find(
      (u: { email: string }) => u.email === email
    );

    if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
      alert("Login realizado com sucesso!");
      setErro("");
      onLoginSuccess();
    } else {
      setErro("E-mail ou senha inválidos!");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh" }}>
      <div style={{ background: "#f2f2f2", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", minWidth: "450px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ margin: "0 0 20px 0" }}>Login</h1>
        <CampoTexto
          obrigatorio
          label="E-mail"
          placeholder="Digite seu e-mail"
          valor={email}
          aoAlterado={setEmail}
          inputType="email"
        />
        <CampoTexto
          obrigatorio
          label="Senha"
          placeholder="Digite sua senha"
          valor={senha}
          aoAlterado={setSenha}
          inputType="password"
        />
        {erro && <p style={{ color: "red" }}>{erro}</p>}
        <Botao onClick={handleLogin} type="button" style={{ width: "100%" }}>
          Entrar
        </Botao>
        <p>
          Não tem uma conta?
        </p>
        <Botao onClick={onNavigateToRegister} type="button" style={{ marginTop: '10px', backgroundColor: '#08CB00' }}>
          Cadastre-se
        </Botao>
      </div>
    </div>
  );
}

export default LoginPage;