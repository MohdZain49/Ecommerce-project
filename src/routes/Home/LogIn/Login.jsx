import React, { useState } from "react";
import styles from "./Login.module.css"; 
import { Signup, NavBar } from "../../../index"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSignup, setShowSignup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    setError("");
    alert("Login successful");
  };

  if (showSignup) {
    return <Signup onSwitchToLogin={() => setShowSignup(false)} />;
  }

  return (
    <main>
      <NavBar/>
      <div className={styles.loginContainer}>
        <h2>Login</h2>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.formField}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <button
            className={styles.switchButton}
            onClick={() => setShowSignup(true)}
          >
            Signup
          </button>
        </p>
      </div>
    </main>
  );
}

export default Login;
