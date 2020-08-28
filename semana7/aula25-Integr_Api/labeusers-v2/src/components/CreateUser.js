import React from "react";
import axios from "axios";
import styled from 'styled-components'
import { baseUrl, axiosConfig } from "../constants/axiosConstants";

const InputContainer = styled.div`
    padding: 10px 15px 10px 15px;
    border: 2px black solid;
    max-width: 250px; 
`;
const CreateButton = styled.button`
    background-color: blue;
    border: none;
    color: white;
    padding: 3px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`;

class CreateUser extends React.Component{
    state = {
        nameValue: "",
        emailValue: ""
      };
    
      onChangeName = (event) => {
        this.setState({ nameValue: event.target.value });
      };
    
      onChangeEmail = (event) => {
        this.setState({ emailValue: event.target.value });
      };
    
      createUser = () => {
        const body = {
          name: this.state.nameValue,
          email: this.state.emailValue
        };
    
        axios
          .post(baseUrl, body, axiosConfig)
          .then((response) => {
            console.log(response);
            this.setState({ nameValue: "", emailValue: "" });
          })
          .catch((error) => {
            console.log(error.message);
          });
      };



render() {
    return (
      <div>
        
        
        Nome: <input
            value={this.state.nameValue}
            onChange={this.onChangeName}
            placeholder="nome"
            />  
        
        <br />
            Email: <input
            value={this.state.emailValue}
            onChange={this.onChangeEmail}
            placeholder="email"
            />
            <br />
         
          
       <CreateButton onClick={this.createUser}>Criar usuário</CreateButton>
      </div>
    );
  }
}
export default CreateUser;