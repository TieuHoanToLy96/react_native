import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions, TouchableOpacity, Alert,
    TextInput

} from 'react-native';
// import { connect } from 'redux';
import Modal from 'react-native-modalbox';
// import { hi } from '../action/action.js'

// function mapStateToProps(state) {
//     return {
//         nicknameChange: state.name,
//     }
// };
 export default class ModalChangeNickname extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nickname0: 'hoan',
        };
        this.saveNickName = this.saveNickName.bind(this);
    };


    showModal() {
        // this.setState({
        //     nickname0: nickname
        // });
        this.refs.modal.open();
        // Alert.alert('ava', this.state.nickname0);        
        // this.refs.modal.open();

    };


    saveNickName = () => {
        this.refs.modal.close();
        
        // Alert.alert('save', this.state.nickname0);
        // this.props.dispatch(hi('fd'));
    };
    render() {
        return (
            <Modal
             backdropPressToClose={false}
                backdrop={true}
                style={styles.modal}
                ref="modal"
                position={"center"}
                isDisabled={false}>
                <View style={styles.item}>
                    <Text
                        style={{ color: 'blue', textAlign: 'center' }}>
                        Change nickname
                    </Text>
                </View>
                <View style={styles.item}>
                    <TextInput
                        ref='tip_nick_name'
                        textAlign='center'
                        numberOfLines={1}
                        placeholder={this.props.nicknameChange}
                        onChangeText={(text) => {
                            this.setState({
                                nickname0: text,
                            })

                        }}
                        value={this.state.nickname0}
                    >
                    </TextInput>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity
                        onPress={this.saveNickName}
                    >
                        <Text style={{
                            color: 'green', textAlign: 'center'
                        }}>
                            Save
                    </Text>
                    </TouchableOpacity>

                </View>

            </Modal>
        );
    };

};

const styles = StyleSheet.create(
    {
        modal: {
            width: 200,
            height: 120,
            borderRadius: 10,
        },
        item: {
            flex: 1, justifyContent: 'center',
        },
        topLine: {
            borderTopWidth: 0.5,
            borderTopColor: 'black'
        }


    }
);
// export default connect({ mapStateToProps }, { showModal })(ModalChangeNickname);