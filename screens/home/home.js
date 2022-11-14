import React, { Component } from 'react';
import Text from '../../components/text';
import { AppRegistry, View, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import style_home from '../../style/style_home';
import Icones from '../../constants/Icones';
import { Button } from 'react-native-paper';
import FolhaStyle from '../../constants/FolhaStyle';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            favoritado: 0,
            statusRepositorio: 'Favoritar'
        }
    }


    componentDidMount = async () => {

        let usuario = '';
        let repositorios = []
        const userConfig = await AsyncStorage.getItem('usuarioGit')

        if (userConfig == '' || userConfig == null) {
            usuario = 'rraphaelrr'
        } else {
            usuario = JSON.parse(userConfig)

        }

        fetch("https://api.github.com/users/" + usuario + "/repos", {
            method: 'get',
        }).then((response) => response.json()).then((responseJson) => {
            responseJson.map((res) => {



                repositorios.push(res)
            })

            this.setState({
                repos: repositorios
            })
        })

    }


    favoritarRepositorio = () => {
        this.setState({ favoritado: 1 })


    }


    render() {
        
        return (
            <SafeAreaView style={style_home.styles.container}>
                <ScrollView >
                    {this.state.repos.map((response) => {
                        return (
                            <View key={response.id} style={style_home.styles.boxRepositorios}>
                                <View style={style_home.styles.cabecalhoRepositorios}>

                                    <View>
                                        <Text style={style_home.styles.titleRepositorio}>
                                            {response.full_name}
                                        </Text>
                                    </View>

                                    <View style={style_home.styles.iconWebFit}>
                                        {Icones.iconWebFit}
                                    </View>



                                    <View style={style_home.styles.divisoria} />
                                </View>
                                <View style={style_home.styles.dadosRepositorio}>
                                    <View>
                                        <Text style={style_home.styles.descrRepositorio}>
                                            {response.description}
                                        </Text>

                                    </View>
                                </View>
                                <View style={style_home.styles.rodapeRepositorio}>

                                    <Button icon='star' mode='contained-tonal' color={FolhaStyle.clBtnFavoritar}
                                        style={style_home.styles.btnFavoritarRepositorio}
                                        onPress={() => this.favoritarRepositorio()}>
                                        <Text>{this.state.statusRepositorio}</Text>
                                    </Button>

                                    <View style={style_home.styles.iconTextFavoritar}>
                                        {Icones.favoritadoRepositorio}
                                        <Text style={style_home.styles.textFooterFavoritado}>

                                            {this.state.favoritado}
                                        </Text>
                                    </View>

                                    <View style={style_home.styles.iconTextLinguagem}>
                                        {Icones.iconLinguagem}
                                        <Text style={style_home.styles.textFooterLinguagem}>

                                            {response.language}
                                        </Text>
                                    </View>

                                </View>




                            </View>
                        )

                    })}


                </ScrollView>

            </SafeAreaView>

        )

    }
}

AppRegistry.registerComponent('Home', () => Home);



