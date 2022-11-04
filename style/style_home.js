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
      height,
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
      height: "20%"
    },

    cabecalhoRepositorios: {
      paddingTop: 10,
      paddingHorizontal: 10,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
     
    },
    iconWebFit: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
   
  }),

}

export default style_home;