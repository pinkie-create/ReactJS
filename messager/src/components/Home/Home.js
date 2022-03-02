import { useState } from "react";
import { Link } from "react-router-dom";
import { login, signUp } from "../../services/firebase";

export const Home = ({ isSignUp }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePass = (e) => {
    setPass(e.target.value);
  };

  const handleSignUp = async () => {
    try { await signUp(email, pass); }
    catch (err) {
      setError(err.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await login(email, pass);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      handleSignUp();
    } else {
      handleSignIn();
    }
    setEmail('');
    setPass('');
  };
  return (
    <>
      <h1> Home page </h1>
      <h2>{isSignUp ? 'Sign up' : 'Login'}</h2>
      <Link to={`${isSignUp ? '/' : '/signup'} `}>{!isSignUp ? 'Sign up' : 'Login'}</Link>
      <form onSubmit={handleSubmit}>
        <input type="text" value={email} onChange={changeEmail} />
        <input type="password" value={pass} onChange={changePass} />
        <button>Sign in</button>
        {error && <span>{error}</span>}
      </form>
    </>
  );
};