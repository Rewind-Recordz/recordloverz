
import { useContext } from 'react';
import { AuthContext } from '../components/AuthContext';

function Login() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  function handleLogin(login) {
    // Perform login logic
    setIsLoggedIn(login);
  };

  return (
    <>
      <h2>Login Page</h2>
      <button onClick={() => handleLogin(true)}>Login</button>
      <button onClick={() => handleLogin(false)}>Logout</button>
      { isLoggedIn ? "Logged in" : "Logged out"}
    </>
  );
}

export default Login;