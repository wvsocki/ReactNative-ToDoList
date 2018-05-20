/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import PresentationalComponent from './PresentationalComponent'

export default class Home extends Component {
    state = {
        myState: "loremfesfsefsefsegargdagargadrgadrgadrgadrgadrfesfsefsefesfsefsefsefs"
    };
    updateState = () => this.setState({ myState: 'The state is updated' });
    render() {
        return (
            <View>
                <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/>
            </View>
        );
    }
}

