import React from 'react';
import axios from "axios";
import './App.css';

export default class App extends React.Component {
  state = {
    usuarios: [],
    nomeUsuario: "",
    emailUsuario: ""
  };

  pegarUsuarios = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "astor-lohmann-jackson"
        }
      }
    );

    request
      .then((resposta) => {
        this.setState({ usuarios: resposta.data.result.list });
      })
      .catch((erro) => {
        console.log("Ocorreu um erro");
      });
  };

  criarUsuario = () => {
    console.log("teste")
    const body = {
      name: this.state.nomeUsuario,
      //email: this.state.emailUsuario
    };

    const request = axios.post(
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
      body,
      {
        headers: {
          Authorization: "Astor-Lohmann-Jackson"
        }
      }
    );

    request
      .then((resposta) => {
        alert(`O Usuário ${this.state.nomeUsuario} foi criado com sucesso!`);
        this.pegarUsuarios();
        this.setState({ nomeUsuario: "" });
      })
      .catch((erro) => {
        console.log("Erro");
      });
  };

  componentDidMount() {
    this.pegarUsuarios();
  }

  render() {
    const onChangeNome = (evento) => {
      this.setState({ nomeUsuario: evento.target.value });
    };
    const onChangeEmail = (evento) => {
      this.setState({ emailUsuario: evento.target.value });
    };

    return (
      <div className="App">
        <button id="buttonlist">Ir para a página da lista</button>
        <div className="Appcontainer">
          Nome:<input value={this.state.nomeUsuario} onChange={onChangeNome} /><br />
          E-mail:<input value={this.state.emailUsuario} onChange={onChangeEmail} /><br />
          <button onClick={this.criarUsuario}>SALVAR</button>
        </div>
        
        
      </div>
    );
  }
}
