import React, { useState, useEffect, useRef, ReactEventHandler } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
interface selectProps { 
  option: string[],
  state : any,
  label?: string,
  placeholder?:string,
  handleChange : (event: SelectChangeEvent<string[]>) => void;
}

const MuiSelect : React.FC<selectProps> = ({...props}) => {

  const Input = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
      borderRadius: 4,
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '8px 5px',
      display: 'block',
      margin : '0px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#ced4da',
        boxShadow: 'none',
      },
    },
  }));


  
  return (
    <>
      <label className="text-[#5b5a5a] block">{props.label}</label>
      <FormControl sx={{ width: '100%' }}>
        <Select
          multiple
          displayEmpty
          value={props.state}
          onChange={props.handleChange}
          input={<Input />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{props.placeholder}</em>;
            }
            return selected.join(", ");
          }}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {props.option?.map((item : any , key : any) => (
            <MenuItem key={key} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default MuiSelect;
