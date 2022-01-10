import React from 'react';
import { useState, useEffect } from 'react';
import {View,TextInput, FlatList,StyleSheet,TouchableWithoutFeedback,Text,Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ListWater from '../componentes/ListWater';
import { AntDesign } from '@expo/vector-icons';

const axios = require('axios');

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState();
  const [dicas, setDicas] = useState();

  useEffect(()=>{
    axios.get('https://61cc9f2c198df60017aec190.mockapi.io/DicasConsumoAgua').then(result => {setList(result.data);
    setDicas(result.data)   
    })
  }, [])

  useEffect(() => {
    if (searchText === '') {
      setList(dicas);
    } else {
      setList(
        dicas.filter(
          (item) =>
            item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1,
        ),

      );
    }
  }, [searchText]);

  return (
    <View style={styles.container}>
        <View style={styles.formrow}>
                <Text style={{ fontSize: 20, color: '#368ED3', fontWeight: "bold", marginTop:5}}>ECONOMIZE ÁGUA</Text>
                <Image style={{resizeMode:'contain', width:35}}source={require('../imagens/ciclo.png')}></Image>
        </View>

        <View style={styles.searchArea}>
          <TouchableWithoutFeedback>
              <AntDesign style={styles.icon} name="search1" size={24} color="black" />
          </TouchableWithoutFeedback>

        <TextInput
          style={styles.input}
          placeholder="Pesquise pela Palavra-Chave"
          placeholderTextColor="#828282"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />

      </View>
      <FlatList
        data={list}
        style={styles.list}
        renderItem={({ item }) => <ListWater data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  searchArea: {
    height: 38,
    width: 343,
    backgroundColor: '#E5E5E5',
    borderRadius: 3,
    paddingLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#B8C6CD',
    marginBottom: 30
  },
  orderButton: {
    width: 32,
    marginRight: 30,
  },
  list: {
    flex: 1,
  },
  icon: {
    alignSelf: 'center',
    paddingRight: 20
},
    formrow: {
        flexDirection: "row",
        padding: 10,
        alignSelf: 'center'
    },
});

export default App;
