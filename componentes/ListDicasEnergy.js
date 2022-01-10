import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListDicasEnergy = ({ data }) => {
  return (
    <View>
      
      <View style={styles.item}>
        <View style={styles.itemInfo}>
          <Text style={styles.itemP1}>{data.title}</Text>
          <Text style={styles.itemP2}>{data.description}</Text>
        </View>
      </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DEDFE1',
    paddingTop: 15,
    paddingBottom: 15,
  },
  
  itemInfo: {
    marginLeft: 15,
    

  },
  itemP1: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#5B3100',
    marginBottom: 5
  },
  itemP2: {
    fontSize: 16,
    color: 'black',
    textAlign: 'justify'

  },
});

export default ListDicasEnergy;
