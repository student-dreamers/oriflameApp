import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Text from '@components/Text';

export class NavBar extends Component {
    state = {
        preferencesOpen: false,
        filterButtonText: 'Filtrovat',
    }

    switchPreferencesStatus = () => {
        this.setState( prevState => ({
            preferencesOpen: !prevState.preferencesOpen,
        }));
        if (this.state.preferencesOpen){
            this.setState({
                filterButtonText: 'Filtrovat',
            });
            
            this.props.hidePreferencesPanel();
        } else {
            this.setState({
                filterButtonText: 'Skrýt panel',
            });
            this.props.showPreferencesPanel();
        }
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableOpacity style={styles.navButtons}
                    onPress={this.props.closeProducts}>
                    <Text>Zpět</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButtons}
                    onPress={this.switchPreferencesStatus}>
                    <Text>{this.state.filterButtonText}</Text>
                </TouchableOpacity>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navButtons: {
        color: 'white',
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        minWidth: '15%',
    }
})