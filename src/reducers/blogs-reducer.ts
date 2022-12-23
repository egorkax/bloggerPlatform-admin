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
        case "ADD-BLOG":
            return {...state, blogs: [action.blog, ...state.blogs]}
        default:
            return state;
    }
}
//AC
export const setBlogsAC = (blogs: BlogType[]) =>
    ({type: "SET-BLOGS", blogs} as const)
export const setBlogAC = (blog: BlogType) =>
    ({type: "SET-BLOG", blog} as const)
export const addBlogAC = (blog: BlogType) =>
    ({type: "ADD-BLOG", blog} as const)

//saga
export function* fetchBlogsWorkerSaga(): any {
    const res = yield call(blogsAPI.getBlogs)
    yield put(setBlogsAC(res.data.items))
}

export const fetchBlogs = () => ({type: 'BLOGS/FETCH-BLOGS'})

export function* fetchBlogWorkerSaga(action: ReturnType<typeof fetchBlog>): any {
    console.log(13131)
    const resBlog = yield call(blogsAPI.getBlog, action.blogId)
    yield put(setBlogAC(resBlog.data))
    const res = yield call(blogsAPI.getBlogPosts, action.blogId)
    yield put(setPostsAC(res.data.items))
}

export const fetchBlog = (blogId: string) => ({type: 'BLOGS/FETCH-BLOG', blogId})

export function* createBlogWorkerSaga(action: ReturnType<typeof createBlog>): any {

    const res = yield call(blogsAPI.createBlog, action.payload)
    console.log(res)
    yield put(addBlogAC(res.data))
}

export const createBlog = (payload: { name: string, description: string, websiteUrl: string }) => ({
    type: 'BLOGS/CREATE-BLOG',
    payload
})


export function* blogsSagaWatcher() {
    yield takeEvery('BLOGS/FETCH-BLOGS', fetchBlogsWorkerSaga)
    yield takeEvery('BLOGS/FETCH-BLOG', fetchBlogWorkerSaga)
    yield takeEvery('BLOGS/CREATE-BLOG', createBlogWorkerSaga)

}

// types
type InitialStateType = {
    blogs: BlogType[]
    blog: BlogType
}
type ActionsType =
    | ReturnType<typeof setBlogsAC>
    | ReturnType<typeof setBlogAC>
    | ReturnType<typeof addBlogAC>
