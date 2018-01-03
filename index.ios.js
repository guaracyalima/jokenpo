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
  }
}

// class Container extends Component{
//   render(){
//     return(

//       )
//     }
//   }

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
          result = 'Usuario ganhou'
        }else{
          resultado = 'Computador ganhou'
        }
      }

      if(escolhaComputador == 'papel'){
        if(escolhaUsuario == 'pedra'){
          resultado = 'Empate'
        }

        if(escolhaUsuario == 'tesoura'){
          result = 'Usuario ganhou'
        }else{
          resultado = 'Computador ganhou'
        }
      }

      if(escolhaComputador == 'tesoura'){
        if(escolhaUsuario == 'tesoura'){
          resultado = 'Empate'
        }

        if(escolhaUsuario == 'pedra'){
          result = 'Usuario ganhou'
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
        <View></View>
        <Text>Escolha do computador: { this.state.escolhaComputador }</Text>
        <Text style={ estilos.escolhaDoUsuario}>Escolha do usuario: { this.state.escolhaUsuario }</Text>
        <Text>Resultado: { this.state.resultado }</Text>

        
        </View>
        )
      }
    }

    AppRegistry.registerComponent('app3', () => app3);
