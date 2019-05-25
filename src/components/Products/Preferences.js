import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Text from '@components/Text';
import { Checkbox } from '@components/Checkbox';

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

        this.state.allergens.map((allergen, index) => {
            allergenElements.push(
                <Checkbox
                    title={allergen}
                    onCheck={this.onCheck}
                    key={index}
                />
            )
        })
    }

    onCheck = (checked, allergen) => {
        console.log(checked);
        let selectedAllergens = this.state.selectedAllergens;
        if (checked) {
            selectedAllergens.push(allergen);
        } 
        else if (selectedAllergens.indexOf(allergen) !== -1){
            selectedAllergens.splice(
                selectedAllergens.indexOf(allergen),
                1
            )
        }
        this.setState({
            selectedAllergens: selectedAllergens,
        })
        console.log(this.state.selectedAllergens);
    }


    render() {
        return (
            <View style={[this.props.style, styles.container]}>
                <Text style={styles.preferencesText}>Nesmí obsahovat:</Text>
                <View style={styles.preferencesContainer}>
                    <FlatList
                        style={{
                            paddingBottom: 20,
                        }}
                        data={allergenElements}
                        renderItem={ ({item}) => item}
                    />
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
        flexGrow: 0,
        height: '80%',
        alignItems: 'flex-start',
    },
    preferencesText: {
        color: 'black',
        fontSize: 20,
        marginBottom: 20,
    },
})
