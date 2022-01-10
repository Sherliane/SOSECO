import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableWithoutFeedback} from 'react-native';
import { useState } from 'react';
import MapView, { Marker } from 'react-native-maps'
import Chamandoempresas from '../componentes/Chamandoempresas';
import { AntDesign } from '@expo/vector-icons';

import * as Location from "expo-location";

// import empresas from '../MyFlatList/empresas';
// import empresas from '../MyFlatList/empresas'
// import Chamandoempresas from '../componentes/Chamandoempresas'

const axios = require('axios');

 const EmpresasEnergia = () =>{
  const [searchText, setSearchText] = useState('');
  const [location, setLocation] = useState(null);
  let [flatListItems, setFlatListItems] = useState([]);
  const [pesquisa, setPesquisa] = useState([]);
  const [empresa, setEmpresas] = useState([]);
  // console.log({empresa})

    useEffect(()=>{
      axios.get('https://61cc9f2c198df60017aec190.mockapi.io/companhia_energia').then(result => {setEmpresas(result.data);
      setFlatListItems(result.data), setPesquisa(result.data)     
      })
    }, [])
    useEffect(() => {
      if (searchText === '') {
        setPesquisa(flatListItems);
      } else {
        setPesquisa(
          flatListItems.filter(
            (data) =>
              data.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1,
          ),
  
        );
      }
    }, [searchText]);

    useEffect(() => {
      (async () => {
        let { status } =
          await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Permission to access location was denied");
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
    
      return (
          <><View style={styles.container}>
          <Text style={{ color: '#368ED3', fontSize: 20, marginBottom: 10, marginTop: 10 }}>Energia Solar Brasil</Text>
          
          <MapView style={styles.map}
            initialRegion={{
              latitude: -6.4412999070886645,
              longitude: -36.75096434428861,
              latitudeDelta: 2,
              longitudeDelta: 1
            }}
            showsUserLocation
            loadingEnabled
          >
            {empresa.map((empresa, index) => {
              return <Marker key={index} coordinate={{ latitude: empresa.latitude, longitude: empresa.longitude }}
                title={empresa.name}
              >
              </Marker>;
            })}
          </MapView>
        </View>
        <View style={styles.searchArea}>
           <AntDesign style={styles.icon} name="search1" size={20} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Pesquise pelo nome da Empresa"
            placeholderTextColor="#828282"
            value={searchText}
            onChangeText={(t) => setSearchText(t)}
          />
        </View>
        
        <FlatList
            data={pesquisa}
            renderItem={({ item }) => <Chamandoempresas data={item} />}
            keyExtractor={(item) => item.id} /></>
      )

       
}

export default EmpresasEnergia
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, map: {
    width:400,
    height:300,
  },
  input: {
    fontSize: 14,
    color: '#666',
    alignSelf: 'center',

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
  },
  icon: {
    alignSelf: 'center',
    paddingRight: 20
},
});
