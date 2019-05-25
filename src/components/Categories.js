import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '@components/Text';

export const Categories = props => {
    const categories = [
        'Tělové krémy',
        'Sprchové gely',
        'Vlasy',
        'Krémy na obličej',
        'Make-up',
        'Oči',
        'Rty',
        'Vůně',
        'Deodoranty',
        'Čištění pleti',
    ];

    categoryClicked = (id) => {
        props.openProducts();
    }

    let categoriesElements = [];

    categories.map( (category, index) => {
        categoriesElements.push(
            <TouchableOpacity id={category} key={index} onPress={(e) => {
                categoryClicked(e.id);
            }} style={styles.categoriesButtons}>
                <Text>{category}</Text>
            </TouchableOpacity>
        )
    })

    return(
        <View style={styles.container}>
            {categoriesElements}
        </View>
    )
}
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    categoriesButtons: {
        borderWidth: 2,
        borderRadius: 15,
        margin: 20,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '35%',
    },
})