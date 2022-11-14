import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { registerRootComponent } from 'expo';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home/Home';
import Favoritos from './screens/favoritos/Favoritos';
const Stack = createStackNavigator();

function Rota() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Favoritos" component={Favoritos} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}





export default class App extends React.Component {



  loadFonts = async () => {
    await Font.loadAsync({
      'Montserrat-Regular': require('./assets/font/Montserrat-Regular.ttf')
    }).then(() => this.render())
  }



  componentDidMount() {
    this.loadFonts();
  }


  render() {

    return (
      <SafeAreaView style={{ flex: 1, }} edges={['top',]}>
        <StatusBar hidden={false} />


        <Header />


        <Rota />

        <Footer navigation={this.props.navigation}/>


      </SafeAreaView>
    )

  }
}


