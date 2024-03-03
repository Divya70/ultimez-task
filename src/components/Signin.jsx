import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signin = ({ onSignIn }) => {
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(formData);
    if (e.target.email.value && e.target.password.value) {
      if (!localStorage.getItem("user")) {
        localStorage.setItem(
          "user",
          JSON.stringify([
            { email: e.target.email.value, passeord: e.target.password.value },
          ])
        );
      }
    }
    navigateTo("/dashboard");
  };
  return (
    <div className="signup-container">
      <div className="login-Container">
        <h1 className="login-title">Login</h1>
        <h3>Enter Your Account Login Details</h3>
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="signup-btn">Sign In</button>
      </form>
      <div className="signup-text">
        <span>Don't you have an account?</span>
        <Link to="/signup">
          <button className="btn">SignUp</button>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
