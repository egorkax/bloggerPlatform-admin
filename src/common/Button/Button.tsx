import React from 'react'
import ButtonArrowIcon from "../../assets/icons/Button_arrow.svg";
import s from './button.module.css'


export const Button = () => {


    return (
        <div className={s.blockButton}>
            <button className={s.button}>
                Show more
                <img src={ButtonArrowIcon}/>
            </button>
        </div>
    )
}

