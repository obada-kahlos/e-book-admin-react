import React from "react";
import { DividerProps } from "../data-access/divider";

const Divider: React.FC<DividerProps> = ({ ...props }) => {
  return <>
    <div className="divider"></div>
    <style>
        {`
            .divider{
                dispaly : block;
                margin : 10px auto;
                background-color : ${props.bgColor};
                height : ${props.height};
                width : ${props.width};
                
            }
        `}
    </style>
  </>;
};

export default Divider;
