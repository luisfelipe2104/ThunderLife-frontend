import React, { useContext, useState } from 'react'
import { View } from 'react-native'
import { Container, RegisterButton, RegisterButtonText, ButtonContainer, AuthNavigationTextContainer, KeyboardAvoidingView, ImpactPhrase, AuthNavigationText, AuthTitle, WavesImage, FooterContainer, TitleContainer, InputContainer, Input } from '../../components/AuthComponents'

import waves from '../../assets/waves.png'
import { showToastSuccess, showToastError } from '../../components/toast/Toast'

import { login } from '../../services/user'
import { DataContext } from '../../contexts/DataContext'

export default function Login({ navigation }) {
  const { handleLogin } = useContext(DataContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {
    console.log(email, password);
    const response = await login(email, password)
    if (response.status === "success") {
      showToastSuccess(response.data)
      const user = response.user
      console.log(user);
      handleLogin(user._id)
    } else {
      showToastError(response.data)
    }
  }

  return (
    <Container>
        <TitleContainer>
          <AuthTitle>⚡Login⚡</AuthTitle>
          <ImpactPhrase>"Success is... TRAINING"</ImpactPhrase>
        </TitleContainer>

        <InputContainer>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
            <AuthNavigationTextContainer onPress={() => navigation.navigate('Register')} >
                <AuthNavigationText>Don't you have an account?</AuthNavigationText>
            </AuthNavigationTextContainer>

            <ButtonContainer>
              <RegisterButton onPress={() => handleSubmit()}>
                <RegisterButtonText>Login</RegisterButtonText>
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