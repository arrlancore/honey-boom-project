import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ title }: { title: string }) => {
  return (
    <header>
      <div className="flex items-center justify-between border-b-2 border-gray-200 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/" className="flex items-center">
            <Image
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=yellow&shade=600"
              alt="logo"
              width={47}
              height={40}
            />
            <h1 className="text-md ml-2 text-white">
              <b>{title}</b>
            </h1>
          </Link>
        </div>

        <div className="items-center justify-end">{/* right side */}</div>
      </div>
    </header>
  );
};

export default Header;
