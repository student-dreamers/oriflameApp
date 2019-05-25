import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export const ProductDetail = props => (
    <View style={styles.container}>
        <Text style={styles.heading}>
            {props.name}
        </Text>
        <Image source={{
            uri: props.imageSource
        }} style={styles.image}/>
        <View style={styles.desc}>
            <Text style={styles.heading2}>Složení</Text>
            <Text style={styles.descText}>
                {props.desc}
            </Text>
        </View>
        <View style={styles.price}>
            <Text>Cena</Text>
            <Text>{props.price}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    image: {
        width: '90%',
    },
    heading: {
        fontSize: 35,
    },
    heading2: {
        fontSize: 25,
    },
    desc: {

    },
    descText: {

    },
    price: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});