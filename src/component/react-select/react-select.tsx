import React from "react";
import CreatableSelect from "react-select/creatable";
import { CreatableProps } from "react-select/creatable";
import { GroupBase } from "react-select/dist/declarations/src";

const MultiSelect: React.FC<
  CreatableProps<unknown, true, GroupBase<unknown>>
> = ({ ...props }) => {
  return (
    <CreatableSelect
      isClearable={props.isClearable}
      options={props.options}
      isMulti={props.isMulti}
      isSearchable={props.isSearchable}
      onChange={props.onChange}
      onCreateOption={props.onCreateOption}
      isLoading={props.isLoading}
      isDisabled={props.isDisabled}
      value={props.value}
    />
  );
};

export default MultiSelect;
