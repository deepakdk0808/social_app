import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {
      username,
      email,
      password,
    };
    console.log("user", obj);
    axios
      .post(`http://localhost:8080/api/auth/register`, obj)
      .then((res) => {
        alert(res.data.message);
        navigate("/sign-in");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Sign Up" className="green-button" />
      </form>
    </div>
  );
}

export default SignUp;
