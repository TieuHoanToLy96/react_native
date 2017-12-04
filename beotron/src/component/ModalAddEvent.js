import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions, TouchableOpacity, Alert, TextInput,
    AsyncStorage,

} from 'react-native';
import Modal from 'react-native-modalbox';
import DatePicker from 'react-native-datepicker'
var screen = Dimensions.get('window');
var data = [];
var ImagePicker = require('react-native-image-picker');
var options = {
    title: 'Select Avatar',

    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};
export default class ModalAddEvent extends Component {



    constructor(props) {
        super(props);
        this.state = {
            dateEvent: '',
            nameEvent: '',
            imageEvent: null,

        };
        this.cancelEvent = this.cancelEvent.bind(this);
    };
    openModal() {
        this.refs.modal.open();
    };
    componentWillMount() {

        AsyncStorage.getItem('data')
            .then(req =>
                JSON.parse(req)
            )
            .then(json => {
                if (json != null) { data = json; }

                console.log(json);
            })
            .catch(error => console.log('error!'));
    }
    saveEvent = () => {

        if (this.state.nameEvent == null || this.state.imageEvent == null || this.state.dateEvent == null) {
            Alert.alert('Eror', 'Event null');
        } else {
            data.push({ 'imageEvent': this.state.imageEvent, 'nameEvent': this.state.nameEvent, 'dateEvent': this.state.dateEvent });
              AsyncStorage.setItem('data', JSON.stringify(data))
                .then(json => console.log('success!'))
                .catch(error => console.log('error!'))
                .done();
                ;

            
            this.refs.modal.close();

        }


    };

   cancelEvent = () => {
        this.refs.modal.close();

        //   AsyncStorage.getItem('data')
        // .then(req =>
        //     JSON.parse(req)
        // )
        // .then(json => {
        //     x = json ;
        // }).done();
        
        // console.log(x);  
        

        // .catch(error => console.log('error!'));
        // try {
        //     const myArray =   AsyncStorage.getItem("data");
        //     if (myArray !== null) {
        //       // We have data!!
        //       data = JSON.parse(myArray);
        //       console.log(data);
        //     }
        //   } catch (error) {
        //    // console.log("error");
        //     console.log(error);
        //     // Error retrieving data
        //   }



    };
    chooseImage = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };
                // console.log('uri' , uri);
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    imageEvent: source
                });
            }
        });

    };
    render() {
        return (
            <Modal style={styles.modal}

                ref='modal'

                backdropPressToClose={false}
                backdrop={true}
                isDisabled='true'
                position={"center"}
                isDisabled={false}>
                <TextInput
                    textAlign='center'
                    ref='tip_event_name'
                    numberOfLines={1}
                    placeholder='Event Name'
                    onChangeText={(text) => {
                        this.setState({
                            nameEvent: text,
                        })
                    }}
                    value={this.state.eventName}
                >
                </TextInput>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <DatePicker
                        date={this.state.dateEvent}
                        mode="date"
                        format="YYYY-MM-DD"
                        androidMode='spinner'
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(time) => { this.setState({ dateEvent: time }); }}
                    />

                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

                    <Text style={{ fontSize: 15, color: 'black', flex: 4, textAlign: 'center' }}
                        onPress={this.chooseImage}
                    >
                        Choose image
                </Text>
                    <Image
                        // source={require('.'+ this.state.imageEvent)}
                        source={this.state.imageEvent}
                        style={{ width: 40, height: 40, flex: 1, paddingRight: 10 }} />
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderTopWidth: 0.5 }}>


                    <Text
                        onPress={
                            this.cancelEvent
                        }
                        style={{ flex: 1, textAlign: 'center', borderRightWidth: 0.5 }}
                    >
                        Cancel
                    </Text>
                    <Text
                        onPress={
                            this.saveEvent
                        }
                        style={{ flex: 1, textAlign: 'center' }}
                    >
                        OK
                    </Text>
                </View>

            </Modal >
        );

    }
};


const styles = StyleSheet.create(
    {
        modal: {
            width: 240,
            height: 200,
            borderRadius: 10
        },
        tip: {
            flex: 1,

        },
        textDateTime: {
            flex: 1,
            textAlign: 'center',

        }

    }
);



{/* <TouchableOpacity
                    style={{ flex: 1 }}
                        onPress={this.openCalendar}
                    >
                        <Text style={styles.textDateTime}>
                            {new Date().toDateString()}
                        </Text> 
                    </TouchableOpacity> */}