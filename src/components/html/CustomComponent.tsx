import { Greet } from "../Greet"

export const CustomComponent = (props:React.ComponentProps<typeof Greet>) => {
    return <div>{props.isLoggedin ? props.msgCount : props.name}</div>
}