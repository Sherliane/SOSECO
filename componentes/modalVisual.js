
import React, { Component} from 'react';
import { Alert, Modal, Pressable} from "react-native";
import { StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'; 


class ModalVisual extends Component {
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
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Atualizar</Text>
              <View style={styles.container}>
              <Text style={styles.textinicial}>
                 {this.props.textinicial}
              </Text>
              <View style={styles.bloco}>
                  {this.props.conteudo}
             </View>
        </View>
 

            <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => this.setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
          onPress={() => this.setModalVisible(true)}>
          <View style={{flexDirection: 'row', marginTop: -20}}>
          <Feather name="list" size={24} color="black" />            
            </View>
      </Pressable>
    </View>
    );
  }
}

  export default ModalVisual
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

