import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import FolhaStyle from './FolhaStyle';
import { Image } from 'react-native';

export default {
    config: <Icon name={'gear'} size={25} color={FolhaStyle.pretoPadrao} />,

    github: <Icon name={'github'} size={30} color={FolhaStyle.corIconesFooter} />,

    favoritos: <Icon name={'star'} size={30} color={FolhaStyle.corIconesFooter} />,

    iconWebFit: <Image source={require('../assets/images/iconWebFIt.png')} style={{ width: 30, height: 30 }} />
};

