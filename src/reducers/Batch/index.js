import {
    SET_BATCH_LIST,
    SET_BATCH_LIST_FETCH,
    SET_BATCH_CREATE_MODAL_VISIBLE,
    SET_BATCH_CREATE_MODAL_NAME,
    SET_BATCH_CREATE_MODAL_SIGN,
    SET_BATCH_CREATE_MODAL_REMARK,
    SET_BATCH_UPDATE_MODAL_VISIBLE,
    SET_BATCH_UPDATE_MODAL_ID,
    SET_BATCH_UPDATE_MODAL_NAME,
    SET_BATCH_UPDATE_MODAL_SIGN,
    SET_BATCH_UPDATE_MODAL_REMARK,
} from '../../constants/action';

const initCreateModal = {
    visible: false,
    name: null,
    sign: null,
    remark: null,
}
const initUpdateModal = {
    visible: false,
    id: null,
    name: null,
    sign: null,
    remark: null,
}
const initState = {
    dataList: [],
    isFetch: true,
    createModal: initCreateModal,
    updateModal: initUpdateModal,
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case SET_BATCH_UPDATE_MODAL_REMARK:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    remark: action.data,
                }
            })
        case SET_BATCH_UPDATE_MODAL_ID:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    id: action.data,
                }
            })
        case SET_BATCH_UPDATE_MODAL_SIGN:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    sign: action.data,
                }
            })
        case SET_BATCH_UPDATE_MODAL_NAME:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    name: action.data,
                }
            })
        case SET_BATCH_UPDATE_MODAL_VISIBLE:
            return Object.assign({}, state, {
                updateModal: {
                    ...state.updateModal,
                    visible: action.data,
                }
            })
        case SET_BATCH_CREATE_MODAL_REMARK:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    remark: action.data,
                }
            })
        case SET_BATCH_CREATE_MODAL_SIGN:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    sign: action.data,
                }
            })
        case SET_BATCH_CREATE_MODAL_NAME:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    name: action.data,
                }
            })
        case SET_BATCH_CREATE_MODAL_VISIBLE:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    visible: action.data,
                }
            })
        case SET_BATCH_LIST:
            return Object.assign({}, state, {
                dataList: action.dataList,
            })
        case SET_BATCH_LIST_FETCH:
            return Object.assign({}, state, {
                isFetch: action.isFetch,
            })
        default:
            return state;
    }
}

export default reducer;