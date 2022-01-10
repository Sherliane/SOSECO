
import React, { Component} from 'react';
import { Modal, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { StyleSheet, View, Text } from 'react-native'
class ModalUpdate extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  
   render(){
    const { modalVisible } = this.state;
    return (
      
    <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Atualizar</Text>
              <View style={styles.container}>
              <View style={styles.bloco}>
                  {this.props.conteudo}
             </View>
        </View>
 

            <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => { this.setModalVisible(!modalVisible)}}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
          onPress={() => {
            this.setModalVisible(true)
          }}>
          <View style={{flexDirection: 'row'}}>
            <AntDesign name="edit" size={20} color= '#368ED3' />
            <Text>{modalVisible}Editar</Text>
            </View>
      </Pressable>
    </View>
    );
  }
}

  export default ModalUpdate
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

