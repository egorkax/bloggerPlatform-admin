import React, {useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import s from './navbar.module.css'
import {PostsIcon} from "../../assets/icons/Posts";
import {BlogsIcon} from "../../assets/icons/Blogs";

export const Navbar = () => {
    const [activeLink, setActiveLink] = useState<'blogs' | 'posts'>()

    const setActiveBlogsLinkHandler = () => {
        setActiveLink('blogs')
    }
    const setActivePostsLinkHandler = () => {
        setActiveLink('posts')
    }
    const className = (navData: { isActive: boolean, isPending: boolean }) => (navData.isActive ? `${s.item} ${s.active}` : s.item)

    return (
        <nav className={s.blockNav}>
            <div className={s.blockItemNav}>
                <NavLink to={'/blogs'} onClick={setActiveBlogsLinkHandler}
                         className={activeLink === 'blogs' ? `${s.item} ${s.active}` : s.item}>
                    <BlogsIcon className={s.icon} fill={activeLink === 'blogs' ? '#F8346B' : '#1A1718'}/>
                    Blogs
                </NavLink>
                <div className={activeLink === 'blogs' ? s.line : ''}/>
            </div>
            <div className={s.blockItemNav}>
                <NavLink to={'/posts'} onClick={setActivePostsLinkHandler}
                         className={activeLink === 'posts' ? `${s.item} ${s.active}` : s.item}>
                    <PostsIcon className={s.icon} fill={activeLink === 'posts' ? '#F8346B' : '#1A1718'}/>
                    Posts
                </NavLink>
                <div className={activeLink === 'posts' ? s.line : ''}/>
            </div>
        </nav>
    );
};

