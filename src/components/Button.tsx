import React, { HTMLAttributes } from "react";

const Button = ({
  isLoading,
  children,
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement> & { isLoading?: boolean }) => {
  return (
    <button
      className={`min-w-[300px] h-[50px] inline-flex items-center justify-center
      whitespace-nowrap rounded-md border border-transparent bg-gray-700 px-4 py-2
      text-base font-medium text-white shadow-sm hover:bg-gray-900 ${
        className ?? ""
      }`}
      {...props}
    >
      {isLoading ? <div className="base-loader base-loader-light" /> : null}
      {children}
    </button>
  );
};

export default Button;
