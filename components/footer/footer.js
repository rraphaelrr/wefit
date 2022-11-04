import React, { Component } from 'react';
import Text from '../text';
import { BackHandler, ScrollView, Linking, Animated, StatusBar, AppRegistry, View, TouchableOpacity, ImageBackground, Image, Alert, KeyboardAvoidingView, Dimensions } from 'react-native';
import style_footer from '../../style/style_footer';
import Icones from '../../constants/Icones';
import { useNavigation } from '@react-navigation/native';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class Footer extends Component {
    constructor(props) {
        
        super(props);

        this.state = {

        }
    }

    



    render() {
        
        return (
            <View style={style_footer.styles.container}>
                <View style={style_footer.styles.footer}>
                    <TouchableOpacity onPress={() => {
                           console.log("Chegou aqui")
                        }}>
                        <View style={style_footer.styles.iconGitHub}>


                            {Icones.github}
                            <Text style={style_footer.styles.repositorioTitle}>{'Repositórios'}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={style_footer.styles.iconFavorito}>
                        {Icones.favoritos}
                        <Text style={style_footer.styles.favoritosTitle}>{'Favoritos'}</Text>
                    </View>
                </View>
            </View>


        )

    }
}

AppRegistry.registerComponent('Footer', () => Footer);


