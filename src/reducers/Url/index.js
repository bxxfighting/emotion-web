import {
    SET_URL_LIST,
    SET_URL_LIST_FETCH,
    SET_URL_CREATE_MODAL_VISIBLE,
    SET_URL_CREATE_MODAL_NAME,
    SET_URL_CREATE_MODAL_URL,
    SET_URL_UPDATE_MODAL_VISIBLE,
    SET_URL_UPDATE_MODAL_ID,
    SET_URL_UPDATE_MODAL_NAME,
    SET_URL_UPDATE_MODAL_URL,
} from '../../constants/action';

const initCreateModal = {
    visible: false,
    name: null,
    url: null,
}
const initUpdateModal = {
    visible: false,
    id: null,
    name: null,
    url: null,
}
const initState = {
    dataList: [],
    isFetch: true,
    createModal: initCreateModal,
    updateModal: initUpdateModal,
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case SET_URL_UPDATE_MODAL_ID:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    id: action.data,
                }
            })
        case SET_URL_UPDATE_MODAL_URL:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    url: action.data,
                }
            })
        case SET_URL_UPDATE_MODAL_NAME:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    name: action.data,
                }
            })
        case SET_URL_UPDATE_MODAL_VISIBLE:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    visible: action.data,
                }
            })
        case SET_URL_CREATE_MODAL_URL:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    url: action.data,
                }
            })
        case SET_URL_CREATE_MODAL_NAME:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    name: action.data,
                }
            })
        case SET_URL_CREATE_MODAL_VISIBLE:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    visible: action.data,
                }
            })
        case SET_URL_LIST:
            return Object.assign({}, state, {
                dataList: action.dataList,
            })
        case SET_URL_LIST_FETCH:
            return Object.assign({}, state, {
                isFetch: action.isFetch,
            })
        default:
            return state;
    }
}

export default reducer;