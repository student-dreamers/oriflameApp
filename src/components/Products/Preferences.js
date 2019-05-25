import React, { Component } from 'react';
import { View, StyleSheet, CheckBox } from 'react-native';
import Text from '@components/Text';
import Checkbox from '@components/Checkbox';

export class Preferences extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allergens: ['Amyl cinnamal', 'Isoeugenol',
                'Benzyl alcohol', 'Benzyl salicylate', 'Cinnamyl alcohol',
                'Cinnamal', 'Citral', 'Coumarin', 'Eugenol', 'Geraniol', 'Hydroxycitronellal'],
            selectedAllergens: [],
        }
        allergenElements = [];

        this.state.allergens.map( (allergen, index) => {
            allergenElements.push(
                <CheckBox onChange={this.onCheck} key={index}
                data-allergen={allergen} label={allergen}/>
            )
        })
    }

    onCheck = (checked, allergen) => {
        if (checked){
            let selectedAllergens = this.state.selectedAllergens;
            selectedAllergens.push(allergen);
            this.setState({
                selectedAllergens: selectedAllergens,
            })
        }
    }


    render() {
        return (
            <View style={[this.props.style, styles.container]}>
                    <Text style={styles.preferencesText}>Nesmí obsahovat:</Text>
                    <View style={styles.preferencesContainer}>
                        {allergenElements}
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 0,
        paddingBottom: 0,
        alignItems: 'center',
    },
    preferencesContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    preferencesText: {
        color: 'black',
        fontSize: 20,
    },
})
