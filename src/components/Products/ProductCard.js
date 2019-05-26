import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

export const ProductCard = props => (
    <TouchableOpacity onPress={() => {
        props.onPress(props.uuid);
    }}>
        <View style={styles.container}>
            <Image source={{
                uri: props.url_image
            }}
                style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.name}</Text>
                <Text style={styles.text}>{props.price} Kč</Text>
            </View>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#b4d329',
    },
    image: {
        width: imageWidth,
        height: imageHeight,
    },
    textContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        width: '40%',
        textAlign: 'center',
    }
})