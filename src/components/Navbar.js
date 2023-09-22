import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-emerald-900 shadow sm:items-baseline w-full">
        <div class="mb-2 sm:mb-0 container mx-auto">
          <Link
            to="/"
            className="text-2xl no-underline text-white hover:text-blue-dark">
            Home
          </Link>
        </div>
        <div></div>
      </nav>
    </div>
  );
};

export default Navbar;
