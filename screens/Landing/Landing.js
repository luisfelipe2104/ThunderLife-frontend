import React from 'react'
import { View, Text } from 'react-native'
import { Container, WavesImage, FooterContainer, WelcomeContainer, LogoImage, LandingText, ImpactPhrase, ButtonContainer, LoginButton, RegisterButton, LoginButtonText, RegisterButtonText } from '../../components/AuthComponents'
import thunderIcon from '../../assets/thunderIcon3.webp'
import waves from '../../assets/waves.png'

export default function Landing({ navigation }) {
  return (
    <Container>
        <WelcomeContainer>
          <LogoImage source={thunderIcon} />
          <LandingText>Welcome to ThunderLife!</LandingText>
          <LandingText>⚡Enjoy our app and get your life in order⚡</LandingText>
          <ImpactPhrase>Take care and be legendary!</ImpactPhrase>
        </WelcomeContainer>

        <ButtonContainer>
          <LoginButton onPress={() => navigation.navigate('Login')}>
            <LoginButtonText>Login</LoginButtonText>
          </LoginButton>

          <RegisterButton onPress={() => navigation.navigate('Register')}>
            <RegisterButtonText>Register</RegisterButtonText>
          </RegisterButton>
        </ButtonContainer>

        <FooterContainer>
          <WavesImage source={waves} />
        </FooterContainer>
    </Container>
  )
}