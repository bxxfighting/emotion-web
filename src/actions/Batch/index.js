import request from '../../network/request';
import { 
    apiBatchList,
    apiBatchCreate,
    apiBatchUpdate,
    apiBatchDelete,
} from '../../network/api';
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

export const setBatchUpdateModalVisible = (data) => ({
    type: SET_BATCH_UPDATE_MODAL_VISIBLE,
    data: data,
})
export const setBatchUpdateModalId = (data) => ({
    type: SET_BATCH_UPDATE_MODAL_ID,
    data: data,
})
export const setBatchUpdateModalName = (data) => ({
    type: SET_BATCH_UPDATE_MODAL_NAME,
    data: data,
})
export const setBatchUpdateModalSign = (data) => ({
    type: SET_BATCH_UPDATE_MODAL_SIGN,
    data: data,
})
export const setBatchUpdateModalRemark = (data) => ({
    type: SET_BATCH_UPDATE_MODAL_REMARK,
    data: data,
})
export const setBatchCreateModalVisible = (data) => ({
    type: SET_BATCH_CREATE_MODAL_VISIBLE,
    data: data,
})
export const setBatchCreateModalName = (data) => ({
    type: SET_BATCH_CREATE_MODAL_NAME,
    data: data,
})
export const setBatchCreateModalSign = (data) => ({
    type: SET_BATCH_CREATE_MODAL_SIGN,
    data: data,
})
export const setBatchCreateModalRemark = (data) => ({
    type: SET_BATCH_CREATE_MODAL_REMARK,
    data: data,
})
export const setBatchList = (data) => ({
    type: SET_BATCH_LIST,
    dataList: data,
})
export const setBatchListFetch = (data) => ({
    type: SET_BATCH_LIST_FETCH,
    isFetch: data,
})
export const getBatchList = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                page_num: state.batch.pageNum,
                page_size: state.batch.pageSize,
            }),
        }
        return request(apiBatchList, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setBatchList(data.data.data_list));
                        }
                    }
                )
    }
}
export const createBatch = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                name: state.batch.createModal.name,
                sign: state.batch.createModal.sign,
                remark: state.batch.createModal.remark,
            }),
        }
        return request(apiBatchCreate, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setBatchCreateModalVisible(false));
                            dispatch(getBatchList());
                        }
                    }
                )
    }
}
export const updateBatch = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                id: state.batch.updateModal.id,
                name: state.batch.updateModal.name,
                sign: state.batch.updateModal.sign,
                remark: state.batch.updateModal.remark,
            }),
        }
        return request(apiBatchUpdate, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setBatchUpdateModalVisible(false));
                            dispatch(getBatchList());
                        }
                    }
                )
    }
}
export const deleteBatch = (id) => {
    return (dispatch, getState) => {
        const option = {
            method: 'POST',
            body: JSON.stringify({
                id: id,
            }),
        }
        return request(apiBatchDelete, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(getBatchList());
                        }
                    }
                )
    }
}