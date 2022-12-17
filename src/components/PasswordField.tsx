import Image from "next/image";
import React, { HTMLAttributes, useState } from "react";
import TextField from "./TextField";

import eyeIcon from "../assets/icon/eye.svg";
import eyeSlashIcon from "../assets/icon/eye-slash.svg";

function EyeToggle({
  isSlashed,
  onClick,
}: {
  isSlashed?: boolean;
  onClick?: () => void;
}) {
  const imageProp = isSlashed ? eyeSlashIcon : eyeIcon;
  return (
    <Image
      className="cursor-pointer"
      {...imageProp}
      onClick={onClick}
      alt="eye"
    />
  );
}

const PasswordField = ({
  label,
  ...props
}: HTMLAttributes<HTMLInputElement> & { label: string }) => {
  const [toggleEye, setToggleEye] = useState(false);

  return (
    <TextField
      placeholder="your password..."
      label={label}
      type_={toggleEye ? "text" : "password"}
      icon={
        <EyeToggle
          isSlashed={toggleEye}
          onClick={() => setToggleEye((prev) => !prev)}
        />
      }
      {...props}
    />
  );
};

export default PasswordField;
