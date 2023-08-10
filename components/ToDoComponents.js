import styled from "styled-components/native";

export const ToDoContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 0px 10px 0px 10px;
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
    color: #FFFFFF;
    padding-left: 10px;
    font-size: 18px;
`

export const ToDoDetails = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0px 0px 3px 0px;
`

export const DetailText = styled.Text`
    color: #3f65fc;
    font-size: 14px;
`