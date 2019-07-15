import {
    SET_MOD_LIST,
    SET_MOD_LIST_FETCH,
    SET_MOD_CREATE_MODAL_VISIBLE,
    SET_MOD_CREATE_MODAL_NAME,
    SET_MOD_CREATE_MODAL_SIGN,
    SET_MOD_CREATE_MODAL_RANK,
    SET_MOD_CREATE_MODAL_URL_IDS,
    SET_MOD_UPDATE_MODAL_VISIBLE,
    SET_MOD_UPDATE_MODAL_ID,
    SET_MOD_UPDATE_MODAL_NAME,
    SET_MOD_UPDATE_MODAL_SIGN,
    SET_MOD_UPDATE_MODAL_RANK,
    SET_MOD_UPDATE_MODAL_URL_IDS,
} from '../../constants/action';

const initCreateModal = {
    visible: false,
    name: null,
    sign: null,
    rank: null,
    urlIds: [],
}
const initUpdateModal = {
    visible: false,
    id: null,
    name: null,
    sign: null,
    rank: null,
    urlIds: [],
}
const initState = {
    isFetch: true,
    dataList: [],
    createModal: initCreateModal,
    updateModal: initUpdateModal,
}

const reducers = (state = initState, action) => {
    switch(action.type) {
        case SET_MOD_UPDATE_MODAL_URL_IDS:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    urlIds: action.data,
                }
            })
        case SET_MOD_UPDATE_MODAL_ID:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    id: action.data,
                }
            })
        case SET_MOD_UPDATE_MODAL_RANK:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    rank: action.data,
                }
            })
        case SET_MOD_UPDATE_MODAL_SIGN:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    sign: action.data,
                }
            })
        case SET_MOD_UPDATE_MODAL_NAME:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    name: action.data,
                }
            })
        case SET_MOD_UPDATE_MODAL_VISIBLE:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    visible: action.data,
                }
            })
        case SET_MOD_CREATE_MODAL_URL_IDS:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    urlIds: action.data,
                }
            })
        case SET_MOD_CREATE_MODAL_RANK:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    rank: action.data,
                }
            })
        case SET_MOD_CREATE_MODAL_SIGN:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    sign: action.data,
                }
            })
        case SET_MOD_CREATE_MODAL_NAME:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    name: action.data,
                }
            })
        case SET_MOD_CREATE_MODAL_VISIBLE:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    visible: action.data,
                }
            })
        case SET_MOD_LIST:
            return Object.assign({}, state, {
                dataList: action.dataList,
            })
        case SET_MOD_LIST_FETCH:
            return Object.assign({}, state, {
                isFetch: action.isFetch,
            })
        default:
            return state;
    }
}

export default reducers;