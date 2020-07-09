import React from 'react'
import { Text, View, Button } from 'react-native'
import Estilo from './estilos'

export default ({ num = 0 }) => {
    return (
        <View>
            <Text style={Estilo.ex}>O resultado é: </Text>
            {
                num % 2 === 0 ? <Text style={Estilo.ex}>Par</Text> : <Text style={Estilo.ex}>Impar</Text>
            }
        </View>
    )
}