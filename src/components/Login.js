
import './Login.css';
import axios from 'axios';
import React, {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import { userActions } from '../store';
// import { Await } from 'react-router-dom';
import { useDispatch } from "react-redux";
const LoginSignup = () => {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const onResReceived = (data) => {
    console.log(data);
    dispatch(userActions.login());
    localStorage.setItem("userId", data.id);
    navigate("/home");
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
    setError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  async function handleSubmit (e) {
    e.preventDefault();
    
    
      if(isLogin){
        await axios.post("http://localhost:5000/user/login",{
          email,password
        }).then(onResReceived)
        .catch((err) => console.log(err));
      }
      // const resData = res.data;
    
    
      else{
      const newUser = { name, email, password };
      await axios.post("http://localhost:5000/user/signup",newUser) .then(onResReceived)
      .catch((err) => console.log(err));
    }
  }
  
    


  const toggleForm = () => {
    setIsLogin(!isLogin);
    setName('');
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="container">
      <h1 className="title">{isLogin ? 'Login' : 'Signup'}</h1>
      <form onSubmit={handleSubmit} className="form">
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn">
          {isLogin ? 'Login' : 'Signup'}
        </button>
      </form>

      <p className="toggle-form">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button type="button" onClick={toggleForm}>
          {isLogin ? 'Signup' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default LoginSignup;
