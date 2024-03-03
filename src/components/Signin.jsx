import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code to check authentication with a backend or stored data
    // For simplicity, let's assume we retrieve user data from localStorage
    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData && savedData.email === loginData.email && savedData.password === loginData.password) {
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
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
          value={loginData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="signup-btn">Sign In</button>
      </form>
      <div className="signup-text">
        <span>Do not you have an account?</span>
        <Link to="/signup">
          <button className="btn">SignUp</button>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
