import React, { useState } from "react";
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
    LabelNome,
    InputNome,
    LabelSobrenome,
    InputSobrenome,
    CadButtons,
    ButtonCad,
    LabelButtonCad,

} from "./styles"
import { Image, Text, TouchableOpacity, View,} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import bus from '../../assets/bus.png'

export const SignName = () => {

  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.goBack('SignIn')
    }

    const handleGetDocPage = () => {
      navigation.navigate('SignDoc')
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

        <LabelNome>Primeiro Nome</LabelNome>
          <InputNome placeholder="Primeiro Nome" />

        <LabelSobrenome>Ultimo Nome</LabelSobrenome>
          <InputSobrenome placeholder="Ultimo Nome" />

          <CadButtons>

            <ButtonCad onPress={() => handleGoBack()} >
                <LabelButtonCad>Voltar</LabelButtonCad>
            </ButtonCad>

            <ButtonCad onPress={()=> handleGetDocPage()}>
                <LabelButtonCad>Avançar</LabelButtonCad>
            </ButtonCad>

          </CadButtons>

        </InputCad>

      </AreaCad>
      
    </ContainerCad>
 
    )
}

