import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilos'


export default props => {
    // console.warn('Opa!')
    return <Text style={Estilo.ex}>Primeiro componete {props.texto}</Text>
}