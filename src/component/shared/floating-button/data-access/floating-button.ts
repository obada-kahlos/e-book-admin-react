import { ButtonProps } from "../../button/data-access/button";
import { IconProps } from "../../icon/data-access/icon";

export interface FlotingButtonProps extends ButtonProps, IconProps {
  position: string;
  top: string;
  bottom: string;
  left: string;
  right: string;
  height : string;
}
