import React from 'react'
import {StyleSheet, View, Button} from 'react-native'
import Estilo from '../estilos'

export default props => {
    return (
        <View style={style.Botoes}>
        <Button title="+" onPress={props.inc} />
        <Button title="-" onPress={props.dec} />
        </View>
    )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: "row"
    }
})