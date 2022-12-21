import {AnyAction, applyMiddleware, combineReducers, compose, createStore, legacy_createStore} from 'redux';
import thunk, {ThunkDispatch} from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import {all} from 'redux-saga/effects'
import {blogsReducer, blogsSagaWatcher} from "./blogs-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {postsReducer, postsSagaWatcher} from "./posts-reducer";


const rootReducer = combineReducers({
    blogs: blogsReducer,
    posts: postsReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const sagaMiddleware = createSagaMiddleware()

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));

export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType, void, AnyAction>>()


sagaMiddleware.run(rootWatcher)

function* rootWatcher() {
    yield all([blogsSagaWatcher(), postsSagaWatcher(),])
}

// @ts-ignore
window.store = store;
