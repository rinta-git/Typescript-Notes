import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () => {
    const userContext = useContext(UserContext);
    const handleLogin = () => {
        userContext.setUser({name:'Rinta', email:'rinta@gmail.com'})
    }
    const handleLogout = () => {
        userContext.setUser(null);
    }
    return (
        <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is:{userContext.user?.name} and user email is:{userContext.user?.email} </div>
        </>
    )
}