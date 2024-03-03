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
    if(e.target.email.value && e.target.password.value){
      if(!localStorage.getItem('user')){
          localStorage.setItem('user',JSON.stringify([{email:e.target.email.value,passeord:e.target.password.value}]))
    
      }
    }
    navigateTo("/dashboard");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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

    
        
          <button type="submit">Sign In</button>
     
      </form>
      <div style={{ display: "flex" }}>
        <p>Do you not have account</p>
        <Link to="/signup">
          <button>SignUp</button>
        </Link>
      </div>
     
    </>
  );
};

export default Signin;
