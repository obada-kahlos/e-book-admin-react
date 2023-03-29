import React from "react";
import Icon from "../../shared/icon/ui/icon";
import { ActionButtonProps } from "../data-access/action-button";
import { IconButton } from "@mui/material";

const ActionButton: React.FC<ActionButtonProps> = ({ ...props }) => {
  return (
    <>
      <div className="action-buttons">
        <IconButton onClick={props.editIcon.onClick}>
          <Icon icon={props.editIcon.icon} />
        </IconButton>
        <IconButton onClick={props.deleteIcon.onClick}>
          <Icon icon={props.deleteIcon.icon} />
        </IconButton>
      </div>
      <style>
        {`
            .action-buttons {
                display : flex;
                justify-content: center;
                align-items: center;
                gap: 0px;
            }
        `}
      </style>
    </>
  );
};

export default ActionButton;
