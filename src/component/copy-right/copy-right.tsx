import React from "react";
import Paragraph from "../shared/paragraph/ui/paragraph";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Icon from "../shared/icon/ui/icon";
const CopyRight = () => {
  return (
    <>
      <div className="copy-right">
        <div className="flex items-center gap-1">
          <Paragraph
            text={"CopyRight"}
            color={"#333"}
            fontSize={"14px"}
            className={"obada"}
          />
          <Icon
            icon={<CopyrightIcon sx={{ color: "#333", fontSize: "16px" }} />}
          />
          <Paragraph
            text={"In 2023 By Obada kahlous And Bahaa ATK"}
            color={"#333"}
            fontSize={"14px"}
            className={"obada"}
          />
        </div>
      </div>
      <style>
        {`
                .copy-right{
                    position : fixed;
                    right: 0;
                    bottom : 0;
                    width : 70%;
                    background-color : #fff;
                    display : flex;
                    justify-content: space-between;
                    align-items : center;
                    padding : 10px 30px;
                    box-shadow : 0px 0px 10px 0px rgba(0,0,0,0.1);
                }
            `}
      </style>
    </>
  );
};

export default CopyRight;
