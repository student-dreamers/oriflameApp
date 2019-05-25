import React, { Component } from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { Preferences } from './Preferences';
import { NavBar } from './NavBar';

export class Products extends Component {
    state = {
        preferencesHeight: 0,
    }

    showPreferencesPanel = () => {
        this.setState({
            preferencesHeight: '40%',
        })
    }
    hidePreferencesPanel = () => {
        this.setState({
            preferencesHeight: 0,
        })
    }

    render() {
        return (
            <Modal visible={this.props.modalOpen}>
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

                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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