import React from 'react';
import styled from 'styled-components'
import axios from 'axios';
import CreateUser from './components/CreateUser'
import ListUser from './components/ListUser'
import './App.css';

const AppContainer = styled.div`
    padding-top: 5px;
    padding-left: 5px;
    height: auto;
    
    position: relative;
`;
const CreateUserContainer = styled.div`
    width: 250px;
    height: auto;
    margin: 0 auto;
    padding: 10px;
    position: relative;
    border: 2px black solid;
    max-width: 250px;
`;


export default class App extends React.Component {
  state= {
    page: "createUser"
  }

  changePage = () => {
    this.state.page === "createUser" ? this.setState({ page: "listUser"}) : this.setState({ page: "createUser"})
    console.log("trocou!")
  }

  render (){

    const page = () => {
      if (this.state.page === "createUser"){
        return <CreateUser />;
      } else if (this.state.page === "listUser") {
        return <ListUser />;
      }
    };

    return (
      <AppContainer>
        <button onClick={this.changePage}>Trocar Pagina</button>
        <CreateUserContainer>        
        {page()}
        </CreateUserContainer>
            </AppContainer>
    ); 
  }
}
