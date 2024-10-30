import { Login } from "./Login"
import { ProfileProps } from "./Profile"


interface PrivateProps {
    isLoggedIn:boolean,
    component: React.ComponentType<ProfileProps>
}

export const Private = ({isLoggedIn, component:Component}:PrivateProps) => {
   return isLoggedIn ? <Component name={'Rinta'} /> : <Login />
}