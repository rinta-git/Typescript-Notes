import { ContainerProps } from "./Container.types"

export const Container = (props:ContainerProps) => {
    return (
        <div style={props.styles}>
            Hello
        </div>
    )
}