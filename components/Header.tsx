import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-6">
      {/* Left */}
      <div>
        <Link href="/" className="flex items-center space-x-2 anim">
          <h3 className="font-semibold text-sm md:text-base underline decoration-2 decoration-[#FFA69E] hover:decoration-black">
            Farhad-Blog
          </h3>
        </Link>
      </div>
      {/* Right */}
      <div>
        <Link
          target="_blank"
          href="https://landfolio.vercel.app/"
          className="btn text-xs md:text-sm lg:text-base font-semibold"
        >
          Click here to see my Portfolio!!
        </Link>
      </div>
    </header>
  );
};

export default Header;
