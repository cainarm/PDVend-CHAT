export const sendMessage = message => {
    return (dispatch) => {
        dispatch({
            type: "SERVER_SEND_MESSAGE",
            payload: message
        });
    };
};