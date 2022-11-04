import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createAppContainer } from 'react-navigation';
import * as Font from 'expo-font';

import Home from './screens/home/home';
import Favoritos from './screens/favoritos/favoritos';
import Header from './components/header/header';
import Footer from './components/footer/footer';


const mainNavigation = createAnimatedSwitchNavigator(
  {

    Home,
    Favoritos
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-right"
          durationMs={200}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={200} />
      </Transition.Together>
    ),
  },
);
const App = createAppContainer(mainNavigation);

export default class Appp extends React.Component {
  constructor(props) {
    super(props);

  }


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

        <App />


        <Footer />

      </SafeAreaView>
    )

  }
}

