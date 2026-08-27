import {classNames} from "shared/lib/classNames";

describe('classNames', () => {
 test('with only first param', () => {
     expect(classNames('someCLass')).toBe('someCLass');
 });

    test('with additional class', () => {
        const expectedClass = 'someCLass class1 class2';
        expect(classNames('someCLass', {}, ['class1', 'class2'])).toBe(expectedClass);
    });
    test('with additional class', () => {
        const expectedClass = 'someCLass class1 class2 hovered';
        expect(classNames(
            'someCLass',
            {hovered: true, scrollable: false},
            ['class1', 'class2']))
            .toBe(expectedClass);
    })
    test('with mods false', () => {
        const expectedClass = 'someCLass class1 class2 hovered';
        expect(classNames(
            'someCLass',
            {hovered: true, scrollable: false},
            ['class1', 'class2'])).toBe(expectedClass);
    });
    test('with undef mods', () => {
        const expectedClass = 'someCLass class1 class2 hovered';
        expect(classNames(
            'someCLass',
            {hovered: true, scrollable: undefined},
            ['class1', 'class2']))
            .toBe(expectedClass);
    })
})