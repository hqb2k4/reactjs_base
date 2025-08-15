import instance from "./axios.customize";

// Create User API - User Register
const createUserAPI = (fullName, email, password, phone) => {
    const URL_REGISTER = "/api/v1/user/register"
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return instance.post(URL_REGISTER, data);
}

// Fetch All User
const fetchAllUsersAPI = () => {
    const URL_ALLUSERS = "/api/v1/user"
    return instance.get(URL_ALLUSERS);
}

// Update User
const updateUserAPI = (_id, fullName, email, phone) => {
    const URL_UPDATEUSER = `/api/v1/user/`
    const data = {
        _id: _id,
        fullName: fullName,
        email: email,
        phone: phone
    }
    return instance.put(URL_UPDATEUSER, data);
}

export { createUserAPI, fetchAllUsersAPI, updateUserAPI };