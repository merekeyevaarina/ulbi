import {Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY,} from "app/providers/ThemeProvider/lib/ThemeContext";
import {FC, useEffect, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
}


const ThemeProvider: FC <ThemeProviderProps> = (props) => {
    const {children,
    initialTheme} = props
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

    useEffect(() => {
        document.body.className = `app ${theme}`;
    }, [theme]);

    const defaultProps = useMemo(
        ()=>({
            theme:theme,
                setTheme: setTheme,
        }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
            </ThemeContext.Provider>
    );
}
export default ThemeProvider;