import type { Decorator } from '@storybook/react'
import {Theme} from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme): Decorator => {
    // eslint-disable-next-line react/display-name
    return (StoryComponent) => (
        <div className={`app ${theme}`}>
            <StoryComponent/>
        </div>
    );
};