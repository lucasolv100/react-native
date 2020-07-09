import React from 'react'
import { Text, View, Button, Platform } from 'react-native'
import Estilo from './estilos'

export default props => {
    if (Platform.OS === 'android') {
        return <Text style={Estilo.ex}>Android</Text>
    } else if (Platform.OS === 'ios') {
        return <Text style={Estilo.ex}>IOS</Text>
    }
    else {
        return <Text style={Estilo.ex}>Desconhecido</Text>
    }

}