import styled from "styled-components/native";
import { Dimensions } from "react-native";
const screenHeight = Dimensions.get('window').height

export const Container = styled.View`
    background-color: #2b2b2b;
    min-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */
`

export const WelcomeContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 47%;

    /* border: 2px solid red; */
`

export const LogoImage = styled.Image`
    height: 200px; 
    width: 200px;
`

export const LandingText = styled.Text`
    color: #FFFFFF;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
`

export const ImpactPhrase = styled.Text`
    color: #FFFFFF;
    font-size: 23px;
    font-weight: 700;
    text-align: center;
    font-style: italic;
    margin-top: 15px;
`

export const ButtonContainer = styled.View`
    height: 30%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */

    /* border: 2px solid blue; */
    padding-top: 25px;
`

export const LoginButton = styled.TouchableOpacity`
    background-color: #edea0c;
    padding: 3px 3px;
    border-radius: 15px;
    margin-bottom: 30px;
    height: 60px;
`

export const RegisterButton = styled.TouchableOpacity`
    background-color: #2b2b2b;
    padding: 3px 3px;
    border-radius: 15px;
    border: 3px solid #edea0c;
    height: 60px;
`

export const LoginButtonText = styled.Text`
    color: #000;
    text-align: center;
    font-size: 23px;
    font-weight: 600;
    border: 3px solid #2b2b2b;
    border-radius: 15px;
    padding: 8px 30px;
`

export const RegisterButtonText = styled.Text`
    color: #FFF;
    text-align: center;
    font-size: 23px;
    font-weight: 600;
    border-radius: 15px;
    padding: 8px 30px;
`

export const FooterContainer = styled.View`
    height: 23%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* border: 2px solid green; */
`

export const WavesImage = styled.Image`
    height: 100%;
`

export const InputContainer = styled.View`
    width: 100%;
    height: 57%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 2px solid red; */
`

export const AuthNavigationTextContainer = styled.TouchableOpacity`
    width: 100%;
    padding: 0 0 0 10%;
    `

export const AuthNavigationText = styled.Text`
    color: #FFF;
    font-weight: 700;
    font-size: 17px;
    `

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    /* justify-content: space-between; */
    /* margin-top: 20%; */

`

export const Input = styled.TextInput`
    width: 80%;
    padding: 3px 5px 3px 7px;
    color: #FFF;
    font-size: 19px;
    /* background-color: #454545; */
    margin-bottom: 20px;
    /* border-color: #000; */
    border-bottom-width: 2px;
    border-bottom-color: #edea0c;
    /* border-radius: 8px; */
`

export const TitleContainer = styled.View`
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AuthTitle = styled.Text`
    color: #FFF;
    font-size: 35px;
    font-weight: 800;
    /* margin-bottom: -2px; */
`