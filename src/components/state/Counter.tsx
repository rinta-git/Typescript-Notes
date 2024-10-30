import { useReducer } from "react";

interface CounterState {
    count:number
}

interface UpdateAction {
    type: 'increment' | 'decrement',
    payload: number
}

interface ResetAction {
    type: 'reset'
    payload?:number
}

type CounterAction = UpdateAction | ResetAction;

function reducer(state:CounterState, action:CounterAction) {
    switch(action.type){
        case 'increment': return {count: state.count + (action.payload || 0)};
        case 'decrement': return {count: state.count - (action.payload || 0)};
        case 'reset': return initialState;
        default: return state;
    }
}
const initialState = { count:0 };

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer,initialState);

    return (
        <>
            <button onClick={() => dispatch({type:'increment', payload:10})}>Increment by 10</button>
            <button onClick={() => dispatch({type:'decrement', payload:10})}>Decrement by 10</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
            <div>Conuter: {state.count}</div>
        </>
    )
}