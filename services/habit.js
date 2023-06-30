import api from "./api";

export const createHabit = async (habitName, habitDescription, habitGoal, user_id) => {
    try {
        const habitData = { habitName, habitDescription, habitGoal, user_id}
        const { data } = await api.post(`/api/habit`, habitData)
        return { data: data.msg, status: 'success' }
    } catch (err) {
        return { data: err.response.data.msg, status: 'error' }
    }
}

export const getHabits = async (user_id) => {
    try {
        const { data } = await api.get(`/api/habit/?userId=${user_id}`)
        return data
    } catch (err) {
        console.log(err);
    }
}