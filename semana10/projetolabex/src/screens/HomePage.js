import React from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import { goToApplications, goToLogin } from '../router/GoToPages';
import Logo from '../image/logo.png'

const ImageLogo = styled.img`
    max-width: 200vw;
    max-height: 50vh;
`


const HomePage = () => {
    const history = useHistory();

   
    return (
        <div>
            <ImageLogo src={Logo} />
            <p>HomePage</p>
            <button onClick={() => goToApplications(history)}>Inscrever-se nas Viagens</button>
            <button onClick={() => goToLogin(history)}>Login Administrador</button>
        </div>
    )
}

export default HomePage