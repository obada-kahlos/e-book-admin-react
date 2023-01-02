import { ReactElement } from 'react';
import { InputProps } from "../../input/data-access/input";

export interface selectProps extends Omit<InputProps , 'placeholder'> {
    children : ReactElement | ReactElement[]
}