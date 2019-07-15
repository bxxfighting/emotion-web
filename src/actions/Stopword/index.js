import request from '../../network/request';
import { 
    apiStopwordList,
    apiStopwordUpdate,
    apiStopwordCreate,
    apiStopwordDelete,
} from '../../network/api';
import {
    SET_STOPWORD_LIST,
    SET_STOPWORD_LIST_FETCH,
    SET_STOPWORD_PAGE_NUM,
    SET_STOPWORD_PAGE_SIZE,
    SET_STOPWORD_TOTAL,
    SET_STOPWORD_FILTER_KEYWORD,
    SET_STOPWORD_FILTER_STATUS,
    SET_STOPWORD_CREATE_MODAL_WORD,
    SET_STOPWORD_CREATE_MODAL_VISIBLE,
} from '../../constants/action';


export const setStopwordCreateModalVisible = (data) => ({
    type: SET_STOPWORD_CREATE_MODAL_VISIBLE,
    data: data,
})
export const setStopwordCreateModalWord = (data) => ({
    type: SET_STOPWORD_CREATE_MODAL_WORD,
    data: data,
})
export const setStopwordFilterStatus = (data) => ({
    type: SET_STOPWORD_FILTER_STATUS,
    data: data,
})
export const setStopwordFilterKeyword = (data) => ({
    type: SET_STOPWORD_FILTER_KEYWORD,
    data: data,
})
export const setStopwordTotal = (data) => ({
    type: SET_STOPWORD_TOTAL,
    data: data,
})
export const setStopwordPageSize = (data) => ({
    type: SET_STOPWORD_PAGE_SIZE,
    data: data,
})
export const setStopwordPageNum = (data) => ({
    type: SET_STOPWORD_PAGE_NUM,
    data: data,
})
export const setStopwordList = (data) => ({
    type: SET_STOPWORD_LIST,
    data: data,
})
export const setStopwordListFetch = (data) => ({
    type: SET_STOPWORD_LIST_FETCH,
    data: data,
})
export const getStopwordList = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                page_num: state.stopword.pageNum,
                page_size: state.stopword.pageSize,
                status: state.stopword.filter.status,
                keyword: state.stopword.filter.keyword,
            }),
        }
        return request(apiStopwordList, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setStopwordList(data.data.data_list));
                            dispatch(setStopwordTotal(data.data.total));
                        }
                    }
                )
    }
}
export const createStopword = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                word: state.stopword.createModal.word,
            }),
        }
        return request(apiStopwordCreate, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setStopwordCreateModalVisible(false))
                            dispatch(getStopwordList());
                        }
                    }
                )
    }
}
export const updateStopword = (id, status) => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                status: status,
            }),
        }
        return request(apiStopwordUpdate, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(getStopwordList());
                        }
                    }
                )
    }
}
export const deleteStopword = (id) => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                id: id,
            }),
        }
        return request(apiStopwordDelete, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(getStopwordList());
                        }
                    }
                )
    }
}