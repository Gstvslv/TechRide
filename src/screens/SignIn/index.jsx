import React, { useState } from "react";
import {
    AreaInput,
    AreaLogin, AreaTitle,
    Container,
    Header,
    Title,
    LabelEmail, 
    InputEmail,
    LabelSenha,
    InputSenha,
    ContentFooterArea,
    LabelRemindPass,
    LabelForgetPass,
    AreaCheckBox,
    ButtonCheckBox,
    CheckPoint,
    ButtonForm,
    LabelButtonForm,
    ContainerButtons,
    LogoConfig,
    LogoApp,
    LogoImage,
    LogoMail,
    LogoSenha,
    
} from "./styles";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {useNavigation} from '@react-navigation/native'
import { LinearGradient } from "expo-linear-gradient";


import bus from '../../assets/bus.png'
import Mail from '../../assets/Mail.png'
import Unlock from '../../assets/Unlock.png'
import TechRide from '../../assets/TechRide.png'


export const SignIn = () => {

    const [checked, setChecked] = useState(false);

    const navigation = useNavigation()

    const handleCheckRemindPass = () => {
        setChecked(!checked);
    };

    const handleGetSignNamePage = () => {
        navigation.navigate('SignName')
    }

    const handleGetHomePage = () => {
        navigation.navigate('Home')
    }
    
    return (
        <Container>

            <Header/>

                <LogoConfig>

                    <LogoApp source={bus} />
                    <LogoImage source={TechRide} />
                
                </LogoConfig>
            <AreaLogin>
                
                <AreaTitle>
                 <Title>ACESSE</Title>
                </AreaTitle>

                <AreaInput>
                    <LabelEmail>Email</LabelEmail>
                    <InputEmail placeholder="Email" />
                    <LogoMail source = {Mail} />

                    <LabelSenha>Senha</LabelSenha>
                    <InputSenha placeholder="Senha" />
                    <LogoSenha source = {Unlock} />

                    <ContentFooterArea>
                        <AreaCheckBox>
                            <ButtonCheckBox onPress={handleCheckRemindPass}>
                                <CheckPoint style={{ backgroundColor: checked ? '#288ad3' : '#FFFF' }}  />
                            </ButtonCheckBox>
                            <LabelRemindPass>Lembrar senha</LabelRemindPass>
                        </AreaCheckBox>
                 
                        <LabelForgetPass>Esqueceu sua senha?</LabelForgetPass>
                    </ContentFooterArea>
                    <ContainerButtons>

                        <ButtonForm onPress={() => handleGetHomePage()} >
                            <LabelButtonForm>Log In</LabelButtonForm>
                        </ButtonForm>

                        <ButtonForm onPress={()=> handleGetSignNamePage()} >
                            <LabelButtonForm>Cadastrar</LabelButtonForm>
                        </ButtonForm>
                        
                        

                    </ContainerButtons>
                
                </AreaInput>

            </AreaLogin>

            <View style={{flexDirection:'row', marginTop:50, width:'93%', justifyContent:'space-between', alignItems:'center'}}>
                <View style={{ borderBottomWidth: 0.3, width: 115, height:1 }} />
                <Text style={{color:'gray'}}>Ou acesse com </Text>
                <View style={{borderBottomWidth: 0.3, width: 115, height:1 }} />
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-around', width:120}}>
                <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#d3d3d368', borderRadius: 7, marginTop: 20, justifyContent:'center', alignItems:'center' }}>
                    <Image style={{ width: 35, height: 35 }} source={{ uri: 'https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png' }} />
                </TouchableOpacity> 

                <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#d3d3d368', borderRadius: 7, marginTop: 20, justifyContent:'center', alignItems:'center' }}>
                    <Image style={{ width: 35, height: 35 }} source={{ uri: 'https://www.facebook.com/images/fb_icon_325x325.png' }} />
                </TouchableOpacity> 
            </View>
           

       </Container>
    )
}