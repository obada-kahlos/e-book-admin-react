import React, { useState, useEffect, useRef, ReactEventHandler } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";

interface selectProps { 
  option: string[],
  state : any,
  handleChange : (event: SelectChangeEvent<string[]>) => void;
}

const MuiSelect : React.FC<selectProps> = ({...props}) => {

  console.log(props.option);
  
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <Select
        multiple
        displayEmpty
        value={props.state}
        onChange={props.handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>Placeholder</em>;
          }
          return selected.join(", ");
        }}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem disabled value="">
          <em>Placeholder</em>
        </MenuItem>
        {props.option.map((item : any , key : any) => (
          <MenuItem key={item} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MuiSelect;
