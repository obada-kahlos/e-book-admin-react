import React from "react";
import { TheadProps } from "../data-access/thade";

const Thead: React.FC<TheadProps> = ({ ...props }) => {
  return (
    <>
      <thead>{props.children}</thead>
      <style>
        {`
        thead{
          position: sticky;
          top: 0;
          z-index: 10;
          width: 100%;
          border : 1px solid #ccc;
        }
        `}
      </style>
    </>
  );
};

export default Thead;
