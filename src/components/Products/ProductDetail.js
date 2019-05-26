import React, { Component } from 'react';
import { Modal, View, StyleSheet, Image } from 'react-native';
import Text from '@components/Text';
import { api } from '../../utils/Api';

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
            api.getProductByUuidOrEan(this.props.productUUID)
                .then(product => (
                    this.setState({
                        product,
                    })
                ))
        }
    }

    render() {
        if(!this.props.modalOpen){
            return null;
        }
        return (
            <Modal visible={this.props.modalOpen}
            onRequestClose={this.props.closeProductDetail}>
                <View style={styles.container}>
                    <Text style={styles.heading}>
                        {this.state.product.name}
                    </Text>
                    <Image source={{
                        uri: this.state.product.url_image
                    }} style={styles.image} />
                    <View style={styles.desc}>
                        <Text style={styles.heading2}>Složení</Text>
                        <Text style={styles.descText}>
                            {this.state.product.desc}
                        </Text>
                    </View>
                    <View style={styles.price}>
                        <Text>Cena:</Text>
                        <Text>{this.state.product.price}</Text>
                    </View>
                </View>
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
        width: '90%',
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
    }
});