import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToCreateTrips, goToListTrips, goToDetailTrips } from '../router/GoToPages';

const LoginPage = () => {
    const history = useHistory();

    return(
        <div>
            <p>LoginPage</p>
            <button onClick={()=> goToCreateTrips(history)}>Criar Viagens</button>
            <button onClick={()=> goToListTrips(history)}>Lista de Viagens</button>
            <button onClick={()=> goToDetailTrips(history)}>Detalhe das Viagens</button>
        </div>
        
    )
}
export default LoginPage