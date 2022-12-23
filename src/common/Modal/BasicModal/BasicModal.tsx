import React, {ReactNode, useEffect} from "react";
import s from './basicModal.module.css'
import CloseSvgIcon from "../../../assets/icons/Close.svg";

type ModalWindowPropsType = {
    header: string
    isOpen: boolean
    closeWindow: () => void
    children: ReactNode
}

export const BasicModal = (props: ModalWindowPropsType) => {

    const {
        header,
        isOpen,
        closeWindow,
        children,
    } = props

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        }
        return (() => {
            document.body.style.overflow = 'auto'
        })
    }, [props.isOpen])

    const wrapperClassName = `${s.wrapper} ${isOpen ? s.open : ''}`

    return (
        <div className={wrapperClassName}>
            <div className={s.modal}>
                <div className={s.header}>
                    <h2>Delete a {header}</h2>
                    <button onClick={closeWindow} className={s.closeButton}><img src={CloseSvgIcon}/></button>
                </div>
                <div className={s.container}>
                    {children}
                </div>
            </div>
        </div>
    )
}


