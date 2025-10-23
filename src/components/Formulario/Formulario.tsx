import React, { useState } from "react";
import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import "./Formulario.css";

interface CampoConfig {
  nome: string;
  label: string;
  placeholder: string;
  type: string;
  obrigatorio?: boolean;
}

interface FormularioProps {
  campos: CampoConfig[];
  botaoTexto: string;
  aoSubmit: (dados: Record<string, string>) => void;
}

const Formulario: React.FC<FormularioProps> = ({ campos, botaoTexto, aoSubmit }) => {
  const [valores, setValores] = useState<Record<string, string>>(
    campos.reduce((acc, campo) => ({ ...acc, [campo.nome]: "" }), {})
  );

  const aoAlterado = (nomeCampo: string, valor: string) => {
    setValores((prev) => ({ ...prev, [nomeCampo]: valor }));
  };

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    // validação: verifica se todos os obrigatórios foram preenchidos
    for (const campo of campos) {
      if (campo.obrigatorio && !valores[campo.nome]) {
        alert(`Preencha o campo obrigatório: ${campo.label}`);
        return;
      }
    }

    aoSubmit(valores);

    setValores(campos.reduce((acc, campo) => ({ ...acc, [campo.nome]: "" }), {}));
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        {campos.map((campo) => (
          <CampoTexto
            key={campo.nome}
            obrigatorio={campo.obrigatorio}
            label={campo.label}
            placeholder={campo.placeholder}
            valor={valores[campo.nome]}
            aoAlterado={(valor) => aoAlterado(campo.nome, valor)}
            inputType={campo.type}
          />
        ))}
        <Botao type="submit">{botaoTexto}</Botao>
      </form>
    </section>
  );
};

export default Formulario;
