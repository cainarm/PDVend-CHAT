let defaultState = {    
    messages: []
};

let messageReducer = (state = defaultState, action) => {
    switch(action.type){
        case "ADD_MESSAGE":
            state = {
                ...state,
                messages: [
                    ...state.messages,
                    action.payload
                ]
            };
        break;
        
    }
    return state;
};

export default messageReducer;