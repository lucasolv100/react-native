import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
// import Primeiro from './src/components/Primeiro'
// import Comp1, { Comp2 } from './src/components/Multi'
// import MinMax from './src/components/MinMax'
// import Aleatorio from './src/components/Aleatorio'
// import Titulo from './src/components/Fragment'
// import Botao from './src/components/Botao'
// import Contador from './src/components/Contador'
// import Pai from './src/components/direta/Pai'
// import Pai from './src/components/indireta/Pai'
// import ContadorV2 from './src/components/contador/ContadorV2'
// import Diferenciar from './src/components/Diferenciar'
// import ParImpar from './src/components/ParImpar'
// import Familia from './src/components/relacao/Familia'
// import Membro from './src/components/relacao/Membro'
import Usuario from './src/components/UsuarioLogado'

const usu = {
  nome: 'Teste',
  email: 'teste@teste.com'
}

export default () => (
  <SafeAreaView style={style.App}>
    <Usuario />
    {/* <Familia sobrenome="Souza">
      <Membro nome="Lucas" />
      <Membro nome="João" />
      <Membro nome="Maria" />
    </Familia> */}
    {/* <ParImpar num={3} /> */}
    {/* <Diferenciar /> */}
    {/* <ContadorV2 /> */}
    {/* <Pai /> */}
    {/* <Contador /> */}
    {/* <Botao></Botao> */}
    {/* <Titulo principal="Cadastro" secundario="Tela de cadastro produto" /> */}
    {/* <Aleatorio min={5} max={10}></Aleatorio> */}
    {/* <MinMax min="3" max="20"></MinMax> */}
    {/* <Primeiro texto="teste" />
    <Comp1 />
    <Comp2 /> */}
  </SafeAreaView>
)


const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
})
