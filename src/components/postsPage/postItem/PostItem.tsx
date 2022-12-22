import React, {useState} from 'react';
import s from './postItem.module.css'
import AvaIcon from '../../../assets/icons/Ava.svg'
import {NavLink} from "react-router-dom";
import {Setting} from "../../../common/Setting/Setting";
import {DeletePackModal} from "../../../common/Modal/DeleteModal/DeleteModal";

export type PostItemType = {
    postTitle: string
    creatDate: string
    postID: string
    descPost?: string
    blogName?: string

}
export const PostItem = (props: PostItemType) => {
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
    return (
        <div className={s.blockPostItem}>
            <div className={s.blockImg}>
                <img src={AvaIcon}/>
            </div>
            <div className={s.blockDescPost}>
                {props.blogName &&
                    <div className={s.blogLogo}>
                        <img src={AvaIcon}/>
                    </div>}
                <div className={props.blogName ? s.postDescMargin : ''}>
                    <NavLink to={`/post/${props.postID}`} className={s.link}>
                        <p className={s.titlePost}>{props.postTitle}</p>
                    </NavLink>
                    {props.blogName
                        ? <p>{props.blogName}</p>
                        : <p className={s.descPost}>{props.descPost} </p>}

                    <p className={s.datePost}>{props.creatDate}</p>
                </div>
                <div className={s.blockSetting}>
                    <Setting openDeleteModal={() => setOpenDeleteModal(true)}/>
                </div>
            </div>
            <DeletePackModal isOpen={openDeleteModal} closeModalWindow={() => setOpenDeleteModal(false)}
                             header={"post"}/>
        </div>
    );
};

