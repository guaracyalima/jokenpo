/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
  AppRegistry,
  Text,
  View,
  Button,
  Alert,
  Image
} from 'react-native';

const estilos = {
  view: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 25
  },
  escolhaDoUsuario: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold'
  },
  btnEscolha:{
    width :90,
    backgroundColor: 'skyblue',
    marginTop: 10
  },
  painelAcoes: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  },
  viewPlaco: {
    alignItems: 'center',
    marginBottom: 20,
  },
  txtJogador: {
    fontSize: 18
  }
}

class Icone extends Component{
  render(){

    if (this.props.escolha == 'pedra') {
      return(
        <View style={ estilos.viewPlaco }>
          <Text style={ estilos.txtJogador }> { this.props.jogador} </Text>
          <Image source={ require('./img/pedra.png') } />
        </View>
      )
    }else if(this.props.escolha == 'papel'){
      return(
        <View style={ estilos.viewPlaco }>
          <Text style={ estilos.txtJogador }> { this.props.jogador} </Text>
          <Image source={ require('./img/papel.png') } />
        </View>
      )
    } else if(this.props.escolha == 'tesoura'){
      return(
        <View style={ estilos.viewPlaco }>
          <Text style={ estilos.txtJogador }> { this.props.jogador} </Text>
          <Image source={ require('./img/tesoura.png') } />
        </View>
      )
    }else{
      return false
    }
  }
}

class Topo extends Component{
  render(){
    return(
      <View>
      <Image source={ require('./img/jokenpo.png') } />
      </View>
      )
    }
  }

  class app3 extends Component{
    constructor(props) {
      super(props);

      this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: ''};
    }

    jokenpo = ( escolhaUsuario ) => {
      //gera aleatorio (0, 1, 2)
      let numAleatorio = Math.floor(Math.random() * 3)
      let escolhaComputador = ''

      switch (numAleatorio) {
        case 0:
        escolhaComputador = 'pedra'
        break;

        case 1:
        escolhaComputador = 'papel'
        break;

        case 2:
        escolhaComputador = 'tesoura'
        break;
      }

      let resultado = ''

      if(escolhaComputador == 'pedra'){
        if(escolhaUsuario == 'pedra'){
          resultado = 'Empate'
        }

        if(escolhaUsuario == 'papel'){
          resultado = 'Você ganhou'
        }else{
          resultado = 'Computador ganhou'
        }
      }

      if(escolhaComputador == 'papel'){
        if(escolhaUsuario == 'pedra'){
          resultado = 'Empate'
        }

        if(escolhaUsuario == 'tesoura'){
          resultado = 'Você ganhou'
        }else{
          resultado = 'Computador ganhou'
        }
      }

      if(escolhaComputador == 'tesoura'){
        if(escolhaUsuario == 'tesoura'){
          resultado = 'Empate'
        }

        if(escolhaUsuario == 'pedra'){
          resultado = 'Você ganhou'
        }else{
          resultado = 'Computador ganhou'
        }
      }

      this.setState({   escolhaUsuario: escolhaUsuario,
        escolhaComputador: escolhaComputador,
                    resultado: resultado}) //atribui o valor do parametro pra variavel
    }


    render(){
      return(
        <View>

        <Topo />
        <View style={ estilos.painelAcoes }>
          <View style={estilos.btnEscolha }>
            <Button title="pedra" onPress={ () => { this.jokenpo('pedra') }} />
          </View>
          <View style={estilos.btnEscolha }>
            <Button title="papel" onPress={ () => { this.jokenpo('papel') }} />
          </View>
          <View style={estilos.btnEscolha }>
            <Button title="tesoura" onPress={ () => { this.jokenpo('tesoura') }} />
          </View>
        </View>
        <View style={ estilos.palco }>
          <Text style={ estilos.txtResultado }>{ this.state.resultado } </Text>
          
          <Icone escolha={ this.state.escolhaComputador } jogador={ 'Computador' }></Icone>
          <Icone escolha={ this.state.escolhaUsuario } jogador={ 'Voce' }></Icone>
          
        </View>
        </View>
        )
      }
    }

    AppRegistry.registerComponent('app3', () => app3);
