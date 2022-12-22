import React, {useState} from 'react';
import s from './blogItem.module.css'
import AvaIcon from '../../../assets/icons/Ava.svg'
import {NavLink} from "react-router-dom";
import {Line} from "../../../common/Line/Line";
import {Setting} from "../../../common/Setting/Setting";
import {DeletePackModal} from "../../../common/Modal/DeleteModal/DeleteModal";

type PropsType = {
    id?: string
    title: string
    desc: string
    webSite: string
    createdAt?: string
    open?: boolean

}

export const BlogItem = (props: PropsType) => {
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)

    const blockImgClassName = props.open ? `${s.blockImg} ${s.blockImgOpen}` : s.blockImg
    return (
        <div className={s.blockBlog}>
            <div className={s.blogItem}>
                <div className={blockImgClassName}>
                    <img src={AvaIcon}/>
                </div>
                <div className={s.blockInfo}>
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
                    <p className={s.description}>
                        {props.desc}
                    </p>
                </div>
                <Setting openDeleteModal={() => setOpenDeleteModal(true)} blogId={props.id}/>
            </div>
            <Line/>
            <DeletePackModal header={'blog'} isOpen={openDeleteModal}
                             closeModalWindow={() => setOpenDeleteModal(false)}/>
        </div>
    );
};
