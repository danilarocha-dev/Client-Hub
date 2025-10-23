import React, { ReactNode, CSSProperties } from "react";
import "./Botao.css";

interface BotaoProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
}

const Botao: React.FC<BotaoProps> = ({ children, onClick, type = "button", style }) => {
  return (
    <button 
      className="botao" 
      onClick={onClick} 
      type={type} 
      style={style}>
      {children}
    </button>
  );
};

export default Botao;
