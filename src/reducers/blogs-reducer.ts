import {blogsAPI, BlogType, PostType} from "../api/api";
import {call, put, takeEvery} from "redux-saga/effects";
import {setPostsAC} from "./posts-reducer";


const initialState: InitialStateType = {
    blogs: [],
    blog: {
        id: '',
        websiteUrl: '',
        description: '',
        name: '',
        createdAt: ''
    },
}
//Reducer
export const blogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-BLOGS":
            return {...state, blogs: action.blogs}
        case "SET-BLOG":
            return {...state, blog: action.blog}
        default:
            return state;
    }
}
//AC
export const setBlogsAC = (blogs: BlogType[]) =>
    ({type: "SET-BLOGS", blogs} as const)
export const setBlogAC = (blog: BlogType) =>
    ({type: "SET-BLOG", blog} as const)

//saga
export function* fetchBlogsWorkerSaga(): any {
    const res = yield call(blogsAPI.getBlogs)
    yield put(setBlogsAC(res.data.items))
    debugger
}

export const fetchBlogs = () => ({type: 'BLOGS/FETCH-BLOGS'})

export function* fetchBlogWorkerSaga(action: ReturnType<typeof fetchBlog>): any {
    const resBlog = yield call(blogsAPI.getBlog, action.blogId)
    yield put(setBlogAC(resBlog.data))
    const res = yield call(blogsAPI.getBlogPosts, action.blogId)
    yield put(setPostsAC(res.data.items))
}

export const fetchBlog = (blogId: string) => ({type: 'BLOGS/FETCH-BLOG', blogId})


export function* blogsSagaWatcher() {
    yield takeEvery('BLOGS/FETCH-BLOGS', fetchBlogsWorkerSaga)
    yield takeEvery('BLOGS/FETCH-BLOG', fetchBlogWorkerSaga)

}

// types
type InitialStateType = {
    blogs: BlogType[]
    blog: BlogType
}
type ActionsType =
    | ReturnType<typeof setBlogsAC>
    | ReturnType<typeof setBlogAC>
