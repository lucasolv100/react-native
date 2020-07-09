import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import Estilo from '../estilos'

export default props => {
    return (
        <View style={style.Display}>
            <Text style={[Estilo.ex, style.DisplayText]}>
                {props.num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300

    },
    DisplayText: {
        color: '#fff'
    }
})