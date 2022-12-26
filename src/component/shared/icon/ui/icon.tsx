import React from "react";
import { IconProps } from "../data-access/icon";
import { IconButton } from '@mui/material';

const Icon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <>
      <span className={`${props.className}-icon`} onClick={props.onClick} > {props.icon} </span>
      <style>
      {`
        .${props.className}-icon{
          display : flex;
          justify-content : center;
          align-items : center;
        }
      `}
      </style>
    </>
  );
};

export default Icon;
