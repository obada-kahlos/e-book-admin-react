import React from "react";
import { TdProps } from "../data-access/td";

const Td: React.FC<TdProps> = ({ ...props }) => {
  return (
    <>
      <td> {props.children} </td>
      <style>
        {`
            td{
                color: ${props.color};
                font-size: ${props.fontSize};
                font-weight: ${props.fontWeight};
                padding: ${props.padding};
                margin: ${props.margin};
                text-align: ${props.textAlign};
                text-transform: capitalize;
                max-width : 300px;
                min-width : 10px;
                vertical-align: top;
                word-break: break-all;
            }
        `}
      </style>
    </>
  );
};

export default Td;
