import {
    SET_LOGIN,
    SET_LOGIN_USERNAME,
    SET_LOGIN_PASSWORD,
} from '../../constants/action';

const initState = {
    username: null,
    password: null,
    isLogin: false,
}

const reducers = (state = initState, action) => {
    switch(action.type) {
        case SET_LOGIN:
            return Object.assign({}, state, {
                isLogin: action.isLogin,
            })
        case SET_LOGIN_USERNAME:
            return Object.assign({}, state, {
                username: action.username,
            })
        case SET_LOGIN_PASSWORD:
            return Object.assign({}, state, {
                password: action.password,
            })
        default:
            return state;
    }
}

export default reducers;