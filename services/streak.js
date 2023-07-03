import api from './api';

export const trackHabit = async (habit_id, user_id, date, comment, status) => {
    try {
        const streakData = { habit_id, user_id, date, comment, status }
        const { data } = await api.post('/api/streak', streakData)
        return data.msg
    } catch (err) {
        console.log(err);
        // return err
    }
}