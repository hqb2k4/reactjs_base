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
const updateUserAvatarAPI = (avatar,_id, fullName, email, phone) => {
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

export { createUserAPI, fetchAllUsersAPI, updateUserAPI, deleteUserAPI, uploadFileAPI, updateUserAvatarAPI };

