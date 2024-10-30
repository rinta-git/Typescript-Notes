import { useState } from "react"

interface AuthUser {
    name:string,
    email:string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const handleLogin = () => {
        setUser({
            name:'Rinta',
            email:'rintaroyofficial@gmail.com'
        });
    }
    const handleLogout = () => {
        setUser(null);
    }
    return (
        <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>Username:{user?.name}</div>
            <div>Email:{user?.email}</div>
        </>
    )
}