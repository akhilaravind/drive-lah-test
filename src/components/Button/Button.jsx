import React from "react";
import "./Button.scss";

const Button = ({ children, variant = "primary", size = "medium", onClick, disabled }) => {
  return (
    <button
      className={`btn ${variant} ${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
