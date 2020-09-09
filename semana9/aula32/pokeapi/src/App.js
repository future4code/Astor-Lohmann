import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";

export default function App() {
  const [pokelist, setPokelist] = useState([])
  const [pokeName, setPokeName] = useState("")

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokelist(response.data)
        
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      });
  }, []);
  
  return(
    <div className="App">
        <select onChange={(event) =>setPokeName(event.target.value)}>
          <option value={""}>Nenhum</option>
          
          {[setPokelist].map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {setPokeName && <PokeCard pokemon={setPokeName} />}
      </div>
  )
}

