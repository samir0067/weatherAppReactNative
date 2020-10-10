import React, {Component, Fragment} from 'react';
import {View, TextInput, StyleSheet, onChangeText} from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            city: 'Strasbourg'
        }
    }

    setCity (city) {
        this.setState({city})
    }

    render() {
        return (
            <Fragment>
                <View style={sSearch.view}>
                    <TextInput
                        style={sSearch.input}
                        value={this.state.city}
                        onChangeText={(text) => this.setCity(text)}
                    />
                </View>
            </Fragment>
        )
    }
}

const sSearch = StyleSheet.create({
    view: {
        marginVertical: 40,
        backgroundColor: '#57c5fa',

    },
    input: {
        height: 40,
        borderColor: '#3e3e3e',
        borderWidth: 1
    }
})