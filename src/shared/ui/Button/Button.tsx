import {classNames} from "shared/lib/classNames";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";



export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

const Button:FC<ButtonProps> = (props) => {
    const {
        children,
        theme,
        className,
        ...otherProps
    } = props

    return (
        <button className={classNames(cls.Button, {[cls[theme]]: Boolean(theme)}, [className])}
                {...otherProps}>
            {children}
            </button>
    );
};

export default Button;