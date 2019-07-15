import request from '../../network/request';
import { 
    apiPasswordChange,
} from '../../network/api';
import {
    SET_PASSWORD_MODAL_VISIBLE,
    SET_OLD_PASSWORD,
    SET_NEW_PASSWORD,
} from '../../constants/action';

export const setPasswordModalVisible = (data) => ({
    type: SET_PASSWORD_MODAL_VISIBLE,
    data: data,
})
export const setOldPassword = (data) => ({
    type: SET_OLD_PASSWORD,
    data: data,
})
export const setNewPassword = (data) => ({
    type: SET_NEW_PASSWORD,
    data: data,
})
export const changePassword = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                old_password: state.titleBar.passwordModal.oldPassword,
                new_password: state.titleBar.passwordModal.newPassword,
            }),
        }
        return request(apiPasswordChange, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            //删除token，跳转至login
                            dispatch(setPasswordModalVisible(false));
                            localStorage.removeItem('token');
                            localStorage.removeItem('isLogin');
                            state.router.history.replace('/login')
                            window.location.reload()
                        }
                    }
                )
    }
}