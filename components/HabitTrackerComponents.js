import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    /* padding: 7 7; */
`

export const Header = styled.View`
    width: 100%;
    height: 60px;
    background-color: #64e866;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;
`

export const HeaderTitle = styled.Text`
    color: #FFF;
    font-size: 20px;
    font-weight: 900;
`

export const Button = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;
`

export const ButtonText = styled.Text`
    color: #fff;
`

export const ModalView = styled.Modal`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
     background-color: 'white';
     border-radius: 20px;
     /* padding: 35; */
     align-items: 'center';
     /* shadowolor: '#000',
     shadowOffset: {
       width: 0,
       height: 2,
     }, */
     /* shadowOpacity: 0.25,
     shadowRadius: 4, */
     /* elevation: 5; */
`

export const CenteredContainer = styled.View`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const ModalContainer = styled.TouchableOpacity`
    height: 130px;
    width: 190px;
    background: rgba(199, 195, 183, 0.9);
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
`

export const HeaderContainerWrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 130px;
    padding-left: 8px;
`

export const InputContainer = styled.View`

`

export const Input = styled.TextInput`
    border: 0px solid #8f8f8f;
    border-bottom-width: 2px;
    padding: 8px 10px;
    /* height: 30px; */
    font-size: 20px
`