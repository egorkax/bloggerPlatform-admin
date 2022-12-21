import axios from "axios";

const instance = axios.create({
    // @ts-ignore
    // proxy: "https://api.codetabs.com/v1/proxy?quest=https://video-bloggers.vercel.app/",
    // baseURL: 'https://video-bloggers.vercel.app/',
    baseURL: "https://api.codetabs.com/v1/proxy?quest=https://blogger-platform.vercel.app/",
})
//


export const blogsAPI = {
    getBlogs(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<ResponseType<BlogType[]>>(`blogs?pageNumber=${currentPage}&pageSize=${pageSize}`)
    },
    getBlog(blogId: string) {
        return instance.get<BlogType>(`blogs/${blogId}`)
    },
    getBlogPosts(blogId: string) {
        return instance.get<ResponseType<PostType[]>>(`blogs/${blogId}/posts`)
    },

}
export const postsAPI = {
    getPosts(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`posts?pageNumber=${currentPage}&pageSize=${pageSize}`)
    },
    getPost(postId: string) {
        return instance.get<PostType>(`posts/${postId}`)
    }
}
export type ResponseType<T> = {
    pagesCount: number
    page: number
    pageSize: number
    totalCount: number
    items: T
}
export type BlogType = {
    id: string
    name: string
    description: string
    websiteUrl: string
    createdAt: string
}
export type PostType = {
    id: string
    title: string
    shortDescription: string
    content: string
    blogId: string
    blogName: string
    createdAt: string
}
