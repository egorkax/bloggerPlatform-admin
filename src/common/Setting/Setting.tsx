import React, {useState} from 'react';
import s from './setting.module.css'
import SettingIcon from "../../assets/icons/SettingBlog.svg";
import DeleteIcon from '../../assets/icons/Delete.svg'
import EditIcon from '../../assets/icons/Edit.svg'
import {useNavigate} from "react-router-dom";


type SettingPropsType = {
    openDeleteModal: () => void
    blogId?: string
    blogName?: string
    blogWebSite?: string
    blogDesc?: string
    postDesc?: string
    postId?: string
}
export const Setting = (props: SettingPropsType) => {
    const [showSettings, setShowSettings] = useState(false);
    const navigate = useNavigate()
    const showSettingsHandler = (): void => {
        setShowSettings(!showSettings);
    };
    return (
        <div className={s.blockSetting}>
            <img src={SettingIcon} onClick={showSettingsHandler}/>
            {showSettings && <div className={s.blockMenu}>
                <div className={s.blockItem} onClick={props.openDeleteModal}>
                    <img src={DeleteIcon}/>
                    <span className={s.title}>Delete</span>
                </div>
                <div className={s.blockItem}>
                    <img src={EditIcon}/>
                    <span className={s.title}>Edit</span>
                </div>
            </div>}

        </div>
    );
};

