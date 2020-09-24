import React from 'react';
import styled from "styled-components";
import { TextField, Button, InputLabel, Select, FormControl, MenuItem } from '@material-ui/core'
import Container from '@material-ui/core/Container';

const ContainerForm = styled.form`
    display: grid;
    gap: 16px;
    max-width: 100%;
    text-alig
`



const FormContainer = () => {
    return(
        <Container maxWidth="sm">
            <ContainerForm>
                <TextField 
                label={"Digite a tarefa"}
                />
                <FormControl>
                <InputLabel id="select-days">Selecione o dia</InputLabel>
                    <Select>                        
                            <MenuItem value={'domingo'}>Domingo</MenuItem>
                            <MenuItem value={'segunda'}>Segunda-feira</MenuItem>
                            <MenuItem value={'terça'}>Terça-feira</MenuItem>
                            <MenuItem value={'quarta'}>Quarta-feira</MenuItem>
                            <MenuItem value={'quinta'}>Quinta-feira</MenuItem>
                            <MenuItem value={'sexta'}>Sexta-feira</MenuItem>
                            <MenuItem value={'sabado'}>Sábado</MenuItem>
                    </Select>
                </FormControl>
                
                <Button variant={'contained'} color={'primary'} type={'submit'}>Enviar Tarefa</Button>
            </ContainerForm>
        </Container>

    );

};

export default FormContainer