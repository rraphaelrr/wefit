import 'react-native-gesture-handler';
import Home from '../screens/home/Home';
import Favoritos from '../screens/favoritos/Favoritos';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const Telas = createStackNavigator({
   Home,
})
const Rotas = createAppContainer(Telas)

export default Rotas;