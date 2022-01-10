import React, { Component } from 'react';
 
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default class Cronometro extends Component {
 
  constructor(props) {
    super(props);
 
    this.state = {
      timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
      startDisable: false
    }
  }
 
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
 
  onButtonStart = () => {
 
    let timer = setInterval(() => {
 
      var num = (Number(this.state.seconds_Counter) + 1).toString(),
        count = this.state.minutes_Counter;
 
      if (Number(this.state.seconds_Counter) == 59) {
        count = (Number(this.state.minutes_Counter) + 1).toString();
        num = '00';
      }
      if (Number(this.state.seconds_Counter) == 59 && Number(this.state.minutes_Counter == 9) ) {
         this.onButtonStop();
         alert('Tempo Encerrado')
      }
 
      this.setState({
        minutes_Counter: count.length == 1 ? '0' + count : count,
        seconds_Counter: num.length == 1 ? '0' + num : num
      });
    }, 1000);
    this.setState({ timer });
 
    this.setState({startDisable : true})
  }
 
 
  onButtonStop = () => {
    clearInterval(this.state.timer);
    this.setState({startDisable : false})
  }
 
 
  onButtonClear = () => {
    this.setState({
      timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
    });
  }
 
  render() {
 
    return (
     <View style={styles.MainContainer}>
         <Image  style={{position: 'absolute'}} source={require('../imagens/elipse.png')}></Image>
           <Text style={styles.counterText}>{this.state.minutes_Counter}: {this.state.seconds_Counter}</Text>


            <View style={{flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={this.onButtonStop}
                    activeOpacity={0.6}
                    style={[styles.button, { backgroundColor: '#43AECF' }]}>

                        <Text style={styles.buttonText}><Ionicons name="pause-sharp" size={24} color="white" /></Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.onButtonStart}
                    activeOpacity={0.6}
                    style={[styles.button, { backgroundColor: this.state.startDisable ? '#B0BEC5' : '#0D5C9A' }]}
                    disabled={this.state.startDisable}>

                    <Text style={styles.buttonText}><AntDesign name="caretright" size={24} color="white" /></Text>

               </TouchableOpacity>
              <TouchableOpacity
                  onPress={this.onButtonClear}
                  activeOpacity={0.6}
                  style={[styles.button, { backgroundColor: this.state.startDisable ? '#B0BEC5' : '#43AECF' }]}
                  disabled={this.state.startDisable}>

                  <Text style={styles.buttonText}> <MaterialCommunityIcons name="restart" size={24} color="white" /> </Text>
              
              </TouchableOpacity>
            </View>

      </View>
 
    );
  }
}
 
 
 
const styles = StyleSheet.create({
  MainContainer: {

    alignItems: 'center',
    backgroundColor: '#CEE7EF',
  },
  button: {
    width: '10%',
    paddingTop:10,
    paddingBottom:8,
    borderRadius:80,
    marginTop: 70,
    marginLeft: 2,
  },
  buttonText:{
      color:'#fff',
      textAlign:'center',
     
      fontSize: 20
  },
  counterText:{
    marginTop: 70,
    fontSize: 28,
    color: '#0D5C9A'
  }
});