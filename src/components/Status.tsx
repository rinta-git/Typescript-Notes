interface StatusProps {
    status: 'loading' | 'success' | 'error';
}

export const Status = (props:StatusProps) => {
    let statusMsg:string = '';
    if(props.status === 'loading'){
        statusMsg = "Loading..."
    }else if(props.status === "success"){
        statusMsg = "Data fetched successfully!"
    }else if(props.status === "error"){
        statusMsg= "Error fetching data"
    }
    return (
        <div>
            <h2>{statusMsg}</h2>
        </div>
    )
}