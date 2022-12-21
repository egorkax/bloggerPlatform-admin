import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './button.module.css'
import ButtonArrowIcon from "../../assets/icons/Button_arrow.svg";


// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type superClassNameType = 'showButton' | 'editButton' | 'whiteButton'

type SuperButtonPropsType = DefaultButtonPropsType & {
    superClassName?: superClassNameType
    isLoading?: boolean
}

export const Button: React.FC<SuperButtonPropsType> = (
    {
        superClassName, className,
        style,
        isLoading,
        children,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    const finalClassName = `${s.button} ${superClassName ? s[superClassName] : ''} ${className}`


    return (

        <button
            className={finalClassName}
            style={{...style}}
            {...restProps}>
            <span>{children}</span>
        </button>
    )
}

