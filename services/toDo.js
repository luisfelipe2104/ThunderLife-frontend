import api from "./api";

export const createToDo = async (user_id, toDoName, scheduledHour, toDoDescription) => {
    try {
        const toDoData = { user_id, toDoName, scheduledHour, toDoDescription}
        const { data } = await api.post(`/api/toDo`, toDoData)
        console.log(data);
        return { data: data.msg, status: 'success' }
    } catch (err) {
        console.log(err);
        return { data: err.response.data.msg, status: 'error' }
    }
}

export const getToDoList = async (user_id) => {
    try {
        const { data } = await api.get(`/api/toDo?userId=${user_id}`)
        console.log(data);
        return data
    } catch (err) {
        console.log(err);
        return { data: err.response.data.msg, status: 'error' }
    }
}