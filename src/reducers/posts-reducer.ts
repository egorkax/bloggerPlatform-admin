import {postsAPI, PostType} from "../api/api";
import {call, put, takeEvery} from "redux-saga/effects";


const initialState: InitialStateType = {
    posts: [],
    post: {
        id: '',
        title: '',
        shortDescription: '',
        content: '',
        blogId: '',
        blogName: '',
        createdAt: ''
    }
}
//Reducer
export const postsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-POSTS":
            return {...state, posts: action.posts}
        case "SET-POST":
            return {...state, post: action.post}
        default:
            return state;
    }
}
//AC
export const setPostsAC = (posts: PostType[]) =>
    ({type: "SET-POSTS", posts} as const)

export const setPostAC = (post: PostType) =>
    ({type: "SET-POST", post} as const)

//saga
export function* fetchPostsWorkerSaga(): any {
    const res = yield call(postsAPI.getPosts)
    yield put(setPostsAC(res.data.items))
}

export const fetchPosts = () => ({type: 'POSTS/FETCH-POSTS'})

export function* fetchPostWorkerSaga(action: ReturnType<typeof fetchPost>): any {
    const res = yield call(postsAPI.getPost, action.postId)
    yield put(setPostAC(res.data))
    debugger
}

export const fetchPost = (postId: string) => ({type: 'POSTS/FETCH-POST', postId})


export function* postsSagaWatcher() {
    yield takeEvery('POSTS/FETCH-POSTS', fetchPostsWorkerSaga)
    yield takeEvery('POSTS/FETCH-POST', fetchPostWorkerSaga)

}

// types
type InitialStateType = {
    posts: PostType[]
    post: PostType
}
type ActionsType =
    | ReturnType<typeof setPostsAC>
    | ReturnType<typeof setPostAC>


