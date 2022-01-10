import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity style={[styles.button, this.props.style]}
                onPress={this.props.onPress}>
                <Text style={styles.texto}>
                    {this.props.labelButton}
                </Text>
            </TouchableOpacity>
        )

    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#009CFF',
        width: 213,
        height: 45,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 40,
    },
    texto: {
        color: 'white',
        fontSize:15,
    }
})