import React, { Component } from 'react';
import Text from '../../components/text';
import { AppRegistry, View, TouchableOpacity, Dimensions, DevSettings, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style_header from '../../style/style_header';
import Icones from '../../constants/Icones';
import Modal from "react-native-modal";
import FolhaStyle from '../../constants/FolhaStyle';


import * as Updates from 'expo-updates';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            configUsuario: false,
            user: '',
        }
    }

    salvarUsuario = async () => {
        


        if (this.state.user == '') {
            Alert.alert("Para salvar é obrigadorio inserir um nome de usuario")
        } else {
            const user = JSON.stringify(this.state.user)
            await AsyncStorage.setItem('usuarioGit', user)


            Alert.alert(
                "Usuario: "+ this.state.user,
                "Usuario salvo com sucesso, iremos recarregar o aplicativo para atualizar a lista!",
                [

                    {
                        text: "OK", onPress: () => Updates.reloadAsync()
                    }
                ]
            );
            this.setState({ configUsuario: false })

        }
    }




    render() {

        return (
            <View style={style_header.styles.container}>

                <View style={style_header.styles.header}>


                    <View>
                        <Text style={style_header.styles.titleHeader}>{"WeFit"}</Text>
                    </View>

                    <View style={style_header.styles.iconeHeader}>
                        <TouchableOpacity onPress={() => { this.setState({ configUsuario: true }) }}>
                            {Icones.config}
                        </TouchableOpacity>
                    </View>

                </View>

                <View>
                    <Modal


                        onBackButtonPress={() => this.setState({ configUsuario: false })}
                        isVisible={this.state.configUsuario}

                        style={style_header.styles.modalConfigUsuario}>

                        <View style={style_header.styles.camposConfigUsuario}>

                            <Text style={style_header.styles.textModalConfigUsuario}>{'Alterar usuário selecionado'}</Text>
                            <TextInput
                                mode='flat'
                                theme={{
                                    colors: {
                                        placeholder: style_header.placeholder,
                                        text: style_header.text,
                                        primary: style_header.primary,
                                    }
                                }}
                                label='Nome de Usuario'
                                style={style_header.styles.inputNomeUsuario}
                                onChangeText={(usuario) => this.setState({ user: usuario })}
                                outlineColor={FolhaStyle.bckgScreenAll}
                                activeOutlineColor={FolhaStyle.bckgScreenAll}
                                textColor={FolhaStyle.pretoPadrao}
                            />
                            <View style={style_header.styles.btnConfigUsuario}>
                                <View style={style_header.styles.cancelarConfigUsuario}>

                                    <TouchableOpacity onPress={() => { this.setState({ configUsuario: false }) }}>
                                        <Text style={style_header.styles.btnCancelarConfigUsuario}>{'Cancelar'}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={style_header.styles.salvarConfigUsuario}>
                                    <TouchableOpacity style={style_header.styles.btnSalvarConfigUsuario} onPress={() => { this.salvarUsuario() }}>
                                        <Text style={style_header.styles.textBtnConfUsuario}>{'Salvar'}</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </Modal>
                </View>

            </View>





        )

    }
}

AppRegistry.registerComponent('Header', () => Header);


