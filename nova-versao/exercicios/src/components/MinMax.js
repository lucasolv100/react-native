import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilos'

export default (props) => (
        <Text style={Estilo.ex}>
            O valor {props.max} é maior que o valor {props.min}
        </Text>
    )