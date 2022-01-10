import React from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';



const energiasolarinfo = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Por que utilizar Energia Solar?</Text>
        <Image style={{width: 300, height: 220}}source={require('../imagens/energiasolar.png')}></Image>
        <View style={{marginTop:50}}>
          <Text style={styles.text}>Confira Algumas Vantagens</Text>
          <Text style={{fontSize: 17, marginTop: 30}}>1.Fonte de energia inesgotável{'\n'}
                2.Preservação do meio ambiente{'\n'}
                3.Sem preocupações com a conta de luz{'\n'}
                4.Incentivos governamentais{'\n'}
                5.Valoriza seu imóvel{'\n'}
                6.Alta durabilidade{'\n'}
                7.Instalação rápida e simples{'\n'}
                8.Sem manutenções</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    margin: 15
  },text:{
    fontSize: 20,
    color: '#368ED3', 
    fontWeight: 'bold', 
    textAlign: 'center'
  }
});

export default energiasolarinfo;
