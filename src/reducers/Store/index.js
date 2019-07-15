import {
    SET_STORE_DISPATCH,
} from '../../constants/action';

const initState = {
    dispatch: null, 
}

const reducers = (state = initState, action) => {
    switch(action.type) {
        case SET_STORE_DISPATCH:
            return Object.assign({}, state, {
                dispatch: action.dispatch,
            })
        default:
            return state;
    }
}

export default reducers;