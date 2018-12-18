import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension' // devtools
import rootReducers from './../reducers'

// middlewares
const middlewares = [
    thunkMiddleware,
    createLogger(),
    
];

export default function confingStoreg() {
    const store = createStore(rootReducers, composeWithDevTools( // dev tools
        applyMiddleware(...middlewares)
    ));
    return store;
}
