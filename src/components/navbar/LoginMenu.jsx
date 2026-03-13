import React, { useState } from "react";

function LoginState() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({
      name: "Rajkumar",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="login-container">
      {user ? (
        <div className="user-box">
          <span className="username">Hello, {user.name}</span>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      )}
    </div>
  );
}

export default LoginState;
