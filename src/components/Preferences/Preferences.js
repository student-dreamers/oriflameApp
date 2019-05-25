import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Products from '../Products/Products';

export class Preferences extends Component {
    state = {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.preferences}>

                </View>
                <Products />
            </View>
        )
    }
}
    
const styles = StyleSheet.create({
    container: {

    },
    preferences: {

    }
})
