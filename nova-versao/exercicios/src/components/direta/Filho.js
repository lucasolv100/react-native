import React from 'react'
import { Text, View, Button } from 'react-native'
import Estilo from '../estilos'

export default ({ a, b }) => {
    return (
        <>
            <Text style={Estilo.ex}>{a}</Text>
            <Text style={Estilo.ex}>{b}</Text>
        </>
    )
}