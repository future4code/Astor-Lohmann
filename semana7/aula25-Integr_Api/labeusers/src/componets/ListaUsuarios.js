import React from 'react';
import axios from "axios";


export default class ListaUsuarios extends React.Component {



    <div>
        <h1>Lista de Usuarios</h1>
        {this.state.usuarios.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
    </div>
    }