import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import { SignupContainer } from './styled'
import { InputSignupContainer } from './styled'


const SignUpForm = () => {

    const history = useHistory()
    const [form, handleInputChange] = useForm({name: '', email: '', password: ''})

    return (
        <form>
        <SignupContainer>
            <InputSignupContainer>
            <TextField
                value={form.name}
                name={'name'}
                onChange={handleInputChange}
                label={'Nome do Usuário'}
                variant={'outlined'}
                fullWidth
                required
                autoFocus
                margin={'normal'}
            />
            <TextField
                value={form.email}
                name={'email'}
                onChange={handleInputChange}
                label={'E-mail'}
                variant={'outlined'}
                type={'email'}
                fullWidth
                required
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
                color={'primary'}
                variant={'contained'}
                type={'submit'}
                fullWidth
            >Cadastrar</Button>
            </InputSignupContainer>            
            </SignupContainer>
        </form>
    )
}

export default SignUpForm