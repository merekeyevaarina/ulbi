import type { Decorator } from '@storybook/react'
import {Theme, ThemeProvider} from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme): Decorator => {
    // eslint-disable-next-line react/display-name
    return (StoryComponent) => {
        document.body.className = `app ${theme}`;
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <StoryComponent/>
                </div>
            </ThemeProvider>
        );
    };
};