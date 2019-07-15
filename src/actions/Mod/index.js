import request from '../../network/request';
import { 
    apiModList,
    apiModCreate,
    apiModUpdate,
    apiModDelete,
} from '../../network/api';
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


export const setModUpdateModalUrlIds = (data) => ({
    type: SET_MOD_UPDATE_MODAL_URL_IDS,
    data: data,
})
export const setModUpdateModalVisible = (data) => ({
    type: SET_MOD_UPDATE_MODAL_VISIBLE,
    data: data,
})
export const setModUpdateModalID = (data) => ({
    type: SET_MOD_UPDATE_MODAL_ID,
    data: data,
})
export const setModUpdateModalName = (data) => ({
    type: SET_MOD_UPDATE_MODAL_NAME,
    data: data,
})
export const setModUpdateModalSign = (data) => ({
    type: SET_MOD_UPDATE_MODAL_SIGN,
    data: data,
})
export const setModUpdateModalRank = (data) => ({
    type: SET_MOD_UPDATE_MODAL_RANK,
    data: data,
})
export const setModCreateModalUrlIds = (data) => ({
    type: SET_MOD_CREATE_MODAL_URL_IDS,
    data: data,
})
export const setModCreateModalVisible = (data) => ({
    type: SET_MOD_CREATE_MODAL_VISIBLE,
    data: data,
})
export const setModCreateModalName = (data) => ({
    type: SET_MOD_CREATE_MODAL_NAME,
    data: data,
})
export const setModCreateModalSign = (data) => ({
    type: SET_MOD_CREATE_MODAL_SIGN,
    data: data,
})
export const setModCreateModalRank = (data) => ({
    type: SET_MOD_CREATE_MODAL_RANK,
    data: data,
})
export const setModList = (data) => ({
    type: SET_MOD_LIST,
    dataList: data,
})
export const setModListFetch = (data) => ({
    type: SET_MOD_LIST_FETCH,
    isFetch: data,
})
export const getModList = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                page_num: state.mod.pageNum,
                page_size: state.mod.pageSize,
            }),
        }
        return request(apiModList, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setModList(data.data.data_list));
                        }
                    }
                )
    }
}
export const createMod = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                name: state.mod.createModal.name,
                sign: state.mod.createModal.sign,
                rank: parseInt(state.mod.createModal.rank),
                url_ids: state.mod.createModal.urlIds,
            }),
        }
        return request(apiModCreate, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setModCreateModalVisible(false));
                            dispatch(getModList());
                        }
                    }
                )
    }
}
export const updateMod = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                id: state.mod.updateModal.id,
                name: state.mod.updateModal.name,
                sign: state.mod.updateModal.sign,
                rank: parseInt(state.mod.updateModal.rank),
                url_ids: state.mod.updateModal.urlIds,
            }),
        }
        return request(apiModUpdate, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setModUpdateModalVisible(false));
                            dispatch(getModList());
                        }
                    }
                )
    }
}
export const deleteMod = (id) => {
    return (dispatch, getState) => {
        const option = {
            method: 'POST',
            body: JSON.stringify({
                id: id,
            }),
        }
        return request(apiModDelete, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(getModList());
                        }
                    }
                )
    }
}