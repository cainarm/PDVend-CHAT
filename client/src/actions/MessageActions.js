export const sendMessage = message => {
    return (dispatch) => {
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
        });
    };
}