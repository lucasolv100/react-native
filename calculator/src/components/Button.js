import React from 'react'
import {
    StyleSheet,
    Text, Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#888"
    },
    operacoes: {
        color: "#fff",
        backgroundColor: '#fa8231',
    },
    duasPosicoes: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    tresPosicoes: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})


export default props => {
    const stylesButton = [styles.button]

    if(props.double)
    {
        stylesButton.push(styles.duasPosicoes)
    }
    if(props.triple)
    {
        stylesButton.push(styles.tresPosicoes)
    }
    if(props.operation)
    {
        stylesButton.push(styles.operacoes)
    }

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}
