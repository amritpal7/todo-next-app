import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ ...props }) => (
  <button
    className="hover:bg-gold hover:text-dark font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  />
);
