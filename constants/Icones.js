import React from 'react';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconIo from 'react-native-vector-icons/Ionicons';

import FolhaStyle from './FolhaStyle';
import { Image } from 'react-native';

export default {
    config: <IconFA name={'gear'} size={25} color={FolhaStyle.pretoPadrao} />,

    github: <IconFA name={'github'} size={30} color={FolhaStyle.corIconesFooter} />,

    favoritos: <IconFA name={'star'} size={30} color={FolhaStyle.corIconesFooter} />,

    favoritadoRepositorio: <IconFA name={'star'} size={30} color={FolhaStyle.clBtnFavoritar} />,

    iconWebFit: <Image source={require('../assets/images/iconWebFIt.png')} style={{ width: 30, height: 30 }} />,

    iconLinguagem: <IconIo name={'ellipse'} size={10} color={FolhaStyle.colorIconLinguagem} style={{marginTop: 10}} />,
};

