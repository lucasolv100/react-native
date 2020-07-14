import React from 'react'
import { Text, TextInput, Button, StyleSheet, View } from 'react-native'
import Estilo from '../estilos'
import MegaNum from './Numero'


export default class Mega extends React.Component {

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    alterarQtdNumero = (qtd) => {
        this.setState({ qtdNumeros: qtd })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        let numeros = Array(+this.state.qtdNumeros).fill()
            .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(n => {
            return <MegaNum key={n} num={n} />
        })
    }

    render() {
        return (
            <>
                <Text style={Estilo.ex}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{
                        borderBottomWidth: 1
                    }}
                    placeholder="Qtd Números"
                    value={this.state.qtdNumeros}
                    onChangeText={this.alterarQtdNumero}
                />
                <Button
                    title={'Gerar números'}
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: 20
                }}>
                {this.exibirNumeros()}
                </View>
            </>
        )
    }
}