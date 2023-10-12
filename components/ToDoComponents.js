import styled from "styled-components/native";

export const ToDoContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 97%;
    height: 58px;
    padding: 0px 10px 0px 8px;
    margin-bottom: 8px;
    border: 1.4px solid #4a4a4a;
    /* border-style: solid dotted; */
`

export const ToDoList = styled.FlatList`
    
`

export const HeaderSubtitle = styled.Text`
    color: #7d7d7d;

`

export const ToDoHeader = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 9px 10px 9px;
    font-style: italic;
    font-weight: 800;
`

export const ToDoButton = styled.TouchableOpacity`

`

export const ToDoContent = styled.View`
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
`

export const ToDoTitle = styled.Text`
    color: #999999;
    padding-left: 8px;
    font-size: 17.5px;
    font-weight: 700;
`

export const LinedText = styled.Text`
    text-decoration: line-through;
`

export const ToDoDetails = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0px 0px 3px 0px;
`

export const DetailText = styled.Text`
    color: #999999;
    font-size: 14px;
`

export const ButtonContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`

export const ClockButton = styled.TouchableOpacity`
    background-color: #0a3273;
    padding: 10px 15px 10px 15px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ClockButtonText = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
`