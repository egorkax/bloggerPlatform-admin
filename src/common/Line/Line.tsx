import React from 'react';
import s from './line.module.css'

type LinePropsType = {
    long?: boolean
}
export const Line = (props: LinePropsType) => {
    const classNameLine = props.long ? s.lineLong : s.line
    return (
        <div className={classNameLine}/>
    );
};

