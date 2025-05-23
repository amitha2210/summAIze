import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signIn } from "../services/authService";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();

    const { success, error } = await signIn(email, password);

    if (error) {
      setMessage(error);
    } else if (success) {
      navigate("/");
    }
  };

  return (
    <>
      <form onSubmit={handleSignIn}>
        <h2>Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
        <p>{message}</p>
      </form>
      <Link to="/signup">sign up here</Link>
    </>
  );
};

export default SignIn;
