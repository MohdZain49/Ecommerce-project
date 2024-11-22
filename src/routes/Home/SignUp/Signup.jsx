import React, { useState } from "react";
import styles from "./Signup.module.css"; 
import { NavBar } from "../../../index";

function Signup({ onSwitchToLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    alert("Signup successful");
    onSwitchToLogin();
  };

    return (
        <main>
            <NavBar/>
        <div className={styles.signupContainer}>
          <h2>Signup</h2>
          <form className={styles.signupForm} onSubmit={handleSubmit}>
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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
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
            <div className={styles.formField}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />
            </div>
            <button type="submit" className={styles.signupButton}>
              Signup
            </button>
          </form>
          <p>
            Already have an account?{" "}
            <button className={styles.switchButton} onClick={onSwitchToLogin}>
              Login
            </button>
          </p>
        </div>
      </main>
    );
}

export default Signup;
