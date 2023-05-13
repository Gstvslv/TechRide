import React from 'react';
import {     
    ContainerCad,
    HeaderCad,
    LogoCad,
    ImageCad,
    TextCad,
    AreaTitleCad,
    TitleCad,
    InputCad,
    CadButtons,
    ButtonCad,
    LabelButtonCad,
} from '../SignName/styles';

import { 
    AreaCad2,
    InputEmail2,
    InputRepitir, 
    InputSenha2, 
    LabelEmail2,
    LabelRepitir,
    LabelSenha2 
} from './styles';

import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import bus from '../../assets/bus.png'


export const SignEmail = () => {

    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack()
    }

    const handleGetSignInPage = () => {
        navigation.navigate('SignIn')
    }

    return (
        <ContainerCad>

        <HeaderCad/>
  
        <LogoCad>
  
          <ImageCad source={bus} />
          <TextCad>Tech Ride</TextCad>
  
        </LogoCad>
  
        <AreaCad2>
  
          <AreaTitleCad>
            <TitleCad>CADASTRO</TitleCad>
          </AreaTitleCad>
  
  
          <InputCad>
            <LabelEmail2>Email</LabelEmail2>
            <InputEmail2 placeholder='Email'/>

            <LabelSenha2>Senha</LabelSenha2>
            <InputSenha2 placeholder='Senha'/>

            <LabelRepitir>Repita a senha</LabelRepitir>
            <InputRepitir placeholder='Repita a senha' />
            <CadButtons>
  
              <ButtonCad onPress={() => handleGoBack()} >
                  <LabelButtonCad>Voltar</LabelButtonCad>
              </ButtonCad>
  
              <ButtonCad  onPress={()=> handleGetSignInPage()}>
                  <LabelButtonCad>Finalizar</LabelButtonCad>
              </ButtonCad>
  
            </CadButtons>
  
          </InputCad>
  
        </AreaCad2>
        
      </ContainerCad>
   
      )
  }
  
  