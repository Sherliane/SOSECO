import React, { Component } from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';

import Cronometro from '../componentes/cronometro';

export default function cronometro() {
  return (
    <View style={styles.container}>
      <View><Text style={{ fontSize: 20, color: '#368ED3', fontWeight: 'bold', textAlign: 'center', marginBottom: 5 }}>Cronômetro de Banho</Text></View>
      <Cronometro />
      <View style={styles.contain2}>
        <Image style={{ width: 280, height: 150, marginTop: 180, alignSelf: 'center' }} source={require('../imagens/balao.png')}></Image>
        <Image style={{ width: 100, height: 100, alignSelf: 'flex-start', marginTop: -10 }} source={require('../imagens/gota.png')}></Image>
      </View>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    minHeight: 825,

    backgroundColor: '#CEE7EF',
  }, contain2: {
    justifyContent: 'flex-end'
  }

});