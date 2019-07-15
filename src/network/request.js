import { host } from './config';
import { apiLogin } from './api';

export default async function request(url, option, dispatch, getState) {
    const state = getState();
    let headers = {
        'Content-Type': 'application/json',
    }
    if (url !== apiLogin) {
        const token = localStorage.getItem('token');
        if (token === null || token === "") {
            localStorage.removeItem('token');
            localStorage.removeItem('isLogin');
            state.router.history.replace('/login')
            window.location.reload()
            return{errno: 10000};
        }
        headers['token'] = token;
    }
    let options = {
        headers: headers,
        mode: 'cors',
        ...option,
    };

    url = host + url;
    return fetch(url, options)
                .then(resp=>{
                    return resp.json();
                })
                .then(
                    json => {
                        if (json.errno !== 0) {
                            if (json.errno === 10005 || json.errno === 10004) {
                                localStorage.removeItem('token');
                                localStorage.removeItem('isLogin');
                                state.router.history.replace('/login')
                                window.location.reload()
                            } else {
                                alert(json.errmsg);
                            }
                        }
                        return json;
                    }
                )
                .catch( e => {
                    alert('服务器异常');
                    return {errno: 10000}
                })
}