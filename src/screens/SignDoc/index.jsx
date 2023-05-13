import React from 'react';
import { 
    ContainerCad,
    HeaderCad,
    LogoCad,
    ImageCad,
    TextCad,
    AreaCad,
    AreaTitleCad,
    TitleCad,
    InputCad,
    CadButtons,
    ButtonCad,
    LabelButtonCad,
 } from '../SignName/styles';
 import {
    LabelCpf,
    InputCpf,
    LabelRg,
    InputRg,
 }  from "./styles";
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import bus from '../../assets/bus.png'

export const SignDoc = () => {

    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack()
    }

    const handleGetEmailPage = () => {
        navigation.navigate('SignEmail')
    }

    return (
        <ContainerCad>

        <HeaderCad/>
  
        <LogoCad>
  
          <ImageCad source={bus} />
          <TextCad>Tech Ride</TextCad>
  
        </LogoCad>

        <AreaCad>

<AreaTitleCad>
  <TitleCad>CADASTRO</TitleCad>
</AreaTitleCad>


<InputCad>

<LabelCpf>CPF</LabelCpf>
  <InputCpf placeholder="CPF" />

<LabelRg>RG</LabelRg>
  <InputRg placeholder="RG" />

  <CadButtons>

    <ButtonCad onPress={() => handleGoBack()} >
        <LabelButtonCad>Voltar</LabelButtonCad>
    </ButtonCad>

    <ButtonCad onPress={()=> handleGetEmailPage()}>
        <LabelButtonCad>Avançar</LabelButtonCad>
    </ButtonCad>

  </CadButtons>

</InputCad>

</AreaCad>
        </ContainerCad>
    );
};