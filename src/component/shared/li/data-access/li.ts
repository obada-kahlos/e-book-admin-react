import { ReactEventHandler } from 'react';
import { IconProps } from "../../icon/data-access/icon";

export interface LiProps extends IconProps {
  href: string;
  text: string;
  fontSize: string;
  color: string;
  padding: string;
  margin: string;
  onClick? : ReactEventHandler
}
