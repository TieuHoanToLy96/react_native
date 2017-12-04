import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Home from './Home.js';
import Setting from './Setting.js';
import Event from './Event.js';
import test from './test.js';
import { TabNavigator, StackNavigator } from 'react-navigation';

export const TabNav = TabNavigator({
    EventScreen: {
        screen: Event,
    },
    HomeScreen: {
        screen: Home,

    },
    SettingScreen: {
        screen: Setting,

    },
},
    {

        animationEnabled: true,
        tabBarOptions: {
            iconStyle: {
                width: 50,
                height: 50,
                paddingBottom: 5,
              },
            showIcon: true,
            showLabel: false,
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            upperCaseLabel: false,
            // tabBarComponent: props => {
            //     return (
            //         <View>
            //             <Image
            //                 style={{ width: Dimensions.get('window').width, height: 50 }}
            //                 source={require('../image/home.png')} />
            //         </View>
            //     );
            // },
            style: {
                 backgroundColor: 'transparent',

            },
            indicatorStyle: {
                backgroundColor: 'transparent'
            },

            tabStyle: {
                height: 60,
                backgroundColor: 'transparent'
            },
        }
    }


);

export const StackNav = StackNavigator({

    TabNavScreen: {
        screen: TabNav,
        navigationOptions: {
            header: null,
        },
    },



},
    {
        cardStyle: {
            // backgroundColor: 'rgba(0,0,0,.3)' 
             backgroundColor :'transparent',
        }
    }
);