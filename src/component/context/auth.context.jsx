import { createContext, useState } from 'react';

const AuthContext = createContext(
    {
        "email": "",
        "phone": "",
        "fullName": "",
        "role": "",
        "avatar": "",
        "id": ""
    }
);

const AuthWrapper = (props) => {
    const [userLoging, setUserLoging] = useState(
        {
            "email": "",
            "phone": "",
            "fullName": "",
            "role": "",
            "avatar": "",
            "id": ""
        }
    );

    return (
        <AuthContext.Provider value={{ userLoging, setUserLoging }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthWrapper };