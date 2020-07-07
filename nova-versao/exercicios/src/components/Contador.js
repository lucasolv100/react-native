import React, { useState } from 'react'
import {Text, Button} from 'react-native'

import Estilo from './estilos'

export default props => {

    let [numero, setNumero] = useState(0);

    const inc = () => setNumero(numero+ 1);
    const dec = () => setNumero(numero- 1);

    return (
        <>
        <Text>{numero}</Text>
        <Button title="+" onPress={inc} />
        <Button title="-" onPress={dec} />
        </>
    )
}