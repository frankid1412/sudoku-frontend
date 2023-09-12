import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';
import config from './config/config';

const WelcomePage = ({history}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate('/signin');
  };
  
  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    let URL = `${config.BACKEND_ENDPOINT}/api/v1/customer`;

    try {
      const response = await axios.post(URL, {
        customer_name: name,
        customer_email: email,
      });
      // const response = { data: 'Success' };
  
      // // Delay for 1 second to mimic API call
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log(response.data); // Process the response data as needed
    } catch (error) {
      console.error(error); // Handle any error that occurs during the request
    }

    // Clear the form fields after successful submission
    setName('');
    setEmail('');
  };
  
  return (
    <div className="login-page">
      <h2>Welcome to the AWS Sudoku</h2>
      <div className="login-container">
        <h3>Contact Form</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="buttons-container">
      <button className="signin-button" onClick={handleSignIn}>Sign In</button>
      <button className="signup-button" onClick={handleSignUp}>Sign Up</button>

      </div>
    </div>
  );
};

export default (WelcomePage);
