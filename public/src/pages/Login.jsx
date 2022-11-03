import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo_chat1.svg";

function Login() {
  const handleSubmit = (event)=> {
    event.preventDefault();
    alert("from");
  };

  const handleChange = (event) => {}

  return (
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
    background-color: ;
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
`;

export default Login;
