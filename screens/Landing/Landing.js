import React from 'react'
import { View, Image } from 'react-native'
import { Container, LandingText, ImpactPhrase, ButtonContainer, LoginButton, RegisterButton, LoginButtonText, RegisterButtonText } from '../../components/AuthComponents'
import thunderIcon from '../../assets/thunderIcon3.webp'

export default function Landing() {
  return (
    <Container>
        <Image source={thunderIcon} style={{ height: 200, width: 200 }} />
        <LandingText>Welcome to ThunderLife!</LandingText>
        <LandingText>Enjoy our app and get your life in order</LandingText>
        <ImpactPhrase>Take care and be legendary!</ImpactPhrase>

        <ButtonContainer>
          <LoginButton>
            <LoginButtonText>Login</LoginButtonText>
          </LoginButton>

          <RegisterButton>
            <RegisterButtonText>Register</RegisterButtonText>
          </RegisterButton>
        </ButtonContainer>
    </Container>
  )
}