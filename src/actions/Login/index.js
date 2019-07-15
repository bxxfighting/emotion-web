import request from '../../network/request';
import { 
    apiLogin,
} from '../../network/api';
import {
    SET_LOGIN,
    SET_LOGIN_USERNAME,
    SET_LOGIN_PASSWORD,
} from '../../constants/action';
import {
    setMenuList,
} from '../../actions';


export const setLogin = (data) => ({
    type: SET_LOGIN,
    isLogin: data,
})
export const setLoginUsername = (username) => ({
    type: SET_LOGIN_USERNAME,
    username: username,
})
export const setLoginPassword = (password) => ({
    type: SET_LOGIN_PASSWORD,
    password: password,
})

export const login = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                username: state.login.username,
                password: state.login.password,
            })
        }
        return request(apiLogin, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            localStorage.setItem('token', data.data.token);
                            dispatch(setMenuList(data.data.mod_list));
                            localStorage.setItem('isLogin', true);
                            state.router.history.push({pathname: "/"});
                        }
                    }
                )
    }
}
export const logout = () => {
    return (dispatch, getState) => {
        const state = getState();
        localStorage.removeItem('token');
        localStorage.removeItem('isLogin');
        dispatch(setLogin(false))
        state.router.history.replace({pathname: '/login'});
        window.location.reload()
    }
}