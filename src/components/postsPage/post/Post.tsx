import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../reducers/store";
import s from "./post.module.css";
import HeaderIcon from "../../../assets/icons/Header.svg";
import BackIcon from "../../../assets/icons/Back.svg";
import logoIcon from "../../../assets/icons/Ava.svg";
import {fetchPost} from "../../../reducers/posts-reducer";
import AvaIcon from "../../../assets/icons/Ava.svg";
import {Line} from "../../../common/Line/Line";
import {BackTo} from "../../../common/BackTo/BackTo";

export const Post = () => {
    const {postId} = useParams()
    const dispatch = useAppDispatch()
    const post = useAppSelector(state => state.posts.post)
    useEffect(() => {
        dispatch(fetchPost(postId!))
    }, [])
    return (
        <div>
            <div className={s.header}>
                <h2>Posts</h2>
                <img src={HeaderIcon} className={s.icon}/>
                <span className={s.blogNameHeader}>{post.blogName}</span>
            </div>
            <Line long={true}/>
            <BackTo title={"posts"}/>
            <div className={s.blockTitleBlog}>
                <img src={logoIcon}/>
                <span className={s.blogName}>{post.blogName}</span>
            </div>
            <span className={s.titlePost}>{post.title}</span>
            <span className={s.createPostDate}>{post.createdAt}</span>
            <div className={s.blogLogo}>
                <img src={AvaIcon} className={s.logo}/>
            </div>
            <div className={s.blockPostContent}>
                <p>{post.content}</p>
            </div>
        </div>
    );
};

