import request from '../../network/request';
import { 
    apiUrlList,
    apiUrlCreate,
    apiUrlUpdate,
    apiUrlDelete,
} from '../../network/api';
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

export const setUrlUpdateModalVisible = (data) => ({
    type: SET_URL_UPDATE_MODAL_VISIBLE,
    data: data,
})
export const setUrlUpdateModalId = (data) => ({
    type: SET_URL_UPDATE_MODAL_ID,
    data: data,
})
export const setUrlUpdateModalName = (data) => ({
    type: SET_URL_UPDATE_MODAL_NAME,
    data: data,
})
export const setUrlUpdateModalUrl= (data) => ({
    type: SET_URL_UPDATE_MODAL_URL,
    data: data,
})
export const setUrlCreateModalVisible = (data) => ({
    type: SET_URL_CREATE_MODAL_VISIBLE,
    data: data,
})
export const setUrlCreateModalName = (data) => ({
    type: SET_URL_CREATE_MODAL_NAME,
    data: data,
})
export const setUrlCreateModalUrl = (data) => ({
    type: SET_URL_CREATE_MODAL_URL,
    data: data,
})
export const setUrlList = (data) => ({
    type: SET_URL_LIST,
    dataList: data,
})
export const setUrlListFetch = (data) => ({
    type: SET_URL_LIST_FETCH,
    isFetch: data,
})
export const getUrlList = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                page_num: state.url.pageNum,
                page_size: state.url.pageSize,
            }),
        }
        return request(apiUrlList, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setUrlList(data.data.data_list));
                        }
                    }
                )
    }
}
export const createUrl = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                name: state.url.createModal.name,
                url: state.url.createModal.url,
                mod_ids: state.url.createModal.modIds,
            }),
        }
        return request(apiUrlCreate, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setUrlCreateModalVisible(false));
                            dispatch(getUrlList());
                        }
                    }
                )
    }
}
export const updateUrl = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                id: state.url.updateModal.id,
                name: state.url.updateModal.name,
                url: state.url.updateModal.url,
                mod_ids: state.url.updateModal.modIds,
            }),
        }
        return request(apiUrlUpdate, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setUrlUpdateModalVisible(false));
                            dispatch(getUrlList());
                        }
                    }
                )
    }
}
export const deleteUrl = (id) => {
    return (dispatch, getState) => {
        const option = {
            method: 'POST',
            body: JSON.stringify({
                id: id,
            }),
        }
        return request(apiUrlDelete, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(getUrlList());
                        }
                    }
                )
    }
}