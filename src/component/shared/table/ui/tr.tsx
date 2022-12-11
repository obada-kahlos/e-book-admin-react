import React from "react";
import { TrProps } from "../data-access/tr";

const Tr: React.FC<TrProps> = ({...props}) => {
  return (
    <>
      <tr>{props.children}</tr>
      <style>
            {`
                tr{
                    cursor : pointer;
                    transition : 0.4s;
                }
                tr:hover{
                    background : #f2f2f2
                }
            `}
      </style>
    </>
  );
};

export default Tr;
