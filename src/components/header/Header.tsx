import React from 'react';
import s from'./header.module.css'

export const Header = () => {
    return (
        <header className={s.blockHeader}>
            <h1 className={s.header}>
                Blogger Platform
                <span className={s.adminTitle}>SuperAdmin</span>
            </h1>
        </header>
    );
};
