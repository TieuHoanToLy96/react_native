import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    TouchableHighlight, Alert
} from 'react-native';
// import { connect } from 'react-redux';
import ModalChooseImage from './ModalChooseImage.js';
import ModalChangeNickname from './ModalChangeNickname.js';
var screen = Dimensions.get('window');

var ImagePicker = require('react-native-image-picker');
var options = {
    title: 'Select Avatar',
    customButtons: [
      {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };


// function mapStateToProps(state) {
//     return {
//         nickname1: state.name1,
//         nickname2: state.name2,
//         nickname: state.name,
//     }
// };



export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            color: 'black',
            
        };

        this.eventClickAvatar1 = this.eventClickAvatar1.bind(this);
        this.eventClickAvatar2 = this.eventClickAvatar2.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.eventChangeNickname = this.eventChangeNickname.bind(this);
    };

    static navigationOptions = {
       
        
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={
                    //uri = '../image/heart_text.png'
                    require('../image/heart_text.png')
                }
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    eventClickAvatar1 = () => {
        // name = this.state.name1;
        // Alert.alert('ava1', name);
        // this.setState({
        //     name: this.state.name1,
        // })

        // this.props.dispatch({
        //     type: 'NICKNAME1',
        // });
        this.refs.modal.showModal();

    };
    eventClickAvatar2 = () => {
        // this.setState({
        //     name: this.state.name2,
        // })
        // name = this.state.name2;
        // this.props.dispatch({
        //     type: 'NICKNAME2',
        // });
        this.refs.modal.showModal();

    };

    eventChangeNickname = () => {
        this.refs.modal.closeModal();
        // this.name = this.props.nickname ;
        // Alert.alert('nickname', this.props.nickname);
        this.refs.modal_change_nickname.showModal();
        // this.refs.modal.open();
        

    }
    ;
    eventChangeProfilePicture = ()=>{
        // Alert.alert('click');
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
          console.log('uri' , uri);
              // You can also display the image using data:
              // let source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source
              });
            }
          });

    };


    render() {
        return (
            <View style={styles.container}>

                <ModalChooseImage
                    ref='modal'
                    colorTheme={this.state.color}
                    eventChangeNickname={
                        this.eventChangeNickname
                    }
                    eventChangeProfilePicture = {
                        this.eventChangeProfilePicture 
                    }
                />
                <ModalChangeNickname
                    ref='modal_change_nickname'
                />


                <View style={styles.linearImage}>

                    <View style={styles.imageAvatar}>
                        <TouchableOpacity
                            onPress={this.eventClickAvatar1}
                        >
                            <View style={{ alignItems: 'center', }}>
                                <Image
                                    ref='avartar1'
                                    style={styles.image}
                                    source={
                                        //this.state.avatarSource
                                        require('../image/images.png')
                                        //   require(this.state.imageAvatar1.toString())
                                        //{ uri: this.state.imageAvatar1}
                                    }
                                />
                                <Text style={{ textAlign: 'center' }}>
                                    {this.props.nickname1}
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.linearCount}>
                        <View style={styles.imageHeart}>
                            <Image
                                style={styles.image}
                                source={require('../image/heart.png')}
                            />
                            <Text style={{ textAlign: 'center' }}>
                                {this.state.count} Day
                        </Text>
                        </View>
                        <View style={styles.count}>
                            <Text >
                                {/* {this.state.count} */}
                            </Text>
                        </View>

                    </View>

                    <View style={styles.imageAvatar}>
                        <TouchableOpacity
                            onPress={this.eventClickAvatar2}
                        >
                            <View style={{ alignItems: 'center', }}>
                                <Image
                                    style={styles.image}
                                    source={require('../image/images.png')}
                                />
                                <Text style={{ textAlign: 'center' }}>
                                    {this.props.nickname2}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                </View>


            </View>
        );

    }

};
const styles = StyleSheet.create({

    container: {
        backgroundColor:  'rgba(0,0,0,.3)',
        
        flex: 1,
        alignItems: 'center'
    },
    linearImage: {
        paddingTop : 10 ,
        flexDirection: 'row',
        height: 200
    },
    imageAvatar: {
        flex: 1,
        flexDirection: 'column',

    },
    linearCount: {
        flex: 1,
        flexDirection: 'column',
    }
    ,
    count: {
        flex: 1,
    }
    ,
    imageHeart: {
        flex: 1,
        alignItems: 'center'
    },
    linearProcess: {
        height: 200,
    }
    ,
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    }
    ,
    icon: {
        width: 50,
        height: 50,
    },




}

);


// export default connect(mapStateToProps)(Home);