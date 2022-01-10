import React from 'react';
import {Linking, Image} from 'react-native'
import { Foundation } from '@expo/vector-icons'; 

import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const Chamandoempresas = ({ data }) => {
  return (

      <View style={styles.item}>
        <View style={styles.itemInfo}>
          <Text style={styles.itemP1}>{data.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Foundation name="telephone" size={24} color="green" />
              <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${data.contato}`)}}>
                <Text style={styles.itemP2}>{data.contato}</Text>
              </TouchableOpacity> 
        
          </View>
          <Text style={styles.itemP3}>{data.cidade}</Text>
        </View>
      </View>
  );
  
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingTop: 15,
    paddingBottom: 15,
  },

  itemInfo: {
    marginLeft: 15,
    

  },
  itemP1: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#368ED3',
    marginBottom: 5
  },
  itemP2: {
    fontSize: 16,
    color: 'black',
    textAlign: 'justify',
    textDecorationLine: 'underline'

  },
  itemP3: {
    fontSize: 16,
    color: 'black',
    textAlign: 'justify',

  },
});

export default Chamandoempresas;
