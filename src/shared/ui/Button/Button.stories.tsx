import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import Button, {ButtonSize, ButtonTheme} from './Button';
import 'app/styles/index.scss'
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children:'Text'
    },
};

export const Clear: Story = {
    args: {
    children:'Text',
        theme: ButtonTheme.CLEAR
    },
};

export const Outline: Story = {
    args: {
        children:'Text',
        theme: ButtonTheme.OUTLINE
    },
};

export const OutlineDark: Story = {
    args: {
        children:'Text',
        theme: ButtonTheme.OUTLINE
    },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme: Story = {
    args: {
        children:'Text',
        theme: ButtonTheme.BACKGROUND
    },
};
export const Square: Story = {
    args: {
        children:'Text',
        theme: ButtonTheme.BACKGROUND,
        square: true
    },
};
export const SquareSizeL: Story = {
    args: {
        children:'Text',
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.L
    },
};
export const SquareSizeXL: Story = {
    args: {
        children:'Text',
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.XL
    },
};
export const SquareSizeM: Story = {
    args: {
        children:'Text',
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.M
    },
};


