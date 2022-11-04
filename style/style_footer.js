import { StyleSheet, Dimensions } from 'react-native';
import FolhaStyle from '../constants/FolhaStyle';

const deviceWidth = Dimensions.get("window").width / 2 + 32;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 12;



const style_footer = {

  styles: StyleSheet.create({
    container: {
      width,
      height,
      backgroundColor: FolhaStyle.brancoPadrao
    },


    footer: {

      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      paddingTop: 5


    },

    iconGitHub: {
      marginRight: 50,
      alignItems: 'center'
    },

    iconFavorito: {
      alignItems: 'center'
    },

    repositorioTitle: {
      color: FolhaStyle.corIconesFooter,
      marginVertical: 10,
      fontSize: 15
    },


    favoritosTitle: {
      color: FolhaStyle.corIconesFooter,
      marginVertical: 10,
      fontSize: 15
    }


  }),

}

export default style_footer;