import React from 'react';
import './CardPequeno.css'


function CardPequeno(props) {
    return (
        <div className="smallcard-container">
                <p>Endereço : { props.endereco }</p>
                <p>E-mail : { props.email }</p>
        </div>
        
    )
}

export default CardPequeno;