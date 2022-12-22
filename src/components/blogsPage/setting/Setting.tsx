import React, {useState} from 'react';
import s from './setting.module.css'
import SettingIcon from "../../../assets/icons/SettingBlog.svg";
import DeleteIcon from './../../../assets/icons/Delete.svg'
import EditIcon from './../../../assets/icons/Edit.svg'


type SettingPropsType = {
    openDeleteModal: () => void
}
export const Setting = (props: SettingPropsType) => {
    const [showSettings, setShowSettings] = useState(false);
    const showSettingsHandler = (): void => {
        setShowSettings(!showSettings);
    };
    return (
        <div className={s.blockSetting}>
            <img  src={SettingIcon} onClick={showSettingsHandler}/>
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

