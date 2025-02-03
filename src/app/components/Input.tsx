import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => (
    <input
      className="text-gray-900 border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
      ref={ref}
      {...props}
    />
  )
);

// `forwardRef` should be used as a function, not a type
// export const Input = forwardRef<HTMLInputElement, InputProps>(
//   (props, ref) => {
//     return <input ref={ref} {...props} />;
//   }
// );
