interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ButtonGray({ children, className, ...rest }: ButtonProps) {
  return (
    <div
      {...rest}
      className={`bg-gray-200 rounded-full dark:bg-dark-200 ${className}`}
    >
      {children}
    </div>
  );
}
