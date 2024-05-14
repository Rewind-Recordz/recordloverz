
import { useContext } from 'react';
import { AuthContext } from '../components/AuthContext';
import { API_URL } from "../constants";

function Login() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  function handleLogin(login) {
    // Perform login logic
    setIsLoggedIn(login);
  };

  return (
    <>
      <h1>Login Page</h1>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => handleLogin(true)}>Login</button>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => handleLogin(false)}>Logout</button>
      <div>{ isLoggedIn ? "Logged in" : "Logged out"}</div>
    </>
  );
}

export default Login;