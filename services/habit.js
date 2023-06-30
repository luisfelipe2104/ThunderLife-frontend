import api from "./api";

export const createHabit = async (taskName, taskDescription, taskGoal, user_id) => {
    try {
        const taskData = { taskName, taskDescription, taskGoal, user_id}
        const { data } = await api.post(`/api/task`, taskData)
        return data.msg
    } catch (err) {
        return err.response.data.msg
    }
}