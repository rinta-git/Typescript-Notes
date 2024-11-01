import { useState } from "react"

export const LoggedIn = () => {
    const [isLoggedin, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
    }
    return (
        <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>You are currently {isLoggedin ? 'Loggedin' : 'Loggedout'}</div>
        </>
    )
}