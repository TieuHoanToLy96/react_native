import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,Dimensions
} from 'react-native';
var screen = Dimensions.get('window');

export default class ItemListEvent extends Component {

    render() {
        return (

            <View
             style={styles.container} >
                <View style={{ flex: 1, borderRadius: 10  , }}>

                    <ImageBackground
                        style={styles.background
                        }
                        source={this.props.imageEvent} >
                        <Text style={[styles.text1 , styles.text2]}>{this.props.dateEvent}</Text>
                        <Text style={[styles.text1 ]}>{this.props.nameEvent}</Text>
                    </ImageBackground>

                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    text1: {
        color: 'white' , 
        flex :  1  , 
        textAlign : 'center',
        fontSize  : 20,
        

    }, text2 :{
        textAlignVertical : 'center'        

    } ,
    container: {
        padding: 10,
        height: 200,
      
        // borderBottomWidth: 0.5,
        // borderBottomColor: 'black',
        
    },
    background: {
        flex: 1,
        borderRadius : 20,
       
      
        backgroundColor: 'rgba(0,0,0,.5)',
        // width: null,
        // height: null,
    },

});