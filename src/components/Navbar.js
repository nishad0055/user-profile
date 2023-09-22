import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full z-50 top-0">
      <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-blue-900 shadow sm:items-baseline w-full">
        <div class="mb-2 sm:mb-0 container mx-auto">
          <Link to="/" className="text-2xl font-bold no-underline text-white">
            User App
          </Link>
        </div>
        <div>
          <Link
            to="/"
            className="text-lg no-underline text-white hover:underline ml-3">
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg no-underline text-white hover:underline ml-3">
            About
          </Link>
        </div>
        <Link
          to="/contact"
          className="text-lg no-underline text-white hover:underline ml-3">
          SignIn
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
