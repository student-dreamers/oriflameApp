import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

export const NavBar = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.openBarcodeScanner}>
                <Image source={require('@images/barcode.png')} style={{
                    width: 50,
                    height: 50,
                }} />
            </TouchableOpacity>
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 20,
    }
})