import request from '../../network/request';
import { 
    apiRoleList,
    apiRoleCreate,
    apiRoleUpdate,
    apiRoleDelete,
} from '../../network/api';
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

export const setRoleUpdateModalModIds = (data) => ({
    type: SET_ROLE_UPDATE_MODAL_MOD_IDS,
    data: data,
})
export const setRoleUpdateModalVisible = (data) => ({
    type: SET_ROLE_UPDATE_MODAL_VISIBLE,
    data: data,
})
export const setRoleUpdateModalId = (data) => ({
    type: SET_ROLE_UPDATE_MODAL_ID,
    data: data,
})
export const setRoleUpdateModalName = (data) => ({
    type: SET_ROLE_UPDATE_MODAL_NAME,
    data: data,
})
export const setRoleUpdateModalSign = (data) => ({
    type: SET_ROLE_UPDATE_MODAL_SIGN,
    data: data,
})
export const setRoleCreateModalModIds = (data) => ({
    type: SET_ROLE_CREATE_MODAL_MOD_IDS,
    data: data,
})
export const setRoleCreateModalVisible = (data) => ({
    type: SET_ROLE_CREATE_MODAL_VISIBLE,
    data: data,
})
export const setRoleCreateModalName = (data) => ({
    type: SET_ROLE_CREATE_MODAL_NAME,
    data: data,
})
export const setRoleCreateModalSign = (data) => ({
    type: SET_ROLE_CREATE_MODAL_SIGN,
    data: data,
})
export const setRoleList = (data) => ({
    type: SET_ROLE_LIST,
    dataList: data,
})
export const setRoleListFetch = (data) => ({
    type: SET_ROLE_LIST_FETCH,
    isFetch: data,
})
export const getRoleList = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                page_num: state.role.pageNum,
                page_size: state.role.pageSize,
            }),
        }
        return request(apiRoleList, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setRoleList(data.data.data_list));
                        }
                    }
                )
    }
}
export const createRole = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                name: state.role.createModal.name,
                sign: state.role.createModal.sign,
                mod_ids: state.role.createModal.modIds,
            }),
        }
        return request(apiRoleCreate, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setRoleCreateModalVisible(false));
                            dispatch(getRoleList());
                        }
                    }
                )
    }
}
export const updateRole = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                id: state.role.updateModal.id,
                name: state.role.updateModal.name,
                sign: state.role.updateModal.sign,
                mod_ids: state.role.updateModal.modIds,
            }),
        }
        return request(apiRoleUpdate, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setRoleUpdateModalVisible(false));
                            dispatch(getRoleList());
                        }
                    }
                )
    }
}
export const deleteRole = (id) => {
    return (dispatch, getState) => {
        const option = {
            method: 'POST',
            body: JSON.stringify({
                id: id,
            }),
        }
        return request(apiRoleDelete, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(getRoleList());
                        }
                    }
                )
    }
}