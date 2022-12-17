import Image from "next/image";
import React, { HTMLAttributes } from "react";
import search from "../assets/icon/search.svg";

const SearchInput = ({
  className,
  ...props
}: HTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="flex relative">
      <input
        placeholder="Search..."
        type="text"
        style={{ borderWidth: "1px" }}
        className={`outline-none min-w-[200px] border-solid
          border-2 border-gray-200
          h-[40px] rounded-[15px] pl-7 pr-2 text-xs
          text-gray-400 ${className}`}
        {...props}
      />
      <Image className="absolute left-2 top-3" alt="search" {...search} />
    </div>
  );
};

export default SearchInput;
