import React from 'react'
import { Text, View, Button } from 'react-native'
import Estilo from '../estilos'

import produtos from './Produtos'

export default props => {
    return (
        <>
            <Text style={Estilo.ex}>
                Lista Produtos
            </Text>
            {
                produtos.map(m => {
                return <Text key={m.id}>{m.id}) {m.nome} - {m.preco}</Text>
                })
            }
        </>
    )
}