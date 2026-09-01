import type { Meta, StoryObj } from '@storybook/react';
import {AppLink, AppLinkTheme} from './AppLink';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'txt',
        theme: AppLinkTheme.PRIMARY,
        to: '/'
    },
};
export const Secondary: Story = {
    args: {
        children: 'txt',
        theme: AppLinkTheme.SECONDARY,
        to: '/'
    },
};
export const PrimaryDark: Story = {
    args: {
        children: 'txt',
        theme: AppLinkTheme.PRIMARY,
        to: '/'
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark: Story = {
    args: {
        children: 'txt',
        theme: AppLinkTheme.SECONDARY,
        to: '/'
    },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];


