import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '@components/Text';
import { api } from '../utils/Api';

export class Categories extends Component {
    state = {
        categories: [{
            name: 'Načítání...',
        }],
    }

    constructor(props) {
        super(props);

        api.getCategories()
            .then(categories => {
                this.setState({
                    categories
                })
        })
    }


    categoryClicked = (id) => {
        this.props.openProducts(id);
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.categories.map((category, index) => (
                        <TouchableOpacity id={category} key={index} onPress={() => {
                            this.categoryClicked(category.uuid);
                        }} style={styles.categoriesButtons}>
                            <Text style={styles.categoriesText}>{category.name}</Text>
                        </TouchableOpacity>
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    categoriesButtons: {
        borderRadius: 15,
        margin: 20,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '35%',
        height: '12%',
        backgroundColor: '#b4d329',
        flexGrow: 0,
        flexShrink: 0,
    },
    categoriesText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    }
})