import React from 'react';
import { HeaderCad } from '../SignName/styles';
import { 
    ContainerHome,
    Perfil,
    Photo,
    Name,
    Search,
    LogoSearch,
 } from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import SearchBus from '../../assets/SearchBus.png'

export const Home = () => {

    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack()
    }

    return (
        <ContainerHome>
            <HeaderCad/>

            <Perfil>
                <Photo/>
                <Name>Gustavo</Name>
            </Perfil>

            <Search placeholder ="Buscar ônibus" />
            <LogoSearch source={SearchBus} />
        </ContainerHome>
    );
};