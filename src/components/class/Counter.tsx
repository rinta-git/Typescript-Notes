import { Component } from "react"

interface CounterProps {
    msg: string
}
interface CounterState {
    count:number
}
export class Counter extends Component<CounterProps, CounterState> {
    state = {
        count:0
    }

    handleIncrement = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    }
    render(){
        return (
            <div>
                <button onClick={this.handleIncrement}>Increment</button>
                {this.props.msg} {this.state.count}
            </div>
        )
    }
    
}