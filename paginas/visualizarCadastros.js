import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { listValorTotal, Delete, DeleteEquipamento, Update, list} from '../helpers/db/db';
import { Feather } from '@expo/vector-icons';
import ModalUpdate from '../componentes/ModalUpdate';
import ModalRead from '../componentes/ModalRead';

import InputInteger from '../componentes/InputInteger';
import Button from '../componentes/Button';
import {StatusBar} from 'expo-status-bar'
import { TextInput } from 'react-native';
const Visualizar = ({navigation}) => {
  let [flatListItems, setFlatListItems] = useState([]);
  const [id, setId]= useState();
  const [name, setName]= useState();
  const [dias, setDias]= useState();
  const [potencia, setPotencia]= useState();
  const [tempo, setTempo]= useState();
  const [kwh, setKwh]= useState();
  
 // console.log(name)
  // let atualizarEstados = (name, dias, potencia,tempo,kwh) => {
  //   setName(name);
  //   setDias(dias);
  //   setPotencia(potencia);
  //   setTempo(tempo);
  //   setKwh(kwh);

  // };
  
  let Atualizar =(id) => {
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
    Update(name,dias,potencia,tempo,kwh,id)
    .then((result) => {
      verRegistros();}
    )
    .catch(err => {
      console.log(err);
    })
  }


  let verRegistros = () => {
    listValorTotal()
      .then((result) => {
        console.log(result.rows._array)
        setFlatListItems(result.rows._array);
      })
      .catch(err => {
        console.log(err);
      })

  }
  useEffect(() => {
    verRegistros();
  }, [])

  const DeletarEquipamento = (id) => {
    DeleteEquipamento(id)
      .then((result) => {
        verRegistros();
        console.log(result.rows._array);
      })

      .catch(err => {
        console.log(err);
      })

  }
  // useEffect(() => {
  //   if (flatListItems != null){
  //     for(let i=0; i < flatListItems.length ; i++){
  //       setName(flatListItems[i].name)
  //       setDias(flatListItems[i].dias)
  //       setPotencia(flatListItems[i].potencia)
  //       setTempo(flatListItems[i].tempo)
  //       setKwh(flatListItems[i].kwh)

  //      console.log(name)

  //     }
  //   }
  // }, [flatListItems])

  const Deletar = () => {
    Delete()
      .then((result) => {
        console.log(result.rows._array);
        setFlatListItems(result.rows._array)
      })
      .catch(err => {
        console.log(err);
      })

  }
  let listItemView = ({item}) => {

    return (
        <View
          key={item.id}
          style={{ backgroundColor: '#EEE', marginTop: 10, padding: 15, borderRadius: 10, margin: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textheader}>Equipamento</Text>
            <Text style={styles.textheader}>Gasto Diário:</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textbottom}>{item.name}</Text>
            <Text style={styles.textbottom}>R${item.VALORDIAS}</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textheader}>Gasto em {item.dias} dias:</Text>
            <Text style={styles.textheader}>Gasto em 30 dias:</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textbottom}>R${item.MESDIAS}</Text>
            <Text style={styles.textbottom}>R${item.MENSAL}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
              <View style={{marginTop: 20}}>
                  <TouchableOpacity onPress={() => {
                      Alert.alert(
                      "Confirmar Exclusão", "Deseja realmente excluir o item?",
                      [
                        { text: "NÃO", onPress: () => console.log("Cancel Pressed"),},
                        { text: "SIM",  onPress: () => DeletarEquipamento(item.id) }
                      ]
                    );
                  }}>
                      <Feather name="trash-2" size={20} color='#368ED3' />
                </TouchableOpacity>
            </View>
            <View style={{marginLeft: 90}}>
              <ModalRead conteudo={
                <View>
                  <Text style={{ fontWeight: 'bold' }}>Dados Atuais:</Text>
                  <Text>Codigo: {item.id}</Text>
                  <Text>Equipamento: {item.name}</Text>
                  <Text>Dias de Consumo Mensal: {item.dias}</Text>
                  <Text>Potencia: {item.potencia} W</Text>
                  <Text>Tempo:{item.tempo} </Text>
                  <Text>Valor do Kwh: R${item.kwh}</Text>
                </View>
                  }
                  />
              </View>


                <TouchableOpacity style={{ marginLeft: 80, flexDirection: 'row' }}>
                  <ModalUpdate
                    conteudo={<View>
                      <Text style={{ fontSize: 17 }}>Equipamento:</Text>
                      <TextInput style={styles.input} placeholder={item.name}onChangeText={(value) => setName(value)}></TextInput>
                      {/* <TextInput  placeholder={item.name} onChangeText={(value) => { setName(value)}} /> */}
                      <Text style={{ fontSize: 17 }}>Dias de Consumo Mensal:</Text>

                      <TextInput style={styles.input} placeholder={''+item.dias} keyboardType='numeric' onChangeText={(value) => { setDias(value); } }/>

                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 30, paddingLeft: 30, marginTop:10 }}>
                        <Text style={{ fontSize: 17 }}>Potência:</Text>
                        <Text style={{ fontSize: 17 }}>Tempo de Uso:</Text>
                      </View>

                      <View style={{ flexDirection: 'row'}}>
                        <TextInput style={styles.input2} placeholder={''+item.potencia} keyboardType='numeric' onChangeText={(value) => { setPotencia(value); } }/>
                        <Text style={{ color: '#c2c2a3', alignSelf: 'center' , marginRight: 80}}>W</Text>
                        <TextInput style={styles.input2} placeholder={''+item.tempo} keyboardType='numeric' onChangeText={(value) => { setTempo(value); } }/>
                      </View>

                      <Text style={{ textAlign: 'center', fontSize: 17 }}>Valor Tarifa de sua região:</Text>
                      <TextInput style={styles.input} placeholder={''+item.kwh} onChangeText={(value) => { setKwh(value); }}/>
                      <Button labelButton='Atualizar' style={{ width: 80 }} onPress={() => { Atualizar(item.id); } }></Button>

                      <View>
                        <Text style={{ fontWeight: 'bold' }}>Dados Atuais:</Text>
                        <View>
                          <Text>Codigo: {item.id}</Text>
                          <Text>Equipamento: {item.name}</Text>
                          <Text>Dias de Consumo Mensal: {item.dias}</Text>
                          <Text>Potencia: {item.potencia} W</Text>
                          <Text>Tempo:{item.tempo} </Text>
                          <Text>Valor do Kwh: R${item.kwh}</Text>
                        </View>

                      </View>

                    </View>}> </ModalUpdate>

                </TouchableOpacity>
          </View>
        </View>

    );
  };
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View>
                <FlatList
                  contentContainerStyle={{ paddingHorizontal: 20 }}
                  data={flatListItems}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={listItemView}
                  ListHeaderComponent={
                    <Text style={{ marginTop: 10, textAlign: 'center', color: '#368ED3', fontWeight: 'bold' }}> EQUIPAMENTOS REGISTRADOS E CALCULADOS</Text> 
                  }
                  ListFooterComponent={
                    <View>
                    <TouchableOpacity onPress={() => {
                      Alert.alert(
                      "Confirmar Exclusão", "Você está prestes a excluir todos os itens!!",
                          [
                            { text: "NÃO", onPress: () => console.log("Cancel Pressed"),},
                            { text: "SIM",  onPress: () => {Deletar()}}
                          ]
                        );
                      }}>  
                        <Text style={{ color: 'red', fontWeight: 'bold', margin:10 }}> X Excluir Todos os Itens</Text>
                        </TouchableOpacity>
                      <View style={{flexDirection: 'row'}}>
                            <Button style={{width: 170}} labelButton='Visualizar Gráfico' onPress={() => { navigation.navigate('visualizarGrafico') }}></Button>
                            <Button style={{marginLeft: 40,width: 170}}labelButton='cadastrar Novos itens' onPress={() => { navigation.navigate('registre2') }}></Button>
                      </View>
                    </View>
                  }
                /> 
        </View>        
                  
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textheader: {
    color: '#368ED3',
    fontSize: 12,
    fontWeight: '700',
    justifyContent: 'space-between',
    paddingRight: 130
  },
  textheader2: {
    color: '#368ED3',
    fontSize: 12,
    fontWeight: '700',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    marginTop: 10,
    paddingRight: 90
  },
  textbottom: {
    color: '#111',
    fontSize: 18,
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    paddingRight: 130
  },input:{
    width: 300,
    height: 40,
    borderWidth: 1, 
    borderColor:'#5dadec', 
    padding:10,  
    borderRadius:8,
    marginTop: 10
  }
  ,input2:{
    width: 100,
    height: 40,
    borderWidth: 1, 
    borderColor:'#5dadec', 
    padding:10,  
    borderRadius:8,
    marginTop: 10
  }
  
});

export default Visualizar;