import React from 'react'
import {Text, View, Button, StyleSheet} from 'react-native'
import Estilo from '../estilos'

export default ({num}) => {
    return (
        <View style={style.Container}>
            <Text style={[Estilo.ex, style.Num]}>
                {num}
            </Text>
        </View>
    )
}


const style = StyleSheet.create({
    Container: {
        height:50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25
    },
    Num: {
        color: '#fff'
    }
})