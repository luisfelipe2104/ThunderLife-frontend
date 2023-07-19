import api from "./api";

export const createUser = async (name, email, password, confirmPassword) => {
    const userData = { name, email, password, confirmPassword }
    try {
        const { data } = await api.post(`/api/user`, userData)
        console.log(data);
        return { data: data.msg, status: 'success' }
    } catch (err) {
        console.log({ data: err.response.data.msg, status: 'error' })
        return { data: err.response.data.msg, status: 'error' }
    }
}

export const login = async (email, password) => {
    const userData = { email, password }
    try {
        const { data } = await api.post(`/api/login`, userData)
        console.log(data);
        return data
    } catch (err) {
        console.log(err);
        return err
    }
}