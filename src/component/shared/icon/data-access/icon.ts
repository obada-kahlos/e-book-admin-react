import { SvgIconComponent } from "@material-ui/icons"
import { ReactEventHandler } from "react";
export interface IconProps { 
    icon? : React.ReactElement<SvgIconComponent> | any;
    onClick?: ReactEventHandler;
}