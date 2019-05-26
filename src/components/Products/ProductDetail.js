import React, { Component } from 'react';
import { Modal, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Text from '@components/Text';
import { api } from '../../utils/Api';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

let ingredientsElements = [];

export class ProductDetail extends Component {
    state = {
        product: {
            name: 'Načítání...',
            desc: 'Načítání...',
            price: 'Načítání...',
        }
    }

    constructor(props) {
        super(props);

        

        if (this.props.productUUID) {
            try {
                api.getProductByUuidOrEan(this.props.productUUID)
                    .then(product => {
                        this.setState({
                            product,
                        })
                    })
            }
            catch (error) {
                if (error === 'Nenalezeno') {
                    this.setState({
                        product: 'Nenalezeno'
                    })
                }
            }
        }
    }

    render() {
        console.log(this.state.product);
        if (!this.props.modalOpen) {
            return null;
        }
        if (this.state.product.productIngredients) {
            this.state.product.productIngredients.map( (ingredient, index) => (
               ingredientsElements.push(
                    <Text key={index}
                    style={styles.ingreditents}>{ingredient.ingredient_name}</Text>
                )
            ))
        }
        return (
            <Modal visible={this.props.modalOpen}
                onRequestClose={this.props.closeProductDetail}>
                {this.state.product === 'Nenalezeno' ?
                    <Text style={styles.notFound}>Produkt nenalezen</Text>
                    :
                    <ScrollView>
                        <View style={styles.container}>
                            <Text style={styles.heading}>
                                {this.state.product.name}
                            </Text>
                            <Image source={{
                                uri: this.state.product.url_image
                            }} style={styles.image} />
                            <View style={styles.productIngredients}>
                                <Text style={styles.heading2}>Složení</Text>
                                {ingredientsElements}
                            </View>
                            <View style={styles.desc}>
                                <Text style={styles.heading2}>Popis</Text>
                                <Text style={styles.descText}>
                                    {this.state.product.description}
                                </Text>
                            </View>
                            <View style={styles.score}>
                                <Text>Skóre:</Text>
                                <Text>{
                                    Math.round(this.state.product.score * 100)
                                }</Text>
                            </View>
                            <View style={styles.price}>
                                <Text>Cena:</Text>
                                <Text>{this.state.product.price}</Text>
                            </View>
                        </View>
                    </ScrollView>
                }
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    image: {
        width: 100,
        height: 50,
    },
    heading: {
        fontSize: 35,
        textAlign: 'center',
    },
    heading2: {
        fontSize: 25,
        textAlign: 'center',
    },
    desc: {
        borderBottomWidth: 2,
        borderBottomColor: '#b4d329',
        padding: 10,
    },
    descText: {

    },
    price: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    score: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#b4d329',
        padding: 10,
    },
    notFound: {
        fontSize: 25,
    },
    ingredients: {
        width: '100%',
    }
});