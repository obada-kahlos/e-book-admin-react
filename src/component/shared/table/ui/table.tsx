import React from "react";
import { TableProps } from "../data-access/table";

const Table: React.FC<TableProps> = ({ ...props }) => {
  return (
    <>
      <div className="md:w-[100%] my-[20px] h-[500px] overflow-auto">
        <table style={{ width: props.width }}>{props.children}</table>
      </div>
    </>
  );
};

export default Table;
