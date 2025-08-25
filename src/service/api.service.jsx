import instance from "./axios.customize";

// Create User API - User Register
const createUserAPI = (fullName, email, password, phone) => {
    const URL_CREATEUSER = "/api/v1/user"
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return instance.post(URL_CREATEUSER, data);
}

// Fetch All User
const fetchAllUsersAPI = (current, page) => {
    const URL_ALLUSERS = `/api/v1/user?current=${current}&pageSize=${page}`
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

// Delete User
const deleteUserAPI = (_id) => {
    const URL_DELETEUSER = `/api/v1/user/${_id}`;
    return instance.delete(URL_DELETEUSER);
}

// Upload File
const uploadFileAPI = (file, folder) => {
    const URL_UPLOAD = `/api/v1/file/upload`;
    const config = {
        headers: {
            "upload-type": folder,
            "Content-Type": "multipart/form-data",
        }
    }
    const bodyFormdata = new FormData();
    bodyFormdata.append("fileImg", file);

    return instance.post(URL_UPLOAD, bodyFormdata, config);
}

// Upload User Avatar
const updateUserAvatarAPI = (avatar, _id, fullName, email, phone) => {
    const URL_UPDATEUSER = `/api/v1/user/`
    const data = {
        avatar: avatar,
        _id: _id,
        fullName: fullName,
        email: email,
        phone: phone
    }
    return instance.put(URL_UPDATEUSER, data);
}

// Register User
const registerUserAPI = (fullName, email, password, phone) => {
    const URL_REGISTER = "/api/v1/user/register"
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return instance.post(URL_REGISTER, data);
}

//Login User
const loginUserAPI = (email, password) => {
    const URL_LOGIN = "/api/v1/auth/login"
    const data = {
        username: email,
        password: password,
        delay: 2000
    }
    return instance.post(URL_LOGIN, data);
}

// Get Account User
const getAccountUserAPI = () => {
    const URL_GETACCOUNTUSER = "/api/v1/auth/account"
    return instance.get(URL_GETACCOUNTUSER);
}

// Logout Account User
const logoutUserAPI = () => {
    const URL_LOGOUTUSER = "/api/v1/auth/logout"
    return instance.post(URL_LOGOUTUSER);
}

export { createUserAPI, fetchAllUsersAPI, updateUserAPI, deleteUserAPI, uploadFileAPI, updateUserAvatarAPI, registerUserAPI, loginUserAPI, getAccountUserAPI, logoutUserAPI };

