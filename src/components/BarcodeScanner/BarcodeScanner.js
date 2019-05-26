import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '@components/Text';
import { ReactCamera } from './RNCamera/RNCamera';

export const BarcodeScanner = props => {
    return (
        <Modal visible={props.modalOpen} style={styles.modal} onRequestClose={props.closeBarcodeScanner}>
            <View style={styles.container}>
                <TouchableOpacity onPress={props.closeBarcodeScanner} style={styles.backButton}>
                    <Text style={styles.buttonText}>Zpět</Text>
                </TouchableOpacity>
                <ReactCamera />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
    },
    container: {
        flex: 1,
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        top: 15,
        left: 15,
        zIndex: 2,
        backgroundColor: '#b4d329',
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
    }
})