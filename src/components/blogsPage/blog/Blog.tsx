import React, {useEffect} from 'react';
import s from "./blog.module.css";
import HeaderIcon from '../../../assets/icons/Header.svg'
import {useParams} from "react-router-dom";
import logoIcon from '../../../assets/icons/Ava.svg'
import {fetchBlog} from "../../../reducers/blogs-reducer";
import {useAppDispatch, useAppSelector} from "../../../reducers/store";
import {BlogItem} from "../blogItem/BlogItem";
import {PostItem} from "../../postsPage/postItem/PostItem";
import {Line} from "../../../common/Line/Line";
import {BackTo} from "../../../common/BackTo/BackTo";
import {Button} from "../../../common/Button/Button";

export const Blog = () => {
    const {blogId} = useParams()
    const dispatch = useAppDispatch()
    const blog = useAppSelector(state => state.blogs.blog)
    const posts = useAppSelector(state => state.posts.posts)
    useEffect(() => {
        dispatch(fetchBlog(blogId!))
    }, [])
    const postsMap = posts.map(e => <PostItem key={e.id} descPost={e.shortDescription} postID={e.id} postTitle={e.title}
                                              creatDate={e.createdAt}/>)
    return (
        <div>
            <div className={s.header}>
                <h2>Blogs</h2>
                <img src={HeaderIcon} className={s.icon}/>
                <span className={s.blogName}>{blog.name}</span>
            </div>
            <Line long={true}/>
            <BackTo title={"blogs"}/>
            <div className={s.blockLogo}>
                <img src={logoIcon} className={s.logo}/>
            </div>

            <BlogItem title={blog.name} desc={blog.description} open={true} webSite={blog.websiteUrl}
                      createdAt={blog.createdAt}/>
            <div className={s.blogPosts}>
                {postsMap}
            </div>
            <Button/>
        </div>
    );
};

