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