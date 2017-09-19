import { applyMiddleware, createStore } from 'redux'; 
import messageReducer from './reducers/messageReducer'; 
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
//import logger from 'redux-logger';
import thunk from 'redux-thunk';

let socket = io('http://localhost:1233');
let socketMiddleware = createSocketIoMiddleware(socket, "SERVER_");

let store = createStore(
    messageReducer,
    applyMiddleware(thunk, socketMiddleware)
);

export default store;
