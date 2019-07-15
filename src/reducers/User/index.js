import {
    SET_USER_LIST,
    SET_USER_LIST_FETCH,
    SET_USER_CREATE_MODAL_VISIBLE,
    SET_USER_CREATE_MODAL_USERNAME,
    SET_USER_CREATE_MODAL_PASSWORD,
    SET_USER_CREATE_MODAL_NAME,
    SET_USER_CREATE_MODAL_PHONE,
    SET_USER_CREATE_MODAL_EMAIL,
    SET_USER_CREATE_MODAL_ROLE_IDS,
    SET_USER_UPDATE_MODAL_VISIBLE,
    SET_USER_UPDATE_MODAL_ID,
    SET_USER_UPDATE_MODAL_PASSWORD,
    SET_USER_UPDATE_MODAL_NAME,
    SET_USER_UPDATE_MODAL_PHONE,
    SET_USER_UPDATE_MODAL_EMAIL,
    SET_USER_UPDATE_MODAL_ROLE_IDS,
} from '../../constants/action';

const initCreateModal = {
    visible: false,
    username: null,
    password: null,
    name: null,
    phone: null,
    email: null,
    roleIds: [],
}
const initUpdateModal = {
    visible: false,
    id: null,
    password: null,
    name: null,
    phone: null,
    email: null,
    roleIds: [],
}
const initState = {
    dataList: [],
    isFetch: true,
    createModal: initCreateModal,
    updateModal: initUpdateModal,
}

const reducers = (state = initState, action) => {
    switch(action.type) {
        case SET_USER_UPDATE_MODAL_ROLE_IDS:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    roleIds: action.data,
                }
            })
        case SET_USER_UPDATE_MODAL_EMAIL:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    email: action.data,
                }
            })
        case SET_USER_UPDATE_MODAL_PHONE:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    phone: action.data,
                }
            })
        case SET_USER_UPDATE_MODAL_NAME:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    name: action.data,
                }
            })
        case SET_USER_UPDATE_MODAL_PASSWORD:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    password: action.data,
                }
            })
        case SET_USER_UPDATE_MODAL_ID:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    id: action.data,
                }
            })
        case SET_USER_UPDATE_MODAL_VISIBLE:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    visible: action.data,
                }
            })
        case SET_USER_CREATE_MODAL_ROLE_IDS:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    roleIds: action.data,
                }
            })
        case SET_USER_CREATE_MODAL_EMAIL:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    email: action.data,
                }
            })
        case SET_USER_CREATE_MODAL_PHONE:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    phone: action.data,
                }
            })
        case SET_USER_CREATE_MODAL_NAME:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    name: action.data,
                }
            })
        case SET_USER_CREATE_MODAL_PASSWORD:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    password: action.data,
                }
            })
        case SET_USER_CREATE_MODAL_USERNAME:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    username: action.data,
                }
            })
        case SET_USER_CREATE_MODAL_VISIBLE:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    visible: action.data,
                }
            })
        case SET_USER_LIST:
            return Object.assign({}, state, {
                dataList: action.dataList,
            })
        case SET_USER_LIST_FETCH:
            return Object.assign({}, state, {
                isFetch: action.isFetch,
            })
        default:
            return state;
    }
}

export default reducers;