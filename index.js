import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

class reactTutorialApp extends Component {
    render() {
        return (
            <View>
                <Home />
                <Home />
            </View>
        );
    }
}
export default reactTutorialApp






AppRegistry.registerComponent('reactTutorialApp', () => App);
