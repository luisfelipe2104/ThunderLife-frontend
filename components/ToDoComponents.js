import styled from "styled-components/native";

export const ToDoContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 97%;
    height: 60px;
    padding: 0px 10px 0px 10px;
    margin-bottom: 8px;
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
    padding: 5px 6px 10px 6px;
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