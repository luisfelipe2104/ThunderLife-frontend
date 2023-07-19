import React, { useState } from 'react'
import { View } from 'react-native'
import { Container, ButtonContainer, RegisterButton, RegisterButtonText, AuthNavigationTextContainer, KeyboardAvoidingView, ImpactPhrase, AuthNavigationText, AuthTitle, WavesImage, FooterContainer, TitleContainer, InputContainer, Input } from '../../components/AuthComponents'

import waves from '../../assets/waves.png'
import { showToastSuccess, showToastError } from '../../components/toast/Toast';

import { createUser } from '../../services/user'

export default function Register({ navigation }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = async () => {
    console.log(name, email, password, confirmPassword);
    const response = await createUser(name, email, password, confirmPassword)
    if (response.status === 'success') {
      showToastSuccess(response.data)
      navigation.navigate("Login")
    } else {
      showToastError(response.data)
    }
  }

  return (
    <Container>
        <TitleContainer>
          <AuthTitle>⚡Register⚡</AuthTitle>
          <ImpactPhrase>"Put your heart in everything"</ImpactPhrase>
        </TitleContainer>

        <InputContainer>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Input
              value={name} 
              onChangeText={(text) => setName(text)}
              placeholder='Name'
              placeholderTextColor="#858585"
            />
            <Input  
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder='Email'
              placeholderTextColor="#858585"  
            />
            <Input 
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder='Password'
              placeholderTextColor="#858585"
            />
            <Input 
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              placeholder='Confirm Password'
              placeholderTextColor="#858585"
            />

            <AuthNavigationTextContainer onPress={() => navigation.navigate('Login')} >
              <AuthNavigationText>Already have an account?</AuthNavigationText>
            </AuthNavigationTextContainer>
            <ButtonContainer>
              <RegisterButton onPress={() => handleSubmit()}>
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