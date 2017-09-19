export function sendMessage(message){
    return function(dispatch){
        dispatch({
            type: "SERVER_SEND_MESSAGE",
            payload: message
        });
        return dispatch({
            type: "ADD_MESSAGE",
            payload: {
                message: message,
                who: "me"
            }
        })
    }
}