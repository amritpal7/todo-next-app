import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ ...props }) => (
  <input
    className="text-gray-900 border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
    {...props}
  />
);
