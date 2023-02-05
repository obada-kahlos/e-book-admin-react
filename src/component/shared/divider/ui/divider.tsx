import React from "react";
import { DividerProps } from "../data-access/divider";

const Divider: React.FC<DividerProps> = ({ ...props }) => {
  return (
    <>
      <div className={props.className}></div>
      <style>
        {`
            .${props.className}{
                dispaly : block;
                margin : ${props.margin};
                background-color : ${props.bgColor};
                height : ${props.height};
                width : ${props.width};
            }
        `}
      </style>
    </>
  );
};

export default Divider;
