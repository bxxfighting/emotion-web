import {
    SET_PASSWORD_MODAL_VISIBLE,
    SET_OLD_PASSWORD,
    SET_NEW_PASSWORD,
} from '../../constants/action';

const initPasswordModal = {
    visible: false,
    oldPassword: null,
    newPassword: null,
}
const initState = {
    passwordModal: initPasswordModal,
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case SET_PASSWORD_MODAL_VISIBLE:
            return Object.assign({}, state, {
                passwordModal: {
                    ...state.passwordModal,
                    visible: action.data,
                }
            })
        case SET_OLD_PASSWORD:
            return Object.assign({}, state, {
                passwordModal: {
                    ...state.passwordModal,
                    oldPassword: action.data,
                }
            })
        case SET_NEW_PASSWORD:
            return Object.assign({}, state, {
                passwordModal: {
                    ...state.passwordModal,
                    newPassword: action.data,
                }
            })
        default:
            return state;
    }
}

export default reducer;