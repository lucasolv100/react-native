import React from 'react'
import { Text, View, Button } from 'react-native'
import Estilo from './estilos'
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <If teste={usuario && usuario.nome && usuario.email}>
            <Text style={Estilo.ex}>
                {usuario.nome} - {usuario.email}
            </Text>
        </If>
    )
}