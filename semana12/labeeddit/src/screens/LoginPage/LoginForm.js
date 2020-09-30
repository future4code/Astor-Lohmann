import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import { FormContainer } from './styled'

const LoginForm = () => {
    const [form, handleInputChange] = useForm({ email:'', password:''})
    const history = useHistory()

    
    return (
        <form>
            <FormContainer>
                <TextField 
                    value={form.email}
                    name={'email'}
                    onChange={handleInputChange}
                    label={'E-mail'}
                    variant={'outlined'}
                    type={'email'}
                    fullWidth
                    required
                    autoFocus
                    margin={'normal'}
                />
                <TextField 
                    value={form.password}
                    name={'password'}
                    onChange={handleInputChange}
                    label={'Senha'}
                    variant={'outlined'}
                    type={'password'}
                    fullWidth
                    required
                    margin={'normal'}
                />
                <Button
                    //onClick={onClickLogin}
                    color={'primary'}
                    variant={'contained'}
                    type={'submit'}
                    fullWidth
                >Fazer Login</Button>
            </FormContainer>
        </form>


    )
}

export default LoginForm