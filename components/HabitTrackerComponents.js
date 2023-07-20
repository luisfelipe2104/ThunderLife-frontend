import styled from "styled-components/native";

export const MainContainer = styled.View`
    background-color: #222222;
    min-height: 100%;
    /* width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; */
`

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export const Header = styled.View`
    width: 100%;
    height: 60px;
    background-color: #454545;
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
    height: 45px;
    width: 45px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #b5b5b5;
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
    background: rgba(59, 59, 59, 0.9);
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
    color: #FFFFFF;
    border: 0px solid #8f8f8f;
    border-bottom-width: 2px;
    padding: 8px 10px;
    /* height: 30px; */
    font-size: 20px;
`

export const HabitContainer = styled.TouchableOpacity`
    padding: 10px 8px;
    border: 0px solid #c9c9c9;
    border-bottom-width: 1px;
`

export const HabitDetailText = styled.Text`
    color: #FFFFFF;
    margin-top: 2px;
    margin-bottom: 7px;
    font-size: 12px;
    font-weight: 600;
`

export const HabitTitle = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
    font-weight: 600;
`

export const ContainerRoundedButton = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 150px;
`

export const DeleteText = styled.Text`
    color: #FFFFFF;
    width: 90%;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 18px;
`

export const RoundedButton = styled.TouchableOpacity`
    height: 60px;
    width: 60px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const HabitName = styled.Text`
    font-size: 27px;
    padding: 5px 0px 5px 8px;
    color: #FFFFFF;
    font-weight: 600;
    text-align: center;
`

export const RedText = styled.Text`
    font-size: 18px;
    padding: 5px 0px 5px 8px;
    color: #ff0000;
    font-weight: 600;
    font-style: italic;
`

export const GreenText = styled.Text`
    font-size: 18px;
    color: #3f9406;
    padding: 5px 0px 5px 8px;
    font-weight: 600;
    font-style: italic;
`

export const HabitStreakGoal = styled.Text`
    font-size: 18px;
    padding: 0px 0px 5px 8px;
    color: #FFFFFF;
    font-weight: 600;
    font-style: italic;
`

export const SubTitle = styled.Text`
    color: #FFFFFF;
    font-size: 19px;
    font-weight: 600;
    padding: 8px 0px 2px 12px;
    width: 100%;
    text-align: center;
`