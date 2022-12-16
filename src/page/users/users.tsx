import React, { useState } from "react";
import Button from "../../component/shared/button/ui/button";
import Input from "../../component/shared/input/ui/input";
import SearchIcon from "@mui/icons-material/Search";

const Users = () => {


  // open popup
  const [popup, setPopup] = useState(false);
  const handleOpenPopup = () => {
    setPopup((prev) => !prev);
  };

  return (
    <div className="my-[30px] sm:p-4 px-2">
      <div className="flex justify-between items-end gap-1">
        <Input
          className="search"
          icon={<SearchIcon sx={{ color: "#5b5a5a" }} />}
          name={"search"}
          type={"text"}
          placeholder={"What are you looking for..."}
          id={"search"}
          width={"70%"}
          margin={"0px"}
          padding={"8px 16px"}
          borderradius={"5px"}
          border={"1px solid #ccc"}
          bgcolor={""}
          color={"#5b5a5a"}
          fontSize={"16px"}
          lable={"search"}
        />
        {/* <Button
          className={"add"}
          buttonText={"Add Book"}
          width={"fit-content"}
          padding={"8px 30px"}
          margin={"0px"}
          borderRadius={"30px"}
          bgColor={"#0d6289"}
          bgHover={"#003f5c"}
          color={"#fff"}
          fontSize={"16px"}
          onClick={handleOpenPopup}
        /> */}
      </div>
    </div>
  );
};

export default Users;
