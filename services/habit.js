import api from "./api";

export const createHabit = async (taskName, taskDescription, taskGoal, user_id) => {
    try {
        const taskData = { taskName, taskDescription, taskGoal, user_id}
        const { data } = await api.post(`/api/task`, taskData)
        return { data: data.msg, status: 'success' }
    } catch (err) {
        return { data: err.response.data.msg, status: 'error' }
    }
}