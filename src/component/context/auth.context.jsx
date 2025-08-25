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

    const [isAppLoading, setIsAppLoading] = useState(true);

    return (
        <AuthContext.Provider value={{ userLoging, setUserLoging, isAppLoading, setIsAppLoading }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthWrapper };