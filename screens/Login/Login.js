import React from 'react'
import { View } from 'react-native'
import { Container, AuthNavigationTextContainer, KeyboardAvoidingView, ImpactPhrase, AuthNavigationText, AuthTitle, WavesImage, FooterContainer, TitleContainer, InputContainer, Input } from '../../components/AuthComponents'

import waves from '../../assets/waves.png'

export default function Login({ navigation }) {
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
          <AuthNavigationTextContainer onPress={() => navigation.navigate('Register')} >
              <AuthNavigationText>Don'n you have an account?</AuthNavigationText>
          </AuthNavigationTextContainer>
        </InputContainer>

        <FooterContainer>
          <WavesImage source={waves} />
        </FooterContainer>
    </Container>
  )
}