import React, {useEffect} from 'react';
import s from './blogs.module.css'
import {BlogItem} from "../blogItem/BlogItem";
import {fetchBlogs} from "../../../reducers/blogs-reducer";
import {useAppDispatch, useAppSelector} from "../../../reducers/store";
import SearchIcon from './../../../assets/icons/Search.svg'
import {Line} from "../../../common/Line/Line";
import {Button} from "../../../common/Button/Button";
import ButtonArrowIcon from "../../../assets/icons/Button_arrow.svg";

export const Blogs = () => {
    const dispatch = useAppDispatch()
    const blogs = useAppSelector(state => state.blogs.blogs)
    useEffect(() => {

        dispatch(fetchBlogs())
    }, [])

    const blogsMap = blogs.map((e) => {
        return <div>
            <BlogItem key={e.id} id={e.id} title={e.name} desc={e.description}
                      webSite={e.websiteUrl}/>
        </div>
    })
    return (
        <div>
            <h2>Blogs</h2>
            <Line long={true}/>
            <div className={s.blockSearch}>
                <div className={s.blockInput}>
                    <img src={SearchIcon}/>
                    <input className={s.input} placeholder={'Search'}/>
                </div>
                <select className={s.blockSelect}>
                    <option value="1">New blogs first</option>
                    <option value="2">Old blogs first</option>
                    <option value="3">From A to Z</option>
                    <option value="4">From Z to A</option>
                </select>
            </div>
            {blogsMap}
            <Button superClassName={"showButton"}>
                Show more
                <img src={ButtonArrowIcon}/>
            </Button>
        </div>
    );
};

