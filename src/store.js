import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'
const initislState = {};
const middleware = [thunk];
// () => []  是 reducer
// {} 是 initislState 
export const store = createStore(
    rootReducer,
    initislState,
    compose(//放入所有的中间键
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
