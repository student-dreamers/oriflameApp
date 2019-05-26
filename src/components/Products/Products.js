import React, { Component } from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { Preferences } from './Preferences';
import { NavBar } from './NavBar';
import { api } from '../../utils/Api';
import { ProductCard } from './ProductCard';

export class Products extends Component {
    state = {
        preferencesHeight: 0,
        products: [{
            name: 'Načítání...'
        }],
    }

    constructor(props) {
        super(props);

    }

    showPreferencesPanel = () => {
        this.setState({
            preferencesHeight: '100%',
        })
    }
    hidePreferencesPanel = () => {
        this.setState({
            preferencesHeight: 0,
        })
    }

    render() {
        if (this.props.id) {
            console.log('Props ID: ' + this.props.id);
            api.getCategoryProducts(this.props.id)
                .then(products => {
                    console.log('Products: ' + products)
                    this.setState({
                        products
                    })
                })
        }
        return (
            <Modal visible={this.props.modalOpen}
                onRequestClose={this.props.closeProducts}>
                <View style={styles.container}>
                    <NavBar style={styles.NavBar}
                        showPreferencesPanel={this.showPreferencesPanel}
                        hidePreferencesPanel={this.hidePreferencesPanel}
                        closeProducts={this.props.closeProducts} />
                    <Preferences style={[styles.Preferences, {
                        height: this.state.preferencesHeight,
                        borderBottomWidth: this.state.preferencesHeight ? 2 : 0,
                    }]} />
                    <View style={styles.Products}>
                        {this.state.products.map((product, index) => (
                            <ProductCard
                                key={index}
                                url_image={false}
                                price={product.price}
                                name={product.name}
                            />
                        ))}
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        ...ifIphoneX({
            paddingTop: 50
        }),
    },
    NavBar: {
        height: '10%',
    },
    Preferences: {
        flexGrow: 0,
        overflow: 'hidden',
        borderBottomWidth: 2,
    },
    Products: {
        height: '90%',
    }
})