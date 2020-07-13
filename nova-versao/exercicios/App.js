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
// import Usuario from './src/components/UsuarioLogado'
// import ListaProdutos from './src/components/produtos/ListaProdutos'
// import ListaProdutos from './src/components/produtos/ListaProdutosV2'
// import DigiteSeuNome from './src/components/DigiteSeuNome'
// import Quadrado from './src/components/layout/Quadrado'
// import FlexBoxV1 from './src/components/layout/FlexBoxV1'
// import FlexBoxV2 from './src/components/layout/FlexBoxV2'
// import FlexBoxV3 from './src/components/layout/FlexBoxV3'
// import FlexBoxV4 from './src/components/layout/FlexBoxV4'
import Mega from './src/components/mega/Mega'

const usu = {
  nome: 'Teste',
  email: 'teste@teste.com'
}

export default () => (
  <SafeAreaView style={style.App}>
    <Mega qtdNum={7} />
    {/* <FlexBoxV4 /> */}
    {/* <FlexBoxV3 /> */}
    {/* <FlexBoxV1 /> */}
    {/* <DigiteSeuNome /> */}
    {/* <ListaProdutos /> */}
    {/* <Usuario /> */}
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
