// AuthForm.jsx

import React, { useState } from 'react';
import './styles.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };
  async function Showdata(){
    let responsedata;
    if(isSignUp === true){
      console.log(formData);

      await fetch("http://localhost:4000/signup",{
        method : "POST",
        headers :{
          Accept: "application/form-data",
          "Content-Type": "application/json"
        },
        body:JSON.stringify(formData)

      })
      .then((response)=>response.json()).then((data)=>responsedata=data);
     console.log(responsedata);
      if (responsedata.success) {
        localStorage.setItem("auth-token", responsedata.token);
        window.location.replace("/");
      }
      else{
        alert(responsedata.error);
      }
      
    }
    else{
      await fetch("http://localhost:4000/login",{
        method : "POST",
        headers :{
          Accept: "application/form-data",
          "Content-Type": "application/json"
        },
        body:JSON.stringify(formData)
  
      })
      .then((response)=>response.json()).then((data)=>responsedata=data);
     console.log(responsedata);
     if (responsedata.success) {
       localStorage.setItem("auth-token", responsedata.token);
       window.location.replace("/");
      }
      else{
        alert(responsedata.error);
      }
      
    }
  }

  return (
    <div className="container1">
      <div className="form-container1">
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit} className='loginform'>
          {isSignUp && (
            <div className='flexgain'>
              <label>
                Username:
                <input
                  type="text"
                  name="name"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          )}
<br></br>
<div className='flexgainE'>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
</div>
<br></br>
<div className='flexgain'>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>
          </div>

        <br></br>
          <button type="submit" onClick={Showdata}>{isSignUp ? 'Sign Up' : 'Login'}</button>
        </form>
        <p onClick={() => setIsSignUp(!isSignUp)} className='finalsign'>
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default Login;
