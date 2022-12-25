import React from "react";
import Icon from "../../shared/icon/ui/icon";
import { ActionButtonProps } from "../data-access/action-button";
import { IconButton } from '@mui/material';

const ActionButton: React.FC<ActionButtonProps> = ({ ...props }) => {
  return (
    <>
      <div className="action-buttons">
         <IconButton><Icon icon={props.editIcon.icon} onClick={props.editIcon.onClick}/></IconButton>
         <IconButton><Icon icon={props.deleteIcon.icon} onClick={props.deleteIcon.onClick}/></IconButton>
      </div>
      <style>
        {`
            .action-buttons {
                display : flex;
                justify-content: center;
                align-items: center;
                gap: 40px;
            }
        `}
      </style>
    </>
  );
};

export default ActionButton;
