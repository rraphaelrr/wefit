import { StyleSheet, Dimensions } from 'react-native';
import FolhaStyle from '../constants/FolhaStyle';

const deviceWidth = Dimensions.get("window").width / 2 + 32;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 10;


const deviceHeight = Dimensions.get("window").height;

const SLIDER_WIDTH = Dimensions.get('window').width;

const style_header = {

  styles: StyleSheet.create({
    container: {
      width,
      height,

    },

    header: {
      borderBottomColor: FolhaStyle.brancoPadrao,
      borderBottomWidth: 1,
      paddingTop: 30,

      backgroundColor: FolhaStyle.brancoPadrao,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',



    },

    titleHeader: {
      fontSize: 25,
      marginLeft: 20

    },

    iconeHeader: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginRight: 20
    },



    modalConfigUsuario: {
      backgroundColor: FolhaStyle.brancoPadrao,
      justifyContent: 'center',
      alignItems: 'flex-start',
      position: 'absolute',
      bottom: -20,
      width: '100%',
      height: 200,
      left: -20



    },
    textModalConfigUsuario: {
      fontSize: 20,
      marginBottom: 20,
      marginLeft: 10,
      textAlign: 'left',
      marginTop: 20
    },

    inputNomeUsuario: {
      marginBottom: 20,
      width: 370,
      backgroundColor: FolhaStyle.bckgScreenAll,
      paddingLeft: 10,
      paddingVertical: 10,
      marginLeft: 10,
      color: FolhaStyle.pretoPadrao,
      height: 50,
      border: 0

    },

    btnConfigUsuario: {

      flex: 1,
      flexDirection: 'row',

    },
    cancelarConfigUsuario: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      
    },
    btnCancelarConfigUsuario: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 10,
      color: FolhaStyle.bckgBtnSalvarUsuario
    },

    salvarConfigUsuario: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',

    },
    btnSalvarConfigUsuario: {
      backgroundColor: FolhaStyle.bckgBtnSalvarUsuario,
      width: "100%",
      height: 45,
      borderRadius: 5
    },
    textBtnConfUsuario: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 10,
      color: FolhaStyle.brancoPadrao
    },

  }),

  placeholder: FolhaStyle.pretoPadrao,
  text: FolhaStyle.pretoPadrao,
  primary: FolhaStyle.pretoPadrao,

}

export default style_header;