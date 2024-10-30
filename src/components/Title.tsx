interface TitleProps {
    children:React.ReactNode;
}

export const Title = (props:TitleProps) => {
    return <h2>{props.children}</h2>
}