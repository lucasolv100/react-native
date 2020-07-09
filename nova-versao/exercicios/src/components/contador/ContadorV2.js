import React, { useState } from 'react'
import { Text, View, Button } from 'react-native'
import Estilo from '../estilos'
import ContadorDisplay from './ContadorDisplay'
import CBotoes from './ContadorBotoes'

export default props => {

    let [num, setNum] = useState(0)

    const inc = () => setNum(num + 1);
    const dec = () => setNum(num - 1);

    return (
        <>
            <Text style={Estilo.ex}>
                Contador
            </Text>
            <ContadorDisplay num={num} />
            <CBotoes inc={inc} dec={dec} />
        </>
    )
}

