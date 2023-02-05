import React from "react";
import { ThProps } from "../data-access/th";

const Th: React.FC<ThProps> = ({ ...props }) => {
  return (
    <>
      <th className={`${props.className} ${props.bgColor}`}> {props.text} </th>
      <style>
        {`
            th.${props.className}{
                color: ${props.color};
                font-size: ${props.fontSize};
                font-weight: ${props.fontWeight};
                padding: ${props.padding};
                margin: ${props.margin};
                text-align: ${props.textAlign};
                min-width : ${props.minWidth ? props.minWidth : "250px"};
                word-break: break-all;
            }
        `}
      </style>
    </>
  );
};

export default Th;
