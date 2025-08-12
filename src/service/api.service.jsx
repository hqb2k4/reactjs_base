import instance from "./axios.customize";


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

export { createUserAPI }