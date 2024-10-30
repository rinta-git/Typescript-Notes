interface ButtonProps extends Omit<React.ComponentProps<'button'>, 'children'> {
    variant : 'primary' | 'secondary',
    children:string 
}

export const CustomButton = ({variant, children, ...rest}:ButtonProps) => {
    return <button className={`class-with-${variant}`} {...rest}>{children}</button>
}