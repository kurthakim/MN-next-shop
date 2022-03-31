import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="px-4 py-2 my-2 text-gray-100 bg-green-800 rounded hover:bg-green-700"
    >
      {children}
    </button>
  );
};

export default Button;
