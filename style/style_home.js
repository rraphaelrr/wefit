import { StyleSheet, Dimensions } from 'react-native';
import FolhaStyle from '../constants/FolhaStyle';

const deviceWidth = Dimensions.get("window").width / 2 + 32;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const deviceHeight = Dimensions.get("window").height;

const SLIDER_WIDTH = Dimensions.get('window').width;

const style_home = {

  styles: StyleSheet.create({
    container: {
      width,
      height: '100%',
      backgroundColor: FolhaStyle.bckgScreenAll
    },

    boxRepositorios: {
      marginTop: 40,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
      width: '90%',
      marginLeft: 20,
      backgroundColor: FolhaStyle.brancoPadrao,
      height: height / 5,
      marginBottom: 20
    },
    
    cabecalhoRepositorios: {
      paddingTop: 10,
      paddingHorizontal: 10,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',

    },
    titleRepositorio: {
      marginTop: 10,
      marginLeft: 10
    },
    iconWebFit: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    
    divisoria: {
      width: '95%',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      position: 'absolute',
      marginLeft: 20,
      marginTop: 60,
      borderBottomColor: FolhaStyle.corDivisoria,
      borderBottomWidth: StyleSheet.hairlineWidth
    },

    dadosRepositorio: {
      width: '95%',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: 20,
      marginTop: 20,
    },
    

    rodapeRepositorio: {
      flex: 1,
      flexDirection: 'row',
      
    },

    btnFavoritarRepositorio: {
      backgroundColor: FolhaStyle.bckgBtnFavoritar,
      height: '70%',
      width: '30%',
      marginLeft: 20,
      fontWeight: 'bold',
      
    },
    iconTextFavoritar:{
      flex: 1,
      flexDirection: 'row',
      marginLeft: 35
    },

    textFooterFavoritado: {
      marginLeft: 10,
      marginTop: 10
    },

    iconTextLinguagem:{
      flex: 1,
      flexDirection: 'row',
       
    },

    textFooterLinguagem: {
      marginLeft: 10,
      marginTop: 10,
      fontWeight: 'regular'
    },
  }),

}

export default style_home;