import React from "react";
import { ParagraphProps } from "../data-access/paragraph";

const Paragraph: React.FC<ParagraphProps> = ({ ...props }) => {
  return (
    <>
      <p className={`${props.className} ${props.color}`}>{props.text}</p>
      <style>
        {`
          p.${props.className}{
            font-size : ${props.fontSize};
            padding : ${props.paddign};
            margin : ${props.margin};
          }
        `}
      </style>
    </>
  );
};

export default Paragraph;
