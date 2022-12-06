

import { createContext, useState } from 'react'

const defaultValue = {
    token:"",
    login: ()=>{},
}

const AuthContext = createContext(defaultValue)

export const AuthContextProvider = (props) =>{

    const [token, setToken] = useState(null);

    const handleLogin = (token)=> {
        setToken(token)
    }
    const contextValue = {
        token: token,
        login: handleLogin
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}