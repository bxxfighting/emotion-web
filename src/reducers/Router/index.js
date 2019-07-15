import {
    SET_ROUTER_HISTORY,
} from '../../constants/action';

const initState = {
    history: null, 

}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case SET_ROUTER_HISTORY:
            return Object.assign({}, state, {
                history: action.history,
            })
        default:
            return state;
    }
}

export default reducer