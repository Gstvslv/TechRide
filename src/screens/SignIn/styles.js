
import styled from 'styled-components';

export const Container = styled.View`
flex:1;
    color: #FFFF;
    align-items: center;
    justify-content: center;
`

export const Header = styled.View`
    width: 100%;
    height: 55px;
    background-color: #2da4fe;
    position: absolute;
    top: 0;
`

export const LogoConfig = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 60px;

`

export const AreaLogin = styled.View`
    width:  94%;
    height: 315px;
    background-color: #29333d;
    border-radius: 15px;
    padding: 21px 0;
    gap: 5px;
    border-width:4px;
    border-color: #08679d;
`
export const AreaTitle = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: #3f4f5f;
    align-self: center;
    margin-top: 13px;
    width: 88%;
`

export const Title = styled.Text`
    color: #288ad3;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 5px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const AreaInput = styled.View`
    flex: 1;
    width: 90%;
    height: 50px;
    align-self: center;
`

export const LabelEmail = styled.Text`
    margin-top: 20px;
    color: #FFFF;
`    

export const LogoMail = styled.Image `
    width: 18px;
    height: 18px;
    position: absolute;
    left: 10px;
    top: 54px;

`

export const InputEmail = styled.TextInput`
    background-color: #FFFF;
    height: 37px;
    border-radius: 15px;
    margin-top: 7px;
    padding-left: 40px;
`

export const LabelSenha = styled.Text`
    margin-top: 20px;
    color: #FFFF;
`        

export const LogoSenha = styled.Image`
    width: 19px;
    height: 19px;
    position: absolute;
    left: 10px;
    top: 135px;

`
export const InputSenha = styled.TextInput`
    background-color: #FFFF;
    height: 37px;
    border-radius: 15px;
    margin-top: 7px;
    padding-left: 40px;
`

export const ContentFooterArea = styled.View`
    width: 100%;    
    height: 20px;
    align-self: center;
    margin-top: 20px;
    justify-content: space-between;
    flex-direction: row;
`    

export const LabelRemindPass = styled.Text`
    color: #FFFF;
    font-size: 12px;
    margin-left: 7px;
`

export const LabelForgetPass = styled.Text`
    color: #FFFF;
    font-size: 12px;
`

export const AreaCheckBox = styled.View`
    flex-direction: row;
    justify-content: center;
`
export const ButtonCheckBox = styled.TouchableOpacity`

`
export const CheckPoint = styled.View`
    width: 14px;
    height: 14px;
    border-radius: 12px;
    border-width: 3px;
    border-color: #FFFF;
    justify-content: center;
    align-items: center;
`
export const ButtonForm = styled.TouchableOpacity`
    background-color: #04cec2;
    width: 130px;
    height: 36px;
    border-radius: 8px;
    margin-top: 14px;
    justify-content: center;
    align-items: center;
    
`

export const LabelButtonForm = styled.Text`
    font-weight: bold;
    font-size: 13px;
`

export const ContainerButtons = styled.View`
    flex-direction: row;
    justify-content: space-around;
`

export const LogoApp = styled.Image`
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    margin-left: 10px;
    border-radius: 20px;
`

export const LogoImage = styled.Image`
  width: 170px;
  height: 30px;
  margin-left: 10px;
  padding: 10px 45px 0px 5px;
  gap: 10px;
`