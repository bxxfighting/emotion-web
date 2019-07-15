import request from '../../network/request';
import { 
    apiUserModList,
} from '../../network/api';
import {
    INIT_MENU,
    SET_MENU_LIST,
    SET_MENU_LIST_FETCH,
    SET_MENU_SELECTED_KEY,
} from '../../constants/action';


export const initMenu = () => ({
    type: INIT_MENU,
})

export const setMenuList = (dataList) => ({
    type: SET_MENU_LIST,
    dataList: dataList,
})

export const setMenuListFetch = (isFetch) => ({
    type: SET_MENU_LIST_FETCH,
    isFetch: isFetch,
})

export const setMenuSelectedKey = (selectedKey) => ({
    type: SET_MENU_SELECTED_KEY,
    selectedKey: selectedKey,
})

export const getUserModList = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
            }),
        }
        return request(apiUserModList, option, dispatch, getState)
                .then(
                    data => {
                        if (data.errno === 0) {
                            dispatch(setMenuList(data.data));
                            // 如果导航有内容就跳转到第一个导航栏
                            if (data.data.length > 0) {
                                dispatch(setMenuSelectedKey(data.data[0].sign))
                                const url = '/' + data.data[0].sign;
                                state.router.history.push({pathname: url});
                            }
                        }
                    }
                )
    }
}