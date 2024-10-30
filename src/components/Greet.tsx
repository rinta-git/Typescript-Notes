type GreetProps = {
    name:string,
    msgCount?:number,  //optional
    isLoggedin:boolean
}

export const Greet = (props:GreetProps) => {
    const {msgCount = 0} = props;
    return (
        <div>
           {props.isLoggedin ? <h2>Welcome {props.name}! You have {msgCount} unread messages</h2> : <h2>Welcome Guest :) You have {msgCount} unread messages</h2>} 
        </div>
    )
}