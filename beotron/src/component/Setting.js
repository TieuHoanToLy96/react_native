import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View ,Image
} from 'react-native';

export default class Setting extends Component {

    static navigationOptions = {

        
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../image/setting.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <View style = {{   
                backgroundColor:  'rgba(0,0,0,.2)',
        }}>
                <Text>
                    Settingdfdfd
                </Text>
            </View>

        );

    }
}
;


const styles = StyleSheet.create(
    {
        icon: {
            width: 26,
            height: 26,
          },
    }
);
