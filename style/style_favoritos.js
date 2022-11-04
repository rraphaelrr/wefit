import { StyleSheet, Dimensions } from 'react-native';
import FolhaStyle from '../constants/FolhaStyle';

const deviceWidth = Dimensions.get("window").width / 2 + 32;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const deviceHeight = Dimensions.get("window").height;

const SLIDER_WIDTH = Dimensions.get('window').width;

const style_favoritos = {

  styles: StyleSheet.create({
    container: {
      width,
      height,
      backgroundColor: FolhaStyle.bckgScreenAll
    },






  }),

}

export default style_favoritos;