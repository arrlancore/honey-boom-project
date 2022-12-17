import React, { HTMLAttributes } from "react";

type TextVariant = "head1" | "head2" | "caption";

type Props = HTMLAttributes<HTMLElement> & { variant?: TextVariant };

const Text = ({ variant, className, ...rest }: Props) => {
  if (variant == "head1") {
    return (
      <div
        className={`my-1 font-bold text-sm
        ${className ?? ""}`}
        {...rest}
      >
        {rest.children}
      </div>
    );
  }
  if (variant == "head2") {
    return (
      <div
        className={`font-bold text-lg 
         ${className ?? ""}`}
        {...rest}
      >
        {rest.children}
      </div>
    );
  }
  if (variant == "caption") {
    return (
      <span
        className={`text-sm font-base-400
         ${className ?? ""}`}
        {...rest}
      >
        {rest.children}
      </span>
    );
  }
  return (
    <p
      className={`text-sm font-base-400
  ${className ?? ""}`}
      {...rest}
    >
      {rest.children}
    </p>
  );
};

export default Text;
