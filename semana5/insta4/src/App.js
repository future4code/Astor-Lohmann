import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

  state = {
    // Lista de pessoas colocada no estado
    posts: [
      // O objeto abaixo representa uma pessoa. Ele possui
      // duas propridades: nome e email.
      {
        nome: "Paulinha",
        fotousuario: {https://picsum.photos/50/50'paula@f4.com"},
        postfoto: "9959-5254"
      },
      {
        nome: "Jair",
        fotousuario: "https://picsum.photos/50/51",
        postfoto: {https://picsum.photos/200/150"
      },
      {
        nome: "Inácio",
        fotousuario: "https://picsum.photos/50/52",
        postfoto: "https://picsum.photos/200/152"
      }
    ]
  };
  render() {
    const novoPost = this.state.posts.map((post) => {
      return (
        <li>
          {post.nome} - {post.fotousuario} - {post.postfoto}
        </li>
      );
    })

    return (
      <div className={'app-container'}>
        {novoPost}
      </div>
    );
  }
}

export default App;
