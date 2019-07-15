import {
    INIT_MENU,
    SET_MENU_LIST,
    SET_MENU_SELECTED_KEY,
    SET_MENU_LIST_FETCH,
} from '../../constants/action';

const initState = {
    dataList: [
    ],
    isFetch: true,
    selectedKey: '',
}

const reducers = (state = initState, action) => {
    switch(action.type) {
        case INIT_MENU:
            return Object.assign({}, initState, {
            })
        case SET_MENU_LIST:
            return Object.assign({}, state, {
                dataList: action.dataList,
            })
        case SET_MENU_LIST_FETCH:
            return Object.assign({}, state, {
                isFetch: action.isFetch,
            })
        case SET_MENU_SELECTED_KEY:
            return Object.assign({}, state, {
                selectedKey: action.selectedKey,
            })
        default:
            return state;
    }
}

export default reducers;