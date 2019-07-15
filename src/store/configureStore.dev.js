import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


const configureStore = preloadedState => {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        )
    );
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer);
        });
    }
    return store;
}

export default configureStore;
