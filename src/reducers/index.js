import { combineReducers } from 'redux';

import Login from './Login';
import Store from './Store';
import Menu from './Menu';
import Router from './Router';
import Mod from './Mod';
import User from './User';
import Role from './Role';
import Url from './Url';
import TitleBar from './TitleBar';
import Comment from './Comment';
import Stopword from './Stopword';

const reducers = combineReducers(
    {
        login: Login,
        store: Store,
        menu: Menu,
        router: Router,
        mod: Mod,
        user: User,
        role: Role,
        url: Url,
        titleBar: TitleBar,
        comment: Comment,
        stopword: Stopword,
    },
)

export default reducers;