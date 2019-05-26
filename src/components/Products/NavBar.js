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
                    <Text style={styles.buttonText}>Zpět</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButtons}
                    onPress={this.switchPreferencesStatus}>
                    <Text style={styles.buttonText}>{this.state.filterButtonText}</Text>
                </TouchableOpacity>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navButtons: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        minWidth: '15%',
        backgroundColor: '#b4d329',
    },
    buttonText: {
        color: 'white',
    }
})