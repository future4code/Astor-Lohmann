import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'

const LoginForm = () => {
    const [form, handleInputChange] = useForm({ email:'', password:''})
    const history = useHistory()

    
    return (
        <form>
            <TextField />
            <TextField />
            <Button>Fazer Login</Button>
        </form>

    )
}

export default LoginForm