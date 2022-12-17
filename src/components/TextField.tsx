import React, { HTMLAttributes } from "react";

const TextField = ({
  label,
  type_,
  icon,
  ref,
  name,
  ...props
}: HTMLAttributes<HTMLInputElement> & {
  label: string;
  type_?: string;
  icon?: React.ReactNode;
  ref?: any;
  name?: string;
}) => {
  const additionalStyle = icon ? "pr-10" : "";

  return (
    <div className="mb-4 min-w-[300px] relative">
      <label
        className="block text-white text-sm font-bold mb-2"
        htmlFor="location"
      >
        {label}
      </label>
      <input
        name={name}
        className={`shadow rounded-md appearance-none border h-[50px]
        w-full py-2 px-3 text-gray-700 leading-tight
        focus:outline-none focus:shadow-outline
        ${additionalStyle}`}
        type={type_ ?? "text"}
        placeholder="type here.."
        ref={ref}
        {...props}
      />
      {icon ? (
        <div className="absolute right-2 w-[16px] h-[16px] top-11">{icon}</div>
      ) : null}
    </div>
  );
};

export default TextField;
