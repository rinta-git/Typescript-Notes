interface InputProps {
    value:string
}

export const Input = ({value}:InputProps) => {
    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    }
    return <input type="text" value={value} onChange={handleInput} />
}