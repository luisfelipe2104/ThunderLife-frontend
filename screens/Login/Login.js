import React from 'react'
import { View } from 'react-native'
import { Container, KeyboardAvoidingView, ImpactPhrase, AuthNavigationText, AuthTitle, WavesImage, FooterContainer, TitleContainer, InputContainer, Input } from '../../components/AuthComponents'

import waves from '../../assets/waves.png'

export default function Login() {
  return (
    <Container>
        <TitleContainer>
          <AuthTitle>⚡Login⚡</AuthTitle>
          <ImpactPhrase>"Success is... TRAINING"</ImpactPhrase>
        </TitleContainer>

        <InputContainer>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Input 
              placeholder='Email'
              placeholderTextColor="#858585"  
            />
            <Input 
              placeholder='Password'
              placeholderTextColor="#858585"
            />
          </KeyboardAvoidingView>
          <AuthNavigationText>Already have an account?</AuthNavigationText>
        </InputContainer>

        <FooterContainer>
          <WavesImage source={waves} />
        </FooterContainer>
    </Container>
  )
}