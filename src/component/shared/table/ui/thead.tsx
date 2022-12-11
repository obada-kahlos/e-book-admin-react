import React from "react";
import { TheadProps } from "../data-access/thade";

const Thead: React.FC<TheadProps> = ({ ...props }) => {
  return (
    <>
      <thead>{props.children}</thead>
      <style>
        {`
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;  
        `}
      </style>
    </>
  );
};

export default Thead;
