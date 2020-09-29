import React, { useState, useEffect } from 'react';
import Home from './Components/Home'
import Match from './Components/Match'
import './App.css'
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styled from 'styled-components'
import { BrowserRouter as Router, Route , Link} from 'react-router-dom';



const Header = styled.div`
    display: flex;
    background-color: red;
    justify-content: space-around;
    align-items: center;
    height: 5vw;
`

function App() {

  return (
    <div className="App">
      <Router>
        <Header>
          <Link to="/">
            <PersonIcon /> 
          </Link>
          <Link to="/match">
            <FavoriteIcon />
          </Link>  
        </Header>    
          <Route path="/match">
            <Match/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Router>


    </div>
  );
}

export default App;
