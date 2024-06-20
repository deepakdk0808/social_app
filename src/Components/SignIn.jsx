import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignIn() {
  const navigate = useNavigate();
  
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

  const handleBackClick = () => {
    navigate("/"); // replace "/onboarding" with the path to your onboarding page
  };

   const handleSignIn = (event) => {
     event.preventDefault();

     let obj = {
       email,
       password,
     };
     axios
       .post(`http://localhost:8080/api/auth/login`, obj)
       .then((res) => {
         alert(res.data.message);
         console.log(res.data);
         let localObj = {
           accessToken: res.data.accessToken,
           userid: res.data._id,
         };
         localStorage.setItem("accessToken", JSON.stringify(localObj));
         navigate("/menus");
       })
       .catch((err) => {
         alert(err.response.data.message);
       });
   };

  return (
    <div className="sign-in">
      <button onClick={handleBackClick}>&larr;</button>
      <h1>Hello Again!</h1>
      <h3>Sign in to your account</h3>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <a href="/">Forgot Password?</a>
        <button className="green-button">Sign In</button>
      </form>

      <p>Or sign in with</p>
      <button className="white-button">Sign in with Google</button>
      <button className="white-button">Sign in with Twitter</button>
      <p>
        Don't have an account? <a href="/sign-up">Sign Up</a>
      </p>
    </div>
  );
}

export default SignIn;
