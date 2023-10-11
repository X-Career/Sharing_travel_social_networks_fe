import {SET_SIGIN, SET_LOGIN, SET_LOGUP,} from './actionLogin'

export const initState = {
    checkLogin: 0,
    user: {},
    users: [
        {id: '1', username: 'phuong', password: '123456', email: 'phuong@gmail.com'},
        {id: '2', username: 'khiem', password: '123456', email: 'khiem@gmail.com'},
    ]
}; 

export default function recuder(state, action){
    switch(action.type) {
        case SET_SIGIN:
            return {
                ...state,
                checkLogin: action.payload,
            }
        case SET_LOGIN:
            return {
                ...state,
                user: {username: action.payload.username, 
                        password: action.payload.password},
            }
        case SET_LOGUP:
            return {
                ...state,
                user: {username: action.payload.username, 
                    password: action.payload.password,
                    email: action.payload.email},
            }
        default: 
            throw new Error("action not supported")
    }
}
