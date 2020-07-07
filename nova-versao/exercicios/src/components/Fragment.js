import React, { Fragment } from 'react'
import {View, Text} from 'react-native'
import Estilo from './estilos'

export default props => 
        // <Fragment>
        //     <Text style={Estilo.ex}>{props.principal}</Text>
        //     <Text>{props.secundario}</Text>
        // </Fragment>
        <>
            <Text style={Estilo.ex}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </>
    