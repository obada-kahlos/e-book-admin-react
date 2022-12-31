import { ReactEventHandler } from 'react';
import { ButtonProps } from "../../shared/button/data-access/button";
import { ParagraphProps } from "../../shared/paragraph/data-access/paragraph";

export interface AlertProps {
    isOpen : boolean;
    onClose : ReactEventHandler;
    onAction : ReactEventHandler
}