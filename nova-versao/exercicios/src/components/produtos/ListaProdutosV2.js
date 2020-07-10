import React from 'react'
import { Text, View, Button, FlatList } from 'react-native'
import Estilo from '../estilos'

import produtos from './Produtos'

export default props => {
    return (
        <>
            <Text style={Estilo.ex}>
                Lista Produtos V2
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={({ item: p }) => {
                return <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>
                }}
            />
        </>
    )
}