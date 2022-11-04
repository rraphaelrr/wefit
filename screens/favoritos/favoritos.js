import React, { Component } from 'react';
import Text from '../../components/text';
import { BackHandler, ScrollView, Linking, Animated, StatusBar, AppRegistry, View, TouchableOpacity, ImageBackground, Image, Alert, KeyboardAvoidingView, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import style_favoritos from '../../style/style_favoritos';

export default class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }





    render() {
        
        return (
            <View style={style_favoritos.styles.container}>
             
                <View>
                    <Text>{"Favoritos"}</Text>
                </View>
                
            </View>

        )

    }
}

AppRegistry.registerComponent('Favoritos', () => Favoritos);


