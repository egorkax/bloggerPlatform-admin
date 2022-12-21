import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./backTo.module.css";
import BackIcon from "../../assets/icons/Back.svg";

type BackToPropType = {
    title: string
}
export const BackTo = (props: BackToPropType) => {
    return (
        <div>
            <NavLink to={`/${props.title}`} className={s.backLink}>
                <img src={BackIcon}/>
                <span className={s.titleLink}>Back to {props.title}</span> </NavLink>
        </div>
    );
};

