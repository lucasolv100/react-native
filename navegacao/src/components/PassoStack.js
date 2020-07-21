import React from 'react'
import {View, Text, Button} from 'react-native'

export default props => {
    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', backgroundColor: '#000', justifyContent: 'space-around'}}>
                {props.avancar ? 
                    <Button title='Avançar'
                        onPress={() => props.navigation.push(props.avancar, {numero: parseInt(Math.random() * 100)})}
                    />
                    : false
                }
                {props.voltar ? 
                    <Button title='Voltar'
                        onPress={() => props.navigation.goBack()}
                    />
                    : false
                }
            </View>
            <View style={{flex: 1}}>
                {props.children}
            </View>
        </View>
    )
}