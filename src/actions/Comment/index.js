import request from '../../network/request';
import { 
    apiCommentList,
    apiCommentUpdate,
    apiCommentCheck,
} from '../../network/api';
import {
    SET_COMMENT_LIST,
    SET_COMMENT_LIST_FETCH,
    SET_COMMENT_PAGE_NUM,
    SET_COMMENT_PAGE_SIZE,
    SET_COMMENT_TOTAL,
    SET_COMMENT_FILTER_KEYWORD,
    SET_COMMENT_FILTER_LABEL,
    SET_COMMENT_FILTER_STATUS,
} from '../../constants/action';


export const setCommentFilterStatus = (data) => ({
    type: SET_COMMENT_FILTER_STATUS,
    data: data,
})
export const setCommentFilterLabel = (data) => ({
    type: SET_COMMENT_FILTER_LABEL,
    data: data,
})
export const setCommentFilterKeyword = (data) => ({
    type: SET_COMMENT_FILTER_KEYWORD,
    data: data,
})
export const setCommentTotal = (data) => ({
    type: SET_COMMENT_TOTAL,
    data: data,
})
export const setCommentPageSize = (data) => ({
    type: SET_COMMENT_PAGE_SIZE,
    data: data,
})
export const setCommentPageNum = (data) => ({
    type: SET_COMMENT_PAGE_NUM,
    data: data,
})
export const setCommentList = (data) => ({
    type: SET_COMMENT_LIST,
    data: data,
})
export const setCommentListFetch = (data) => ({
    type: SET_COMMENT_LIST_FETCH,
    data: data,
})
export const getCommentList = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                page_num: state.comment.pageNum,
                page_size: state.comment.pageSize,
                status: state.comment.filter.status,
                label: state.comment.filter.label,
                keyword: state.comment.filter.keyword,
            }),
        }
        return request(apiCommentList, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setCommentList(data.data.data_list));
                            dispatch(setCommentTotal(data.data.total));
                        }
                    }
                )
    }
}
export const updateComment = (id, label) => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                label: label,
            }),
        }
        return request(apiCommentUpdate, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(getCommentList());
                        }
                    }
                )
    }
}
export const checkComment = (id) => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                id: id,
            }),
        }
        return request(apiCommentCheck, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(getCommentList());
                        }
                    }
                )
    }
}