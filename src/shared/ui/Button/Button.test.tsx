import {render, screen} from "@testing-library/react";
import Button from "shared/ui/Button/Button";
import {ThemeButton} from "./Button";

describe('classNames', () => {
    test('with only first param', () => {
   render(<Button theme={ThemeButton.CLEAR}>test</Button>);
       expect(screen.getByText('test')).toHaveClass('clear');
    screen.debug()
    });


})