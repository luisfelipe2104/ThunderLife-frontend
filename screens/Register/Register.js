import React from 'react'
import { View } from 'react-native'
import { Container, ButtonContainer, RegisterButton, RegisterButtonText, AuthNavigationTextContainer, KeyboardAvoidingView, ImpactPhrase, AuthNavigationText, AuthTitle, WavesImage, FooterContainer, TitleContainer, InputContainer, Input } from '../../components/AuthComponents'

import waves from '../../assets/waves.png'

export default function Register({ navigation }) {
  return (
    <Container>
        <TitleContainer>
          <AuthTitle>⚡Register⚡</AuthTitle>
          <ImpactPhrase>"Put your heart in everything"</ImpactPhrase>
        </TitleContainer>

        <InputContainer>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Input 
              placeholder='Name'
              placeholderTextColor="#858585"
            />
            <Input 
              placeholder='Email'
              placeholderTextColor="#858585"  
            />
            <Input 
              placeholder='Password'
              placeholderTextColor="#858585"
            />
            {/* <Input 
              placeholder='Confirm Password'
              placeholderTextColor="#858585"
            /> */}

            <AuthNavigationTextContainer onPress={() => navigation.navigate('Login')} >
              <AuthNavigationText>Already have an account?</AuthNavigationText>
            </AuthNavigationTextContainer>
            <ButtonContainer>
              <RegisterButton>
                <RegisterButtonText>Register</RegisterButtonText>
              </RegisterButton>
            </ButtonContainer>
          </KeyboardAvoidingView>
        </InputContainer>

        <FooterContainer>
          <WavesImage source={waves} />
        </FooterContainer>
    </Container>
  )
}