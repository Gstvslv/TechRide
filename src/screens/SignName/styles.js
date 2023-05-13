import styled from "styled-components/native";
import { LabelButtonForm } from "../SignIn/styles";

export const ContainerCad = styled.View`
    flex: 1;
    color: #FFFF;
    align-items: center;
    justify-content: center;
`

export const HeaderCad = styled.View`
    width: 100%;
    height: 59px;
    background-color: #2da4fe;
    position: absolute;
    top: 0;
`

export const LogoCad = styled.View` 
    flex-direction: row;
    align-items: center;
`

export const ImageCad = styled.Image` 
    width: 45px;
    height: 45px;
    margin-right: 10px; 
    margin-bottom: 610px;
`

export const TextCad = styled.Text`
    font-size: 32px;
    margin-bottom: 610px;
    margin-left: 2px; 
    color: #219fc4;
    align-self: flex-end; 
`

export const AreaCad = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0px 28px;
    gap: 20px;
    position: absolute;
    width: 365px;
    height: 275px;
    left: 15px;
    top: 297px;
    background: #29343D;
    border-radius: 8px;
    border-color: #08679d;
    border-width: 4.5px;
    `

export const AreaTitleCad = styled.View` 
    border-bottom-width: 1px;
    border-bottom-color: #3f4f5f;
    align-self: center;
    margin-top: 13px;
    width: 88%;
`

export const TitleCad = styled.Text`
    color: #288ad3;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 5px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const InputCad = styled.View`
    flex: 1;
    width: 90%;
    height: 50px;
    align-self: center;
`

export const LabelNome = styled.Text`
    margin-top: 4px;
    color: #FFFF;
`        

export const InputNome = styled.TextInput`
    background-color: #FFFF;
    height: 37px;
    border-radius: 15px;
    margin-top: 7px;
    padding-left: 10px;
`

export const LabelSobrenome = styled.Text`
    margin-top: 20px;
    color: #FFFF;
` 

export const InputSobrenome = styled.TextInput`
    background-color: #FFFF;
    height: 37px;
    border-radius: 15px;
    margin-top: 7px;
    padding-left: 10px;
`

export const CadButtons = styled.View`
    flex-direction: row;
    justify-content: space-around;
`
export const ButtonCad = styled.TouchableOpacity`
    background-color: #04cec2;
    width: 130px;
    height: 36px;
    border-radius: 8px;
    margin-top: 14px;
    justify-content: center;
    align-items: center;
    
`

export const LabelButtonCad = styled.Text`
    font-weight: bold;
    font-size: 13px;
`