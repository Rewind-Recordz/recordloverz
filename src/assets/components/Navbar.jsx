import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import { useContext, useState } from "react";

function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };
  return (
    <nav className="sticky top-0 z-10 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <h1>RecordLoverz</h1>
          </span>
        </Link>
        <button
          onClick={toggleMenu} // Add onClick event handler
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded={menuOpen ? "true" : "false"} // Dynamically set aria-expanded
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`absolute right-0 top-full w-1/5 mt-0 ${
            menuOpen ? "" : "hidden"
          }`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col font-medium bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <li>
              <Link
                to="/login"
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {isLoggedIn ? "Logout" : "Login"}
              </Link>
            </li>

            {isLoggedIn && (
              <li>
                <Link
                  to="/add-album"
                  onClick={toggleMenu}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  aria-current="page"
                >
                  Add Album
                </Link>
              </li>
            )}

            <li>
              <Link
                to="/albums"
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                aria-current="page"
              >
                Albums
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
