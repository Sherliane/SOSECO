
import React, { Component, useState} from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableHighlight, Image, Button } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

export default class ModaDuvida extends Component {
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
         this.setState({isVisible: false});
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Onde Localizar Metros Cúbicos?</Text>
            <Text style={{textAlign: 'justify', fontSize: 17}}>Localizada em sua Conta de Água</Text>
            <Image style={{ width: 300, height: 200, marginTop: 10}}source={require('../imagens/conta.png')}></Image>
            <Text style={{fontSize: 10}}>Ilustração retirada da Internet</Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {this.setState({isVisible: false})}}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
     style={{marginTop: -30}}

      onPress={() => {this.setState({ isVisible: true});
          }}
       ativar={this.props.ativar}
      >
        <FontAwesome name="question-circle" size={20} color="black" />
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
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.80,
    shadowRadius: 4,
    elevation: 5
  },
 
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 1
  },
  buttonOpen: {
    marginTop: -40
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginTop: 10,

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

