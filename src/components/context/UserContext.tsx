import { createContext, useState } from "react";

export interface AuthUser {
    name:string,
    email: string
}

interface UserContextPropType {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

interface UserContextProviderPropType {
    children:React.ReactNode
}

export const UserContext = createContext({} as UserContextPropType);

export const UserContextProvider = ({children}:UserContextProviderPropType) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}