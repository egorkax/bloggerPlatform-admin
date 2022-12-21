import React from 'react';
import s from './app.module.css';
import {Header} from "../components/header/Header";
import {Navbar} from "../components/navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Blogs} from "../components/blogsPage/blogs/Blogs";
import {Posts} from "../components/postsPage/posts/Posts";
import {Blog} from "../components/blogsPage/blog/Blog";
import {Post} from "../components/postsPage/post/Post";

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <div className={s.contentInfo}>
                <Navbar/>
                <div className={s.content}>
                    <Routes>
                        <Route path={'/blogs'} element={<Blogs/>}/>
                        <Route path={'/blog/:blogId'} element={<Blog/>}/>
                        <Route path={'/posts'} element={<Posts/>}/>
                        <Route path={'/post/:postId'} element={<Post/>}/>

                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
