import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import { View, StyleSheet } from 'react-native';
import Text from '@components/Text';
import { PendingView } from './PendingView';
import { ProductDetail } from '@components/Products/ProductDetail';

export class ReactCamera extends Component{
    state = {
        productDetailOpen: false,
    }

    onBarcodeScanned = (barcode) => {
        if (barcode.data) {
            this.setState({
                productDetailOpen: true,
                productUUID: barcode.data,
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    captureAudio={false}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    onBarCodeRead={(barcode) => {
                        onBarcodeScanned(barcode);
                    }}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                >
                    {({ camera, status, recordAudioPermissionStatus }) => {
                        if (status !== 'READY') return <PendingView />;
                        return (
                            <View style={styles.barcodeScannerUI}>
                                <Text>&nbsp;</Text>
                            </View>
                        );
                    }}
                </RNCamera>
                <ProductDetail modalOpen={this.state.productDetailOpen}
                productUUID={this.state.productUUID}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    preview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    barcodeScannerUI: {
        flexShrink: 0,
        zIndex: 2,
        borderColor: '#b4d329',
        borderWidth: 2,
        minWidth: '50%',
        minHeight: '25%',
    }
});