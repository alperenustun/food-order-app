import { useState } from "react";
import "./LoginPage.scss";
import { auth } from "@/config/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    // setUser(currentUser);
    console.log(currentUser);
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleUserLogin(e) {
    e.preventDefault();
    const { email, password } = formData;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Invalid email or password");
    }
  }

  return (
    <div className="login-page">
      <div className="login-page-section">
        <h1>Login</h1>
        <form
          className="login-page-section-form"
          onSubmit={(e) => handleUserLogin(e)}
        >
          <h4>User name</h4>
          <input
            className="login-page-section-form-input"
            onKeyUp={(e) => handleChange(e)}
            name="email"
            type="email"
          />
          <h4>Password</h4>
          <input
            className="login-page-section-form-input"
            onKeyUp={(e) => handleChange(e)}
            name="password"
            type="password"
          />
          <input
            className="login-page-section-form-input-btn"
            type="submit"
            value="Login"
          />
        </form>
        <button
          onClick={() => {
            signOut(auth);
            console.log("clicked");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
