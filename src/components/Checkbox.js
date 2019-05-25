import React, { Component } from 'react';
import { View, StyleSheet, CheckBox } from 'react-native';
import Text from '@components/Text';

export class Checkbox extends Component {
    state = {
        checked: false,
    }

    render() {
        return (
            <View style={styles.container}>
                <CheckBox onValueChange={() => {
                    this.setState( prevState => ({
                        checked: !prevState.checked,
                    }))
                    this.props.onChange(this.state.checked, this.props.dataAllergen);
                }} value={this.state.checked}
                style={styles.checkbox} />
                <Text>{this.props.label}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    checkbox: {
        marginRight: 10,
    },
    checkboxText: {

    }
});
