import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class test extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../image/home.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),

    };
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../image/images.png')}
                    style={styles.imageBackground}
                >

                    <View>
                    </View>

                </Image>
            </View>

        );

    }
}
;
const styles = StyleSheet.create(
    {
        container: {

            flex: 1
        },
        icon: {
            width: 26,
            height: 26,
        },
        imageBackground: {
            flex: 1,
            width: null,
            height: null,
            alignSelf: 'stretch'
        }
    }
);