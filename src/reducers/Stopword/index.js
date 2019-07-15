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

const initStatusList = [
    {
        'id': 0,
        'name': '全部',
    },
    {
        'id': 10,
        'name': '启用',
    },
    {
        'id': 20,
        'name': '禁用',
    },
]
const initFilter = {
    status: 0,
    keyword: '',
}
const initCreateModal = {
    word: '',
    visible: false,
}
const initState = {
    dataList: [],
    statusList: initStatusList,
    filter: initFilter,
    createModal: initCreateModal,
    isFetch: true,
    pageNum: 1,
    pageSize: 20,
    total: 0,
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case SET_STOPWORD_CREATE_MODAL_VISIBLE:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    visible: action.data
                }
            })
        case SET_STOPWORD_CREATE_MODAL_WORD:
            return Object.assign({}, state, {
                createModal: {
                    ...state.createModal,
                    word: action.data
                }
            })
        case SET_STOPWORD_FILTER_STATUS:
            return Object.assign({}, state, {
                filter: {
                    ...state.filter,
                    status: action.data
                }
            })
        case SET_STOPWORD_FILTER_KEYWORD:
            return Object.assign({}, state, {
                filter: {
                    ...state.filter,
                    keyword: action.data
                }
            })
        case SET_STOPWORD_PAGE_NUM:
            return Object.assign({}, state, {
                pageNum: action.data,
            })
        case SET_STOPWORD_PAGE_SIZE:
            return Object.assign({}, state, {
                pageSize: action.data,
            })
        case SET_STOPWORD_TOTAL:
            return Object.assign({}, state, {
                total: action.data,
            })
        case SET_STOPWORD_LIST:
            return Object.assign({}, state, {
                dataList: action.data,
            })
        case SET_STOPWORD_LIST_FETCH:
            return Object.assign({}, state, {
                isFetch: action.data,
            })
        default:
            return state;
    }
}

export default reducer;