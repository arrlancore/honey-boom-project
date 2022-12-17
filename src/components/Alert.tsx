import React from "react";

type variant = "success" | "error";

const Alert = ({
  variant,
  children,
}: {
  variant: variant;
  children: React.ReactNode;
}) => {
  switch (variant) {
    case "error":
      return (
        <div
          className="w-full p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          {children}
        </div>
      );

    case "success":
      return (
        <div
          className="w-full p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
          role="alert"
        >
          {children}
        </div>
      );

    default:
      return null;
  }
};

export default Alert;
