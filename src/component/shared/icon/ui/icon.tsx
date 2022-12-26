import React from "react";
import { IconProps } from "../data-access/icon";
import { IconButton } from '@mui/material';

const Icon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <>
      <span className={props.className} onClick={props.onClick} > {props.icon} </span>
    </>
  );
};

export default Icon;
