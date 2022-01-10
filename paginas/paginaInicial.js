import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../componentes/Button'
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
  {
    key: '1',
    title: 'SEJA BEM VINDO!',
    text: 'Gerência de Controle de Gastos em Energia Elétrica e Hídrico ',
    image: require('../imagens/logo.png')
  },
  {
    key: '2',
    title: 'TENHA CONTROLE DE GASTOS',
    text: 'Cadastre equipamentos e fique por dentro de seus gastos!',
    image: require('../imagens/gastos.png')
  },
  {
    key: '3',
    title: 'DIVERSOS RECURSOS EM UM SÓ APP!',
    text: 'Dicas de Economia, localize empresas de energia solar de sua região e mais!',
    image: require('../imagens/casas.png')
  },
];

export default function paginaInicial({navigation}) {
  function renderSlides({ item }){
    return(
      <View style={{ alignItems: 'center',justifyContent: 'center', minHeight: 825}}>
        <Image source={item.image} style={{marginTop:20, width: 320, height: 220}}/>
        <Text 
          style={{
          paddingTop: 100,
          paddingBottom: 10,
          fontSize: 23,
          fontWeight: 'bold',
          color: '#009CFF',
          alignSelf: 'center'
        }}>
         {item.title}
        </Text>

        <Text
        style={{
          textAlign: 'center',
          color: '#b5b5b5',
          paddingHorizontal: 25,
          fontSize: 15
        }}
        >
          {item.text}

        </Text>
        <View style={{ alignItems: 'flex-end', marginTop: 40}}>
        <Button style={{height: 40, width: 120, marginTop: 12}} labelButton='Vamos Nessa!'  onPress={() => { navigation.navigate('TabNavigator') }}></Button>
        </View>

      </View>
    )
  }

  return (
    <AppIntroSlider
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{
        backgroundColor: '#009CFF',
        width: 30
      }}
      
      // renderDoneButton={ () => <Text style={{color: 'red',fontSize: 20}}>Acessar!</Text>}
      onDone={ () => alert('ENTROU NO APP')}
      showSkipButton={{color: 'blue'}}
    />
   );
 }