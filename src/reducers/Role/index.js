import {
    SET_ROLE_LIST,
    SET_ROLE_LIST_FETCH,
    SET_ROLE_CREATE_MODAL_VISIBLE,
    SET_ROLE_CREATE_MODAL_NAME,
    SET_ROLE_CREATE_MODAL_SIGN,
    SET_ROLE_CREATE_MODAL_MOD_IDS,
    SET_ROLE_UPDATE_MODAL_VISIBLE,
    SET_ROLE_UPDATE_MODAL_ID,
    SET_ROLE_UPDATE_MODAL_NAME,
    SET_ROLE_UPDATE_MODAL_SIGN,
    SET_ROLE_UPDATE_MODAL_MOD_IDS,
} from '../../constants/action';

const initCreateModal = {
    visible: false,
    name: null,
    sign: null,
    modIds: [],
}
const initUpdateModal = {
    visible: false,
    id: null,
    name: null,
    sign: null,
    modIds: [],
}
const initState = {
    dataList: [],
    isFetch: true,
    createModal: initCreateModal,
    updateModal: initUpdateModal,
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case SET_ROLE_UPDATE_MODAL_MOD_IDS:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    modIds: action.data,
                }
            })
        case SET_ROLE_UPDATE_MODAL_ID:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    id: action.data,
                }
            })
        case SET_ROLE_UPDATE_MODAL_SIGN:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    sign: action.data,
                }
            })
        case SET_ROLE_UPDATE_MODAL_NAME:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    name: action.data,
                }
            })
        case SET_ROLE_UPDATE_MODAL_VISIBLE:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    visible: action.data,
                }
            })
        case SET_ROLE_CREATE_MODAL_MOD_IDS:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    modIds: action.data,
                }
            })
        case SET_ROLE_CREATE_MODAL_SIGN:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    sign: action.data,
                }
            })
        case SET_ROLE_CREATE_MODAL_NAME:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    name: action.data,
                }
            })
        case SET_ROLE_CREATE_MODAL_VISIBLE:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    visible: action.data,
                }
            })
        case SET_ROLE_LIST:
            return Object.assign({}, state, {
                dataList: action.dataList,
            })
        case SET_ROLE_LIST_FETCH:
            return Object.assign({}, state, {
                isFetch: action.isFetch,
            })
        default:
            return state;
    }
}

export default reducer;