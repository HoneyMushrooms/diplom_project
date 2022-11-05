import {Link} from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo_chat1.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";

function Login() {

  const toastOptions = {
    position: "bottom-right",
    autoClose: 1111111111111,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    line: "red",
  };

  const [values, setValues] = useState({
    login: "",
    password: "",
  })

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value});
  }

  // const handleValidation = () => {
  //   const {login, password} = values;
  //   if (password !== confirmPassword) {
  //     toast.error(
  //       "Password and confirm password should be same.",
  //       toastOptions
  //     );  
  //     return false;
  //   } else if (username.length < 3) {
  //     toast.error(
  //       "Username should be greater than 3 characters.",
  //       toastOptions
  //     );
  //     return false;
  //   } else if (password.length < 8) {
  //     toast.error(
  //       "Password should be equal or greater than 8 characters.",
  //       toastOptions
  //     );
  //     return false;
  //   } else if (email === "") {
  //     toast.error("Email is required.", toastOptions);
  //     return false;
  //   }
  //   return true;
  // };

  const handleSubmit = (event)=> {
    event.preventDefault();
    toast("", toastOptions);
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={(event)=>handleSubmit(event)}>
          <div className='brand'>
            <img src={Logo} alt='Logo'/>
          </div>
          <hr/>
          <input type='number' placeholder='Логин' name='login' onChange={e=>handleChange(e)}/>
          <input type='password' placeholder='Пароль' name='password' onChange={e=>handleChange(e)}/>

          <button type='submit'>Вход</button>
        </form>
      </FormContainer>
      <ToastContainer/>
    </>
  );
}

const FormContainer = styled.div` 
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  hr {
    border: none;
    border-top: 0.13rem solid #778899;
  }
  .brand {
    background-color: white;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 7rem;
      margin-bottom: 10px;
    }
  }
  form {
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border: 0.15rem solid #778899;
    border-radius: 2rem;
    padding: 2rem 3rem 1.9rem 3rem;
  }
  input {
    backgound-color: #E8F0FE;
    padding: 1rem;
    border: 0.14rem solid #778899;
    border-radius: 0.4rem;
    width: 100%;
    font-size: 1rem;
  }
  button {
    background-color: #0F6FC5;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #00416A;
    }
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;

}
`;

export default Login;
