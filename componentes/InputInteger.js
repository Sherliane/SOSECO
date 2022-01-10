import React, { Component } from 'react';

import {StyleSheet, TextInput} from "react-native";

export default class InputInteger extends Component{
    render(){
        return(
            <TextInput
            style={[styles.bloco, this.props.style]}
            placeholderTextColor={'#ccc'}
            placeholder={this.props.placeholder}
            secureTextEntry={this.props.seguranca}
            // value={this.props.value}
            onChangeText={this.props.onChangeText}
            keyboardType = {this.props.keyboardType}
            // onPress={this.props.onPress}
            // thousandSeparator={this.props.thousandSeparator}
            // prefix={this.props.prefix}
            // displayType= {this.props.displayType}
            />

        )
    }

}
const styles= StyleSheet.create({
    bloco:{
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1, 
    borderColor:'#5dadec', 
    padding:10,  
    borderRadius:8,

    }
})