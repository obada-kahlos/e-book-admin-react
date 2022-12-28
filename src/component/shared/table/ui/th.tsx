import React from "react";
import { ThProps } from "../data-access/th";

const Th: React.FC<ThProps> = ({ ...props }) => {
  return (
    <>
      <th className={`${props.className } ${props.bgColor}`}> {props.text} </th>
      <style>
        {`
            th.${props.className}{
                color: ${props.color};
                font-size: ${props.fontSize};
                font-weight: ${props.fontWeight};
                padding: ${props.padding};
                margin: ${props.margin};
                text-align: ${props.textAlign};
                max-width : 300px;
                min-width : 180px;
            }
        `}
      </style>
    </>
  );
};

export default Th;
