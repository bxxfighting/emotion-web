import {
    SET_STORE_DISPATCH,
} from '../../constants/action';


export const setStoreDispatch = (dispatch) => ({
    type: SET_STORE_DISPATCH,
    dispatch: dispatch,
})