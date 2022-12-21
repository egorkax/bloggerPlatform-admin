import React from 'react';
import s from './blogItem.module.css'
import AvaIcon from '../../../assets/icons/Ava.svg'
import {NavLink} from "react-router-dom";
import {Line} from "../../../common/Line/Line";

type PropsType = {
    id?: string
    title: string
    desc: string
    webSite: string
    createdAt?: string
    open?: boolean

}

export const BlogItem = (props: PropsType) => {
    const imgClassName = props.open ? s.blockImgOpen : s.blockImg
    return (
        <div className={s.blockBlog}>
            <div className={s.blog}>
                <div className={imgClassName}>
                    <img src={AvaIcon}/>
                </div>

                <div className={s.blockInfo}>
                    <div>
                        {props.open ?
                            <>
                                <p className={s.titleBlog}>{props.title}</p>
                                <p className={s.createDate}>Blog creation date:<span>{props.createdAt}</span></p>
                            </>
                            : <NavLink to={`/blog/${props.id}`} className={s.link}>
                                <p className={s.titleBlog}>{props.title}</p>
                            </NavLink>
                        }


                        <p className={s.website}>Website:<a className={s.linkSite}
                                                            href={props.webSite}>{props.webSite}</a>
                        </p>
                    </div>
                    <p className={s.description}>
                        {props.desc}
                    </p>
                </div>
            </div>
            <Line/>
        </div>
    );
};
