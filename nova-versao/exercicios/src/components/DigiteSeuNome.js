import React, {useState} from 'react'
import {Text, View, Button, TextInput} from 'react-native'
import Estilo from './estilos'

export default props => {
    
    let [nome, setNome] = useState('Teste')

    return (
        <View>
            <TextInput placeholder="Digite seu nome" 
            value={nome}
            onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}