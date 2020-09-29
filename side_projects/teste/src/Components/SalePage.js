import React from "react";
import styled from "styled-components";
import axios from "axios";

export default class SalePage extends React.Component {
  state = {
    missoes: []
  };

  pegarMissoes = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars")
      .then((resposta) => {
        this.setState({ missoes: resposta.data });
      })
      .catch(   (erro) => {
        console.log(erro);
      });
  };

  componentDidMount() {
    this.pegarMissoes();
  }

  render() {
    return (
      <div>
        {this.state.missoes.map((item) => {
          return (
            <div className="SalePage">
              <h2 key={item.id}>{item.name}</h2>
                             <p>{item.price}</p>
                             <p>{item.shipping}</p>
                             <p>{item.description}</p>
                             <p>{item.paymentMethod}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
  

// export default class SalePage extends React.Component {
//     state = {
//         carList: [],
//     }

//     componentDidMount() {
//         this.fetchCarList();
//       }
    
//       fetchCarList = () => {
//         axios
//           .get(
//             "https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars")
//           .then(response => {
//             this.setState({ carList: response.data });  
//           });
          
//       };


//     render () {
//         return (
//             <div>
//                 {this.state.carList.map((item) => {
//                     return (
//                         <div>
//                             <h2 key={item.id}>{item.name}</h2>
//                             <p>{item.price}</p>
//                             <p>{item.shipping}</p>
//                             <p>{item.description}</p>
//                             <p>{item.paymentMethod}</p>
//                         </div>
//                     );
//                 })}
//             </div>



//         );
// }
// }