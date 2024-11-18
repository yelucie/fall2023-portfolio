interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ButtonColor({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`px-5 py-2 text-white bg-black rounded-full cursor-pointer dark:text-dark-200 bg-gradient-to-r from-purple-600 to-teal-400 hover:scale-105 focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
}
