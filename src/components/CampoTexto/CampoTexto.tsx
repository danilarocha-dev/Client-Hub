import React from "react";
import "./CampoTexto.css";

interface CampoTextoProps {
  label: string;
  valor: string;
  aoAlterado: (valor: string) => void;
  obrigatorio?: boolean;
  placeholder: string;
  inputType: string
}

const CampoTexto: React.FC<CampoTextoProps> = ({
  label,
  valor,
  aoAlterado,
  obrigatorio = false,
  placeholder,
  inputType
}) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
        type={inputType}
      />
    </div>
  );
};

export default CampoTexto;
