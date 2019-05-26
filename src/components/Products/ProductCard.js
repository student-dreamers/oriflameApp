import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const ProductCard = props => (
    <View style={styles.container}>
        {
            props.url_image ?  <Image source={{
                uri: props.url_image
            }} style={styles.image} />
            :
            null
        }
        
        <View style={styles.textContainer}>
            <Text>{props.name}</Text>
            <Text>{props.price}</Text>
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