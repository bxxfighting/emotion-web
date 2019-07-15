import request from '../../network/request';
import { 
    apiUserList,
    apiUserCreate,
    apiUserUpdate,
    apiUserDelete,
} from '../../network/api';
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


export const setUserUpdateModalRoleIds = (data) => ({
    type: SET_USER_UPDATE_MODAL_ROLE_IDS,
    data: data,
})
export const setUserUpdateModalVisible = (data) => ({
    type: SET_USER_UPDATE_MODAL_VISIBLE,
    data: data,
})
export const setUserUpdateModalId = (data) => ({
    type: SET_USER_UPDATE_MODAL_ID,
    data: data,
})
export const setUserUpdateModalPassword = (data) => ({
    type: SET_USER_UPDATE_MODAL_PASSWORD,
    data: data,
})
export const setUserUpdateModalName = (data) => ({
    type: SET_USER_UPDATE_MODAL_NAME,
    data: data,
})
export const setUserUpdateModalPhone = (data) => ({
    type: SET_USER_UPDATE_MODAL_PHONE,
    data: data,
})
export const setUserUpdateModalEmail = (data) => ({
    type: SET_USER_UPDATE_MODAL_EMAIL,
    data: data,
})
export const setUserCreateModalRoleIds = (data) => ({
    type: SET_USER_CREATE_MODAL_ROLE_IDS,
    data: data,
})
export const setUserCreateModalVisible = (data) => ({
    type: SET_USER_CREATE_MODAL_VISIBLE,
    data: data,
})
export const setUserCreateModalUsername = (data) => ({
    type: SET_USER_CREATE_MODAL_USERNAME,
    data: data,
})
export const setUserCreateModalPassword = (data) => ({
    type: SET_USER_CREATE_MODAL_PASSWORD,
    data: data,
})
export const setUserCreateModalName = (data) => ({
    type: SET_USER_CREATE_MODAL_NAME,
    data: data,
})
export const setUserCreateModalPhone = (data) => ({
    type: SET_USER_CREATE_MODAL_PHONE,
    data: data,
})
export const setUserCreateModalEmail = (data) => ({
    type: SET_USER_CREATE_MODAL_EMAIL,
    data: data,
})
export const setUserList = (data) => ({
    type: SET_USER_LIST,
    dataList: data,
})
export const setUserListFetch = (data) => ({
    type: SET_USER_LIST_FETCH,
    isFetch: data,
})
export const getUserList = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                page_num: state.user.pageNum,
                page_size: state.user.pageSize,
            }),
        }
        return request(apiUserList, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setUserList(data.data.data_list));
                        }
                    }
                )
    }
}
export const createUser = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                username: state.user.createModal.username,
                password: state.user.createModal.password,
                name: state.user.createModal.name,
                phone: state.user.createModal.phone,
                email: state.user.createModal.email,
                role_ids: state.user.createModal.roleIds,
            }),
        }
        return request(apiUserCreate, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setUserCreateModalVisible(false));
                            dispatch(getUserList());
                        }
                    }
                )
    }
}
export const updateUser = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                id: state.user.updateModal.id,
                password: state.user.updateModal.password,
                name: state.user.updateModal.name,
                phone: state.user.updateModal.phone,
                email: state.user.updateModal.email,
                role_ids: state.user.updateModal.roleIds,
            }),
        }
        return request(apiUserUpdate, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setUserUpdateModalVisible(false));
                            dispatch(getUserList());
                        }
                    }
                )
    }
}
export const deleteUser = (id) => {
    return (dispatch, getState) => {
        const option = {
            method: 'POST',
            body: JSON.stringify({
                id: id,
            }),
        }
        return request(apiUserDelete, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(getUserList());
                        }
                    }
                )
    }
}