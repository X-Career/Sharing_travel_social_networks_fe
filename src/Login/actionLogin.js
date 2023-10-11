const SET_SIGIN = 'set_sigin';
const SET_LOGIN = 'set_login';
const SET_LOGUP = 'set_logup';
const CHECK_SIGIN = 'check_sigin';

const setSigin = payload => ({
    type: SET_SIGIN,
    payload
})

const setLogin = payload => ({
    type: SET_LOGIN,
    payload
})

const setLogup = payload => ({
    type: SET_LOGUP,
    payload    
})

export {
    SET_SIGIN, SET_LOGIN, SET_LOGUP, 
    setSigin, setLogin, setLogup, 
}