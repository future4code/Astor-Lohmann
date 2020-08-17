import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

  state = {
    posts: [
    
      {
        nome: "Paulinha",
        fotousuario: "https://picsum.photos/50/51",
        postfoto: "https://picsum.photos/200/150"
      },
      {
        nome: "Jair",
        fotousuario: "https://picsum.photos/50/51",
        postfoto: "https://picsum.photos/200/150"
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
        <div> 
        nome={post.nome},
        fotousuario={post.fotousuario}
        postfoto={post.postfoto}
        
        </div>

        
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
