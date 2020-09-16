import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { goToCreateTrips, goToListTrips, goToDetailTrips } from '../router/GoToPages';
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/astor-jackson/signup"

const LoginPage = () => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem("token");
    
        if (token) {
          history.push("/trip-detail");
        }
      }, [history]);
    
      const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
      };
    
      const handleLogin = () => {
        const body = {
          email: emailValue,
          password: passwordValue
        };
    
        axios
          .post(`${baseUrl}/login`, body)
          .then((response) => {
            localStorage.setItem("token", response.data.token);
            history.push("/trip-detail");
          })
          .catch((err) => {
            console.log(err);
          });
      };


    return(
        <div>
            <p>LoginPage</p>
            <input value={emailValue} onChange={handleEmailChange} />
            <input value={passwordValue} onChange={handlePasswordChange} />
            <button>Fazer Login</button>
            <button onClick={()=> goToCreateTrips(history)}>Criar Viagens</button>
            <button onClick={()=> goToListTrips(history)}>Lista de Viagens</button>
            <button onClick={()=> goToDetailTrips(history)}>Detalhe das Viagens</button>
        </div>
        
    )
}
export default LoginPage