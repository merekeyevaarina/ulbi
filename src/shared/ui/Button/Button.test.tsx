import {render, screen} from "@testing-library/react";
import Button from "shared/ui/Button/Button";
import {ButtonTheme} from "./Button";

describe('classNames', () => {
    test('with only first param', () => {
   render(<Button theme={ButtonTheme.CLEAR}>test</Button>);
       expect(screen.getByText('test')).toHaveClass('clear');
    screen.debug()
    });


})