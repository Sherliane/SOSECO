import React from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView , Platform, ScrollView} from 'react-native';
import Button from '../componentes/Button';
import InputInteger from '../componentes/InputInteger';
import { init, insertRegistrar, listValorTotal } from '../helpers/db/db';
import { useEffect } from 'react';
import { useState } from 'react';
import Logo from '../componentes/Logo';

init().then(() => {
    console.log("Banco Inicializado");''
  }).catch((err)=> {
    console.log("Erro ao inicializar o banco");
    console.log(err)
  })
  
  export default function Registre2({navigation}) {
    // const [flatListItems, setFlatListItems]= useState([]);
    const [registrados, setRegistrados]= useState([]);
    const [name, setName]= useState('');
    const [dias, setDias]= useState();

    const [potencia, setPotencia]= useState();
    const [tempo, setTempo]= useState();
    const [kwh, setKwh]= useState();

    const salvarEquipamento= () =>{
      if (!name) {
        alert('Por Favor informe o nome do equipamento!');
        return;
      }
      if (!dias) {
        alert('Por favor informe os dias de consumo !');
        return;
      }
      if (!potencia) {
        alert('Por Favor informe a Potência !');
        return;
      }
      if (!tempo) {
        alert('Por Favor informe o tempo de uso !');
        return;
      }
      if (!kwh) {
        alert('Por Favor informe o valor do kwh !');
        return;
      }
        insertRegistrar(name, dias, potencia,tempo,kwh)
          .then((result) =>{
            console.log(result);
            navigation.navigate('visualizarCadastros')
            verRegistros()
            alert('Cadastro realizado com Sucesso')
          })
          .catch(err => {
            console.log(err);
          })
      }
      
  let verRegistros = () => {
    listValorTotal()
      .then((result) => {
        setRegistrados(result.rows._array);
        console.log(result)
      })
      .catch(err => {
        console.log(err);
      })

  }
  useEffect(() => {
    verRegistros();
  }, [])
  
    return (
        <View style={styles.container}>
            <Text style={styles.textinicial}>
                Registre e Calcule o consumo de Seus Equipamentos
            </Text>
            <KeyboardAvoidingView 
                style={{}}
                behavior={Platform.OS == 'ios' ? 'padding' : "height"} 
                keyboardVerticalOffset={110}
            >
              <ScrollView style={{width: '100%'}}>
            <View style={styles.bloco}>
                <Text style={{ textAlign: 'center', fontSize: 17}}>Nome do Equipamento:</Text>
                <InputInteger   placeholder='ex: Televisão'  onChangeText={(value) =>{ setName(value)}}/>

                <Text style={{ textAlign: 'center', fontSize: 17}}>Dias de Consumo Mensal:</Text>
                <InputInteger keyboardType = 'numeric' onChangeText={(value) =>{ setDias(value)}}/>


                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight:30, paddingLeft:30}} >
                    <Text style={{fontSize: 17}}>Potência:</Text>
                    <Text style={{fontSize: 17}}>Tempo de Uso:</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <InputInteger keyboardType = 'numeric' style={{width: 100}} onChangeText={(value) =>{ setPotencia(value)}}/>
                    <Text style={{color: '#c2c2a3', alignSelf: 'center'}}>W</Text>
                    <InputInteger keyboardType = 'numeric' placeholder='  Horas ou Minutos/diários' style={{width: 170}} onChangeText={(value) =>{ setTempo(value)}}/>
                </View>
               
               
                <Text style={{ textAlign: 'center', fontSize: 17}}>Valor Tarifa de sua região:</Text>
                <InputInteger placeholder='  R$ 00,00' keyboardType = 'numeric' onChangeText={(value) => { setKwh(value)}}/>
                


                  <Button style={{marginTop: 45}} labelButton='SALVAR' onPress={salvarEquipamento}></Button>
                  <Button 
                    onPress={() => { navigation.navigate('registreEquipamentos') }}
                    style={{marginTop:20}} 
                    labelButton='Voltar'>
                  </Button>
              </View>
            </ScrollView>
            </KeyboardAvoidingView>

        </View>
 
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        minHeight: 825,
        alignItems: 'center',
        
        
        
    },
    bloco:{
      marginTop: 100,

       
    },
    textinicial:{
        fontSize:20, 
        marginTop:40, 
        color: '#368ED3', 
        fontWeight: 'bold', 
        textAlign: 'center'
    }
})
