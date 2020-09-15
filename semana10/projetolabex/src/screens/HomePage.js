import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToApplications, goToLogin } from '../router/GoToPages';


const HomePage = () => {
    const history = useHistory();

   
    return (
        <div>
            <p>HomePage</p>
            <button onClick={() => goToApplications(history)}>Inscrever-se nas Viagens</button>
            <button onClick={() => goToLogin(history)}>Login Administrador</button>
        </div>
    )
}

export default HomePage