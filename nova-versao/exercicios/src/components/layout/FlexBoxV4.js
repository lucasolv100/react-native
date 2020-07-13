import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'


export default props => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0} />
            <View style={style.V1} />
            <View style={style.V2} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        height: 100,
        width: 100,
        flex: 1,
        backgroundColor: '#000',
    },
    V0: {
        backgroundColor: '#36c9a7',
        height: 300
    },
    V1: {
        backgroundColor: '#ff801a',
        flexGrow: 3
    },
    V2: {
        backgroundColor: '#dd22c1',
        flexGrow: 1
    }
})