import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Signup = ({ onSignUp }) => {
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    number: "",
    referral: "",
    email: "",
    password: "",
    country:"India"
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
    onSignUp(formData);
    if(e.target.email.value && e.target.password.value){
      if(!localStorage.getItem('user')){
          localStorage.setItem('user',JSON.stringify([{email:e.target.email.value,passeord:e.target.password.value, userName:e.target.userName.value}]))
    
      }
    }
    navigateTo("/");
  };
  return (
    <div className="signup-container">
       <div className="login-Container">
        <h1 className="login-title">Register</h1>
        <h3>Create Your Company Account</h3>
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="userName"
          placeholder="UserName*"
          value={formData.userName}
          onChange={handleChange}
          required
        />
        <div className="select-input">
        <select
        id="selectInput"
        name="country"
        value={formData.country}
        onChange={handleChange}
       
      >
        <option value="">Select Country*</option>
        <option value="INDIA">INDIA</option>
        <option value="USA">USA</option>
        <option value="JAPAN">JAPAN</option>
        <option value="SRI-LANKA">SRI-LANKA</option>
      </select>

    </div>
        <input
          type="number"
          name="number"
          placeholder="Mobile Number*"
          value={formData.number}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password*"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="referral"
          placeholder="Referral ID"
          value={formData.referral}
          onChange={handleChange}
        />

        <button type="submit" className="signup-btn">Register</button>
      </form>
      <div className="signup-text">
        <span className="account-text">Have an account?</span>
        <Link to="/"><button className="btn">Sign In</button></Link>
        <span style={{marginLeft:"5px"}}>here</span>
      </div>
    </div>
  );
};

export default Signup;
