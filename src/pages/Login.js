import React, { useEffect } from "react";
import blur from "../assets/blur_bg_1.jpeg";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import LogoContra from "../assets/LogoContra";
const Login = ({ title }) => {
  useEffect(() => {
    return (document.title = title)[title];
  });
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login__bg">
        <img className="login__back-bg" src={blur} alt="" />
      </div>
      <div className="login__banner">
        <LogoContra />
      </div>

      <div className="login__page">
        <div className="login__container">
          <div className="login__container-left">
            <h1 className="login__container-left--title">
              Welcome back to Contra 👋
            </h1>
            <div className="login__container-left--input-cont">
              <label>Email address</label>
              <input type="text" placeholder="name@email.com" required />
            </div>
            <button className="login__container-left--btn">Log In</button>
          </div>
          <div className="login__container-right">
            <img
              src="https://contra.com/static/assets/login@2x.b44e5924.webp"
              alt="Contra"
              className="login__container-right--image"
            />
          </div>
        </div>

        <div className="signup__container">
          <p className="signup__container-text">
            New to Contra? Join our commision-free platform
          </p>
          <button
            onClick={() => navigate("/sign-up")}
            className="signup__container-btn"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
