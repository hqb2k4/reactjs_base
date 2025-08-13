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

export { createUserAPI, fetchAllUsersAPI }