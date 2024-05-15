import { useContext, useState } from "react";
import { AuthContext } from "../components/AuthContext";
import { ADMIN_LOGIN, ADMIN_PASSWORD, API_URL } from "../constants";

function Login() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (username === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
    }
  }

  function logOut() {
    setIsLoggedIn(false);
  }

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="username"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              {!isLoggedIn && (
                <button
                  onClick={handleLogin}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Login
                </button>
              )}

              {isLoggedIn && (
                <button
                  className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800"
                  onClick={() => logOut()}
                >
                  Logout
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
