import React from "react";

type HeaderTextProps = {
  text: string;
  className?: string;
};

const HeaderText: React.FC<HeaderTextProps> = ({ text, className }) => {
  return (
    <a href={text} className="relative group flex items-center cursor-pointer">
      <p className={`${className} text-secondary`}>{text}</p>
      <div className="absolute  bottom-[-10px] left-0 w-full h-1 bg-white transition-all duration-300 scale-x-0 group-hover:scale-x-100"></div>
    </a>
  );
};

export default HeaderText;
