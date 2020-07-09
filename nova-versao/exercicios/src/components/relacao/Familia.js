import React from 'react'
import { Text, View, Button } from 'react-native'
import Estilo from '../estilos'
import Filho from './Membro'

export default props => {
    return (
        <>
            <Text>Membros da familia: {props.sobrenome}</Text>
            {props.children}
        </>
    )
}