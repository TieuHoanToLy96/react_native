import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions, TouchableOpacity, Alert

} from 'react-native';
import Modal from 'react-native-modalbox';

export default class ModalChooseImage extends Component {

    showModal (){
        this.refs.modal.open();
    };
    closeModal() {
        this.refs.modal.close();
    };
  

    // eventDeleteProfilePicture = () => {

    // };

    // eventChangeNickname = () => {
    //     Alert.alert('', 'change nickname')
    // };


    render() {

        return (

            <Modal style={styles.modal}
                ref="modal"
               
                position={"center"}
                isDisabled={false}>
                <View style={{ backgroundColor: this.props.colorTheme, flex: 1, justifyContent: 'center' }}>
                    <Text style={{ color: 'white', paddingLeft: 20 }}>
                        Profile
                </Text>
                </View>
                <View style={[styles.text, styles.line]}>
                    <TouchableOpacity onPress={this.props.eventChangeProfilePicture}>
                        <Text style={{ color: 'black', paddingLeft: 20 }}>
                            Change profile picture
                     </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.text, styles.line]}>
                    <TouchableOpacity onPress={this.eventDeleteProfilePicture}>
                        <Text style={{ color: 'black', paddingLeft: 20 }}>
                            Delete profile picture
                     </Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.text}>
                    <TouchableOpacity onPress={this.props.eventChangeNickname}>
                        <Text style={{ color: 'black', paddingLeft: 20 }}>
                            Change nickname
            </Text>
                    </  TouchableOpacity>
                </View>
            </Modal>


        );
    }

};
const styles = StyleSheet.create(
    {
        modal: {
            width: 200,
            height: 160,
        },
        line: {
            borderBottomWidth: 0.5, borderBottomColor: 'gray',

        },
        text: {
            flex: 1, justifyContent: 'center',
        }

    }
);