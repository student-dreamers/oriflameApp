import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const ProductCard = props => (
    <View style={styles.container}>
        <Image source={{
            uri: props.imageSource
        }} style={styles.image} />
        <View style={styles.textContainer}>

        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignItems: 'center',
    },
    image: {

    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})