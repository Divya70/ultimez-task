import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {countries} from 'countries-list';
const Signup = ({ onSignUp }) => {
  const navigateTo = useNavigate();
  const countryList = Object.values(countries);
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
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="userName"
          placeholder="UserName"
          value={formData.userName}
          onChange={handleChange}
          required
        />
        <div>
      <label htmlFor="country"></label>
      <select id="country" onChange={handleChange} value={formData.country}>
        <option value="">Select Counrty</option>
        {countryList.map((countries) => (
          <option key={countries.name} value={countries.name}>
            {countries.name}
          </option>
        ))}
      </select>
    </div>
        <input
          type="number"
          name="number"
          placeholder="phone"
          value={formData.number}
          onChange={handleChange}
          required
        />
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
        <input
          type="text"
          name="referral"
          placeholder="Referral ID"
          value={formData.referral}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Signup;
