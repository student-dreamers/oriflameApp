import React, { Component } from 'react';
import { Modal, View, StyleSheet, Image, Dimensions } from 'react-native';
import Text from '@components/Text';
import { api } from '../../utils/Api';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

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
        if (!this.props.modalOpen) {
            return null;
        }
        return (
            <Modal visible={this.props.modalOpen}
                onRequestClose={this.props.closeProductDetail}>
                {this.state.product === 'Nenalezeno' ?
                    <Text style={styles.notFound}>Produkt nenalezen</Text>
                    :
                    <View style={styles.container}>
                        <Text style={styles.heading}>
                            {this.state.product.name}
                        </Text>
                        <Image source={{
                            uri: this.state.product.image_url
                        }} style={styles.image} />
                        <View style={styles.desc}>
                            <Text style={styles.heading2}>Složení</Text>
                            <Text style={styles.descText}>
                                {this.state.product.desc}
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
        width: imageHeight,
        width: imageWidth,
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

    },
    descText: {

    },
    price: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    score: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    notFound: {
        fontSize: 25,
    }
});