import {useAppDispatch} from "../../../reducers/store";
import s from './deleteModal.module.css';
import {Button} from "../../Button/Button";
import {NavLink} from "react-router-dom";
import React, {useEffect} from "react";
import {BasicModal} from "../BasicModal/BasicModal";

type DeletePackModalPropsType = {
    isOpen: boolean
    closeModalWindow: () => void
    header: string
}

export const DeletePackModal = (props: DeletePackModalPropsType) => {
    const {
        isOpen,
        closeModalWindow,
        header
    } = props
    const dispatch = useAppDispatch()

    const link = header === 'blog' ? 'blogs' : 'posts'

    const closeWindow = () => {
        closeModalWindow()
    }

    const removeItem = () => {
        // dispatch(deletePack())
        closeWindow()
    }

    return (
        <BasicModal header={header} isOpen={isOpen} closeWindow={closeWindow}>
            <div className={s.blockContent}>
                <p className={s.title}>Are you sure you want to delete this {header}?</p>
                <div className={s.blockButton}>
                    <Button superClassName='editButton' onClick={closeWindow}>No</Button>
                    <NavLink to={`/${link}`}>
                        <Button superClassName='whiteButton' onClick={removeItem}>Yes</Button>
                    </NavLink>
                </div>
            </div>

        </BasicModal>
    )
}