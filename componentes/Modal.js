
import React, { Component, useState} from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableHighlight, Image, Button } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export default class ModalTela extends Component {
// const ModalTela = () => {
  constructor(props){
    super(props);
    this.state = {isVisible: false};
  }
  render() {
  return (
    <View style={styles.centeredView}>
      <Modal
      
        animationType="fade "
        transparent={true}
        visible={this.state.isVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
         this.setState({isVisible: false});
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{this.props.text}</Text>
            <Text style={{textAlign: 'justify', fontSize: 17}}>{this.props.conteudo}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {this.setState({isVisible: false})}}
            >
              <Text style={styles.textStyle}>Entendi!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
       onPress={() => {this.setState({ isVisible: true});
          }}
       ativar={this.props.ativar}
      >

          <Text style={styles.textStyle}>Exibir Resultado</Text>
         

      </Pressable>
    </View>
    );
  };
}

const styles = StyleSheet.create({
  centeredView: {
  
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
 
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 1
  },
  buttonOpen: {
    backgroundColor: "#368ED3",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginTop: 10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
    
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: '#368ED3', 
    fontWeight: "bold",
    fontSize: 15
  }
});

