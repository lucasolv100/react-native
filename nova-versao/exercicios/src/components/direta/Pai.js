import React from 'react'
import {Text, View, Button} from 'react-native'
import Estilo from '../estilos'
import Filho from './Filho'

export default props => {

    const ola="Pai disse oi"
    const lavar="Pai disse vai lavar a louça"

    return (
        <Filho a={ola} b={lavar} />
    )
}