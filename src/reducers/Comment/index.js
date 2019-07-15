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

const initLabelList = [
    {
        'id': 0,
        'name': '全部',
    },
    {
        'id': 10,
        'name': '正面评论',
    },
    {
        'id': 20,
        'name': '负面评论',
    },
]
const initStatusList = [
    {
        'id': 0,
        'name': '全部',
    },
    {
        'id': 10,
        'name': '未校验',
    },
    {
        'id': 20,
        'name': '已校验',
    },
]

const initFilter = {
    keyword: '',
    label: 0,
    status: 0,
}

const initState = {
    dataList: [],
    labelList: initLabelList,
    statusList: initStatusList,
    isFetch: true,
    filter: initFilter,
    pageNum: 1,
    pageSize: 20,
    total: 0,
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case SET_COMMENT_FILTER_STATUS:
            return Object.assign({}, state, {
                filter: {
                    ...state.filter,
                    status: action.data,
                }
            })
        case SET_COMMENT_FILTER_LABEL:
            return Object.assign({}, state, {
                filter: {
                    ...state.filter,
                    label: action.data,
                }
            })
        case SET_COMMENT_FILTER_KEYWORD:
            return Object.assign({}, state, {
                filter: {
                    ...state.filter,
                    keyword: action.data,
                }
            })
        case SET_COMMENT_PAGE_NUM:
            return Object.assign({}, state, {
                pageNum: action.data,
            })
        case SET_COMMENT_PAGE_SIZE:
            return Object.assign({}, state, {
                pageSize: action.data,
            })
        case SET_COMMENT_TOTAL:
            return Object.assign({}, state, {
                total: action.data,
            })
        case SET_COMMENT_LIST:
            return Object.assign({}, state, {
                dataList: action.data,
            })
        case SET_COMMENT_LIST_FETCH:
            return Object.assign({}, state, {
                isFetch: action.data,
            })
        default:
            return state;
    }
}

export default reducer;