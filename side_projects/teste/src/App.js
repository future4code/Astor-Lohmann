import React from 'react';
import styled from "styled-components";
import axios from "axios";
import SalePage from "./Components/SalePage"
import './App.css';

class App extends React.Component {
  state = {
    currentPage: "homePage"
  }


render(){
  return (
    <div className="App">
      <SalePage />
    </div>
  );
}
}

export default App;
