import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"


export const Box = () => {
    const ThemeConsumer = useContext(ThemeContext)
    return <div style={{backgroundColor:ThemeConsumer.primary.main, color:ThemeConsumer.primary.text}}>Theme Context</div>
}