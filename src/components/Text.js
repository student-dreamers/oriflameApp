import React from 'react';
import { Text, StyleSheet } from 'react-native';

const text = props => (
    <Text style={[styles.text, props.style]}>{props.children}</Text>
)

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 17,
    }
})

export default text;