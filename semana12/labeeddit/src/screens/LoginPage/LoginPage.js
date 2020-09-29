import React from 'react'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router'
import LoginForm from './LoginForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'


const LoginPage = () => {
    const history = useHistory();
    
    
    
    return(
        <div>
            <LoginForm />
        </div>
    )
}

export default LoginPage