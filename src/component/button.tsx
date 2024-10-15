import React from "react";

type ButtonComponentProps = {
  text: string;
  onclick?: () => void;
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, onclick }) => {
  return (
    <button
      type="submit"
      className=" w-full bg-primary font-medium text-secondary hover:opacity-80 transition-opacity py-2 rounded-md"
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
