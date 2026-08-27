import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import Light from 'shared/assets/icons/light.svg';
import Dark from 'shared/assets/icons/dark.svg'
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import Button from "shared/ui/Button/Button";
import {ThemeButton} from 'shared/ui/Button/Button'



interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();


    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <Dark/> : <Light/>}
        </Button>
    );
};

export default ThemeSwitcher;