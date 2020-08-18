import React from 'react';




class Etapa1 extends React.Component {
    render() {
      
      return (
        <div>
          <h1>Etapa 1 - Dados Gerais</h1>
          <h3>Qual o seu nome?</h3>
          <input></input>
          <h3>Qual qual a sua idade?</h3>
          <input></input>
          <h3>Qual qual o seu email?</h3>
          <input></input>
          <h3>Qual a sua escolaridade?></h3>
          <select>
            <option>Ensino Médio Incompleto</option>
            <option>Ensino Médio Completo</option>
            <option>Ensino Superior Inompleto</option>
            <option>Ensino Superior Completo</option>
          </select>
          
        </div>
      );
    }
  }
  
  export default Etapa1;
  