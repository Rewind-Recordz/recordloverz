import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import { useContext } from "react";

function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return (
    <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-white bg-slate-600 border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link
          to="/"
          className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
        >
          <h1>Record Loverz</h1>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden mr-4 lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <Link to="/albums" className="flex items-center">
                  Albums
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <Link to="/add-album" className="flex items-center">
                  Add album
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <Link to="/login" className="flex items-center">
                  {isLoggedIn ? "Logout" : "Login"}
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <Link to="/edit-album" className="flex items-center">
                  Edit album
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
