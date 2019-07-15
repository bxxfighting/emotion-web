import {
    SET_ROUTER_HISTORY,
} from '../../constants/action';


export const setRouterHistory = (history) => ({
    type: SET_ROUTER_HISTORY,
    history: history,
})