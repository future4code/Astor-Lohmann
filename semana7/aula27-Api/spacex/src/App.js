import React from "react";
import axios from "axios";
import styled from 'styled-components'
import { baseUrl, axiosConfig } from "../constants/axiosConstants";



    const DeleteButton = styled.span`
    color: red;
  `;
  
  class ListUser extends React.Component{
    state = {
      users: []
    };
  
    componentDidMount = () => {
      this.getUsers();
    };
  
    getUsers = async () => {
      try {
        const response = await axios.get(baseUrl, axiosConfig);
  
        this.setState({ users: response.data });
      } catch (error) {
        console.log(error.message);
      }
    };
  
    deleteUser = (userId) => {
      axios
        .delete(`${baseUrl}/${userId}`, axiosConfig)
        .then((response) => {
          this.getUsers();
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  
    render() {
      return (
        <div>
        <h1>Lista Missões SpaceX:</h1>
          {this.state.users.map((user) => {
            return (
                
              <p key={user.id}>
                {user.name}
                <DeleteButton onClick={() => this.deleteUser(user.id)}>
                  {" "}
                  X
                </DeleteButton>
              </p>
            );
          })}
        </div>
      );
    }
  }

export default ListUser;
