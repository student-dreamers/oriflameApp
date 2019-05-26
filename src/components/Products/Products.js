import React, { Component } from 'react';
import { View, Modal, StyleSheet, FlatList } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { Preferences } from './Preferences';
import { NavBar } from './NavBar';
import { api } from '../../utils/Api';
import { ProductCard } from './ProductCard';
import { ProductDetail } from './ProductDetail';

export class Products extends Component {
    state = {
        preferencesHeight: 0,
        products: [],
        productDetailOpen: false,
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

    closeProductDetail = () => {
        this.setState({
            productDetailOpen: false,
        })
    }

    cardClicked = (UUID) => {
        this.setState({
            productDetailOpen: true,
            productDetailUUID: UUID,
        })
    }

    keyExtractor = (item) => item.uuid;

    componentWillReceiveProps = () => {
        if (this.props.id) {
            api.getCategoryProducts(this.props.id)
                .then(products => {
                    this.setState({
                        products
                    })
                })
        }
    }

    render() {
        if (!this.props.modalOpen) {
            return null;
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
                        <FlatList
                            data={this.state.products}
                            style={{
                                width: '100%',
                                paddingBottom: 20,
                            }}
                            renderItem={({ item }) => (
                                <ProductCard
                                    key={item.uuid}
                                    url_image={item.url_image}
                                    price={item.price}
                                    name={item.name}
                                    onPress={this.cardClicked}
                                    score={item.score}
                                    uuid={item.uuid}
                                />
                            )}
                            keyExtractor={this.keyExtractor} />
                    </View>
                </View>
                {
                    this.state.productDetailUUID ?
                        <ProductDetail
                            modalOpen={this.state.productDetailOpen}
                            productUUID={this.state.productDetailUUID}
                            closeProductDetail={this.closeProductDetail} />
                    :
                    null
                }

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
        width: '80%',
        height: '90%',
        alignItems: 'center',
    },
})