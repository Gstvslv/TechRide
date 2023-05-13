import styled from "styled-components/native";
import { LabelButtonForm } from "../SignIn/styles";

export const ContainerHome = styled.View`
  flex:1;
  color: #FFFF;
  align-items: center;
  justify-content: center;
`;

export const Perfil = styled.View`
  flex-direction: row;
  margin-bottom: 70px;

`;

export const Photo = styled.View`
  height: 70px;
  width: 70px;
  border-radius: 90%;
  background-color: #2C95E1;
  position: relative;
  bottom: 250px ;
  right: 95px;
`;

export const Name = styled.Text`
font-size: 24px;
bottom:225px;
position: relative;
right: 60px;
color:#2C95E1;

`;

export const Search = styled.TextInput`
position: absolute;
  bottom: 610px;
  background-color: #FFFF;
  height: 37px;
  border-radius: 15px;
  padding-left: 40px;
  width: 350px;
`;

export const LogoSearch = styled.Image`
    width: 19px;
    height: 19px;
    position: absolute;
    left: 30px;
    top: 215px;
`