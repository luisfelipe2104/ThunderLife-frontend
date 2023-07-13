import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #2b2b2b;
    min-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const WelcomeContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    height: 130px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const LoginButton = styled.TouchableOpacity`
    background-color: #edea0c;
    padding: 3px 3px;
    border-radius: 15px;
`

export const RegisterButton = styled.TouchableOpacity`
    background-color: #2b2b2b;
    padding: 3px 3px;
    border-radius: 15px;
    border: 3px solid #edea0c;
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

`

export const WavesImage = styled.Image`
    height: 180px;
`