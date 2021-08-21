import React, { useState } from 'react'

const useAuth = (value) => {
    const [isAuth, setIsAuth] = useState(value)
    function login() {
        setTimeout(() => {
            setIsAuth(true)
        }, 1000);
    }
    function logout() {
        setTimeout(() => {
            setIsAuth(false)
        }, 1000)
    }

    return {
        isAuth: isAuth,
        login: login,
        logout: logout,
    }
}

export default useAuth;
