import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '@components/Text';
import { ReactCamera } from './RNCamera/RNCamera';

export const BarcodeScanner = props => {
    return (
        <Modal visible={props.modalOpen} style={styles.modal}>
            <View style={styles.container}>
                <TouchableOpacity onPress={props.closeBarcodeScanner} style={styles.backButton}>
                    <Text>Zpět</Text>
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
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
    }
})