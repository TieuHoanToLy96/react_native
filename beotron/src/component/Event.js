import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert, FlatList,
    AsyncStorage
} from 'react-native';
import ActionButton from 'react-native-action-button';
import ItemListEvent from './ItemListEvent.js';
import ModalAddEvent from './ModalAddEvent.js';

var list = [{ 'key': 'a','dateEvent' :'aaaaaaaa' , 'nameEvent': 'beo'  , 'imageEvent' : null}, { 'key': 'b','dateEvent' :'bbbb', 'nameEvent': 'tron' ,'imageEvent' : null } , 

];
var x = [] ;



export default class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'black',
            dataList: [],
            pathImage : null ,
        };
        // this.eventAddEvent = this.eventAddEvent.bind(this);
    }
    static navigationOptions = {
        tabBarOptions: {
            style: {
                backgroundColor:   'rgba(0,0,0,.4)',
                
            },
          }  , 
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../image/event.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };
    eventAddEvent = () => {
        this.refs.modal_add_event.openModal();
    };

    keyExtractor = (item, index) => item.nameEvent;
    componentWillMount() {
        AsyncStorage.getItem('data')
        .then(req => 
            JSON.parse(req)  
        )
        .then(json => {
            this.setState({
                dataList:json 
            })           ;
            console.log(json);
        })
        .catch(error => console.log('error!'))  
        .done();;
 
    };
    render() {
        return (
            <View style={{ flex: 1 ,    backgroundColor:  'rgba(0,0,0,.4)',
        }}>
                <FlatList
                 data={this.state.dataList}
                 keyExtractor={this.keyExtractor}
                   renderItem={({ item }) => <ItemListEvent
                       nameEvent={item.nameEvent}
                       dateEvent = {item.dateEvent}
                       imageEvent = {item.imageEvent}
                  />}
               />

                {/* <Image
                style = {{width : 200 , height :200}}
                source = {this.state.pathImage}
                >
                    </Image> */}

                <ModalAddEvent
                    ref='modal_add_event'
                    
                />

                <ActionButton
                    buttonColor={this.state.theme}
                    onPress={this.eventAddEvent}
                />
            </View>

        );

    }
};


const styles = StyleSheet.create(
    {
        icon: {
            width: 26,
            height: 26,
        },
    }
);