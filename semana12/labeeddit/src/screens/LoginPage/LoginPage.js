import React from 'react'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router'
import LoginForm from './LoginForm'
import { LoginContainer } from './styled'

const LoginPage = () => {    
    
    return (
        <LoginContainer>
            <h1>Labeddit</h1>
            <LoginForm />
        </LoginContainer>
    )
}

export default LoginPage