import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ type, required, value, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      required={required}
      onChange={onChange}
      className="px-3 py-1 border rounded w-80"
    />
  );
};

export default Input;
