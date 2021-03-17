import React from "react";
import "../assets/css/Button.css";

const Button = ({ text }) => (
  <a className="Intro-btn" href="/">
    {text}
  </a>
);

export default Button;
