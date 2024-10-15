import React from "react";

type TextComponentProps = {
  text: string;
  className?: string;
};

const TextComponent: React.FC<TextComponentProps> = ({ text, className }) => {
  return <p className={`${className}`}>{text}</p>;
};

export default TextComponent;
