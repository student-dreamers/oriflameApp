import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements'

export class Checkbox extends Component {
    state = {
        checked: false,
    }

    render() {
        return (
                <CheckBox 
                title={this.props.title}
                onPress={() => {
                    this.props.onCheck(!this.state.checked, this.props.title);
                    this.setState( prevState => ({
                        checked: !prevState.checked,
                    }))
                }}
                checked={this.state.checked}
                checkedColor='#b4d329'
                />
        )
    }
}
