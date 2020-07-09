import React from 'react'
import {Text, View, Button} from 'react-native'
import Estilo from '../estilos'

export default props => {
    return (
        <Text style={Estilo.ex}>
            {props.nome}
        </Text>
    )
}