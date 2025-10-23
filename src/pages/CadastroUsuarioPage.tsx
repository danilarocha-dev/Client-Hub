import React, { useState } from "react";
import CampoTexto from "../components/CampoTexto/CampoTexto";
import Botao from "../components/Botao/Botao";
import bcrypt from "bcryptjs";

interface CadastroUsuarioPageProps {
  onRegistrationSuccess: () => void;
}

function CadastroUsuarioPage({ onRegistrationSuccess }: CadastroUsuarioPageProps) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const handleCadastro = () => {
    if (!nome || !email || !senha) {
      setErro("Por favor, preencha todos os campos.");
      setSucesso("");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    const existeEmail = usuarios.some((u: { email: string }) => u.email === email);
    if (existeEmail) {
      setErro("E-mail já cadastrado!");
      setSucesso("");
      return;
    }

    const senhaCriptografada = bcrypt.hashSync(senha, 8);
    const novoUsuario = { nome, email, senha: senhaCriptografada };
    usuarios.push(novoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    setErro("");
    setSucesso("Usuário cadastrado com sucesso!");
    setNome("");
    setEmail("");
    setSenha("");

    setTimeout(() => {
      onRegistrationSuccess();
    }, 2000);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh" }}>
      <div style={{ background: "#f2f2f2", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", minWidth: "450px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ margin: "0 0 20px 0" }}>Cadastro de Usuário</h1>
        <CampoTexto
          obrigatorio
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={setNome}
          inputType="text"
        />
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
        {sucesso && <p style={{ color: "green" }}>{sucesso}</p>}
        <Botao onClick={handleCadastro} type="button" style={{ width: "100%" }}>
          Cadastrar
        </Botao>
      </div>
    </div>
  );
}

export default CadastroUsuarioPage;